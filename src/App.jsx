import { useState } from "react";
import "./App.css";
import notifications from "./data/notifications.js";
import Notification from "./components/notification";

function App() {
  const [data, setData] = useState(notifications);

  const arrayOfNotifications = data.map((item, index) => (
    <Notification key={index} {...item} />
  ));

  function markAllAsRead() {
    setData((prevData) =>
      prevData.map((user) =>
        user.status === "unread" ? { ...user, status: "read" } : user
      )
    );
  }

  const numberOfUnreadMesseages = data.filter(
    (user) => user.status === "unread"
  ).length;

  return (
    <>
      <header>
        <div className="notifications-counter-container">
          <h1 className="title">Notifications</h1>
          <p className="number-of-notifications">{numberOfUnreadMesseages}</p>
        </div>

        <button className="all-read-button" onClick={() => markAllAsRead()}>
          Mark all as read
        </button>
      </header>
      <main>{arrayOfNotifications}</main>
    </>
  );
}

export default App;
