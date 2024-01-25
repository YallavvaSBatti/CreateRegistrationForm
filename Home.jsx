import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/home.css";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    mobileNo: "",
    password: "",
    confirmpassword: "",
    email: "",
    profile: "",

    accesshome: false,
    userenable: false,
    updatehistory: false,
    studydelete: false,
    changestudypriority: false,
    ordersplit: false,
    viewonlysignedoffreports: false,
    worklisttable: false,
    reportinvalidate: false,
    studyassignment: false,

    assigncenter: "",
    imageviewpermission: "",
    modalitylevel: "",
    assignradiologist: "",
  });

  const [selectedProfile, setSelectedProfile] = useState("");

  const handleInputChange1 = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChange = (property) => {
    setUser((prevUser) => ({
      ...prevUser,
      [property]: !prevUser[property],
    }));
  };
  const handleTextInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckboxChange = (property) => {
    setUser((prevUser) => ({
      ...prevUser,
      [property]: !prevUser[property],
    }));
  };
  const handleProfileChange = (event) => {
    setSelectedProfile(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = {
        ...user,
        profile: selectedProfile,
      };
      if (user.id) {
        console.log(user.id);
        await axios.put(`http://localhost:8080/updateUserby/${user.id}`, userData);
        console.log("User Updated Successfully");
        navigate(`/userlist`);

      } else {
        const response = await axios.post("http://localhost:8080/saveUser", userData);
        console.log("User Created Successfully:", response.data);
         navigate(`/userlist`);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  
  return (
    
      <div className="container">
        <form action=" " className="form" onSubmit={handleSubmit}>
          <h2>User Registration</h2>

          <div className="container1">
            <div className=" input1">
            <label htmlFor="floatingInputGroup1">
                <span style={{ color: "red" }}>*</span>
                User Name
              </label>
              <input 
                type="text"
                className="form-cotrol"
                placeholder=" "
                name="userName"
                value={user.userName}
                onChange={handleTextInputChange} required
              />
              
            </div>

            <div className="input1">
            <label htmlFor="floatingInputGroup1">
                <span style={{ color: "red" }}>*</span>
                First Name
              </label>
              <input
                type="text"
                className="form-cotrol"
                placeholder=" "
                name="firstName"
                value={user.firstName}
                onChange={handleTextInputChange}required
              />
              
            </div>

            <div className="input1">
            <label htmlFor="floatingInputGroup1">
                <span style={{ color: "red" }}>*</span>
                Last Name
              </label>
              <input
                type="text"
                className="form-cotrol"
                placeholder=""
                name="lastName"
                value={user.lastName}
                onChange={handleTextInputChange}required
              />
              
            </div>

            <div className="input1">
            <label htmlFor="floatingInputGroup1">
                <span style={{ color: "red" }}>*</span>
                Mobile No
              </label>
              <input
                type="text"
                placeholder=" "
                name="mobileNo"
                value={user.mobileNo}
                onChange={handleTextInputChange}required
              />
              
            </div>
          </div>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="container1">
            <div className=" input1">
            <label htmlFor="floatingInputGroup1">
                <span style={{ color: "red" }}>*</span>
                Password
              </label>
              <input
                type="password"
                className="form-cotrol"
                placeholder=" "
                name="password"
                value={user.password}
                onChange={handleTextInputChange}required
              />
              
            </div>

            <div className="input1">
            <label htmlFor="floatingInputGroup1">
                <span style={{ color: "red" }}>*</span>
                Confirm Password
              </label>
              <input
                type="password"
                className="form-cotrol"
                placeholder=" "
                name="confirmpassword"
                value={user.confirmpassword}
                onChange={handleTextInputChange}required
              />
              
            </div>

            <div className="input1">
              <label htmlFor="floatingInputGroup1">
                <span style={{ color: "red" }}>*</span>
                Email Id
              </label>
              <input
                type="text"
                className="form-cotrol"
                placeholder=""
                name="email"
                value={user.email}
                onChange={handleTextInputChange}required
              />
              
            </div>

            <div className="input123">
              <label style={{ marginRight: "10px" }}>
                <span style={{ color: "red" }}>*</span>
                Profile
              </label>
              <select
                className="yes"
                id="profile"
                name="profile"
                onChange={handleProfileChange}required
                value={selectedProfile}
              >
                <option value="">Select Option</option>
                <option value="Administrator">Administrator</option>
                <option value="SuperRadiologist">SuperRadiologists</option>
                <option value="Medical Transcription">
                  Medical Transcription
                </option>
                <option value="Radiologist">Radiologists</option>
                <option value="Technologist">Technologist</option>
                <option value="FrontDesk">Front Desk</option>
                <option value="Center User">Center User</option>
                <option value="Refering Physician">Refering Physician</option>
              </select>
            </div>
          </div>

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="container3">
            <div className="container11">
              <div className="toggleColumn">
                <label
                  className={`toggleButtonLabel ${
                    user.accesshome ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="accesshome"
                    checked={user.accesshome}
                    onChange={() => handleInputChange("accesshome")}
                  />
                  Access Home
                  <span className="toggleButton"></span>
                </label>
              </div>

              <div className="toggleColumn">
                <label
                  className={`toggleButtonLabel ${
                    user.userenable ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="enableUser"
                    checked={user.userenable}
                    onChange={() => handleInputChange("userenable")}
                  />
                  User Enable
                  <span className="toggleButton"></span>
                </label>
              </div>

              <div className="toggleColumn">
                <label
                  className={`toggleButtonLabel ${
                    user.updatehistory ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="updatehistory"
                    checked={user.updatehistory}
                    onChange={() => handleInputChange("updatehistory")}
                  />
                  Update History
                  <span className="toggleButton"></span>
                </label>
              </div>

              <div className="toggleColumn">
                <label
                  className={`toggleButtonLabel ${
                    user.studydelete ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="studydelete"
                    checked={user.studydelete}
                    onChange={() => handleInputChange("studydelete")}
                  />
                  Study Delete
                  <span className="toggleButton"></span>
                </label>
              </div>

              <div className="toggleColumn">
                <label
                  className={`toggleButtonLabel ${
                    user.changestudypriority ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="changestudypriority"
                    checked={user.changestudypriority}
                    onChange={() => handleInputChange("changestudypriority")}
                  />
                  Study Priority
                  <span className="toggleButton"></span>
                </label>
              </div>
            </div>

            <div className="container21">
              <div className="toggleColumn">
                <label
                  className={`toggleButtonLabel ${
                    user.ordersplit ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="ordersplit"
                    checked={user.ordersplit}
                    onChange={() => handleInputChange("ordersplit")}
                  />
                  Order Split
                  <span className="toggleButton"></span>
                </label>
              </div>

              <div className="toggleColumn">
                <label
                  className={`toggleButtonLabel ${
                    user.viewonlysignedoffreports ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="viewonlysignedoffreports"
                    checked={user.viewonlysignedoffreports}
                    onChange={() =>
                      handleInputChange("viewonlysignedoffreports")
                    }
                  />
                  View Reports
                  <span className="toggleButton"></span>
                </label>
              </div>

              <div className="toggleColumn">
                <label
                  className={`toggleButtonLabel ${
                    user.worklisttable ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="worklisttable"
                    checked={user.worklisttable}
                    onChange={() => handleInputChange("worklisttable")}
                  />
                  Worklist Table
                  <span className="toggleButton"></span>
                </label>
              </div>
              <div className="toggleColumn">
                <label
                  className={`toggleButtonLabel ${
                    user.reportinvalidate ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="reportinvalidate"
                    checked={user.reportinvalidate}
                    onChange={() => handleInputChange("reportinvalidate")}
                  />
                  RIValidate
                  <span className="toggleButton"></span>
                </label>
              </div>
              <div className="toggleColumn">
                <label
                  className={`toggleButtonLabel ${
                    user.studyassignment ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="studyassignment"
                    checked={user.studyassignment}
                    onChange={() => handleInputChange("studyassignment")}
                  />
                  SAssignment
                  <span className="toggleButton"></span>
                </label>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="container31">
              <div className="input121">
                <label style={{ marginRight: "10px" }}>
                  Image Viewing Permission
                </label>
                <select
                  className="yes"
                  id="imageviewpermission"
                  name="imageviewpermission"
                  onChange={handleInputChange1}
                  value={user.imageviewpermission}
                >
                  <option value="">Select Option </option>
                  <option value="Scout Viewer">Scout Viewer</option>
                  <option value="Scout ZFV">Scout ZFV</option>
                  <option value="Meddream">Meddream</option>
                </select>
              </div>

              {selectedProfile !== "Administrator" && (
                <div className="input12">
                  <label
                    style={{ marginRight: "10px" }}
                    value={user.assigncenter}
                    onChange={handleInputChange}
                  >
                    Assign Center
                  </label>
                  <select
                    className="yes"
                    id="assigncenter"
                    name="assigncenter"
                    onChange={handleInputChange1}
                    value={user.assigncenter}
                  >
                    <option value="">Select Center</option>
                    <option value="Max Bangalore">MAX Bangalore</option>
                    <option value="MAX Mysore">MAX Mysore</option>
                    <option value="Hassan">Hassan</option>
                    <option value="Haveri">Haveri</option>
                    <option value="Mangalore">Mangalore</option>
                    <option value="Madikeri">Madikeri</option>
                  </select>
                </div>
              )}
            </div>
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="container41">
              {selectedProfile === "Radiologist" && (
                <div>
                  <div className="input12">
                    <label
                      style={{ marginRight: "10px" }}
                      value={user.modalitylevel}
                      onChange={handleInputChange}
                    >
                      Modality Level Reporting
                    </label>
                    <select
                      className="yes"
                      id="modalitylevel"
                      name="modalitylevel"
                      onChange={handleInputChange1}
                      value={user.modalitylevel}
                    >
                      <option value="">Select Modality</option>
                      <option value="ct">CT </option>
                      <option value="us">US</option>
                      <option value="mr">MR</option>
                      <option value="xa">XA</option>
                      <option value="dx">DX</option>
                      <option value="nm">NM</option>
                      <option value="cr">CR</option>
                      <option value="mg">MG</option>
                      <option value="pt">PT</option>
                    </select>
                  </div>

                  <div className="input12">
                    <label
                      style={{ marginRight: "10px" }}
                      value={user.assignradiologist}
                      onChange={handleInputChange}
                    >
                      Assign Radiologists
                    </label>
                    <select
                      className="yes"
                      id="assignradiologist"
                      name="assignradiologist"
                      onChange={handleInputChange1}
                      value={user.assignradiologist}
                    >
                      <option value="">Select Radiologists</option>
                      <option value="rad1">Rad1</option>
                      <option value="rad2">Rad2 </option>
                      <option value="rad3">Rad3</option>
                      <option value="rad4">Rad4</option>
                      <option value="rad5">Rad5</option>
                      <option value="rad6">Rad6</option>
                    </select>
                  </div>
                </div>
              )}

              {selectedProfile === "Medical Transcription" && (
                <div>
                  <div className="input12">
                    <label
                      style={{ marginRight: "10px" }}
                      value={user.modalitylevel}
                      onChange={handleInputChange}
                    >
                      Modality Level Reporting
                    </label>
                    <select
                      className="yes"
                      id="modalitylevel"
                      name="modalitylevel"
                      onChange={handleInputChange1}
                      value={user.modalitylevel}
                    >
                      <option value="">Select Modality</option>
                      <option value="ct">CT </option>
                      <option value="us">US</option>
                      <option value="mr">MR</option>
                      <option value="xa">XA</option>
                      <option value="dx">DX</option>
                      <option value="nm">NM</option>
                      <option value="cr">CR</option>
                      <option value="mg">MG</option>
                      <option value="pt">PT</option>
                    </select>
                  </div>
                  <div className="input12">
                    <label
                      style={{ marginRight: "10px" }}
                      value={user.assignradiologist}
                      onChange={handleInputChange}
                    >
                      Assign Radiologists
                    </label>
                    <select
                      className="yes"
                      id="assignradiologist"
                      name="assignradiologist"
                      onChange={handleInputChange1}
                      value={user.assignradiologist}
                    >
                      <option value="">Select Radiologists</option>
                      <option value="rad1">Rad1</option>
                      <option value="rad2">Rad2 </option>
                      <option value="rad3">Rad3</option>
                      <option value="rad4">Rad4</option>
                      <option value="rad5">Rad5</option>
                      <option value="rad6">Rad6</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="button1">
            <button id="butt">CREATE USER</button>
          </div>
        </form>
      </div>

  );
};

export default Home;
