import React, { useState } from "react";
import "../index.css";
import Button from "./Button";

function Form({ onSetFriends }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddFriends = (e, inputName, inputUrl) => {
    e.preventDefault();

    if (!inputUrl || !inputUrl) return;
    const newFriend = {
      id: Date.now(),
      name: inputName,
      image: inputUrl,
      balance: 0,
    };

    onSetFriends((friends) => [...friends, newFriend]);
    setName("");
    setImageUrl("");
  };

  return (
    <form
      onSubmit={(e) => handleAddFriends(e, name, imageUrl)}
      className="form-add-friend"
    >
      <label>🆎 Name:</label>
      <input
        onInput={(e) => setName(e.target.value)}
        type="text"
        required
        value={name}
      />
      <label>📷 Image URL: </label>
      <input
        onInput={(e) => setImageUrl(e.target.value)}
        type="url"
        required
        value={imageUrl}
      />
      <Button>Add</Button>
    </form>
  );
}

export default Form;
