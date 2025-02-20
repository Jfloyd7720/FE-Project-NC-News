import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { newsAPI } from "./server";

export const CommentSection = ({ id }) => {
  const [tempComment, setTempComment] = useState("");
  const deleteComment = (id) => {
    newsAPI.delete(`comments/${id}`).then((res) => {
      alert("comment posted successfully");
    });
  };
  const postComment = (e) => {
    e.preventDefault();
    console.log("hello");
    newsAPI
      .post(`articles/${id.id}/comments`, {
        author: "jessjelly",
        body: tempComment,
      })
      .then((res) => {
        console.log(res);
        alert("comment posted successfully");
      });
    setTempComment("");
  };
  const [comments, setComments] = useState([]);
  useEffect(() => {
    newsAPI.get(`articles/${id.id}/comments`).then((res) => {
      setComments(res.data);
    });
  }, [tempComment]);

  return (
    <div className="comment-section-container">
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id} className="comment">
            <p>{comment.body}</p>
            <h5>{comment.author}</h5>
            <div className="likes">
              <button>Like</button>
              <p>votes: {comment.votes}</p>
              {comment.author == "jessjelly" && (
                <button
                  onClick={() => {
                    deleteComment(comment.comment_id);
                  }}
                >
                  delete
                </button>
              )}
            </div>
          </div>
        );
      })}
      <form className="add-comment" action="">
        <input
          type="text"
          placeholder="Write a commennt here"
          value={tempComment}
          onChange={(e) => {
            setTempComment(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={(e) => {
            postComment(e);
          }}
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};
