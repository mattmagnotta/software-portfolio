import React from "react"
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_poolTGVx1e4GOLW728Hy6");

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      name:"",
      thanksName: "",
      show: false,
      renderThanks: false,
      open: true,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  render() {

    return (
      <>
        <div id="formDiv">
          <form
            color="secondary"
            id="contactForm"
            onSubmit={this.handleSubmit}
            autoComplete="false"
          >
            <TextField
              required={true}
              value={this.state.email}
              onChange={this.handleChangeEmail}
              id="standard-full-width"
              label="Your Email"
              placeholder="MarkBing@Gmail.com"
              fullWidth
              margin="normal"
              id="noBackground"
            />
            <br />
            <TextField
              required={true}
              value={this.state.name}
              onChange={this.handleChangeName}
              id="standard-full-width"
              label="Your Email"
              placeholder="Whatever you want me to call you!"
              fullWidth
              margin="normal"
              label="Your Name"
            />
            <br />
            <br />
            <TextField
              required={true}
              value={this.state.message}
              onChange={this.handleChangeMessage}
              id="outlined"
              multiline
              fullWidth
              label="Your Messsage"
              variant="outlined"
            />
            <div style={{display:'flex',justifyContent:"center"}}>
              <Button
                style={{
                  backgroundColor: "#70869E",
                  borderRadius: 5,
                  border: 0,
                  color: "white",
                  height: 48,
                  padding: "0 30px",
                  justifyContent:"center",
                  alignItems:"center",
                  width: "300px",
                  marginTop: "50px",
                }}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>

    </>
    );
  }
  handleClick() {
    console.log("handleClick just ran");
    this.setState({ redirect: true });
  }
  handleShow() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleChangeEmail(event) {
    event.preventDefault();
    this.setState({ email: event.target.value });

  }
  handleChangeName(event) {
    event.preventDefault();
    this.setState({ name: event.target.value, thanksName: event.target.value });

  }

  handleChangeMessage(event) {
    event.preventDefault();
    this.setState({ message: event.target.value });

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submited");
    const templateId = "mattymags_com";
    console.log(templateId);
    this.setState({open:true})
    console.log(this.state.open)

    this.sendFeedback(templateId, {
      userEmail: this.state.email,
      name: this.state.name,
      message:this.state.message,
    });
    this.setState({
      email: "",
      name: "",
      message: "",
      show: true,
    });
  }

  sendFeedback(templateId, variables) {
  emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        alert(`Thanks for reaching out ${this.state.thanksName}`)
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
}
export default ContactForm;
