import React, { Component } from "react";
import ReactClipboard from "react-clipboardjs-copy";
import scrnshot1 from "./scrnshot-settings.webp";
import scrnshot2 from "./scrnshot-sig.webp";
import scrnshot3 from "./scrnshot-save.webp";
import outlook1 from './outlook-options.webp';
import outlook2 from './outlook-signature.webp';
import outlook3 from './outlook-new-sig.webp';
import outlook4 from './outlook-name-sig.webp';
import outlook5 from './outlook-type-sig.webp';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      phone: "",
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

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
  };

  showGmail = () => {
    this.setState({
      gmail: true,
      outlook: false
    })
  }

  showOutlook = () => {
    this.setState({
      gmail: false,
      outlook: true
    })
  }

  render() {
    const length = this.state.name.length;
    const size =
      length < 25 ? "font-regular" : length < 40 ? "smaller" : "smallest";
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
    const showGmailInstructions = this.state.gmail ? "gmail instructions" : "display-none";
    const showOutlookInstructions = this.state.outlook ? "outlook instructions" : "display-none";

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
                placeholder="(Example: 58-5551234):"
                value={this.state.number}
                onChange={e => this.handleChange(e)}
              />
            </label>
            <input type="submit" value="Submit" className="submit-btn" />
          </form>
        </div>

        {
          //* Begining of Presentational Container */
        }
        <div className={`${showCard} presentational-container`} id="copied">
          <table role="presentation">
            <tbody>
              <tr className="outer-row">
                <td
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                  valign="middle"
                  className="left-cell"
                >
                  <a
                    href="https://vayyar.com"
                    className="SocialIcon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Vayyar Logo"
                      src="https://vayyar.s3.eu-central-1.amazonaws.com/email/vayyar.logo.png"
                      className="img-logo"
                    ></img>
                  </a>
                  <div align="center">
                    <a
                      href="https://www.facebook.com/vayyarltd/"
                      className="SocialIcon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="facebook"
                        src="https://vayyar.s3.eu-central-1.amazonaws.com/email/facebook.png"
                        className="social-odd"
                      ></img>
                    </a>
                    <a
                      href="https://twitter.com/vayyarinc"
                      className="SocialIcon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="twitter"
                        src="https://vayyar.s3.eu-central-1.amazonaws.com/email/twitter.png"
                        className="social"
                      ></img>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/vayyar/"
                      className="SocialIcon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="linkedin"
                        src="https://vayyar.s3.eu-central-1.amazonaws.com/email/linkedin.png"
                        className="social"
                      ></img>
                    </a>
                    <a
                      href="https://www.instagram.com/vayyar_inc/"
                      className="SocialIcon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="instagram"
                        src="https://vayyar.s3.eu-central-1.amazonaws.com/email/instagram.png"
                        className="social"
                      ></img>
                    </a>
                  </div>
                </td>
                <td className="description-cell">
                  <table role="presentation">
                    <tbody>
                      <tr>
                        <td colSpan="2" className={`display-name ${size}`}>
                          {toTitleCase(this.state.name)}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="display-position">
                          {toTitleCase(this.state.position)}&nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td className="display-number">
                          {number.length > 7
                            ? "Mobile: +972-" + displayNumber
                            : ""}
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="CopyPane">
          <ReactClipboard
            target={".presentational-container"}
            selection={true}
            onSuccess={e => console.log(e)}
            onError={e => console.log(e)}
            className={`${showCard} submit-btn `}
          >
            <button>Copy to Clipboard</button>
          </ReactClipboard>
        </div>
        <div className="mail-btn-container">
          <div className={`${showCard} submit-btn gmail-btn`} onClick={() => {this.showGmail()}}>Show Gmail instructions</div>
          <div className={`${showCard} submit-btn outlook-btn`} onClick={() => {this.showOutlook()}}>Show Outlook instructions</div>
        </div>
        <div className={showGmailInstructions}>
          <h3>To use as your Gmail Signature:</h3>
          <ol>
            <li><p>Click the "Copy to clipboard" button.</p></li>
            <li>
              <p>Go to your Vayyar gmail account and click the Settings gear in
              your Gmail toolbar.</p>
            </li>
            <li>
              <p>
              Select Settings from the menu.
              </p>
              <img src={scrnshot1} alt="gmail settings" className="screenshot"/>
            </li>
            <li><p>Go to General</p></li>
            <li><p>Make sure the desired account is selected under Signature</p></li>
            <li>
            <p>Paste your signature into the signature box.</p>
              <img src={scrnshot2} alt="gmail signature" className="screenshot" />
            </li>
            <li>
            <p>Click Save Changes</p>
              <img src={scrnshot3} alt="gmail save" className="screenshot" />
            </li>
            <li>
              <p>
              Gmail will now insert the signature automatically when you compose
              a message. You can edit or remove it before clicking Send.
              </p>
            </li>
          </ol>
        </div>
        <div className={showOutlookInstructions}>
          <h3>To use as your Outlook Signature:</h3>
          <ol>
            <li><p>Open Outlook. In the ribbon, select File. In the left rail, select Options.</p>
            <img src={outlook1} alt="outlook options" className="screenshot"/></li>
            <li>
              <p>Go to your Vayyar outlook account and click the Settings gear in
              your Gmail toolbar.</p>
            </li>
            <li>
              <p>
              In the Outlook Options dialog box, select Mail. In the Compose messages section, select Signatures.
              </p>
              <img src={outlook2} alt="outlook signature" className="screenshot"/>
            </li>
            <li><p>In the Signatures and Stationery dialog box, if Outlook is set up with multiple email accounts, under Choose default signature, use the Email account dropdown menu to select your Vayyar account. Under Select signature to edit, select New.</p>
            <img src={outlook3} alt="outlook new signature" className="screenshot"/></li>
            <li><p>In the New Signature dialog box, type a name for your email signature. Select OK.</p>
            <img src={outlook4} alt="outlook, name your signature" className="screenshot"/></li>
            <li>
            <p>In the Signatures and Stationery dialog box, in the Edit signature field, paste your signature. Click OK.</p>
              <img src={outlook5} alt="outlook signature" className="screenshot" />
            </li>
            <li>
            <p>In the Outlook Options dialog box, select OK. Now, each time you start a new email, the signature will automatically appear.</p>
            </li>
            <li>
              <p>
              Gmail will now insert the signature automatically when you compose
              a message. You can edit or remove it before clicking Send.
              </p>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
