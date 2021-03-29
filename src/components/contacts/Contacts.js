import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts, "constact");
  return (
    <div>
      <table className="table table-shadow">
        <thead>
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th scope="col">Name</th>
            <th scope="col">Cell Phone</th>
            <th scope="col">Email Address</th>
          </tr>
        </thead>
        <tbody>
          {/* height order function iterate the array */ }
          { contacts.map((contact, index) => (
           // conatct define for props to send the data // props are used to pass the data.
           <Contact contact={contact}></Contact>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
