/**
 * Newsletter
 * @returns white board to display outcomes
 */

import Heading from "./Heading";
import Paragraph from "./Paragraph";
import List from "./List";
import IlustrationResult from "./IlustrationResult";
import Form from "./Form";

export default function Newsletter() {
  return (
    <>
      <div className="newsletter">
        <RectangleLeft />
        <RectangleRight />
      </div>
    </>
  );
}

export function RectangleLeft() {
  return (
    <>
      <div className="left">
        <Heading content="Stay updated!" />
        <Paragraph
          content="Join 60,000+ product manages receiving monthly
         updates on: "
        />
        <List />
        <Form />
      </div>
    </>
  );
}

export function RectangleRight() {
  return (
    <>
      <div className="right">
        <IlustrationResult />
      </div>
    </>
  );
}
