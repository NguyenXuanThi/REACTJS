import React, { useState, useEffect } from "react";
import "../Datatable.css";

const Datatable = () => {
  const [editData, setEditData] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    company: "",
    value: "",
    date: new Date().toISOString().slice(0, 10),
    status: "New",
    
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setTableData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Edit user handler
  const handleEditClick = (rowData) => {
    setEditData(rowData);
    setShowEditModal(true);
  };

  const handleEditSave = () => {
    fetch(`http://localhost:3000/users/${editData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData),
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        const newData = tableData.map((item) =>
          item.id === updatedUser.id ? updatedUser : item
        );
        setTableData(newData);
        setShowEditModal(false);
      })
      .catch((err) => console.error("PUT error:", err));
  };

  // Add user handler
  const handleAddUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddSave = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setTableData([...tableData, data]);
        setShowAddModal(false);
      })
      .catch((err) => console.error("POST error:", err));
  };

  return (
    <div className="datatable">
      <div className="tieude">
        <img src="/src/img/File text 1.png" alt="" width="25" height="25" />
        <h4 className="title">Detailed report</h4>

        <button onClick={() => setShowAddModal(true)} className="downup">
          <img src="/src/img/Download.png" alt="" />
          Import
        </button>

        <button className="downup">
          Export
        </button>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New User</h3>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleAddUserChange}
            />
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={newUser.company}
              onChange={handleAddUserChange}
            />
            <label>Order Value:</label>
            <input
              type="text"
              name="value"
              value={newUser.value}
              onChange={handleAddUserChange}
            />
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={newUser.date}
              onChange={handleAddUserChange}
            />
            <label>Status:</label>
            <select
              name="status"
              value={newUser.status}
              onChange={handleAddUserChange}
            >
              <option>New</option>
              <option>In-progress</option>
              <option>Completed</option>
            </select>
            <div className="modal-buttons">
              <button onClick={handleAddSave}>Save</button>
              <button onClick={() => setShowAddModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit User</h3>
            <label>Name:</label>
            <input
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            />
            <label>Company:</label>
            <input
              value={editData.company}
              onChange={(e) => setEditData({ ...editData, company: e.target.value })}
            />
            <label>Order Value:</label>
            <input
              value={editData.value}
              onChange={(e) => setEditData({ ...editData, value: e.target.value })}
            />
            <label>Status:</label>
            <select
              value={editData.status}
              onChange={(e) => setEditData({ ...editData, status: e.target.value })}
            >
              <option>New</option>
              <option>In-progress</option>
              <option>Completed</option>
            </select>
            <div className="modal-buttons">
              <button onClick={handleEditSave}>Save</button>
              <button onClick={() => setShowEditModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Data Table */}
      <table>
        <thead>
          <tr>
            <th></th>
            <th>CUSTOMER NAME</th>
            <th>COMPANY</th>
            <th>ORDER VALUE</th>
            <th>ORDER DATE</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((d) => (
            <tr key={d.id}>
              <td><input type="checkbox" /></td>
              <td>
                <div className="customer-info">
                  <img src={d.img} alt={d.name} />
                  <span>{d.name}</span>
                </div>
              </td>
              <td>{d.company}</td>
              <td>{d.value}</td>
              <td>{d.date}</td>
              <td><span className={`status ${d.status.toLowerCase()}`}>{d.status}</span></td>
              <td>
                <img
                  src="/src/img/create.png"
                  alt="Edit"
                  width="20"
                  height="20"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEditClick(d)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
