import React from "react";
import "../Popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Popup = ({uid,setview}) => {
  
  const {userList}=useSelector((state)=>state.users)
  const userView=userList.filter((item)=>item.id===uid)
  
  // console.log('userView',userView);
  
  
  return (
    <div className="popup">
       {userView &&
        userView.map((item) => (
          <div key={item.id} className="popbox">
            <h3>
              <span>Name:</span>
              {item.name}
            </h3>
            <h3>
              <span>Email:</span>
              {item.email}
            </h3>
            <h3>
              <span>Age:</span>
              {item.age}
            </h3>
            <h3>
              <span>Gender:</span>
              {item.gender}
            </h3>
            <div className="close" onClick={()=>setview(false)}  >
              
              
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        ))} 
    </div>
  );
};

export default Popup;
