import React,{useState, useEffect} from "react";
import "./Form.css";


const Form = (props) => {
  const [enterName, setEnteredName] = useState("");
  const [enterImage, setEnteredImage] = useState("");
  const [enterDes, setEnteredDes] = useState("");
  const [enterAuthor, setEnteredAuthor] = useState("");

  const [formErrors, setFormErrors] = useState(false);
  // const [isSubmit, setIsSubmit] = useState(false);
  // const  [List,setList]=useState([]);
  


  const nameChangeHandler=(e)=>{
    setEnteredName(e.target.value)
  }
  const ImageChangeHandler=(e)=>{
    setEnteredImage(URL.createObjectURL(e.target.files[0]))
  }
  const AuthorChangeHandler=(e)=>{
    setEnteredAuthor(e.target.value)
  }
  const DesChangeHandler=(e)=>{
    setEnteredDes(e.target.value)
  }
const handleSubmit=(e)=>
{
  e.preventDefault();
 
 
 
  
  // console.log(enterName);
  // console.log(enterDes);
  // console.log(enterAuthor);  
  
  const data={
    name:enterName,
    des:enterDes,
    img:enterImage,
    Auth:enterAuthor};
    
    if(enterName.length===0||enterDes===0||enterAuthor===0){
      setFormErrors(true)
    }  
      if(enterName.length>0&&enterDes.length>0&&enterAuthor.length>0){
      props.onAdd(data)
    }  
   
    setEnteredName("")  
  setEnteredImage("")
  setEnteredDes("")
  setEnteredAuthor("")

   
  

    
  // if(enterName&&enterAuthor&&enterDes&&enterImage){
  //   setList((ls)=>[...ls,data])
  //   console.log(List)
  //   console.log("data",data)
   
  // } 

};
  return (
    <>
      <div className="border  p-2  flex  justify-center">
        <div className="container max-w-screen-lg ">
          <h1 className="font-semibold  p-4 text-center text-7xl text-gray-600">
            Blog App
          </h1>
          <form className="m-2 p-4  bg-gray-300 border-4 border-blue-500 rounded" onSubmit={handleSubmit}>
            <div className="blog__controls">
              <div className="p-6 blog__control">
                <label htmlFor="full_name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="full_name"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  onChange={nameChangeHandler}
                   value={enterName}
                />
                {formErrors&&enterName.length<=0? <p className="text-red-500"> please enter Name</p>:""}
              </div>
             
              <div className="p-6 blog__control">
                <label htmlFor="image">Banner Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="h-10 p-8 mt-1 text-center rounded px-4 w-full "
                  onChange={ImageChangeHandler}
                  // value={enterImage}
                

                />
                 {formErrors&&enterImage===null? <p className="text-red-500">please enter  valid Image</p>:""} 
              </div>
             

              <div className="p-6 blog__control">
                <label htmlFor="Author">Author Name</label>
                <input
                  type="text"
                  name="Author"
                  id="Author"
                  className="h-10 border mt-1 rounded px-2 w-full bg-gray-50"
                  onChange={AuthorChangeHandler}
                  value={enterAuthor}
                  
                />
                  {formErrors&&enterAuthor.length<=0? <p className="text-red-500">please enter AuthorName</p>:""} 
              </div>
            
              <div className="p-6 blog__control">
                <label htmlFor="des">Blog description</label>
                <textarea
                  type="text"
                  name="des"
                  id="des"
                  className="h-10 border mt-1 rounded px-2 w-full bg-gray-50"
                  onChange={DesChangeHandler}
                  value={enterDes}
                >
                  
                </textarea>
                {formErrors&&enterDes.length<=0? <p className="text-red-500">please enter description</p>:""}  
              </div>
             
            </div>

            <div className="blog__actions">
              {/* <button type="button"  className="border border-solid-300  bg-blue-100 border-red-400 p-2 m-2">
                Cancle
              </button> */}
              <button type="submit" className="border border-red-400 rounded-full w-40 bg-blue-100 p-2 m-2">
                {" "}
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* {
        List.map((a)=>
        <div className="flex justify-evenly flex-wrap p-2 m-4 border-4 ">
          <li>{a.enterName}</li>
          <li>{a.enterDes}</li>
          <li>{a.enterAuthor}</li>
         
          <li>{a.enterImage} </li> <i className="fa fa-edit font-xl" ></i><i className="fa fa-trash" ></i>
         
          
        </div>
          )
      } */}

     
    </>
  );
};

export default Form;
