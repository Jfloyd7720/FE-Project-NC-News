import axios from "axios";
import { useState, useEffect } from "react";
import { newsAPI } from "./server";
import { FaThumbsUp } from "react-icons/fa"; // Import the "Like" icon from react-icons

export const CommentSection = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [tempComment, setTempComment] = useState("");

  useEffect(() => {
    newsAPI.get(`articles/${id.id}/comments`).then((res) => {
      setComments(res.data);
    });
  }, [id]);

  const deleteComment = (id) => {
    newsAPI.delete(`comments/${id}`).then((res) => {
      alert("Comment deleted successfully");
    });
    setComments((prev) => prev.filter((comment) => comment.comment_id !== id));
  };

  const postComment = (e) => {
    e.preventDefault();
    newsAPI
      .post(`articles/${id.id}/comments`, {
        author: "jessjelly",
        body: tempComment,
      })
      .then((res) => {
        setComments((prev) => [
          ...prev,
          {
            author: "jessjelly",
            body: tempComment,
            votes: 0,
            comment_id: res.data.comment_id,
          },
        ]);
        alert("Comment posted successfully");
        setTempComment("");
      });
  };

  return (
    <div className="comment-section-container">
      <form className="add-comment" onSubmit={postComment}>
        <input
          type="text"
          placeholder="Write a comment here"
          value={tempComment}
          onChange={(e) => {
            setTempComment(e.target.value);
          }}
        />
        <button type="submit">Add Comment</button>
      </form>
      {comments.map((comment) => (
        <div key={comment.comment_id} className="comment-card">
          <p>{comment.body}</p>
          <h5>{comment.author}</h5>
          <div className="comment-actions">
            {/* Replace "Like" button with the FaThumbsUp icon */}
            <button>
              <FaThumbsUp style={{ color: "#007bff", marginRight: "5px" }} />
              Like
            </button>
            <p>Likes: {comment.votes}</p>
            {comment.author === "jessjelly" && (
              <button onClick={() => deleteComment(comment.comment_id)}>
                Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
