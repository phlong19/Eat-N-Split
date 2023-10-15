import "../index.css";
import React, { useState } from "react";
import Button from "./Button";

function SplitBoard({ name, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoPay, setWhoPay] = useState("you");
  const friendPaid = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoPay === "you" ? friendPaid : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split a bill with {name}</h2>

      <label>💰 Bill value:</label>
      <input
        value={bill}
        onInput={(e) => setBill(Number(e.target.value))}
        type="number"
      />

      <label>💸 Your expense: </label>
      <input
        value={paidByUser}
        onInput={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
        type="number"
      />

      <label>🤑 {name}'s expense: </label>
      <input type="number" disabled value={friendPaid} />

      <label>👉 Who is paying the bill?</label>
      <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
        <option value="you"> You</option>
        <option value={name}>{name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default SplitBoard;
