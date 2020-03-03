import React from "react";
import ReactClipboard from "react-clipboardjs-copy";
import outlook1 from "./outlook-options.webp";
import outlook2 from "./outlook-signature.webp";
import outlook3 from "./outlook-new-sig.webp";
import outlook4 from "./outlook-name-sig.webp";
import outlook5 from "./outlook-type-sig.webp";
import Card from './outlook-sig2'

function OUTLOOK_SIG(props) {
  const { name, phone, position, email } = props;
  const length = name.length;
  const size =
    length < 25 ? "font-regular" : length < 40 ? "smaller" : "smallest";

  return (
    <>
      <div className={`presentational-container outlook`} id="copied">
          <Card name={name} phone={phone} position={position} email={email}/>
        {/*<table role="presentation">
          <tbody>
            <tr className="outer-row">
              <td
                cellPadding="0"
                cellSpacing="0"
                border="0"
                valign="middle"
                className="left-cell"
                align= "right"
              >
                  <tr>
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
                </tr>
                <tr
                  style={{
                    fontSize: `10pt`,
                    fontFamily: `Arial, sansSerif`,
                    paddingBottom: `0px`,
                    paddingTop: `5px`,
                    verticalAlign: `bottom`,
                    textAlign: `right`
                  }}
                  valign="bottom"
                  className="social-logos outlook"
                >
                  <span
                    className="outlook-span"
                    style={{
                      margin: `0px 3px !important`,
                      fontSize: `20pt`,
                      fontFamily: `Arial, sans-serif`,
                      textDecoration: `none`
                    }}
                  >
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
                      />
                    </a>
                  </span>
                  <span
                    className="outlook-span"
                    style={{
                      padding: `0px 3px !important`,
                      fontSize: `20pt`,
                      fontFamily: `Arial, sans-serif`,
                      textDecoration: `none`
                    }}
                  >
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
                      />
                    </a>
                  </span>
                  <span
                    className="outlook-span"
                    style={{
                      padding: `0px 3px !important`,
                      fontSize: `20pt`,
                      fontFamily: `Arial, sans-serif`,
                      textDecoration: `none`
                    }}
                  >
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
                      />
                    </a>
                  </span>
                  <span
                    className="outlook-span last"
                    style={{
                      margin: `0px 0px 0px 3px !important`,
                      fontSize: `20pt`,
                      fontFamily: `Arial, sans-serif`,
                      textDecoration: `none`
                    }}
                  >
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
                  </span>
                </tr>
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
        </table>*/}
                </div>
      <div className="CopyPane">
        <ReactClipboard
          target={".presentational-container.outlook"}
          selection={true}
          onSuccess={e => console.log(e)}
          onError={e => console.log(e)}
          className={`submit-btn`}
        >
          <button>Copy to Clipboard</button>
        </ReactClipboard>
      </div>
      <div className="outlook instructions">
        <h3>To use as your Outlook Signature:</h3>
        <ol>
          <li>
            <p>
              Open Outlook. In the ribbon, select File. In the left rail, select
              Options.
            </p>
            <img src={outlook1} alt="outlook options" className="screenshot" />
          </li>
          <li>
            <p>
              Go to your Vayyar Outlook account and click the Settings gear in
              your Outlook toolbar.
            </p>
          </li>
          <li>
            <p>
              In the Outlook Options dialog box, select Mail. In the Compose
              messages section, select Signatures.
            </p>
            <img
              src={outlook2}
              alt="outlook signature"
              className="screenshot"
            />
          </li>
          <li>
            <p>
              In the Signatures and Stationery dialog box, if Outlook is set up
              with multiple email accounts, under Choose default signature, use
              the Email account dropdown menu to select your Vayyar account.
              Under Select signature to edit, select New.
            </p>
            <img
              src={outlook3}
              alt="outlook new signature"
              className="screenshot"
            />
          </li>
          <li>
            <p>
              In the New Signature dialog box, type a name for your email
              signature. Select OK.
            </p>
            <img
              src={outlook4}
              alt="outlook, name your signature"
              className="screenshot"
            />
          </li>
          <li>
            <p>
              In the Signatures and Stationery dialog box, in the Edit signature
              field, paste your signature. Click OK.
            </p>
            <img
              src={outlook5}
              alt="outlook signature"
              className="screenshot"
            />
          </li>
          <li>
            <p>
              In the Outlook Options dialog box, select OK. Now, each time you
              start a new email, the signature will automatically appear.
            </p>
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
export default OUTLOOK_SIG;
