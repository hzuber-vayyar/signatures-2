import React from "react";
import ReactClipboard from "react-clipboardjs-copy";
import scrnshot1 from "./scrnshot-settings.webp";
import scrnshot2 from "./scrnshot-sig.webp";
import scrnshot3 from "./scrnshot-save.webp";
import Card from "./card";

function GMAIL_SIG(props) {
  const { name, phone, position, number, email } = props;

  return (
    <>
      <div className="presentational-container gmail">
        <Card
          phone={phone}
          name={name}
          position={position}
          number={number}
          email={email}
        />
      </div>
      <div className="CopyPane">
        <ReactClipboard
          target={".presentational-container.card"}
          selection={true}
          onSuccess={(e) => console.log(e)}
          onError={(e) => console.log(e)}
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
