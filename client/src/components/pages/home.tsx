import React, { useState } from "react";
import TopNav from "../topNav/topNav";
import Feed from "../feed/feed";
import { fetchData } from '../../scripts/util';

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
// import feed from "../components/feed/feed";

const Home = () => {
  const [state, setState] = useState("hot");

  const handleMenuClick = (e: any) => {
    fetchData();
    console.log("click ", e);
    setState(e.key);
    handleMenuSort(state);
  };

  const handleMenuSort = (key: any) => {
    if (key === "hot") {
      // display sorted hot data
    } else if (key === "new") {
      // display sorted new data
    } else if (key === "top") {
      // display sorted top data
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
    <div>
      <div>
        <TopNav handleClick={handleMenuClick} state={state} />
        <a href="#" onClick={fetchData}>Test</a> 
      </div>
      <div style={style}>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
