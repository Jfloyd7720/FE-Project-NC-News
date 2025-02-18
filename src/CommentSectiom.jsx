import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { newsAPI } from "./server";

export const CommentSection = ({ id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    newsAPI.get(`articles/${id.id}/comments`).then((res) => {
      setComments(res.data);
    });
  }, []);

  return (
    <div className="comment-section-container">
      {comments.map((comment) => {
        return (
          <div>
            <p>{comment.body}</p>
            <h5>{comment.author}</h5>
            <div className="likes">
              <button>Like</button>
              <p>votes: {comment.votes}</p>
            </div>
            <button>Reply to Comment</button>
          </div>
        );
      })}
      <form className="add-comment" action="">
        <input type="text" placeholder="Write a commennt here" />
        <button>Add Comment</button>
      </form>
    </div>
  );
};
