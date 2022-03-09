import React, { Component } from "react";
import "./App.css";
import BasicInfo from "./components/BasicInfo";
class App extends Component {
  constructor(props) {
    super();
    //Creating the state and assigning an array of objects inside
    this.state = {
      person: [
        {
          FN: "Brenden",
          LN: "Hampton",
          number: "704 - 201 - 1111",
        },
        {
          FN: "Bruce",
          LN: "Wayne",
          number: "704 - 202 - 2222",
        },
        {
          FN: "Selina",
          LN: "Kyle",
          number: "704 - 203 - 3333",
        },
        {
          FN: "Edward",
          LN: "Nigma",
          number: "704 - 204 - 4444",
        },
      ],
    };
  }
  //Rendering data in the component
  render() {
    return (
      <div className="App">
        <BasicInfo people={this.state.person} />
      </div>
    );
  }
}
export default App;
