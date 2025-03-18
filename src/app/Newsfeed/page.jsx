"use client";

import { Posts, CreatePost } from "./components";
import { BoxStyled } from "./styles";

const Newsfeed = () => {
  return (
    <BoxStyled>
        <CreatePost />
        <Posts />
    </BoxStyled>
  );
};

export default Newsfeed;
