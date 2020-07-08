
import React, { Component } from "react";
import axios from "axios";
import {  faMapMarkerAlt, faPhoneAlt, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsps} from "@fortawesome/free-brands-svg-icons"

import './contact.css'
const formGroupStyle = {
  paddingTop: "1rem",
  paddingBottom: "1rem"
};

const errorMessageStyle = {
  backgroundColor: "#FF6961",
  padding: "0.5rem"
};

const successMessageStyle = {
  backgroundColor: "#77dd77",
  padding: "0.5rem"
};

const ErrorMessage = ({ errorText }) => (
  <div style={errorMessageStyle}>
    <b>Error</b>: {errorText}
  </div>
);

const SuccessMessage = ({ successText }) => (
  <div style={successMessageStyle}>
    <b>Success</b>: {successText}
  </div>
);

const FormElement = ({ labelText, errorText, children }) => (
  <React.Fragment>
    <div style={formGroupStyle}>
      <div>{labelText}</div>
      <div>{children}</div>
    </div>
    {errorText ? <ErrorMessage errorText={errorText} /> : null}
  </React.Fragment>
);

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    submitting: false,
    btnText:'send mesage',
    fieldErrors: {},
    error: "",
    success: false
  };

  handleInputChange = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      fieldErrors: {},
      success: false
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitting: true, btnText:'...sending' });
    let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
    }

    const contactEndpoint =
      "https://5fs0uj97k4.execute-api.us-east-1.amazonaws.com/beta/contact";

    axios
      .post(contactEndpoint,data )
      .then(_ => {
        this.setState({
          success: true,
          message: ""
        });
      })
      .catch(err => {
        const responseData = err.response.data;
        if (
          "message" in responseData &&
          "field_errors" in responseData.message
        ) {
          const fieldErrors = responseData.message["field_errors"];
          this.setState({ fieldErrors });
        }
      })
      .finally(_ => this.setState({ submitting: false, btnText:'send message'
    ,name:"",email:'' }));
  };

  render() {
    const { submitting, fieldErrors, error, success } = this.state;
    const {
      name: nameError,
      email: emailError,
      message: messageError
    } = fieldErrors;

    return (
        <div className="container1">
            <div><h1 className="tittle">Contact us</h1></div>
        <div className="contact">
            <div className="form"style={{ padding: "2rem", maxWidth: "80%" }}>
        <h1 className="topsearch"> FILL THE CONTACT FORM </h1>
        <form onSubmit={this.handleSubmit}>
          <FormElement className="topinputs" errorText={nameError}>
            <input className="input"
              style={{ width: "100%"}}
              type="text"
              name="name"
              placeholder="Enter your name here"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            

          </FormElement>
          <FormElement>
          <input className="input"
              style={{ width: "100%" }}
              type="email"
              name="email"
              placeholder="Enter your email here"
              required
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </FormElement>
          <FormElement errorText={emailError}>
            <input className="input"
              style={{ width: "100%" }}
              type="text"
              name="subject"
             
              placeholder="subject"
              required
              value={this.state.subject}
              onChange={this.handleInputChange}
            />
          </FormElement>
          <FormElement labelText="Message" errorText={messageError}>
            <textarea className="textArea"
              style={{ width: "100%"}}
              rows="6"
              type="text"
              name="message"
              
              placeholder="Enter your message"
              //required
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </FormElement>

          {error ? <ErrorMessage errorText={error} /> : null}
          {success ? <SuccessMessage successText={"Message sent"} /> : null}

          <button
            style={{ marginTop: "2rem" }} className="btn bth-primary"
            type="submit"
            disabled={submitting}
          >
            {this.state.btnText}
          </button>
        </form>
      </div>
      <div className="headquaters">
          <h1 className='topsearch'>Our head quaters</h1>
          <div className="footer-center">

                    <div >
                    <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            color="skyblue"
                            size="2x"
                        />
                        <p><span>5th Floor</span> Mega Plaza, Oginga Odinga street</p>
                    </div>
                    <div>
                    <FontAwesomeIcon
                            icon={faUsps}
                            color="skyblue"
                            size="2x"
                        />
                        <p> P.O. Box 2224-40100, Kisumu</p>
                    </div>

                    <div>
                    <FontAwesomeIcon
                            icon={faPhoneAlt}
                            color="skyblue"
                            size="1px"
                        />
                        <p>+254796101010</p>
                    </div>

                    <div>
                    <FontAwesomeIcon
                            icon={faEnvelopeOpenText}
                            color="skyblue"
                            size="1x"
                        />
                        <p><a href="mailto:corporate@lakesacco.com">corporate@lakesacco.com</a></p>
                    </div>

                </div>
      </div>
        </div>
        </div>
        
      
    );
  }
}


