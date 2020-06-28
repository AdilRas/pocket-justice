import React, { useState } from "react";
import TopNav from "../components/topNav";
import Feed from "../components/feed";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import feed from "../components/feed";

const Home = () => {
  const [state, setState] = useState("hot");

  const handleClick = (e: any) => {
    console.log("click ", e);
    setState(e.key);
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
    <div>
      <div>
        <TopNav handleClick={handleClick} state={state} />
      </div>
      <div style={style}>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
