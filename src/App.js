import React, { Component } from 'react';
import ReactClipboard from 'react-clipboardjs-copy'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      phone: "",
      submitted: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true })

  }

  render() {
    const length = this.state.name.length
    const weight = length < 20 ? "weight-regular" : "lighter"
    const size = length < 25 ? "font-regular" : length < 40 ? "smaller" : "smallest"
    const showCard = this.state.submitted ? "display" : "display-none"
    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
    return (

      <div className="App">
        <header className="App-header">
          Vayyar Imaging LTD Signature Maker
        </header>

        {//* Begining of form *// 
        }
        <div class="form-style-2">
          <div class="form-style-2-heading">Fill all information below, and click "Submit"</div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label for="name"><span>Name</span>
              <input type="text" className="input-field" id="name" placeholder="Johnny Vayyaroni" value={this.state.name} onChange={(e) => this.handleChange(e)} />
            </label>
            <label for="position"><span>Position:</span>

              <input type="text" className="input-field" id="position" placeholder="VP Of Magic" value={this.state.position} onChange={(e) => this.handleChange(e)} />
            </label>
            <label for="phone">
              <span>Phone Number </span>
              <input type="text" className="input-field" id="phone" placeholder="(Example: 58-5551234):" value={this.state.number} onChange={(e) => this.handleChange(e)} />
            </label>
            <input type="submit" value="Submit" className="submit-btn" />
          </form>
        </div>

        {//* Begining of Presentational Container */
        }
        <div className={`${showCard} presentational-container`} id="copied">
          <table role="presentation">
            <tbody>
              <tr className="outer-row">
                <td cellPadding="0" cellSpacing="0" border="0" valign="middle" className="left-cell">
                  <a href="https://vayyar.com" className="SocialIcon" target="_blank" rel="noopener noreferrer">
                    <img alt="Vayyar Logo" src="https://vayyar.s3.eu-central-1.amazonaws.com/email/vayyar.logo.png" className="img-logo"></img>
                  </a>
                  <div align="center">
                    <a href="https://www.facebook.com/vayyarltd/" className="SocialIcon" target="_blank" rel="noopener noreferrer" >
                      <img alt="facebook" src="https://vayyar.s3.eu-central-1.amazonaws.com/email/facebook.png" className="social-odd"></img>
                    </a>
                    <a href="https://twitter.com/vayyarinc" className="SocialIcon" target="_blank" rel="noopener noreferrer" >
                      <img alt="twitter" src="https://vayyar.s3.eu-central-1.amazonaws.com/email/twitter.png" className="social"></img>
                    </a>
                    <a href="https://www.linkedin.com/company/vayyar/" className="SocialIcon" target="_blank" rel="noopener noreferrer">
                      <img alt="linkedin" src="https://vayyar.s3.eu-central-1.amazonaws.com/email/linkedin.png" className="social"></img>
                    </a>
                    <a href="https://www.instagram.com/vayyar_inc/" className="SocialIcon" target="_blank" rel="noopener noreferrer">
                      <img alt="instagram" src="https://vayyar.s3.eu-central-1.amazonaws.com/email/instagram.png" className="social"></img>
                    </a>
                  </div>
                </td>
                <td className="description-cell">
                  <table role="presentation">
                    <tbody>
                      <tr>
                        <td colSpan="2" className={`display-name ${weight} ${size}`} >
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
                          {this.state.phone.length > 7 ? "Mobile: +972-" + this.state.phone : ""}&nbsp;
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
            target={'.presentational-container'}
            selection={true}
            onSuccess={(e) => console.log(e)}
            onError={(e) => console.log(e)}
            className={`${showCard} submit-btn `}
          >
            <button>Copy to Clipboard</button>
          </ReactClipboard>

        </div >
      </div>
    );
  }
}

export default App;
