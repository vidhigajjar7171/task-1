import React, { useState } from "react";
import "./List.css";

const List = (props) => {
  const [deleteList, setdeletelist] = useState("");
  // console.log("props", props.listData.name);

  const deleteHandler = (i) => {
    // console.log("clicking delete handler", props.listData.name);

    const deleteValue = [...props.listData];
    const Index = props.listData.findIndex((item) => item.id === i);
    deleteValue.splice(Index, 1);
    props.deleteListdata(deleteValue);
  };

  return (
    <>
      {" "}
      <div className="flex flex-wrap ">
        {props.listData.map((a) => (
          <div
            id="child-div"
            className=" overflow-hidden p-2 m-8 text-center  border-4  w-[40vw]  text-2xl "
            key={a.id}
          >
            <img id="image" src={a.img} alt="blog_img" />
            <p>name:   <span>{a.name}</span></p>
            <br/>
            <p>description: <span>{a.des}</span></p>
            <br/>
            <p>Author Name: <span>{a.Auth}</span></p>
            <br/>
            <span className="flex justify-end">
              {/* <i class="fa fa-eye text-3xl p-2" aria-hidden="true"></i> */}
              <i className="fa fa-edit text-3xl p-2"></i>
              {/* <button className="delete" > */}
              <i
                className="fa fa-trash text-3xl p-2"
                onClick={() => deleteHandler(a.id)}
              ></i>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
