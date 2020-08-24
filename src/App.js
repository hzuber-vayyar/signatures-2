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
      countryCode: "+972",
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
            Fill in your information below
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
            <label htmlFor="phone" className="phone-label">
              <span>Phone Number:</span>
              <div className="number-wrapper">
                <select
                  id="countryCode"
                  name="countryCode"
                  className="input-field country"
                  onChange={e => this.handleChange(e)}
                  defaultValue="+972"
                >
                  <option value="+972">+972</option>
                  <option value="+1">+001</option>
                  <option value="+46">+046</option>
                </select>
                <input
                  type="text"
                  className="input-field phone"
                  id="phone"
                  placeholder="Example: 58-5551234"
                  value={this.state.number}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </label>
            <label htmlFor="email">
              <span>Email address:</span>
              <input
                type="text"
                className="input-field"
                id="email"
                placeholder="johnny.vayyaroni@vayyar.com"
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

       { /*<NewOutlook
          phone="+972-58-753-8448"
          name="Hannah Zuber"
          position="Front End Developer"
          email="hannah.zuber@vayyar.com"
        />*/}

        {
          //* Begining of Presentational Container */
        }
        {this.state.gmail && (
          <div className={showCard}>
            <Gmail
              phone={number.length > 7 ? this.state.countryCode + "-" + displayNumber : ""}
              name={toTitleCase(this.state.name)}
              position={this.state.position}
              email={this.state.email}
              number={this.state.countryCode + numberNoDashes}
            />
          </div>
        )}
        {this.state.outlook && (
          <div className={showCard}>
            <Outlook
              phone={number.length > 7 ? this.state.countryCode + "-" + displayNumber : ""}
              name={toTitleCase(this.state.name)}
              position={this.state.position}
              email={this.state.email}
              number={this.state.countryCode + numberNoDashes}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
