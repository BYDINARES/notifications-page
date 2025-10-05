import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import notifications from "./data";
import Notification from "./components/notification";

function App() {
  const [data, setData] = useState(notifications);

  const arrayOfNotifications = data.map((item) => {
    <Notification key={item.name} {...item} />;
  });

  return (
    <>
      <header>
        <div className="notifications-counter-container">
          <h1 className="title">Notifications</h1>{" "}
          <p className="number-of-notifications"></p>
        </div>

        <button>Mark all as read</button>
      </header>
      {arrayOfNotifications}
    </>
  );
}

export default App;
