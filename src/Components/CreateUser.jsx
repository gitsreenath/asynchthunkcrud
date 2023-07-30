import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reguser } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";
import "../App.css";

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setuser] = useState({});
  const getusers = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(reguser(user));
    navigate("/Read");
  };
  return (
    <div>
      <h1>Create User</h1>
      <>
        <form onSubmit={handlesubmit} className="reguser">
          <input
            type="text"
            name="name"
            onChange={getusers}
            placeholder="Enter name"
          />
          <br />
          <input
            type="email"
            name="email"
            onChange={getusers}
            placeholder="enter email"
          />
          <br />
          <input
            type="text"
            name="age"
            onChange={getusers}
            placeholder="enter age"
          />
          <br />
          {/* <select name="gender" onChange={getusers}>
            <option  name="gender" value="default" >
              select
            </option>
            <option name="gender" value="others" >
              others
            </option>
            <option name="gender" value="male" >
              male
            </option>
            <option name="gender" value="female" >
              female
            </option>
          </select> */}


          <br />
          <input type="radio" name="gender" onChange={getusers} value='male' /> Male 
          <input type="radio" name="gender"  onChange={getusers} value='female' /> Female <br />
          <button type="submit">Submit</button>
        </form>
      </>
    </div>
  );
};

export default CreateUser;
