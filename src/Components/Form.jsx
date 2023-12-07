import { useState } from "react";
import SuccesfulMessage from "./SuccesfulMessage";

function ErrorMessage() {
  return <span className="errorMessage">valid email required</span>;
}

export default function Form() {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  function onSubmit() {
    if (checkEmail(email)) {
      setIsOpen(true);
      console.log("This email is correct");
      setIsToggled(false);
    } else {
      setIsToggled(true);
    }
  }

  return (
    <>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Email address{"  "}
          {isToggled && <ErrorMessage />}
          <br />
          <input
            type="text"
            placeholder="email@company.com"
            className="inputText"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <input
          type="submit"
          value="Subscribe to monthly newsletter"
          className="inputSubmit"
          onClick={onSubmit}
        />
        <SuccesfulMessage
          open={isOpen}
          value={email}
          onClose={() => setIsOpen(false)}
        />
      </form>
    </>
  );
}

function checkEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
