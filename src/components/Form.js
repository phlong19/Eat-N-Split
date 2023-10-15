import "../index.css";
import Button from "./Button";

function Form() {
  return (
    <form className="form-add-friend">
      Name: <input type="text" />
      Image link: <input type="url" />
      <Button>Add</Button>
    </form>
  );
}

export default Form;
