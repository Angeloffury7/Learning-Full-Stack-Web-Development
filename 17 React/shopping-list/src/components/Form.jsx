function formHandler(evt) {
    evt.preventDefault();
  console.log("Submitted the form!!");
}

function Form() {
  return (
    <form onSubmit={formHandler}>
      <button>Submit</button>
    </form>
  );
}

export default Form;
