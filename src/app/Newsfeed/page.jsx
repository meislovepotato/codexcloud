"use client";

import { Post, CreatePost } from "@/app/Newsfeed/components";
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
