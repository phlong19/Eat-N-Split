import "../index.css";
import Friend from "./Friend";

function FriendList({ friends, setCurFriend, curFriend }) {
  return (
    <ul>
      {friends.map((fr) => (
        <Friend
          fr={fr}
          curFriend={curFriend}
          onSelectFriend={setCurFriend}
          key={fr.id}
        />
      ))}
    </ul>
  );
}

export default FriendList;
