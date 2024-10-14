import Image from "next/image";

import CC_Black_logo from '@/asset/CC_Black_logo.png'
import CC_White_logo from '@/asset/CC_White_logo.png'

export const CodexCloudLogoWhite = ({width, height}) => (
    <Image src={CC_White_logo} alt="CodexCloud" width={width} height={height} />
)

export const CodexCloudLogoBlack = ({width, height}) => (
    <Image src={CC_Black_logo} alt="CodexCloud" width={width} height={height} />
)