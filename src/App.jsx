import { useState } from "react";
import "./App.css";
import notifications from "./data/notifications.js";
import Notification from "./components/notification";

function App() {
  const [data] = useState(notifications);

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
