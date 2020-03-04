import React from "react";

function GMAIL_CARD(props) {
  const { name, position, phone } = props;
  const length = name.length;
  const size = length < 25 ? "1.2em" : length < 40 ? "1em" : "0.8em";
  const positionSize =
    position.length < 25 ? "0.9em" : length < 40 ? "0.8em" : "0.7em";
  return (
    <>
      <div className={`presentational-container outlook`} id="copied">
        <table
          border="0"
          style={{ border: "0px" }}
          cellspacing="0"
          cellpadding="0"
          bgcolor="#ffffff"
          width="100%"
        >
          <tr>
            <td align="left" valign="top" style={{ paddingTop: "15px" }}>
              <table
                align="left"
                border="0px"
                cellSpacing="0"
                cellPadding="0"
                style={{ border: "0px" }}
              >
                <tr>
                  <td
                    valign="top"
                    align="center"
                    width="122"
                    style={{
                      width: "122px",
                      fontSize: "0px",
                      lineHeight: "0px",
                      margin: "0",
                      padding: "0",
                      borderCollapse: "collapse",
                      msoLineHeightRule: "exactly"
                    }}
                  >
                    <table
                      width="120"
                      border="0px"
                      cellspacing="0"
                      cellpadding="0"
                      style={{ border: "0px" }}
                    >
                      <tr>
                        <td
                          align="center"
                          valign="top"
                          style={{
                            lineHeight: "0px",
                            borderCollapse: "collapse",
                            msoLineHeightRule: "exactly",
                            fontSize: "0px"
                          }}
                        >
                          <a
                            href="https://vayyar.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://mcusercontent.com/6c9953ed3ea0bcb3d8447fc37/images/35851a83-7201-4b04-a623-aa959641ac10.png"
                              width="120"
                              alt=""
                              style={{
                                display: "block",
                                width: "120px",
                                maxWidth: "120px"
                              }}
                              border="0"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign="top"
                          align="left"
                          style={{
                            paddingTop: "13px",
                            msoLineHeightRule: "exactly",
                            lineHeight: "0px",
                            fontSize: "0px"
                          }}
                        >
                          <table
                            align="left"
                            border="0px"
                            cellspacing="0"
                            cellpadding="0"
                            style={{ border: "0px" }}
                          >
                            <tr>
                              <td
                                align="left"
                                valign="top"
                                width="27"
                                style={{
                                  width: "27px",
                                  paddingRight: "1px",
                                  lineHeight: "0px",
                                  borderCollapse: "collapse",
                                  msoLineHeightRule: "exactly",
                                  fontSize: "0px",
                                  margin: "0",
                                  paddingTop: "0px",
                                  paddingBottom: "0px"
                                }}
                              >
                                <a
                                  href="https://www.facebook.com/vayyarltd"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="https://mcusercontent.com/6c9953ed3ea0bcb3d8447fc37/images/3ccf1c39-2d64-4549-b575-c3b81dcfdc79.png"
                                    width="26"
                                    height="22"
                                    alt=""
                                    style={{
                                      display: "block",
                                      width: "26px",
                                      maxWidth: "26px"
                                    }}
                                    border="0"
                                  />
                                </a>
                              </td>

                              <td
                                align="right"
                                valign="top"
                                width="31"
                                style={{
                                  width: "31px",
                                  paddingLeft: "5px",
                                  paddingRight: "1px",
                                  lineHeight: "0px",
                                  borderCollapse: "collapse",
                                  msoLineHeightRule: "exactly",
                                  fontSize: "0px",
                                  margin: "0",
                                  paddingTop: "0px",
                                  paddingBottom: "0px"
                                }}
                              >
                                <a
                                  href="https://www.instagram.com/vayyar_inc"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="https://mcusercontent.com/6c9953ed3ea0bcb3d8447fc37/images/41050562-9649-4841-8961-0efd39e0800d.png"
                                    width="26"
                                    height="22"
                                    alt=""
                                    style={{
                                      display: "block",
                                      width: "26px",
                                      maxWidth: "26px"
                                    }}
                                    border="0"
                                  />
                                </a>
                              </td>

                              <td
                                align="left"
                                valign="top"
                                width="31"
                                style={{
                                  width: "31px",
                                  paddingLeft: "5px",
                                  paddingRight: "1px",
                                  lineHeight: "0px",
                                  borderCollapse: "collapse",
                                  msoLineHeightRule: "exactly",
                                  fontSize: "0px",
                                  margin: "0",
                                  paddingTop: "0px",
                                  paddingBottom: "0px"
                                }}
                              >
                                <a
                                  href="https://twitter.com/vayyarinc"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="https://mcusercontent.com/6c9953ed3ea0bcb3d8447fc37/images/d62f75e0-c24f-4aba-9526-8aa78780bd9e.png"
                                    width="26"
                                    height="22"
                                    alt=""
                                    style={{
                                      display: "block",
                                      width: "26px",
                                      maxWidth: "26px"
                                    }}
                                    border="0"
                                  />
                                </a>
                              </td>

                              <td
                                align="left"
                                valign="top"
                                width="30"
                                style={{
                                  width: "31px",
                                  paddingLeft: "5px",
                                  paddingRight: "1px",
                                  lineHeight: "0px",
                                  borderCollapse: "collapse",
                                  msoLineHeightRule: "exactly",
                                  fontSize: "0px",
                                  margin: "0",
                                  paddingTop: "0px",
                                  paddingBottom: "0px"
                                }}
                              >
                                <a
                                  href="https://www.linkedin.com/company/vayyar"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src="https://mcusercontent.com/6c9953ed3ea0bcb3d8447fc37/images/6d7a2fc7-4677-43f4-8d88-ebef07b2c8f3.png"
                                    width="26"
                                    height="22"
                                    alt=""
                                    style={{
                                      display: "block",
                                      width: "26px",
                                      maxWidth: "26px"
                                    }}
                                    border="0"
                                  />
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="9"></td>
                  <td width="1" bgcolor="#009DDD">
                    <img
                      src="https://gallery.mailchimp.com/6c9953ed3ea0bcb3d8447fc37/images/fc8ce992-5631-448a-8578-6785c16d276a.gif"
                      width="1"
                      height="1"
                      alt=""
                      style={{ display: "block" }}
                      border="0"
                    />
                  </td>
                  <td width="9"></td>
                  <td
                    valign="middle"
                    align="left"
                    style={{
                      fontFamily:
                        "AlvarEssentialAlt, Montserrat, Arial, sans-serif",
                      fontSize: size,
                      color: "#009DDD",
                      fontWeight: "bold",
                      lineHeight: "24px",
                      borderCollapse: "collapse",
                      msoLineHeightRule: "exactly"
                    }}
                  >
                    <span
                      style={{
                        fontSize: size,
                        color: "#009DDD",
                        fontWeight: "bold"
                      }}
                    >
                      {name}
                    </span>

                    <br />
                    <span
                      style={{
                        fontSize: positionSize,
                        color: "#516670",
                        msoLineHeightRule: "exactly",
                        lineHeight: "23px"
                      }}
                    >
                      {position}
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#516670",
                        msoLineHeightRule: "exactly",
                        lineHeight: "18px",
                        fontWeight: "normal"
                      }}
                    >
                      <a
                        href={phone}
                        style={{ color: "#000000", textDecoration: "none" }}
                      >
                        {phone}
                      </a>
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default GMAIL_CARD;
