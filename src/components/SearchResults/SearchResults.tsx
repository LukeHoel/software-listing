import React from "react";
import "./SearchResults.css";
import { Card } from "../Card/Card";
import { SearchResultDef } from "../../models/SearchResultDef";
import { slideIn, enableScroll } from "../../utils/Animation";
import { connect } from "react-redux";
import { State } from "../../Store/State";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";
import { AvailablePlatforms } from "../AvailablePlatforms/AvailablePlatforms";

const SearchResult = (input: SearchResultDef, index: number) => (
  <Card class="SearchResult" style={slideIn(index)}>
    <div className="Header">
      <b>{input.name}</b>
    </div>
    <AvailablePlatforms platforms={input.platforms || []} />
  </Card>
);

const ResultPlaceholder = (loading: boolean) => (
  <div className="ResultPlaceholder">
    {loading ? <LoadingIndicator /> : "No Results"}
  </div>
);

// Handle animation for each sliding in on load with helpers
const SearchResultList = (props: any) => (
  <div
    className="SearchResultList"
    style={enableScroll(props.searchResults.length)}
  >
    {/* Results placeholder or loading symbol */}
    {props.searchResults.length === 0 ? ResultPlaceholder(props.loading) : ""}

    {props.searchResults.map((current: SearchResultDef, index: number) =>
      SearchResult(current, index)
    )}
  </div>
);

export default connect((state: State) => ({
  loading: state.loading,
  searchResults: state.searchResults
}))(SearchResultList);
