import React from "react";
import FormRow from "./FormRow";
import ButtonComponent from "./ButtonComponent";

class LoginModal extends React.Component {
  state = {
    email: "",
    password: "",
  };

 

  login = async () => {
    try {
      const params = {
        email: this.state.email,
        password: this.state.password,
      };
      let response = await fetch("http://8f0fb1b0fdef.ngrok.io/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      let responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    return (
      <div className="wrapper-login">
        <form onSubmit={(event) => event.preventDefault()}>
          <FormRow
            onChange={(event) => this.setState({ email: event.target.value })}
            label="Email"
            placeholder="Enter mail here"
          />
          <FormRow
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
            label="Password"
            placeholder="Enter password here"
          />
          <ButtonComponent
            onclick={this.login}
            buttonText="Login"
            btnClass="btn-primary"
          />
        </form>
      </div>
    );
  }
}

export default LoginModal;
