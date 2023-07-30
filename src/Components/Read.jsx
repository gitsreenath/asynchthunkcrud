import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getuser } from "../features/UserSlice";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const { userList, loading, searchBox } = useSelector((state) => state.users);

  const [view, setview] = useState(false);
  const [uid, setuid] = useState();

  const [gender, setGender] = useState("");
  // console.log(gender);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuser());
  }, []);
  const handleUpdate = (id) => {
    navigate(`/Update/${id}`);
  };
  return (
    <div>
      {view && <Popup uid={uid} setview={setview} />}

      <h1>All Users</h1>
      <div className="gender">
        <input
          type="radio"
          name="gender"
          value=""
          checked={gender===""}
          onChange={(e) => setGender(e.target.value)}
        />
        All
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender==="male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender==="female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female <br />
      </div>
      <div className="d-flex">
        {userList &&
          userList
            .filter((item) => {
              if (searchBox.length === 0) {
                return item;
              } else {
                return (
                  item.email.toLowerCase().includes(searchBox.toLowerCase()) ||
                  item.name.toLowerCase().includes(searchBox.toLowerCase())
                );
              }
            })
            // .filter((item) => {
            //   if (item.gender===gender) {
            //     if (gender === "male") {
            //       return item
            //     } else {
                  
            //     }
            //   } else {
            //   }
            // })

            .filter((item)=>
            {
              if(item.gender===gender)
              {
            
                console.log('success',gender);
                return item
              }
              // else{
              //   console.log('Not success',gender);
              //   return null
              // }
              else if(!gender){
                return item
              }
            }
            )

            .map((item) => (
              <div key={item.id} className="reguser_all">
                {/* <h3>User Id:{item.id}</h3> */}
                <h3>Name:{item.name}</h3>
                <h3>Email:{item.email}</h3>
                <h3>Age:{item.age}</h3>
                <h3>gender:{item.gender}</h3>
                <button onClick={() => [setview(true), setuid(item.id)]}>
                  View
                </button>
                <button onClick={() => handleUpdate(item.id)}>Edit</button>
                <button onClick={() => dispatch(deleteUser(item.id))}>
                  Delete
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
