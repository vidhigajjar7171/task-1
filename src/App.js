import React, { useState } from 'react';


import './App.css';
import Form from './components/Form';
import NewBlog from './components/NewBlog';

const App = () => {
//  const [details,setdetails]=useState([]);

const addBlogHandler=blog=>{
console.log("add blogs");
console.log(blog);

}
  return (
    <div>
     
      <NewBlog onAdd={addBlogHandler}/>
     
    </div>
  );
};

export default App;
