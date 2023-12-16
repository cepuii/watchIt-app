import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from "@mui/icons-material/Share";
import ShowSlider from "../components/ShowSlider/ShowSlider";

const ActorDetails = () => {
  console.log("render page");
  const [apiData, setApiData] = useState(null);
  const actorId = useParams()["id"].slice(1);
  useEffect(() => {
    async function makeRequest() {
      try {
        const response = await axios.get(
          `https://dolphin-app-pc6ii.ondigitalocean.app/article/actor/${actorId}`
        );
        setApiData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (actorId) {
      makeRequest();
    }
  }, [actorId]);

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent={"space-around"}
      sx={{ margin: "20px" }}
    >
      <Grid item xs={3}>
        <img
          src={apiData?.image?.original}
          alt="Actor"
          width="220px"
          height="auto"
          style={{ margin: "30px" }}
        />
        <Typography variant="h4" component="h4">
          {"Personal info"}
        </Typography>
        <IconButton>
          <FacebookIcon></FacebookIcon>
        </IconButton>
        <IconButton>
          <TwitterIcon></TwitterIcon>
        </IconButton>
        <IconButton>
          <ShareIcon></ShareIcon>
        </IconButton>
        <Typography variant="h6" component="h4">
          {"Birthday"}
        </Typography>
        <Typography component="p">{apiData?.birthday}</Typography>
        <Typography variant="h6" component="h4">
          {"Country"}
        </Typography>
        <Typography component="p">{apiData?.country?.name}</Typography>
        <Typography variant="h6" component="h4">
          {"Gender"}
        </Typography>
        <Typography component="p">{apiData?.gender}</Typography>
      </Grid>
      <Grid item xs={9}>
        <Box>
          <Typography variant="h3" component="h2">
            {apiData?.name}
          </Typography>
          <Typography component="p">{apiData?.name}</Typography>
          <hr
            style={{
              height: "2px",
              width: "100%",
              border: "none",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <Typography variant="h5" component="h4" mb="20px">
            {"Acting in"}
          </Typography>
          <ShowSlider shows={apiData?.casts}></ShowSlider>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ActorDetails;
