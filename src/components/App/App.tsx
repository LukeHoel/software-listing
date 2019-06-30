import React from "react";
import "./App.css";
import { Navbar } from "../Navbar/Navbar";
import Menu from "../Menu/Menu";
import SearchResults from "../SearchResults/SearchResults";

interface AppState {
  menuOpen: boolean;
  searchResults: any[];
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { menuOpen: true, searchResults: [] };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  search(searchParams: any) {}

  render() {
    return (
      <div className="App">
        <Navbar />
        <Menu>
          <SearchResults />
        </Menu>
      </div>
    );
  }
}
export default App;
