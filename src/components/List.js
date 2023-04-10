import React, { useState } from "react";
import "./List.css";

const List = (props) => {
  const [deleteList, setdeletelist] = useState("");



  const deleteHandler = (id) => {
    

    const deleteValue = [...props.listData];
    const Index = props.listData.findIndex((item) => item.id === id);
   
    deleteValue.splice(Index, 1);

    props.deleteListData(deleteValue);
  };

  const updateHandler = (id) => {
    console.log("clicking update handler", props.listData[0]);

    const updateValue = [...props.listData];
    const Index = props.listData.findIndex((item) => item.id === id);
    

    console.log(updateValue[Index].name, updateValue[Index].Auth);
    console.log("updatevalu", updateValue);
   
    props.updateListData(updateValue[Index]);

    // const handlechange = (index) => {
    //   const newUsers = [...users];
    //   newUsers[index].name = 'New Name';
    //   newUsers[index].rollNo = 'New RollNo';
    //   setUsers(newUsers);
    // };
  };

  return (
    <>
      {" "}
      <div className="flex flex-wrap ">
        {props.listData.map((a) => (
          <div
            id="child-div"
            className=" overflow-hidden p-2 m-8 text-center  border-4  w-[40vh]  text-2xl "
            key={a.id}
          >
            <img id="image" src={a.img} alt="blog_img" />
            <p>
              Name: <span>{a.name}</span>
            </p>
            <br />
            <p>
              Description: <span>{a.des}</span>
            </p>
            <br />
            <p>
              Author Name: <span>{a.Auth}</span>
            </p>
            <br />
            <div className="flex justify-end ">
              <span className="flex justify-end">
                {/* <i class="fa fa-eye text-3xl p-2" aria-hidden="true"></i> */}
                <i
                  className="fa fa-edit text-3xl p-2"
                  onClick={() => updateHandler(a.id)}
                ></i>
                {/* <button className="delete" > */}
                <i
                  className="fa fa-trash text-3xl p-2"
                  onClick={() => deleteHandler(a.id)}
                ></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
