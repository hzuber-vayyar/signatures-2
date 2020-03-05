import React from "react";
import ReactClipboard from "react-clipboardjs-copy";
import outlook1 from "./outlook-options.png";
import outlook2 from "./outlook-signature.PNG";
import outlook3 from "./outlook-new-sig.PNG";
import outlook4 from "./outlook-name-sig.PNG";
import outlook5 from "./outlook-type-sig.PNG";
import Card from "./outlook-card";

function OUTLOOK_SIG(props) {
  const { name, phone, position, email, number } = props;

  return (
    <>
      <div className={`presentational-container outlook`} id="copied">
        <Card name={name} phone={phone} position={position} email={email} number={number} />
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
              field, paste your signature. It might look a bit different from the signature you copied, but don't change anything until you've seen it in an actual email. Click OK.
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
              Outlook will now insert the signature automatically when you compose
              a message. You can edit or remove it before clicking Send.
            </p>
          </li>
        </ol>
      </div>
    </>
  );
}
export default OUTLOOK_SIG;
