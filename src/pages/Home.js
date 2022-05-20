import { Divider, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    // use for clear local data
    // localStorage.clear()

    //get local storage data
    if (localStorage.getItem("data") != null) {
      setuserData(() => JSON.parse(localStorage.getItem("data")));
    }
    console.log("-----userdata", userData);
  }, []);
  return (
    <div
      className="main"
      style={{ alignItems: "center", flex: 1, flexDirection: "column" }}
    >
      {/* <div className="mb-3"> */}
      {userData.length === 0 ? (
        <h5 className="card-title cardTextStyle">No user data</h5>
      ) : null}
      {/* </div> */}

      {/* // render all users */}
      {userData.map((item) => {
        return (
          <div
            className="card"
            elevation={23}
            style={{ width: "18rem", margin: "2% auto" }}
            key={item.name}
          >
            <div className="card-body">
              <h5
                className="card-title "
                style={{
                  WebkitBorderRadius: "30%",
                  margin: "2%",
                  color: "green",
                }}
              >
                {item.name}
              </h5>
              <Divider style={{ color: "black" }} size={2} color="red">
                User Profile
              </Divider>
              <div className="mb-3">
                <Paper color="gray">
                  <h5 className="card-title cardTextStyle">{item.phone}</h5>
                </Paper>
              </div>
              <div className="mb-3">
                <Paper color="gray">
                  <h5 className="card-title cardTextStyle">{item.email}</h5>
                </Paper>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

// previous fuctions
{
  /* <h2 className="main-header">React Crud Operations</h2> */
}
{
  /* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */
}
{
  /* <div style={textStyle} className="mb-3">
        <TextField
          // className="textField"
          className="form-control textField form-label"
          id="filled-basic"
          label="Name"
          variant="filled"
        />
      </div> 
      let textStyle = {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    borderWidth: 10,
    borderColor: "black",
    borderRadious: 50,
  };
// useEffect(() => {
  //   // setuserDataDemo()
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => setuserData(json));

  //     console.log("---------datauserData",userData)
  // },[]);
{/* card for user profile */
}

{
  /* {userData.map((item) => {
        console.log("userdata ", item);
        return (
          <div className="card" elevation={23} style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title labelStyle">Card title{item.name}</h5>
              <Divider style={{ color: "black" }} size={2} color="red">
                User Profile
              </Divider>
              <div className="mb-3">
                <Paper color="gray">
                  <h5 class="card-title cardTextStyle">Card title</h5>
                </Paper>
              </div>
              <div className="mb-3">
                <Paper color="gray">
                  <h5 className="card-title cardTextStyle">Card title</h5>
                </Paper>
              </div>
            </div>
          </div>
        );
      })} 


 // let nextState = [
    //   { name: "ram", phone: "123123123", email: "abc@gmail.com" },
    //   { name: "ram1", phone: "1231231231", email: "abc1@gmail.com" },
    // ];
    // localStorage.setItem("data", JSON.stringify(nextState));
    // let data1 = JSON.parse(localStorage.getItem("data"));
      */
}
