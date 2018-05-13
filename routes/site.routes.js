const express = require('express');
const router = express.Router();
const dbUtil = require('../db'); 

router.route('/ajax/fetch-user').get((req, res) => {
    const db = dbUtil.getDB();

    db.collection('users').findOne({publicKey: req.query.pk}, function(err, user){
        res.json({ user: user});
    });
});

router.route('/ajax/get-posts').get((req, res) => {
    const db = dbUtil.getDB();

    db.collection('posts').find({}).sort({ _id: -1}).toArray(function(err, posts){
        res.json({ posts: posts});
    });
});

module.exports = router;