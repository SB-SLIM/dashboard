import React from "react";
import { Avatar as MuiAvatar, AvatarProps } from "@mui/material";
import DefaultAvatar from "../../../assets/images/img-default-avatar.webp";

interface IAvatarSize {
  size?: "small" | "medium" | "large";
}
type TAvatar = AvatarProps & IAvatarSize;

const sizes = {
  small: { width: 25, height: 25 },
  medium: { width: 56, height: 56 },
  large: { width: 65, height: 65 },
};

function Avatar({ alt, src = DefaultAvatar, size = "medium" }: TAvatar) {
  return (
    <>
      <MuiAvatar
        alt={alt}
        src={src}
        sx={sizes[size]}
        style={{ display: "inline-block" }}
      />
    </>
  );
}

export default Avatar;
