import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchResultsList } from "../components";
import { BaseLayout } from "../layout/BaseLayout";
import requests from "../requests";
import { iMovie } from "../types/types";
import "./SearchResults.scss";

export const SearchResults = () => {
  const { searchText } = useParams();
  const [movies, setMovies] = useState<iMovie[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchMoviesByName(searchText!));
      setMovies(request.data.results);
      return request;
    };

    window.scrollTo(0, 0);
    fetchData();
  }, [searchText]);

  return (
    <BaseLayout title={`Search results for: ${searchText}`}>
      <SearchResultsList movies={movies} />
    </BaseLayout>
  );
};
