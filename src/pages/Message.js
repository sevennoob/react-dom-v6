import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const negative = useNavigate();
  const [messages] = useState([
    { id: "001", title: "Player1", content: "LeBron James" },
    { id: "002", title: "Player2", content: "Stephen Curry" },
    { id: "003", title: "Player3", content: "Nikola Jokic" },
    { id: "004", title: "Player4", content: "Luka Doncic" },
  ]);

  // 编程式路由导航
  const showDetails = (message) => {
    negative("detail", {
      replace: false,
      //   此处仅支持state参数
      state: {
        id: message.id,
        title: message.title,
        content: message.content,
      },
    });
  };
  return (
    <div>
      <ul>
        {messages.map((message) => {
          return (
            <li key={message.id}>
              <Link
                // to={`detail/${message.id}/${message.title}/${message.content}`}
                to="detail"
                state={{
                  id: message.id,
                  title: message.title,
                  content: message.content,
                }}
              >
                {message.title}
              </Link>
              &nbsp;
              <button onClick={() => showDetails(message)}>details</button>
            </li>
          );
        })}
      </ul>
      <hr />
      {/* 指定路由组件的展示位置 */}
      <Outlet />
    </div>
  );
}
