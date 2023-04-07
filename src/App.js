import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import NewBlog from "./components/NewBlog";

const App = () => {
  const [details, setdetails] = useState([]);

  const addBlogHandler = (blog) => {
    // console.log("add blogs");
    // console.log(blog);
    // if(!details){
    //   return;
    // }
    setdetails([
      ...details,
      {
        id: Math.random(),
        name: blog.name,
        des: blog.des,
        img: blog.img,
        Auth: blog.Auth,
      },
    ]);
  };
 
  const deleteList=(deleteValue)=>{
setdetails(deleteValue)
  }
  console.log("datisl", details);
  return (
    <div>
      <Form onAdd={addBlogHandler} />
      
      <List listData={details} deleteListdata={deleteList}/>     
       {/* <NewBlog onAdd={addBlogHandler}/> */}
    </div>
  );
};

export default App;
