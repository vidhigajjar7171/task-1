import React,{useState, useEffect} from "react";
import "./Form.css";


const Form = () => {
  const [enterName, setEnteredName] = useState("");
  const [enterImage, setEnteredImage] = useState("");
  const [enterDes, setEnteredDes] = useState("");
  const [enterAuthor, setEnteredAuthor] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const  [List,setList]=useState([]);
  


  const nameChangeHandler=(e)=>{
    const {name,value}=e.target;
    setEnteredName((prev)=>{
      return {...prev,[name]:value}
    })
  }
const handleSubmit=(e)=>
{
  e.preventDefault();
  console.log(enterName);
  setIsSubmit(true);
  setFormErrors(validate(enterName));
  if(enterName){
    setList((ls)=>[...ls,enterName])
    setEnteredName("")
    
  } 

}



useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(enterName);
  }
}, [formErrors]);

const validate = (values) => {
  const errors = {};
  
  if (!values.name) {
    errors.name = "Username is required!";
  }
  if (!values.des) {
    errors.des = "discription  is required!";
  }
  
  if (!values.Author) {
    errors.Author = "Author is required!";
  }
  
  
  return errors;
};
  return (
    <>
      <div class="border  p-2  flex  justify-center">
        <div class="container max-w-screen-lg ">
          <h1 class="font-semibold  p-4 text-center text-7xl text-gray-600">
            Blog App
          </h1>
          <form class="m-2 p-4  border-4 border-blue-500 rounded" onSubmit={handleSubmit}>
            <div className="blog__controls">
              <div class="p-6" className="blog__control">
                <label for="full_name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="full_name"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  onChange={nameChangeHandler}
                   value={enterName}
                />
                 <p>{formErrors.name}</p>
              </div>
             
              <div class="p-6" className="blog__control">
                <label for="image">Banner Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  onChange={nameChangeHandler}
                

                />
                 <p>{formErrors.image}</p>
              </div>
             

              <div class="p-6" className="blog__control">
                <label for="Author">Author Name</label>
                <input
                  type="text"
                  name="Author"
                  id="Author"
                  class="h-10 border mt-1 rounded px-2 w-full bg-gray-50"
                  onChange={nameChangeHandler}
                  
                />
                  <p>{formErrors.Author}</p>
              </div>
            
              <div class="p-6" className="blog__control">
                <label for="des">Blog description</label>
                <textarea
                  type="text"
                  name="des"
                  id="des"
                  class="h-10 border mt-1 rounded px-2 w-full bg-gray-50"
                  onChange={nameChangeHandler}
                >
                  
                </textarea>
                <p>{formErrors.des}</p>
              </div>
             
            </div>

            <div className="blog__actions">
              <button type="button"  class="border border-solid-300  bg-blue-100 border-red-400 p-2 m-2">
                Cancle
              </button>
              <button type="submit" class="border border-red-400 bg-blue-100 p-2 m-2">
                {" "}
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
      {
        List.map((a)=>
        <div class="border-4 border-gray-500 p-4  mx-20 rounded text-center">
          <li>{a.name}</li>
          <li>{a.des}</li>
          <li>{a.Author}</li>
         
          <li>{a.image} </li> <i class="fa fa-edit font-xl" ></i><i class="fa fa-trash" ></i>
         
          
        </div>
          )
      }

     
    </>
  );
};

export default Form;
