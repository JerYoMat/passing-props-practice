import React from 'react';

// add the { tweet } prop, destructured
function Tweet({ tweet }) {
  return (
  <div className="tweet">
    <Avatar/>
    <div className="content">
      <NameWithHandle/><Time/>
      <Message/>
      <div className="buttons">
        <ReplyButton/>
        <RetweetButton/>
        <LikeButton/>
        <MoreOptionsButton/>
    </div>
    </div>
  </div>
  );
  }
  

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
};