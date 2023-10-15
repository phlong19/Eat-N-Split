import "../index.css";

function SplitBoard({ name }) {
  return (
    <form className="form-split-bill">
      <h2>split a bill with {name}</h2>
      <label>💰 Bill value:</label> <input type="number" />
      <label>💸 Your expense: </label>
      <input type="number" />
      <label>🤑 {name}'s expense: </label> <input type="number" disabled />
      <label>👉 Who is paying the bill?</label>
      <select>
        <option value="you"> You</option>
        <option value={name}>{name}</option>
      </select>
    </form>
  );
}

export default SplitBoard;
