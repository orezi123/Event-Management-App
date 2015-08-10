'use strict';

module.exports = {
  db: 'mongodb://localhost/event-db-test',
  secret: 'supersecret',
  twitter : {
    consumerKey: process.env.ROOTS_TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.ROOTS_TWITTER_CONSUMER_SECRET
  },
  google : {
    clientID: process.env.ROOTS_GOOGLE_CLIENT_ID,
    clientSecret: process.env.ROOTS_GOOGLE_CLIENT_SECRET
  },
  facebook : {
    clientID: process.env.ROOTS_FACEBOOK_CLIENT_ID,   
    clientSecret: process.env.ROOTS_FACEBOOK_CLIENT_SECRET
  },
  corsOptions: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'Content-Type', 'Accept', 'X-Requested-With', 'Authorization']
  }
};