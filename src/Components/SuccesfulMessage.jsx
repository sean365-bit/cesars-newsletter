import ReactDom from "react-dom";
import icon from "../Assets/images/icon-list.svg";

export default function SuccesfulMessage({ open, onClose, value }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="successfulMessage">
        <img className="listCheckMarkSuccess" src={icon} alt="checkMark" />

        <h1 className="headingSuccessful">
          Thanks for <br /> subscribing
        </h1>
        <p className="paragraphSuccessful">
          A confirmation email has been sent to <strong>{value}</strong> .
          Please open it and click the button inside to confirm your
          subscription.
        </p>
        <button onClick={onClose} className="inputSubmit">
          Dismiss Message
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
