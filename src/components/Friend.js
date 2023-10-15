import "../index.css";
import Button from "./Button";

function Friend({ fr }) {
  return (
    <li key={fr.id}>
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
      <Button>Select</Button>
    </li>
  );
}

export default Friend;
