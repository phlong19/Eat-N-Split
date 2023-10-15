import "../index.css";
import Friend from "./Friend";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((fr) => (
        <Friend fr={fr} />
      ))}
    </ul>
  );
}

export default FriendList;
