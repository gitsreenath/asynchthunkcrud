import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getuser, searchData } from "../features/UserSlice";

const Navpanel = () => {
  const dispatch = useDispatch();
  const [find, setfind] = useState("");
  // console.log(find);

  useEffect(() => {
    dispatch(getuser());

    
  }, []);
  useEffect(() => {
dispatch(searchData(find))
  }, [find])
  

  const { userList } = useSelector((state) => state.users);

  return (
    <div className="navbar">
      {/* {userlist &&  */}

      <ul className="d-flex">
        <li>
          <Link href="" to="/">
            CreateUser{" "}
          </Link>
        </li>
        <li>
          <Link href="" to="/Read">
            Users ( {userList && userList.length} )
          </Link>
        </li>
      </ul>
      {
        <input
          type="search"
          name="search"
          onChange={(e) => setfind(e.target.value)    }
          placeholder="search..."
        />
      }
    </div>
  );
};

export default Navpanel;
