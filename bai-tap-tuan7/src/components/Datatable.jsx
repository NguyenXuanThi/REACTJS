// components/Datatable.jsx
import React from "react";
import "../Datatable.css"; 
import data from '../data/Datatable.json';

const Datatable = () => {
  return (
    <div className="datatable">
      <h4 className="title">Detailed report</h4>
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
          {data.map((d) => (
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
              <td><i className="fa fa-pencil"></i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
