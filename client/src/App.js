
import {useState} from "react";

function App() {
  const [form,setForm]=useState({
    amount:0,
    description:"",
    date:"",
  });

  async function handleSubmit(e){
    e.preventDefault();
   const res= await fetch("http://localhost:4000/transaction",{
      method:"POST",
      body:form,
    });
    console.log(res);
  }

  function handleInput(e){
    setForm({...form,[e.target.name]:e.target.value});
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" 
        onChange={handleInput}
        value={form.amount}
        name="amount"
         placeholder="Enter transaction amount" />
        <input type="text"  name="description"
         onChange={handleInput}
        value={form.description}
         placeholder="Enter transaction details" />
        <input type="date"
         onChange={handleInput}
        value={form.date}
         name="date"  />
        <button type="submit"> Submit </button>
      </form>
    </div>
  )
}

export default App;
