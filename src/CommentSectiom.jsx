import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { newsAPI } from "./server";

export const CommentSection = ({ id }) => {
  const [comments, setComments] = useState([]);
  newsAPI.get(`articles/${id.id}/comments`).then((res) => {
    setComments(res.data);
  });
  const [tempComment, setTempComment] = useState("");
  const deleteComment = (id) => {
    newsAPI.delete(`comments/${id}`).then((res) => {
      alert("comment posted successfully");
    });
    setTempComment("");
    setComments((prev) => prev.filter((comment) => comment.comment_id != id));
  };
  const postComment = (e) => {
    e.preventDefault();
    newsAPI
      .post(`articles/${id.id}/comments`, {
        author: "jessjelly",
        body: tempComment,
      })
      .then((res) => {
        setComments((prev) => {
          return [
            ...prev,
            {
              author: "jessjelly",
              body: tempComment,
              votes: 0,
              comment_id: res.data.comment_id,
            },
          ];
        });
        alert("comment posted successfully");
        setTempComment("");
      });
  };

  return (
    <div className="comment-section-container">
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
    </div>
  );
};
