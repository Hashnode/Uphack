import fetch from 'isomorphic-fetch'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default {
    loadPosts: async (path) => {
        let url = publicRuntimeConfig.baseUrl + '/ajax/get-posts';

        if (path === '/') {
            url += '?sortBy=score';
        }
        else if (path === '/newest') {
          url += '?sortBy=date';
        }
        else if (path === '/show') {
          url += '?type=showUH';
        }
        else if (path === '/ask') {
          url += '?type=askUH';
        }

        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
          });

          const data = await response.json();
          return data.posts;
    },
    loadUser: async (publicKey) => {
        const response = await fetch(publicRuntimeConfig.baseUrl + '/ajax/fetch-user?pk=' + publicKey, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'same-origin'
        });

        const data = await response.json();
        return data.user;
    },
    getUpvoteStatus: async (publicKey, postIds) => {
      const response = await fetch(publicRuntimeConfig.baseUrl + '/ajax/get-upvote-status?pk=' + publicKey + '&postIds=' + postIds, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      });

      const data = await response.json();
      return data.status;
    },
    getCommentUpvoteStatus: async (publicKey, commentIds) => {
      const response = await fetch(publicRuntimeConfig.baseUrl + '/ajax/get-comment-upvote-status?pk=' + publicKey + '&commentIds=' + commentIds, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      });

      const data = await response.json();
      return data.status;
    },
    getPost: async (id) => {
      const response = await fetch(publicRuntimeConfig.baseUrl + '/ajax/post?id=' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      });

      const data = await response.json();
      return data.post;
    },
    getComment: async (id) => {
      const response = await fetch(publicRuntimeConfig.baseUrl + '/ajax/comment?id=' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      });

      const data = await response.json();
      return data.comment;
    },
    getValidators: async () => {
      const response = await fetch(publicRuntimeConfig.baseUrl + '/ajax/validators', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      });

      const data = await response.json();
      return data;
    }
}