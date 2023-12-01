import { useParams } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import SingleItemHeader from "../components/SingeItemHeader/SingleItemHeader";
import { Box } from "@mui/material";

function ShowDetails() {

  const  id  = useParams()['id'].slice(1);
  const showById = `https://dolphin-app-pc6ii.ondigitalocean.app/article/${id}`;
  const apiData = useRequest(showById);

  return (
    <Box sx={{flexGrow: 1}}>
      {apiData && <SingleItemHeader {...apiData}></SingleItemHeader>}
    </Box>
  );
}

export default ShowDetails;
