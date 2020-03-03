import React from "react";

function OUTLOOK_CARD(props) {
  const { name, phone, position } = props;
  const length = name.length;
  const size =
    length < 25 ? "1.2em" : length < 40 ? "1em" : "0.8em";
    const positionSize = position.length < 25 ? "0.9em" : length < 40 ? "0.8em" : "0.7em"
  return (
    <>
      <div className={`presentational-container outlook`} id="copied">
        <table
          style={{
            fontSize: `11pt`,
            fontFamily: `Arial, sans-serif`,
            border: "none"
          }}
          cellPadding="0"
          cellSpacing="0"
          className="outer-table ng-scope"
        >
          <tbody>
            <tr>
              <td
                style={{ padding: `0px 0px 0px 10px`, align: `right` }}
                align="right"
              >
                <table
                  cellPadding="0"
                  cellSpacing="5"
                  valign="middle"
                  style={{
                    border: `1px black`,
                    borderStyle: `none solid none none`,
                    verticalAlign: `middle`,
                    paddingRight: `10px`
                  }}
                >
                  <tbody>
                    <tr
                      ng-if="showField('logo')"
                      width="125"
                      style={{
                        fontSize: `10pt`,
                        display: `block !important`,
                        fontFamily: `Arial, sans-serif`,
                        borderRight: `1px solid; border-right-color: #fb6303`,
                        width: `125px`,
                        verticalAlign: `top`
                      }}
                      valign="top"
                      rowSpan="6"
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
                          width="145"
                        ></img>
                      </a>
                    </tr>
                    <tr style={{height: `25px`}}>
                      <td
                        style={{
                          fontSize: `10pt`,
                          fontFamily: ` Arial, sans-serif`,
                          paddingBottom: `0px`,
                          paddingLeft: `10px`,
                          verticalAlign: `bottom`,
                          align: `right`,
                          textAlign: `right`,
                          width: `100px`
                        }}
                        valign="bottom"
                        align="right"
                        textAlign="right"
                        width="100"
                      >
                        <span
                          ng-if="showField('facebookURL')"
                          className="ng-scope"
                        >
                          <a
                            href="https://www.facebook.com/vayyarltd/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              alt="facebook"
                              ng-src="https://vayyar.s3.eu-central-1.amazonaws.com/email/facebook.png"
                              src="https://vayyar.s3.eu-central-1.amazonaws.com/email/facebook.png"
                              className="social-odd"
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
                        <span
                          ng-if="showField('twitterURL')"
                          className="ng-scope"
                        >
                          <a
                            href="https://twitter.com/vayyarinc"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              alt="twitter"
                              border="0"
                              width="23"
                              ng-src="https://vayyar.s3.eu-central-1.amazonaws.com/email/twitter.png"
                              src="https://vayyar.s3.eu-central-1.amazonaws.com/email/twitter.png"
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
                              ng-src="https://vayyar.s3.eu-central-1.amazonaws.com/email/instagram.png"
                              src="https://vayyar.s3.eu-central-1.amazonaws.com/email/instagram.png"
                              className="social"
                              style={{
                                border: `0`,
                                height: `23px`,
                                width: `23px`
                              }}
                            ></img>
                          </a>
                          &nbsp;
                        </span>
                        <span
                          ng-if="showField('linkedinURL')"
                          className="ng-scope"
                        >
                          <a
                            href="https://www.linkedin.com/company/vayyar/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              border="0"
                              width="23"
                              alt="linkedin"
                              ng-src="https://vayyar.s3.eu-central-1.amazonaws.com/email/linkedin.png"
                              src="https://vayyar.s3.eu-central-1.amazonaws.com/email/linkedin.png"
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
              </td>
              <td style={{ paddingLeft: `10px`, paddingRight: `20px` }}>
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  style={{ border: `none` }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          color: `#0079ac`,
                          fontFamily: `Arial, sans-serif`,
                          paddingBottom: `0px`,
                          paddingLeft: `10px`,
                          verticaAlign: `top`
                        }}
                        valign="top"
                      >
                        <span
                          style={{
                            fontSize: size,
                            fontFamily: `Arial, sans-serif`,
                            color: `#009ddd`,
                            fontWeight: `700`
                          }}
                          className="ng-binding"
                        >
                          {name}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: `#516670`,
                          fontFamily: `Arial, sans-serif`,
                          paddingBottom: `0px`,
                          paddingTop: `0px`,
                          paddingLeft: `10px`,
                          verticalAlign: `top`,
                          lineHeight: `17px`
                        }}
                        valign="top"
                      >
                        <span
                          className="ng-scope"
                          style={{
                            fontWeight: `600`,
                            fontSize: positionSize,
                            padding: `2px 0px`
                          }}
                        >
                          {position}
                          <br />
                        </span>
                        <span className="ng-scope">
                          <span style={{ color: `#fb6303` }}></span>
                          <span
                            style={{
                              fontSize: `12.5px`,
                              padding: `2px 0px 0px`
                            }}
                            className="ng-binding"
                          >
                            {phone}
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default OUTLOOK_CARD;
