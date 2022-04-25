import "./location.scss";
import Typography from "../../../ui-components/Typography/index";
import { locationData } from "../../../Constants/dataConfig";
import { Img } from "../../../ui-components";
import img from "../../../../assets/images/img-california.jpg";
import { Badge } from "@mui/material";

function Location() {
  console.log(img);
  return (
    <>
      <div className="location_header boxHeader">
        <Typography variant="h6" className="text-capitalize">
          location
        </Typography>
        <Badge badgeContent={locationData.length} color="secondary" />
      </div>
      <div className="location_body flex">
        {locationData.map((item, index) => {
          return <Img key={index} {...item} />;
        })}
      </div>
    </>
  );
}

export default Location;
