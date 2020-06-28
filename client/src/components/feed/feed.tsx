import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Progress } from "antd";
import { fetchData } from '../../scripts/util';
import { getDefaultNormalizer } from "@testing-library/react";

const { Meta } = Card;
const Feed = (props: any) => {
  const [petitions, setPetitions] = useState([]);
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    fetchPetitions();
  }, []);

  const fetchPetitions = async () => {
    const data = await fetchData();
    setPetitions(data);
  };

  const formatPreview = (description: string): string => {
    const final = "";
    return final;
  } 

  return (
    <ul>
      {petitions.map((petition: any) => {
        return (
          <div>
            <Card
              hoverable
              style={{ display: "flex" }}
              cover={
                <img
                  style={{ height: "200px", width: "auto" }}
                  alt="example"
                  src={petition.imageHref}
                />
              }
            >
              <Meta
                style={{ width: "500px", wordWrap: "break-word" }}
                title={petition.title}
                description={petition.description.substr(0, Math.min(500, petition.description.length))}
              />
              <Progress percent={Math.round(petition.signatures / petition.goal * 100)} style={{ display: "block" }} />
              <p> {petition.signatures} signatures out of {petition.goal}</p>
            </Card>
          </div>
        );
        })}
      </ul>
    
  );
};

export default Feed;
