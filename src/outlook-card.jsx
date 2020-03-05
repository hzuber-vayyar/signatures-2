import React from "react";
const phoneIcon = require("./phone-icon.png");
const mailIcon = require("./mail-icon.png");
const fbIcon = require("./fb-icon.png");
const twitterIcon = require("./twitter-icon.png");
const instaIcon = require("./insta-icon.png");
const linkedinIcon = require("./linkedin-icon.png");

function OUTLOOK_CARD(props) {
  const { name, position, phone, email, number } = props;
  const length = name.length;
  const size = length < 25 ? "1.2em" : length < 40 ? "1em" : "0.8em";
  const positionSize =
    position.length < 25 ? "0.9em" : length < 40 ? "0.8em" : "0.7em";
  return (
    <>
      <div className={`presentational-container outlook`} id="copied">
        <table
          border="0"
          cellSpacing="0"
          cellPadding="0"
          style={{
            marginLeft: "9.0pt",
            borderCollapse: "collapse",
            border: "none"
          }}
          className="outer-table ng-scope"
        >
          <tbody>
            <tr style={{ height: "26.5pt" }}>
              <td
                width="227"
                colSpan="4"
                valign="top"
                style={{
                  width: "170.0pt",
                  padding: "0in 5.4pt 0in 5.4pt",
                  height: "26.5pt"
                }}
              >
                <p
                  className="MsoNormal"
                  style={{ marginBottom: ".0001pt", lineHeight: "normal" }}
                >
                  <img
                    width="121"
                    height="31"
                    style={{ width: "1.2604in", height: ".3229in" }}
                    id="m_6251417239957791421Picture_x0020_14"
                    src="https://mcusercontent.com/6c9953ed3ea0bcb3d8447fc37/images/35851a83-7201-4b04-a623-aa959641ac10.png"
                    alt="Vayyar Logo"
                    data-image-whitelisted=""
                    className="CToWUd"
                  />
                  <u></u>
                  <u></u>
                </p>
              </td>
            </tr>
            <tr style={{ height: "17pt" }}>
              <td
                width="227"
                colSpan="4"
                valign="top"
                style={{ width: "170.0pt", padding: "0in 3pt", height: "17pt" }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: ".0001pt",
                    lineHeight: "0px",
                    marginLeft: `6px`
                  }}
                >
                  <b>
                    <span style={{ fontSize: size, color: "#00b0f0" }}>
                      {name}
                      <u></u>
                      <u></u>
                    </span>
                  </b>
                </p>
              </td>
            </tr>
            <tr style={{ height: "17.5pt" }}>
              <td
                width="227"
                colSpan="4"
                valign="top"
                style={{
                  width: "170.0pt",
                  padding: "0in 3pt",
                  height: "17.5pt",
                  marginBlockEnd: "3px"
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: ".0001pt",
                    lineHeight: "0px",
                    marginLeft: `6px`
                  }}
                >
                  <span
                    style={{
                      fontSize: positionSize,
                      color: "#767171",
                      fontWeight: "600"
                    }}
                  >
                    {position}
                    <u></u>
                    <u></u>
                  </span>
                </p>
              </td>
            </tr>
            <tr style={{ height: "0pt" }} height="0px">
              <td
                colSpan="4"
                valign="top"
                height="0px"
                style={{
                  width: "170.0pt",
                  border: "none",
                  borderBottom: "solid #00b0f0 1.0pt",
                  padding: "0px",
                  height: "0pt"
                }}
              >
                <p
                  className="MsoNormal"
                  lineHeight="0px"
                  style={{
                    marginBottom: ".0001pt",
                    lineHeight: "0px",
                    marginBlockStart: `0em`,
                    marginBlockEnd: `0em`
                  }}
                >
                  <span style={{ fontSize: "0pt", color: "#767171" }}>
                    <u></u>&nbsp;<u></u>
                  </span>
                </p>
              </td>
            </tr>
            <tr style={{ height: "0pt" }} height="0px">
              <td
                width="227"
                colSpan="4"
                valign="top"
                height="0px"
                style={{
                  width: "170.0pt",
                  border: "none",
                  padding: "0in 2pt",
                  height: "0pt"
                }}
              >
                <p
                  className="MsoNormal"
                  lineHeight="0px"
                  style={{
                    marginBottom: ".0001pt",
                    lineHeight: "0px",
                    marginBlockStart: `0em`,
                    marginBlockEnd: `0em`
                  }}
                >
                  <span style={{ fontSize: "2.0pt", color: "#767171" }}>
                    <u></u>&nbsp;<u></u>
                  </span>
                </p>
              </td>
            </tr>
            {phone.length > 1 && (
              <tr style={{ height: "18.4pt" }}>
                <td
                  width="28"
                  valign="top"
                  style={{ padding: `0pt`, height: "18.4pt" }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginBottom: ".0001pt",
                      lineHeight: "normal",
                      marginBlockStart: `0em`,
                      marginLeft: `6px`
                    }}
                  >
                    <span style={{ fontSize: "12.0pt" }}>
                      <img
                        alt="phone number"
                        width="19"
                        height="19"
                        style={{ width: ".1979in", height: ".1979in" }}
                        id="m_6251417239957791421Picture_x0020_13"
                        src={phoneIcon}
                        data-image-whitelisted=""
                        className="CToWUd"
                      />
                    </span>
                    <span style={{ fontSize: "12.0pt" }}>
                      <u></u>
                      <u></u>
                    </span>
                  </p>
                </td>
                <td
                  width="199"
                  colSpan="3"
                  valign="top"
                  style={{
                    width: "149.05pt",
                    padding: `0pt`,
                    height: "18.4pt"
                  }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginBottom: ".0001pt",
                      lineHeight: "normal",
                      marginBlockStart: `0em`
                    }}
                  >
                    <span style={{ fontSize: "12.5px" }}>
                      <a
                        href={number}
                        style={{ color: "#222222", textDecoration: "none" }}
                      >
                        {phone}
                      </a>
                      <u></u>
                      <u></u>
                    </span>
                  </p>
                </td>
              </tr>
            )}

            {email.length > 1 && (
              <tr style={{ height: "17.5pt" }}>
                <td
                  width="28"
                  valign="top"
                  style={{
                    width: "20.95pt",
                    padding: `0pt`,
                    height: "17.5pt",
                    verticalAlign: "inherit"
                  }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginBottom: ".0001pt",
                      lineHeight: "normal",
                      marginBlockStart: `0px`,
                      marginLeft: `6px`
                    }}
                  >
                    <img
                      alt="Email address"
                      width="19"
                      height="19"
                      style={{ width: ".1979in", height: ".1979in" }}
                      id="m_6251417239957791421Picture_x0020_12"
                      src={mailIcon}
                      data-image-whitelisted=""
                      className="CToWUd"
                    />
                    <u></u>
                    <u></u>
                  </p>
                </td>
                <td
                  width="199"
                  colSpan="3"
                  valign="top"
                  style={{
                    width: "149.05pt",
                    padding: "0in",
                    height: "17.5pt"
                  }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginBottom: ".0001pt",
                      lineHeight: "normal",
                      marginBlockStart: `0em`
                    }}
                  >
                    <span style={{ fontSize: "12.5px" }}>
                      <a
                        href="mailto:hannah.zuber@vayyar.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#222222", textDecoration: "none" }}
                      >
                        {email}
                      </a>
                      <u></u>
                      <u></u>
                    </span>
                  </p>
                </td>
              </tr>
            )}

            <tr style={{ height: "13.0pt" }}>
              <td
                width="22px"
                valign="top"
                style={{ width: "22px", padding: `0px`, height: "13.0pt" }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: ".0001pt",
                    lineHeight: "normal",
                    marginBlockStart: `4px`,
                    marginLeft: `6px`,
                    marginBlockEnd: `1em`
                  }}
                >
                  <img
                    alt="Facebook"
                    width="19"
                    height="19"
                    style={{ width: ".1979in", height: ".1979in" }}
                    id="m_6251417239957791421Picture_x0020_11"
                    src={fbIcon}
                    data-image-whitelisted=""
                    className="CToWUd"
                  />
                  <u></u>
                  <u></u>
                </p>
              </td>

              <td
                width="22px"
                valign="top"
                style={{ width: "22px", padding: `0px`, height: "13.0pt" }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: ".0001pt",
                    lineHeight: "normal",
                    marginBlockStart: `4px`,
                    marginBlockEnd: `1em`
                  }}
                >
                  <img
                    alt="Twitter"
                    width="19"
                    height="19"
                    style={{ width: ".1979in", height: ".1979in" }}
                    id="m_6251417239957791421Picture_x0020_10"
                    src={twitterIcon}
                    data-image-whitelisted=""
                    className="CToWUd"
                  />
                  <u></u>
                  <u></u>
                </p>
              </td>
              <td
                width="22px"
                valign="top"
                style={{ width: "22px", padding: `0px`, height: "13.0pt" }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: ".0001pt",
                    lineHeight: "normal",
                    marginBlockStart: `4px`,
                    marginBlockEnd: `1em`
                  }}
                >
                  <img
                    alt="Instagram"
                    width="19"
                    height="19"
                    style={{ width: ".1979in", height: ".1979in" }}
                    id="m_6251417239957791421Picture_x0020_9"
                    src={instaIcon}
                    data-image-whitelisted=""
                    className="CToWUd"
                  />
                  <u></u>
                  <u></u>
                </p>
              </td>
              <td valign="top" style={{ height: "13.0pt", padding: `0px` }}>
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: ".0001pt",
                    lineHeight: "normal",
                    marginBlockStart: `4px`,
                    marginBlockEnd: `1em`
                  }}
                >
                  <img
                    alt="LinkedIn"
                    width="19"
                    height="19"
                    style={{ width: ".1979in", height: ".1979in" }}
                    id="m_6251417239957791421Picture_x0020_8"
                    src={linkedinIcon}
                    data-image-whitelisted=""
                    className="CToWUd"
                  />
                  <u></u>
                  <u></u>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default OUTLOOK_CARD;
