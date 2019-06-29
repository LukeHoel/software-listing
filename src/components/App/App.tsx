import React from "react";
import "./App.css";
import SoftwareList from "../Software/Software";
import software from "../../json/software.json";
import { Navbar, MenuButton } from "../Navbar/Navbar";
import { Menu } from "../Menu/Menu";

interface AppState {
  menuOpen: boolean;
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { menuOpen: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          {MenuButton(this.toggleMenu)}
          <span className="Title">Software Listing</span>
        </Navbar>
        <Menu menuOpen={this.state.menuOpen} menuItems={["All", "OS"]}>
          {SoftwareList(software)}
        </Menu>
      </div>
    );
  }
}
export default App;
