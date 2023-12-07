# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/cesars-newsletter-Screenshot.png)

### Links

- Live Site URL: [cesars-newsletter](https://cesars-newsletter.netlify.app/)

## My process

I started creating this App by Breaking the UI into a component hierarchy, I wanted to have a general idea of how components relate to each other, then I Built a static Version of the App using those components and style them with CSS3.

This Newsletter requires users to type their email addresses, because of this I needed to Identify where the state should live, in React we use Hooks in oder to acomplish this goal, so I used the useState() Hook in this case.

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

I am getting used to the environment React JS offers, and I would like to share some concepts that I found interesting:

- In React, the useState hook is used to add state to functional components. We use array destructuring to declare the variables we will use:

```jsx
import React, { useState } from "react";

const [email, setEmail] = useState("");
```

- In React, props (short for properties) are a way to pass data from a parent component to a child component.

```jsx
<Heading content="Stay updated!" />;

export default function Heading({ content }) {
  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
}
```

- The use of portals to properly render a modal (Pop-up)

```jsx
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.js";

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
```

```jsx
export default function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
```
