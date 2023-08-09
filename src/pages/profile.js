import Link from "next/link";
import React, { useEffect, useState } from "react";

function profile() {
  const [name, setname] = useState("");
  useEffect(() => {
    setname(localStorage.getItem("name"));
  });
  //   const name = localStorage.getItem("name");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="">
        <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>Profile</h1>
        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
          Hi {name} ! Welcome to your profile
        </p>
        <div
          style={{
            display: "flex",
          }}
        ></div>
        <Link href="/">
          <button
            style={{
              width: "360px",
            }}
          >
            Sign Out
          </button>
        </Link>
      </div>
    </div>
  );
}

export default profile;
