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
  const [curFriend, setCurFriend] = useState("");
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((fr) =>
        fr.name === curFriend ? { ...fr, balance: fr.balance + value } : fr
      )
    );
    setCurFriend("");
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          curFriend={curFriend}
          setCurFriend={setCurFriend}
        />
        {showAddFriend && <Form onSetFriends={setFriends} />}
        <Button onClick={() => setShowAddFriend((show) => !show)}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {curFriend !== "" && (
        <SplitBoard onSplitBill={handleSplitBill} name={curFriend} />
      )}
    </div>
  );
}

export default App;
