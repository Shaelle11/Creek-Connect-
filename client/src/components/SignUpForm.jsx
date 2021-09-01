import React, { Component } from "react";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phoneNumber: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    firsthandler = (event) => {
      this.setState({
        firstName: event.target.value,
      });
    };
    {
      lasthandler = (event) => {
        this.setState({
          lastName: event.target.value,
        });
      };
    }
    {
      passwordhandler = (event) => {
        this.setState({
          password: event.target.value,
        });
      };
    }
    {
      userhandler = (event) => {
        this.setState({
          userName: event.target.value,
        });
      };
    }
  }
}

export default SignUpForm;
