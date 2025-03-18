"use client";

import { Post, CreatePost } from "@/app/NewsFeed/components";
import { BoxStyled } from "./styles";

const Newsfeed = () => {
  return (
    <BoxStyled>
      <CreatePost />
      <Post />
    </BoxStyled>
  );
};

export default Newsfeed;
