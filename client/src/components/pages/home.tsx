import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { Card } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Home = () => {
  const { Meta } = Card;
  return (
    <div>
        <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </div>
  );
};
export default Home;
