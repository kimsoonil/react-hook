import React from "react";
import useTabs from "./UseTabs";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
  {
    tab: "Section 3",
    content: "I'm the content of the Section 3",
  },
];

const UseTabsApp = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="UseTabsApp">
      <h1>UseTabs</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)} key={index}>
          {section.tab}
        </button>
      ))}
      <br />
      <br />
      <div>{currentItem.content}</div>
      <hr />
    </div>
  );
};

export default UseTabsApp;
