import React from "react";
import { SearchResultDef } from "../../models/SearchResultDef";
import { AvailablePlatforms } from "../AvailablePlatforms/AvailablePlatforms";
export const SearchResultDetail = (input: SearchResultDef) => (
  <div>
    <b>{input.name}</b>
    <AvailablePlatforms platforms={input.platforms} />
  </div>
);
