import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchData } from "../../scripts/util";
import { getDefaultNormalizer } from "@testing-library/react";
import FeedItem from "./feedItem";
import "./feed.module.css";

const Feed = (props: any) => {
  const [cards, setCards] = useState([]);

  

  const formatPreview = (description: string): string => {
    const final = "";
    return final;
  };

  return (
    <ul>
      {props.petitions.map((petition: any) => {
        return(
        <div>
          <FeedItem petition={petition} />
          <div
            className="vertSpace"
            style={{ width: "auto", display: "block", height: "30px" }}
          ></div>
        </div>);
      })}
    </ul>
  );
};

export default Feed;
