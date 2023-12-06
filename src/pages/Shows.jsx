import { useDispatch, useSelector } from "react-redux";
import useRequest from "../hooks/useRequest";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SingleCard from "../components/SingleCard/SingeleCard";
import { GENRES } from "../constants/constants";
import { setGenre } from "../store/SearchSlice";

function Shows() {
  const genre = useSelector((state) => state.search.genre) ?? "Action";

  let url = `https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/${genre}`;

  const apiData = useRequest(url);
  const dispatch = useDispatch();
  const handleGenreChange = (e) => {
    dispatch(setGenre(e.target.value));
  };

  return (
    <Box sx={{ width: "95%", ml: "50px" }}>
      <h1>Show by genre: {genre} </h1>
      <FormControl sx={{ display: "block", m: 1, width: "200px" }}>
        <InputLabel id="select-label">Genre</InputLabel>
        <Select
          labelId="select-label"
          defaultValue={GENRES[0]}
          value={genre}
          label="Genre"
          onChange={handleGenreChange}
          sx={{width: "100%"}}
        >
          {GENRES.map((genre, index) => (
            <MenuItem key={index}  value={genre}>
              {genre}
            </MenuItem>
          ))}
          ;
        </Select>
      </FormControl>
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          margin: "20px 0",
          justifyContent: "space-around",
        }}
      >
        {apiData.map((cardInfo, index) => (
          <Grid item key={index}>
            <SingleCard {...cardInfo}></SingleCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Shows;
