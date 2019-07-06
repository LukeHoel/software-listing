import React from "react";
import { search } from "../../utils/Search";
import "./SearchMenu.css";
interface SearchMenuState {
  searchText: string;
}
export class SearchMenu extends React.Component<any, SearchMenuState> {
  constructor(props: any) {
    super(props);
    this.state = { searchText: "" };

    this.submit = this.submit.bind(this);
  }

  submit(event: any) {
    search(`search/${this.state.searchText}`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SearchMenu">
        <form onSubmit={this.submit}>
          <input
            type="text"
            value={this.state.searchText}
            onChange={e => this.setState({ searchText: e.target.value })}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
