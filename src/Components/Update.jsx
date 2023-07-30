import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/UserSlice";

const Update = () => {
  const { id } = useParams();
  const disptach=useDispatch()
  const [user, setuser] = useState();
  const navigate=useNavigate()

  const { userList } = useSelector((state) => state.users);
  useEffect(() => {
    if (id) {
      const editUser = userList.filter((item) => item.id === id);
      setuser(editUser[0]);
      // console.log(editUser[0]);
    }
  }, []);

  // {user&&console.log(user)}

  const getupdate = (e) => {
    // const [newdata,setnewdata]=useState( {})
    setuser({...user,[e.target.name]:e.target.value})
    
    
  };
  
  const handlesubmit = (e) => {
    e.preventDefault()
    disptach(updateUser(user))
    navigate('/Read')

  };
  // console.log("newdata",user);

  return (
    <div>
      <h1>Update User</h1>
      {user&&
      <form onSubmit={handlesubmit} className="reguser">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={getupdate}
          placeholder="Enter name"
        />
        <br />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={getupdate}
          placeholder="enter email"
        />
        <br />
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={getupdate}
          placeholder="enter age"
        />
        <br />
        {/* <select name="gender" onChange={getupdate}>
            <option name="gender" value="select" onChange={getupdate}>
              select
            </option>
            <option name="gender" value="male" onChange={getupdate}>
              male
            </option>
            <option name="gender" value="female" onChange={getupdate}>
              female
            </option>
            <option name="gender" value="others" onChange={getupdate}>
              others
            </option>
          </select> */}
        <br />
        <input
          type="radio"
          name="gender"
          onChange={getupdate}
          value="male"
          checked={user.gender === "male"}
        />
        Male
        <input
          type="radio"
          name="gender"
          checked={user.gender === "female"}
          onChange={getupdate}
          value="female"
        />{" "}
        Female <br />
        <button type="submit">Submit</button>
      </form>}
    </div>
  );
};

export default Update;
