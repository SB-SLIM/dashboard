import { Box, IconButton, useTheme } from "@mui/material";
import { Typography } from "../../ui-components";

import "./card.scss";

interface ICard {
  label: string;
  icon: React.ReactNode;
}

function Card({ label, icon }: ICard) {
  const theme = useTheme();
  return (
    <Box
      className="card bg--primary flex"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Typography color="white" variant="h4">
        {label}
      </Typography>
      <IconButton>{icon}</IconButton>
    </Box>
  );
}

export default Card;
