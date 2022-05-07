import { Link as RouterLink } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import { GradientBox, Typography } from "../../ui-components";
import "./notFound.scss";

function NotFound() {
  return (
    <div className="notfound">
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">UH OH! You{"'"} re lost.</Typography>
      <Typography variant="body1">
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </Typography>
      <GradientBox styles="mt-large">
        <MUILink
          variant="button"
          component={RouterLink}
          to="/dashboard"
          underline="hover"
        >
          HOME
        </MUILink>
      </GradientBox>
    </div>
  );
}

export default NotFound;
