import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";

export default function App() {
  // 点击高亮
  const activeDom = ({ isActive }) => {
    // 自定义
    // return isActive ? "list-group-item active-dom" : "list-group-item";
    return isActive ? "list-group-item active" : "list-group-item";
  };

  // 路由表
  const elements = useRoutes(routes);
  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 编写路由链接 */}
            <NavLink className={activeDom} to="/about">
              About
            </NavLink>
            <NavLink className={activeDom} to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" element={<Navigate to="/about" />}></Route>
              </Routes> */}

              {/* 路由表 */}
              {elements}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
