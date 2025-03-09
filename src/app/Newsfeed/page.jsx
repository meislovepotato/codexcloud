"use client";

import { Posts, CreatePost, FeedHeader } from "./Components";
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
