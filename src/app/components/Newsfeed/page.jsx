"use client";

import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
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
