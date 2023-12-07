import icon from "../Assets/images/icon-list.svg";

const data = [
  {
    id: 0,
    content: "Product discovery and building what matters",
  },
  {
    id: 1,
    content: "Measuring to ensure updates are a success",
  },
  {
    id: 2,
    content: "And much more!",
  },
];

export default function List() {
  const listItems = data.map((data) => (
    <li key={data.id}>
      <img className="listCheckMark" src={icon} alt="checkMark" />
      {data.content}
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}
