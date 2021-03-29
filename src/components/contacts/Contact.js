import React from 'react';
import Avatar from "react-avatar";

// {contact } destration es6 feature
const Contact = ({contact}) => {
    const { name, phone, email } = contact;
    return (
            <tr>
              <th scope="row">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label"></label>
                </div>
              </th>
              <td><Avatar className="mr-2" name={name} size="45" round={true} /> {name}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td className="action">
                  <a href=""> 
                  <span className="material-icons"></span>
                  Edit</a>
                  <a href=""> 
                  <span className="material-icons text-danger" ></span>
                  Delete</a>
              </td>
            </tr> 
    )
};

export default Contact;