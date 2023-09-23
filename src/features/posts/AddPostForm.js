import React from "react";
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
    if (title && content && userId) { // Check if all fields have values
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
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={onAuthorChange}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
      </form>
      <button disabled={!canSave} onClick={onSavePostClicked} type="button">
        Save Post
      </button>
    </>
  );
};

export default AddPostForm;
