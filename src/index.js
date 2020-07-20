import React from "react";
import ReactDOM from "react-dom";
import LoginModal from "./LoginModal";
import "./stylesheet/global.css";
import "./stylesheet/login.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", user: "" };
  }

  render() {
    return (
      <div className="login-container">
        <div className="login">
          <LoginModal />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
