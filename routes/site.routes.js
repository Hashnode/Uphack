const express = require('express');
const router = express.Router();
const dbUtil = require('../db'); 
const async = require('async');
const ObjectId = require('mongodb').ObjectId;
const _  = require('lodash');

function unflatten( array, parent, tree ){

    array.forEach((arr) => {
        arr._id = arr._id.toString();
        arr.parentCommentId = arr.parentCommentId && arr.parentCommentId.toString();
    });

    tree = typeof tree !== 'undefined' ? tree : [];
    parent = typeof parent !== 'undefined' ? parent : { _id: undefined };

    var children = _.filter( array, function(child){ return child.parentCommentId === parent._id });

    if( !_.isEmpty( children )  ){
        if(!parent._id){
           tree = children;   
        }else{
           parent['comments'] = children;
        }
        _.each( children, function( child ){ unflatten( array, child ) } );                    
    }

    return tree;
}

router.route('/ajax/fetch-user').get((req, res) => {
    const db = dbUtil.getDB();

    db.collection('users').findOne({publicKey: req.query.pk}, function(err, user){
        res.json({ user: user});
    });
});

router.route('/ajax/get-posts').get((req, res) => {
    const db = dbUtil.getDB();
    const type = req.query.type;
    const sortBy = req.query.sortBy || 'score';

    const searchConfig = {};
    const sortConfig = {};

    if (type) {
        searchConfig[type] = true;
    }

    sortConfig[sortBy] = -1;

    db.collection('posts').find(searchConfig).sort(sortConfig).toArray(function(err, posts){
        async.map(posts, (post, cb) => {
            db.collection('users').findOne({ _id: post.author }, function(err, user){
                post.author = user;
                cb(null, post);
            });           
        }, (err, result) => {
            res.json({ posts: result });
        });
    });
});

router.route('/ajax/get-upvote-status').get((req, res) => {
    const db = dbUtil.getDB();
    const publicKey = req.query.pk;

    if (!req.query.postIds) {
        return res.json({ status: {} });
    }

    const postIds = req.query.postIds.split(',');

    if (postIds.length === 0) {
        return res.json({ status: {} });
    }

    db.collection('users').findOne({publicKey: publicKey}, function(err, user){
        const status = {};
        async.each(postIds, (postId, cb) => {
            db.collection('userpostvotes').find({ userID: ObjectId(user._id), postID: ObjectId(postId) }).count(function(err, count){
                if (count > 0) {
                    status[postId] = true;
                }
                cb();
            });
        }, () => {
            res.json({ status: status });
        });
    });
});

router.route('/ajax/post').get((req, res) => {
    const db = dbUtil.getDB();
    const id = req.query.id;

    async.parallel([
        function(cb) {
            db.collection('posts').findOne({_id: ObjectId(id)}, function(err, post){
                db.collection('users').findOne({ _id: post.author }, function(err, user){
                    post.author = user;
                    cb(null, post);
                });
            });
        }, function(cb) {
            db.collection('comments').find({ postID: ObjectId(id) }).toArray(function(err, comments){
                async.map(comments, (comment, callback) => {
                    db.collection('users').findOne({ _id: comment.author }, function(err, user){
                        comment.author = user;
                        callback(null, comment);
                    });
                }, (err, result) => {
                    cb(null, result);
                });
            });
        }
    ], function(err, result){
        const post = result[0];
        const comments = unflatten(result[1]);
        post.comments = comments;
        res.json({ post: post });
    });
});

router.route('/ajax/comment').get((req, res) => {
    const db = dbUtil.getDB();
    const id = req.query.id;

    db.collection('comments').findOne({ _id: ObjectId(id) }, function(err, comment){
        db.collection('users').findOne({ _id: comment.author }, function(err, user){
            comment.author = user;
            res.json({comment: comment});
        });
    });
});

module.exports = router;