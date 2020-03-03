import React, { Component } from "react";
import Gmail from "./gmail-sig";
import Outlook from "./outlook-sig";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      phone: "",
      email: "",
      submitted: false,
      gmail: false,
      outlook: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  showGmail = () => {
    this.setState({
      submitted: true,
      gmail: true,
      outlook: false
    });
    console.log(this.state);
  };

  showOutlook = () => {
    this.setState({
      submitted: true,
      gmail: false,
      outlook: true
    });
    console.log(this.state);
  };

  render() {
    const showCard = this.state.submitted ? "display" : "display-none";

    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }

    const number =
      this.state.phone[0] === "0"
        ? this.state.phone.slice(1)
        : this.state.phone;

    const numberNoDashes = number.replace(/-/g, "");

    const displayNumber =
      numberNoDashes.slice(0, 2) +
      "-" +
      numberNoDashes.slice(2, 5) +
      "-" +
      numberNoDashes.slice(5);

    return (
      <div className="App">
        <header className="App-header">
          Vayyar Imaging LTD Signature Maker
        </header>

        {
          //* Begining of form *//
        }
        <div className="form-style-2">
          <div className="form-style-2-heading">
            Fill in your information below, and click "Submit"
          </div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="name">
              <span>Name:</span>
              <input
                type="text"
                className="input-field"
                id="name"
                placeholder="Johnny Vayyaroni"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              />
            </label>
            <label htmlFor="position">
              <span>Position:</span>

              <input
                type="text"
                className="input-field"
                id="position"
                placeholder="VP Of Magic"
                value={this.state.position}
                onChange={e => this.handleChange(e)}
              />
            </label>
            <label htmlFor="phone">
              <span>Phone Number:</span>
              <input
                type="text"
                className="input-field"
                id="phone"
                placeholder="Example: 58-5551234"
                value={this.state.number}
                onChange={e => this.handleChange(e)}
              />
            </label>
            <label htmlFor="email">
              <span>Email address:</span>
              <input
                type="text"
                className="input-field"
                id="email"
                placeholder="johnny.vayyaroni@vayyar.com:"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />
            </label>
            <div className="submit-btn-container">
              <div
                className={` submit-btn gmail-btn`}
                onClick={() => {
                  this.showGmail();
                }}
              >
                Gmail
              </div>
              <div
                className={` submit-btn outlook-btn`}
                onClick={() => {
                  this.showOutlook();
                }}
              >
                Outlook
              </div>
            </div>
          </form>
        </div>

        {
          //* Begining of Presentational Container */
        }
        {this.state.gmail && (
          <div className={showCard}>
            <Gmail
              phone={number.length > 7 ? "M: +972-" + displayNumber : ""}
              name={toTitleCase(this.state.name)}
              position={toTitleCase(this.state.position)}
              email={this.state.email}
            />
          </div>
        )}
        {this.state.outlook && (
          <div className={showCard}>
            <Outlook
              phone={number.length > 7 ? "M: +972-" + displayNumber : ""}
              name={toTitleCase(this.state.name)}
              position={toTitleCase(this.state.position)}
              email={this.state.email}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
