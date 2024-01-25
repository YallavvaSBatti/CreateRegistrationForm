import React from "react";
import img1 from "../SITi.png";
import "./CSS/home1.css";
import { Link } from "react-router-dom";
import CreateUser from "./CreateUser";

const Home1 = () => {
  return (
    <div>
      <div className="navbar">
        
        <div className="logo">
          <img src={img1} alt="" width={80} height={40} />

          <p className="header">
            <span style={{ color: "blue" }}>Scout</span>
            <span style={{ color: "darkorange" }}>RAD</span>
            Lite
          </p>
        </div>

        <div className="archive">
        <Link to="/createUser">Create User</Link>   
 
         </div>
         <div className="purge">
        <Link to="/Userlist"> User List</Link>   
         </div>
      </div>
    </div>
  );
};

export default Home1;
