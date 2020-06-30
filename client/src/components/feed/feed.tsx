import React from "react";
import "./feed.module.css";
import PetitionList from './petitionList';
import CardMetadata from './CardMetadata';

const Feed = (props: any) => {

  const getDescription = (desc: string) => {
    return desc == undefined ? "" : (desc.length > 500 ? `${desc.substr(0, 497)}...` : desc);
  };
  const getAvatar = (href: string): string => {
    const paths = [
      "https://static.change.org/favicon/favicon-400x400.png", // Change.org logo
      "https://image.flaticon.com/icons/png/512/49/49300.png", // The Petition Site logo
      "https://image.flaticon.com/icons/svg/25/25284.svg",     // External link icon
    ];
    if (href && href.indexOf('change.org') > 0) {
      return paths[0];
    } else if (href && href.indexOf('thepetitionsite') > 0) {
      return paths[1];
    }
    return paths[2];
  }
  const generateInitialState = (petitions: any[]): CardMetadata[] => {
      const listData: CardMetadata[] = [];
          for (let petition of petitions) {
          listData.push({
              href: petition.href,
              title: petition.title,
              avatar: getAvatar(petition.href),
              description: petition.href == undefined ? "" : `Sourced from ${petition.href.split(".")[1]}.${
              petition.href.split(".")[2].split("/")[0]
              }`,
              content: getDescription(petition.description),
              imageHref: petition.imageHref
          });
          // console.log(`Added petition: ${petition.title}`);
      }
      return listData;
  };

  return (
    <div>
      <PetitionList petitions={generateInitialState(props.petitions)} />
    </div>
  );
};

export default Feed;
