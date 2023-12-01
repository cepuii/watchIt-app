import axios from "axios";
import { useState, useEffect } from "react";

function useRequest(url) {
  const [apiData, setApiData] = useState([]);
  console.log(apiData);
  useEffect(() => {
    async function makeRequest() {
      try {
        const response = await axios.get(url);
        setApiData(response.data);
      } catch (error) {
        console.log(`Can't fetch data from url: ${url} \n ${error}`);
      }
    }
    makeRequest();
  }, [url]);

  return apiData;
}

export default useRequest;