"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import { CodexCloudLogoWhite } from "@/components/images";

const Logo = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down(426));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between(427, 1024));

  const logoSize = isSmallScreen
    ? { width: 150, height: 32 }
    : isMediumScreen
    ? { width: 200, height: 40 }
    : { width: 300, height: 60 };

  return <CodexCloudLogoWhite width={logoSize.width} height={logoSize.height} />;
};

export default Logo;
