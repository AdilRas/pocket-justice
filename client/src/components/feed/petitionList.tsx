import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import CardMetadata from './CardMetadata';
import React, { useState, useEffect, Dispatch } from 'react';

export default function PetitionList({ petitions }: { petitions: any[] }) {  

    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 4,
          }}
          dataSource={petitions}
          footer={
            <div>
              <b>Pocket Justice does not own the rights to the content displayed in the above list</b>
            </div>
          }
          renderItem={(item: CardMetadata) => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src={item.imageHref}
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
}