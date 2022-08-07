import { useParams } from "react-router-dom";
import { SearchResultsList } from "../components/SearchResultsList/SearchResultsList";
import { BaseLayout } from "../layout/BaseLayout";
import "./SearchResults.scss";

export const SearchResults = () => {
  const { searchText } = useParams();

  return (
    <BaseLayout title={`Search results for: ${searchText}`}>
      <SearchResultsList searchText={searchText} />
    </BaseLayout>
  );
};
