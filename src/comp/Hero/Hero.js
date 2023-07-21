import React, { useEffect, useState } from "react";
import "./hero.css";

function Hero() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "http://ec2-18-221-153-221.us-east-2.compute.amazonaws.com:3001/allStudents"
    );
    const products = await response.json();
    setData(products);
    console.log(products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        padding: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          width: "100%",
        }}
      >
        <h3
          style={{
            paddingRight: "20px",
            paddingLeft: "30px",
            margin: "10px",
            backgroundColor: "lightblue",
          }}
        >
          ID
        </h3>
        <h3
          style={{
            paddingRight: "15px",
            paddingLeft: "15px",
            margin: "10px",
            backgroundColor: "lightblue",
          }}
        >
          Creator
        </h3>
        <h3>Name</h3>
      </div>
      {data === [] ? (
        <h1>No Students</h1>
      ) : (
        data.map((x) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "center",
                width: "100%",
              }}
            >
              <h3
                style={{
                  paddingRight: "30px",
                  paddingLeft: "30px",
                  margin: "10px",
                  backgroundColor: "lightblue",
                }}
              >
                {x.studentId}
              </h3>
              <h3
                style={{
                  paddingRight: "30px",
                  paddingLeft: "30px",
                  margin: "10px",
                  backgroundColor: "lightblue",
                }}
              >
                {x.creator}
              </h3>
              <h3>{x.name}</h3>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Hero;
