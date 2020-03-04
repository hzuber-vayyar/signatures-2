import React from "react";
const phoneIcon = require("./phone-icon.png");
const mailIcon = require("./mail-icon.png");
const fbIcon = require("./fb-icon.png");
const twitterIcon = require("./twitter-icon.png");
const instaIcon = require("./insta-icon.png");
const linkedinIcon = require("./linkedin-icon.png");


function OUTLOOK_CARD(props) {
  const { name, position, phone, email } = props;
  const length = name.length;
  const size = length < 25 ? "1.2em" : length < 40 ? "1em" : "0.8em";
  const positionSize =
    position.length < 25 ? "0.9em" : length < 40 ? "0.8em" : "0.7em";
  return (
    <>
      <div className={`presentational-container outlook`} id="copied">
        <table
          style={{
            fontSize: `11pt`,
            fontFamily: `Arial, sans-serif`,
            border: "none",
            padding: `10px`
          }}
          cellPadding="0"
          cellSpacing="0"
          className="outer-table ng-scope"
        >
          <tbody>
            <tr>
              <td
                style={{
                  fontSize: `10pt`,
                  display: `block !important`,
                  fontFamily: `Arial, sans-serif`,
                  verticalAlign: `top`
                }}
                valign="top"
                className="ng-scope"
              >
                <a
                  href="https://vayyar.com"
                  className="SocialIcon ng-scope"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Vayyar Logo"
                    src="https://vayyar.s3.eu-central-1.amazonaws.com/email/vayyar.logo.png"
                    width="110"
                  ></img>
                </a>
              </td>
            </tr>

            <tr>
              <td
                style={{
                  color: `#0079ac`,
                  fontFamily: `Arial, sans-serif`,
                  padding: `5px 0px`,
                  verticaAlign: `top`
                }}
                valign="top"
              >
                <span
                  style={{
                    fontSize: size,
                    fontFamily: `Arial, sans-serif`,
                    color: `#00ADEE`,
                    fontWeight: `700`
                  }}
                  className="ng-binding"
                >
                  {name}
                </span>
                <br />
                <span
                  className="ng-scope"
                  style={{
                    fontWeight: `600`,
                    fontSize: positionSize,
                    padding: `2px 0px`,
                    color: `#516670`
                  }}
                >
                  {position}
                  <br />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <hr
                  style={{
                    width: `100px`,
                    backgroundColor: `#009ddd`,
                    height: `1px`,
                    border: `none`,
                    marginInlineStart: `unset`,
                    marginBlockStart: `0px`
                  }}
                />
              </td>
            </tr>

            {phone.length > 1 && (
              <tr style={{ margin: `5px 0px`, height: `25px` }}>
              <td>
                <span
                  className="ng-scope"
                  style={{
                    fontSize: `12.5px`,
                    verticleAlign: `bottom`
                  }}
                  valign="bottom"
                >
                  <img
                    alt="phone"
                    ng-src={phoneIcon}
                    src={phoneIcon}
                    border="0"
                    width="19"
                    valign="bottom"
                    style={{
                      border: `0`,
                      height: `19px`,
                      width: `19px`,
                      verticaAlign: `bottom`
                    }}
                  />
                </span>
                &nbsp;
                <span
                  style={{
                    fontSize: `12.5px`,
                    verticleAlign: `top`,
                    paddingLeft: `5px`
                  }}
                  className="ng-binding"
                  valign="top"
                >
                  {phone}
                </span>
              </td>
            </tr>
            )}

            {email.length > 1 && (
              <tr style={{ margin: `5px 0px`, height: `25px` }}>
                <td valign="middle">
                  <span
                    className="ng-scope"
                    style={{
                      fontSize: `12.5px`,
                      verticleAlign: `bottom`
                    }}
                    valign="bottom"
                  >
                    <img
                      alt="email"
                      ng-src={mailIcon}
                      src={mailIcon}
                      border="0"
                      width="19"
                      valign="bottom"
                      style={{
                        border: `0`,
                        height: `19px`,
                        width: `19px`,
                        verticaAlign: `bottom`
                      }}
                    />
                  </span>
                  &nbsp;
                  <span
                    style={{
                      fontSize: `12.5px`,
                      verticleAlign: `top`,
                      paddingLeft: `5px`
                    }}
                    className="ng-binding"
                    valign="top"
                  >
                    {email}
                  </span>
                </td>
              </tr>
            )}

            <tr style={{ height: `25px` }}>
              <td
                style={{
                  fontSize: `10pt`,
                  fontFamily: ` Arial, sans-serif`,
                  paddingBottom: `0px`,
                  paddingTop: `5px`,
                  verticalAlign: `bottom`,
                  width: `100px`
                }}
                valign="bottom"
                width="100"
              >
                <span className="ng-scope">
                  <a
                    href="https://www.facebook.com/vayyarltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="facebook"
                      ng-src={fbIcon}
                      src={fbIcon}
                      border="0"
                      width="23"
                      style={{
                        border: `0`,
                        height: `23px`,
                        width: `23px`
                      }}
                    />
                  </a>
                  &nbsp;
                </span>
                <span ng-if="showField('twitterURL')" className="ng-scope">
                  <a
                    href="https://twitter.com/vayyarinc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="twitter"
                      border="0"
                      width="23"
                      ng-src={twitterIcon}
                      src={twitterIcon}
                      style={{
                        border: `0`,
                        height: `23px`,
                        width: `23px`
                      }}
                    />
                  </a>
                  &nbsp;
                </span>
                <span className="ng-scope">
                  <a
                    href="https://www.instagram.com/vayyar_inc/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      border="0"
                      width="23"
                      alt="instagram"
                      ng-src={instaIcon}
                      src={instaIcon}
                      style={{
                        border: `0`,
                        height: `23px`,
                        width: `23px`
                      }}
                    ></img>
                  </a>
                  &nbsp;
                </span>
                <span ng-if="showField('linkedinURL')" className="ng-scope">
                  <a
                    href="https://www.linkedin.com/company/vayyar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      border="0"
                      width="23"
                      alt="linkedin"
                      ng-src={linkedinIcon}
                      src={linkedinIcon}
                      style={{
                        border: `0`,
                        height: `23px`,
                        width: `23px`
                      }}
                    />
                  </a>
                  &nbsp;
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default OUTLOOK_CARD;
