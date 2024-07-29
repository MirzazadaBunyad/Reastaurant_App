import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMessages, setErrMessages] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Istanbul",
        },
      });
      setResults(response.data.businesses);
      setErrMessages("");
    } catch (error) {
      setErrMessages("Connection failed");
    }
  };
  useEffect(() => {
    searchApi("Toast");
  }, []);

  return [searchApi, results, errMessages];
};
