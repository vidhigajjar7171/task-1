import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import NewBlog from "./components/NewBlog";

const App = () => {
  const [details, setdetails] = useState([]);
const [updateLists,setupdates]=useState("");
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
        // name:updateValue[0].name,
        name: blog.name,
        des: blog.des,
        img: blog.img,
        Auth: blog.Auth,
      },
    ]);
  };

  const deleteList = (deleteValue) => {
    setdetails(deleteValue);
  };
  const updateList = (updateValue) => {
    // console.log(updateValue[0].name,"name")
    // setdetails(updateValue[0].name,updateValue[0].Auth);
     console.log(updateValue,"updatevalues")
     setupdates(
      
      {
        id: Math.random(),
        // name:updateValue[0].name,
        name: updateValue.name,
        des: updateValue.des,
        img: updateValue.img,
        Auth: updateValue.Auth,
      },
    );
    
  };
  console.log("datisl", details);
  console.log("uplist",updateLists)
  return (
    <div>
      <Form onAdd={addBlogHandler} onupdates={updateLists} />

      <List listData={details} deleteListData={deleteList}
      updateListData={updateList} />
      {/*  id={Math.random()} name="name" Auth="auth" des="des" */}
      {/* <NewBlog onAdd={addBlogHandler}/> */}
    </div>
  );
};

export default App;
