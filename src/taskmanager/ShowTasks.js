import React, { useEffect, useState } from "react";
import Tab from "./Tab";
function ShowTasks() {
  const getItm = () => {
    let lst = localStorage.getItem("task-list");
    if (lst) {
      return JSON.parse(localStorage.getItem("task-list"));
    } else {
      return [];
    }
  };
  const [list, setList] = useState(getItm());
  
  const handleclick = (id) => {
    let indx = 0;
    for (let i in list) {
      if (id === list[i].id) {
        indx = parseInt(i, 10);
        break;
      }
    }
    let lst = list.slice(0, indx).concat(list.slice(indx + 1));
    setList(lst);
  };

  useEffect(() => {
    localStorage.setItem("task-list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const alertInterval = setInterval(() => {
      if (list.length > 0) {
        const today = new Date();
      for (let i = 0; i < list.length; i++) {
        const date = new Date(list[i].datetime);
        
          if (today.getTime() >= date.getTime()) {
            alert(`${list[i].head}\n${list[i].text}`);
            handleclick(list[i].id);
            clearInterval(alertInterval);
          } 
        }
      }
    }, 30000);
  }, [list]);
  const tasktab = list.map((item) => {
    return (
      <Tab
        key={item.id}
        item={item}
        onclick={(id) => handleclick(id)}
        ontime={(id) => handleclick(id)}
      />
    );
  });
  return <main className="show-tasks">{tasktab}</main>;
}
export default ShowTasks;
