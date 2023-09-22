import React,{useState} from "react"; 
const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Title or description cannot be blank");
    }
    else{
    addTodo(title, desc);
    setTitle("");
    setDesc("");
    }}
  return (
    <div className="container">
        <h1>Add a Todo</h1>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            placeholder="Add A Title"
            type="text"
            value={title}
            onChange={(e)=>(setTitle(e.target.value))}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
          placeholder="Add a Desc"
            type="text"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        
        <button type="submit" className="btn btn-outline-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;