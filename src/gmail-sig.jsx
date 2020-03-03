import React from "react";
import ReactClipboard from "react-clipboardjs-copy";
import scrnshot1 from "./scrnshot-settings.webp";
import scrnshot2 from "./scrnshot-sig.webp";
import scrnshot3 from "./scrnshot-save.webp";

function GMAIL_SIG(props) {
  const { name, phone, position } = props;
  const length = name.length;
  const size =
    length < 25 ? "font-regular" : length < 40 ? "smaller" : "smallest";

  return (
    <>
      <div className={`presentational-container gmail`} id="copied">
        <table role="presentation" className="outer-table">
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
                        {name}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="display-position">
                        {position}&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td className="display-number">
                        {phone}
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
          target={".presentational-container.gmail"}
          selection={true}
          onSuccess={e => console.log(e)}
          onError={e => console.log(e)}
          className={` submit-btn `}
        >
          <button>Copy to Clipboard</button>
        </ReactClipboard>
      </div>
      <div className="gmail instructions">
        <h3>To use as your Gmail Signature:</h3>
        <ol>
          <li>
            <p>Click the "Copy to clipboard" button.</p>
          </li>
          <li>
            <p>
              Go to your Vayyar gmail account and click the Settings gear in
              your Gmail toolbar.
            </p>
          </li>
          <li>
            <p>Select Settings from the menu.</p>
            <img src={scrnshot1} alt="gmail settings" className="screenshot" />
          </li>
          <li>
            <p>Go to General</p>
          </li>
          <li>
            <p>Make sure the desired account is selected under Signature</p>
          </li>
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
    </>
  );
}
export default GMAIL_SIG;
