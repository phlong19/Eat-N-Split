import React, { useState } from "react";
import "./index.css";
import FriendList from "./components/FriendList";
import Form from "./components/Form";
import SplitBoard from "./components/SplitBoard";
import Button from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Luke",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Marie",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Sam",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        <Form />
        <Button>Add Friend</Button>
      </div>
      <SplitBoard name='Sam' />
    </div>
  );
}

export default App;
