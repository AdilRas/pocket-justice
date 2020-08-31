import React from "react";
import { Card } from "antd";
import { Progress } from "antd";
import styles from './feedItem.module.css';

const { Meta } = Card;

const FeedItem = (props: any) => {
  const handleClick = (petition: any) => {
    window.open(props.petition.href);
  };
  var desc;
  if(props.petition.description.length <= 500){
    desc = props.petition.description.substr(0,500);
  }
  else{
      desc = props.petition.description.substr(0,500) + "...";
  }
  

  return (
    <div className={styles.petitioncard}>
      <Card 
        hoverable
        style={{ display: "flex" }}
        cover={
          <img
            style={{ height: "200px", width: "auto" }}
            alt="example"
            src={props.petition.imageHref}
          />
        }
        onClick={() => handleClick(props.petition.href)}
      >
        <Meta
          style={{
            width: "500px",
            wordWrap: "break-word",
          }}
          title={props.petition.title}
          description={desc}
        />
        <Progress
          percent={Math.round(
            (props.petition.signatures / props.petition.goal) * 100
          )}
          style={{ display: "block" }}
        />
        <p>
          {" "}
          {props.petition.signatures} signatures out of {props.petition.goal}
        </p>
      </Card>
    </div>
  );
};

export default FeedItem;
