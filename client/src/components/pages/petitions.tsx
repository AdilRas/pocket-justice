import React, { useState, useEffect } from "react";
import TopNav from "../topNav/topNav";
import Feed from "../feed/feed";
import { fetchData } from "../../scripts/util";
import axios from "axios";

// or 'antd/dist/antd.less'
// import feed from "../components/feed/feed";

const Petitions = () => {
  const [state, setState] = useState("new");
  const [petitions, setPetitions] = useState([]);

  const handleMenuClick = (e: any) => {
    fetchData();
    console.log("click ", e);
    setState(e.key);
    handleMenuSort(e.key);
  };

  const handleMenuSort = (key: any) => {
    if (key === "hot") {
      setPetitions(
        petitions.sort((a: any, b: any) => a.signatures - b.signatures)
      );
    } else if (key === "new") {
      setPetitions(
        petitions.sort((a: any, b: any) => a.date - b.date)
      );
    } else if (key === "top") {
      setPetitions(
        petitions.sort((a: any, b: any) => b.signatures - a.signatures)
      );
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/petitions", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
        },
      })
      .then((response: any) => {
        setPetitions(response.data);
      });
  }, []);

  const style: {
    display: string;
    justifyContent: string;
    alignitems: string;
  } = {
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
  };
  return (
    <div>
      <div>
        <TopNav handleMenuClick={handleMenuClick} state={state} />
      </div>
      <div style={style}>
        <Feed petitions={petitions} />
      </div>
    </div>
  );
};

export default Petitions;
