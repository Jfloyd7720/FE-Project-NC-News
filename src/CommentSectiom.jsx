export const CommentSection = () => {
  return (
    <div className="comment-section-container">
      <div>
        <p>this is a comment</p>
        <button>Like</button>
        <button>Reply to Comment</button>
      </div>
      <div>
        <p>this is a comment</p>
        <button>Like</button>
        <button>Reply to Comment</button>
      </div>
      <div>
        <p>this is a comment</p>
        <button>Like</button>
        <button>Reply to Comment</button>
      </div>
      <div>
        <p>this is a comment</p>
        <button>Like</button>
        <button>Reply to Comment</button>
      </div>
      <form className="add-comment" action="">
        <input type="text" placeholder="Write a commennt here" />
        <button>Add Comment</button>
      </form>
    </div>
  );
};
