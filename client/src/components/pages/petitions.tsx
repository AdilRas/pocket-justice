import React, { useState, useEffect } from "react";
import TopNav from "../topNav/topNav";
import Feed from "../feed/feed";
import axios from "axios";
import Petition from "../../models/Petition";

const Petitions = () => {
  const [state, setState] = useState("new");
  const [petitions, setPetitions] = useState([new Petition()]);

  const handleMenuClick = (e: any) => {

    console.log("click ", e.key);
    setState(e.key);
    handleMenuSort(e.key);
  };

  useEffect(() => {
    const REQUEST_URL =
      process.env.REACT_APP_MODE === "integrated"
        ? "http://localhost:5000"
        : process.env.REACT_APP_MODE === "production"
        ? "http://pocket-justice.herokuapp.com"
        : "http://localhost:3000";
    console.log(process.env.REACT_APP_MODE);
    const arr: Petition[] = [];
    axios
      .get(`${REQUEST_URL}/petitions`, {
        headers: {
          "Access-Control-Allow-Origin": `${REQUEST_URL}`,
          "Access-Control-Allow-Credentials": "true",
        },
      })
      .then((response: any) => {
        let ind = 0;
        for (const item of response.data) {
          const pet: Petition = {
            title: item.title,
            href: item.href,
            date: `${ind++}`,
            description: item.description,
            imageHref: item.imageHref,
            goal: item.goal,
            signatures: item.signatures,
          };
          if (pet.title !== "") {
            arr.push(pet);
          }
          setPetitions(arr);
        }
      });
   }, []);
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
    <div className="petitions-page">
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
