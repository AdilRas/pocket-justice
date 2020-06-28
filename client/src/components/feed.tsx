import React from "react";
import { Card } from "antd";
import { Descriptions, Radio } from "antd";
import { Progress } from "antd";
import { FileExcelFilled } from "@ant-design/icons";
import { stringify } from "querystring";

const { Meta } = Card;

const Feed = (props: any) => {
  return (
    <div>
      <Card
        hoverable
        style={{ display: "flex"}}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta style={{width: 240, wordWrap: "break-word"}} title="Petition Title" description="Petition Description: asiohfewaofaoehwfawefiowwadsdwadsfwadafgawdafdffffffffffffffffffffffffffffffffffffffff" />
        <Progress percent={50} />
      </Card>
    </div>
  );
};

export default Feed;
