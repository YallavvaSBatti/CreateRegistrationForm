import React, { useState, useEffect } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import "./CSS/table.css";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/getUsers')
      .then((Response) => {
        console.log(Response.data);
        setTableData(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = (id) => {
    console.log(`Editing user with ID: ${id}`);
    navigate(`/EditUser/${id}`);
  };

  
  const handleDelete = async (id) => {
    console.log(`Deleting user with ID: ${id}`);
    try {
      await axios.delete(`http://localhost:8080/deleteUserby/${id}`);
      console.log(`User with ID ${id} deleted successfully.`);
      const updatedData = tableData.filter((user) => user.id !== id);
      setTableData(updatedData);
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };
  

  return (
    <div>
      <div className="patient-table">
        <table className="patient-table">
          <thead className="sticky-header">
            <tr>
              <th>User Name</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th style={{ width: "180px" }}>Mobile No</th>
              <th style={{ width: "150px" }}>Email Id</th>
              <th>Profile</th>
              <th style={{ width: "150px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData) => (
              <tr key={rowData.id}>
                <td>{rowData.userName}</td>
                <td>{rowData.firstName}</td>
                <td>{rowData.lastName}</td>
                <td>{rowData.mobileNo}</td>
                <td>{rowData.email}</td>
                <td>{rowData.profile}</td>
                <td>
                  <button onClick={() => handleEdit(rowData.id)}>
                    <i className="fas fa-edit"></i>
                  </button>
                  <button onClick={() => handleDelete(rowData.id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
