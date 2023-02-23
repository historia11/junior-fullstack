import React, { useState } from 'react';


const comments = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa',
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa',
          },
        ],
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa',
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: 'Halooo',
  },
];

const getTotalComments = (comments) => {
  let count = comments.length;
  comments.forEach((comment) => {
    if (comment.replies) {
      count += getTotalComments(comment.replies);
    }
  });
  return count;
};

const Comments = () => {
  const [totalComments] = useState(
    getTotalComments(comments)
  );

  return <h1>Total Comments: {totalComments}</h1>;
};

export default Comments;
