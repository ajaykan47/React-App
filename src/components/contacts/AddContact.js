import React from "react";

const AddContact = () => {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Enter Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Enter Phone Number</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Phone Number"
          />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="" />
          <label class="form-check-label" for="">
            Enter Email
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContact;
