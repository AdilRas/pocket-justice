import React, { useState } from "react";
import { Card } from "antd";
import { Progress } from "antd";

const { Meta } = Card;
const Feed = (props: any) => {
  const [signature, setSignature] = useState(50);
  return (
    <div>
      <Card
        hoverable
        style={{ display: "flex" }}
        cover={
          <img
            style={{ height: "200px", width: "auto" }}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta
          style={{ width: "500px", wordWrap: "break-word" }}
          title="Rename the Edmund Pettus Bridge after Rep John Lewis"
          description="Petition Description: asiohfewaofaoehwfawefiowwadsdwadsfwadafgawdafdffffffffffffffffffffffffffffffffffffffff"
        />
        <Progress percent={signature} style={{ display: "block" }} />
        <p> signatures out of 500</p>
      </Card>
    </div>
  );
};

export default Feed;
