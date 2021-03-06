import React from "react";

function OUTLOOK_CARD(props) {
  const { name, position, phone, email } = props;
  const length = name.length;
  const size = length < 25 ? "110%" : length < 40 ? "100%" : "90%";
  const positionSize =
    position.length < 25 ? "80%" : length < 40 ? "75%" : "70%";
  return (
    <>
      <div className={`presentational-container card`}>
        <table
          border="0"
          cellSpacing="0"
          cellPadding="0"
          borderspacing="0"
          style={{
            borderCollapse: "collapse",
            border: "none",
            font: `18px "Century Gothic", sans-serif`,
            height: "115px",
          }}
        >
          <tbody>
            <tr>
              <td
                width="65"
                style={{
                  width: "58pt",
                  padding: "0in 5.4pt 20px 5.4pt",
                }}
              >
                <img
                  width="75"
                  height="90"
                  src="https://vayyar.s3.eu-central-1.amazonaws.com/email/v2/vayyar-logo.png"
                  alt="Vayyar Ltd"
                />
              </td>
              <td
                width="200"
                style={{
                  width: "220.0pt",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <table
                  border="0"
                  cellSpacing="0"
                  cellPadding="0"
                  borderspacing="0"
                  style={{
                    borderCollapse: "collapse",
                    border: "none",
                  }}
                >
                  <tbody>
                    <tr
                      height="13pt"
                      style={{
                        fontSize: size,
                        color: "#009DDD",
                        fontWeight: "900",
                      }}
                    >
                      <td
                        style={{
                          padding: "5px 0 0",
                          fontFamily: "Century Gothic",
                        }}
                      >
                        {name}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: positionSize,
                          color: "#7d7c7c",
                          paddingBottom: "5px",
                          fontWeight: "bolder",
                          fontFamily: "Century Gothic",
                        }}
                      >
                        {position}
                      </td>
                    </tr>
                    {phone.length > 1 && (
                      <tr
                        height="12pt"
                        style={{
                          fontSize: "70%",
                          color: "#7d7c7c",
                          textDecoration: "none",
                          fontFamily: "Century Gothic",
                        }}
                      >
                        <td>
                          <b>M</b>&nbsp;&nbsp;
                          <a
                            href={`tel:${phone}`}
                            style={{ color: "#7d7c7c", textDecoration: "none" }}
                          >
                            <span
                              style={{
                                color: "#7d7c7c",
                                textDecoration: "none",
                              }}
                            >
                              {phone}
                            </span>
                          </a>
                        </td>
                      </tr>
                    )}
                    {email.length > 1 && (
                      <tr
                        height="12pt"
                        style={{
                          fontSize: "70%",
                          color: "#7d7c7c",
                          textDecoration: "none",
                        }}
                      >
                        <td style={{
                          fontFamily: "Century Gothic"}}>
                          <b>E</b> &nbsp;&nbsp;
                          <a
                            href={`mailto:${email}`}
                            style={{ color: "#7d7c7c", textDecoration: "none" }}
                          >
                            <span
                              style={{
                                color: "#7d7c7c",
                                textDecoration: "none",
                              }}
                            >
                              {email}
                            </span>
                          </a>
                        </td>
                      </tr>
                    )}
                    <tr height="13pt">
                      <td style={{ padding: "5pt 0 2pt",
                          fontFamily: "Century Gothic" }}>
                        <a
                          href="https://www.facebook.com/vayyarltd"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline",
                          }}
                        >
                          <img
                            width="19"
                            height="19"
                            style={{
                              display: "inline",
                              borderRadius: "5px",
                            }}
                            id="m_8827033741276546469Picture_x0020_114"
                            src="https://vayyar.s3.eu-central-1.amazonaws.com/email/v2/fb-icon.png"
                            alt="Title: Facebook  - Description: Facebook icon"
                            data-image-whitelisted=""
                          />
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="https://www.instagram.com/vayyar_inc"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline",
                          }}
                        >
                          <img
                            width="19"
                            height="19"
                            style={{
                              display: "inline",
                              borderRadius: "5px",
                            }}
                            id="m_8827033741276546469Picture_x0020_115"
                            src="https://vayyar.s3.eu-central-1.amazonaws.com/email/v2/insta-icon.png"
                            alt="Title: instagram - Description: instagram icon"
                            data-image-whitelisted=""
                          />
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="https://twitter.com/vayyarinc"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline",
                          }}
                        >
                          <img
                            width="19"
                            height="19"
                            style={{
                              display: "inline",
                              borderRadius: "5px",
                            }}
                            id="m_8827033741276546469Picture_x0020_117"
                            src="https://vayyar.s3.eu-central-1.amazonaws.com/email/v2/twitter-icon.png"
                            alt="Title: Twitter - Description: twitter icon"
                            data-image-whitelisted=""
                          />
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="https://www.linkedin.com/company/vayyar"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline",
                          }}
                        >
                          <img
                            width="19"
                            height="19"
                            style={{
                              display: "inline",
                              borderRadius: "5px",
                            }}
                            id="m_8827033741276546469Picture_x0020_117"
                            src="https://vayyar.s3.eu-central-1.amazonaws.com/email/v2/linkedin-icon.png"
                            alt="Title: Twitter - Description: twitter icon"
                            data-image-whitelisted=""
                          />
                        </a>
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
