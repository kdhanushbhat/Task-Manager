import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
function Tab(prop) {
  const date = new Date(prop.item.datetime);
  /*const today = new Date();
  useEffect(() => {
    setInterval(() => {
      if (
        today.getDate() >= date.getDate() &&
        today.getHours() === date.getHours() &&
        today.getMinutes() === date.getMinutes()
      ) {
        console.log("loop in");
        alert(`${prop.item.head} \n ${prop.item.desc ? prop.item.desc : ""}`);
        prop.ontime(prop.item.id);
      }
      console.log("loop out");
    }, 20000);
  });*/
  return (
    <main className="task--tab">
      {prop.item.status && (
        <div className="task-bar">
          <div className="task-abt">
            <p className="task-head">
              <span className="font-heavy">Title : </span>
              {prop.item.head}
            </p>
            <p className="font-heavy">Description : </p>
            <p className="task-desc">{prop.item.text}</p>
          </div>
          <div className="task-datetime">
            <p className="task-date">
              <span className="font-heavy">Date : </span>
              {date.getDate() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getFullYear()}
            </p>
            <p className="task-time">
              <span className="font-heavy">Time : </span>
              {date.getHours() + ":" + date.getMinutes()}
            </p>
          </div>
          <FaRegTrashAlt
            className="trash-icon"
            onClick={() => prop.onclick(prop.item.id)}
          />
        </div>
      )}
    </main>
  );
}
export default Tab;
