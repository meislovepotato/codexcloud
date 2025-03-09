"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import logo from '@/asset/CC_White_logo.png'

const Logo = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down(426));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between(427, 1025));

  const logoSize = isSmallScreen
    ? { width: 150, height: 32 }
    : isMediumScreen
    ? { width: 200, height: 40 }
    : { width: 300, height: 60 };

  return (
    <Image
      src={logo}
      alt="CodexCloud Logo"
      width={logoSize.width}
      height={logoSize.height}
      priority
    />
  );
};

export default Logo;
