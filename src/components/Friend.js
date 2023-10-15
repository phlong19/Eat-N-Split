import "../index.css";
import Button from "./Button";

function Friend({ fr, onSelectFriend, curFriend }) {
  const isSelected = curFriend === fr.name;

  const handleSelectFriend = (name) => {
    onSelectFriend((selected) => (selected === name ? "" : name));
  };

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={fr.image} alt={fr.name} />
      <h3>{fr.name}</h3>
      {fr.balance < 0 ? (
        <p className="red">
          You owe {fr.name} {Math.abs(fr.balance)}$
        </p>
      ) : fr.balance === 0 ? (
        <p>You and {fr.name} are even.</p>
      ) : (
        <p className="green">
          {fr.name} owe you {Math.abs(fr.balance)}$
        </p>
      )}
      <Button onClick={() => handleSelectFriend(fr.name)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
