import React, { useState } from "react";
import "./AddUser.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // set input fields
  const nameSetHandle = (e) => {
    setName(e.target.value);
  };

  const emailSetHandle = (e) => {
    setEmail(e.target.value);
  };
  const phoneSetHandle = (e) => {
    setPhone(e.target.value);
  };

  // save users data
  const saveUserHandle = async () => {
    let userObject = {
      name: name,
      email: email,
      phone: phone,
    };
    if (localStorage.getItem("data") == null) {
      await localStorage.setItem("data", JSON.stringify([userObject]));
      console.log(
        "data added successfully 1st data",
        JSON.stringify(userObject)
      );
    } else {
      let newUserObj = JSON.parse(localStorage.getItem("data"));
      newUserObj.push(userObject);
      await localStorage.setItem("data", JSON.stringify(newUserObj));
    }

    // reset all input fields
    setName("");
    setPhone("");
    setEmail("");
  };

  // user add cancel
  const cancelHandle = async () => {
    await setName("");
    await setPhone("");
    await setEmail("");
    console.log("cancelHandle", name + "--ph" + phone + "---em" + email);
  };

  return (
    <div
      className="main"
      style={{ alignItems: "center", flex: 1, flexDirection: "column" }}
    >
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label labelStyle">
          Name
        </label>
        <input
          value={name}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name"
          onChange={nameSetHandle}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput2" className="form-label labelStyle">
          Email address
        </label>
        <input
          value={email}
          type="email"
          className="form-control"
          id="exampleFormControlInput3"
          placeholder="name@example.com"
          onChange={emailSetHandle}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label labelStyle">
          Phone No.
        </label>
        <input
          value={phone}
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="9999999999"
          onChange={phoneSetHandle}
        />
      </div>

      {/* // save button */}
      <button
        type="button"
        className="btn btn-primary btn-lg btnStyle"
        onClick={saveUserHandle}
      >
        SAVE
      </button>

      {/* cancel button */}
      <button
        type="button"
        className="btn btn-secondary btn-lg btnStyle"
        onClick={cancelHandle}
      >
        CANCEL
      </button>
    </div>
  );
};

export default AddUser;
