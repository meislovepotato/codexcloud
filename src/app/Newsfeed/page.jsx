"use client";

import { Posts, CreatePost } from "@/app/Newsfeed/components";
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
