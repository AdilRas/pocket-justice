import { List, Avatar, Progress } from "antd";
import CardMetadata from './CardMetadata';
import React from 'react';

export default function PetitionList({ petitions }: { petitions: any[] }) {  

    return (
      <div style={{marginBottom: "20px"}}>
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
          style={{marginBottom: 0}}
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
                title={<a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                description={item.description}
              />
              {item.content}
              <Progress
                percent={Math.round(
                  (parseInt(item.signatures) / parseInt(item.goal)) * 100
                )}
                style={{ display: "flex", padding: "0 5% 0 5%", alignItems: "center"}}
              />
              {`${item.signatures.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} out of ${item.goal.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} signatures`}
            </List.Item>
          )}
        />
        <div>
          <b>Pocket Justice does not own the rights to the content displayed in the above list</b>
        </div>
      </div>
    );
}
