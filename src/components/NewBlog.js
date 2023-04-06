import React from 'react'
import Form from './Form'

const NewBlog = (props) => {

    const saveDataHandler=(blogData)=>{
            const data={
                ...blogData,id:Math.random().toString(),
            };
            props.onAdd(blogData)
            // console.log(blogData)
    }

  return (
    <div>
        <Form onSaveData={saveDataHandler}/>
    </div>
  )
}

export default NewBlog