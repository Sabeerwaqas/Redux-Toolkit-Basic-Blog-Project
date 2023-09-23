import React from "react";
import "./post.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice ";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const users = useSelector(selectAllUsers);

  const onSavePostClicked = () => {
    if (title && content && userId) {
      // Check if all fields have values
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId(""); // Clear the selected author after saving
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <>
      <h2 className="main-heading">Add a new post</h2>
      <div className="main-div">
        <form>
          <div>
            <label className="post-title" htmlFor="postTitle">
              Post Title
            </label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitleChange}
              className="post-title-input"
            />
          </div>
          <div>
            <label className="author-name" htmlFor="postAuthor">
              Author
            </label>
            <select
              className="select-author"
              id="postAuthor"
              value={userId}
              onChange={onAuthorChange}
            >
              <option value="">Select Author</option>
              {usersOptions}
            </select>
          </div>
          <div>
            <label className="content-text" htmlFor="postContent">Content</label>
            <textarea
              name="postContent"
              id="postContent"
              value={content}
              onChange={onContentChange}
              cols="30"
              rows="10"
              className="content"
            ></textarea>
          </div>
        </form>
        <button className="content-btn" disabled={!canSave} onClick={onSavePostClicked} type="button">
          Save Post
        </button>
      </div>
    </>
  );
};

export default AddPostForm;
