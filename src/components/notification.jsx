export default function Notification(props) {
  const styles = {
    backgroundColor:
      props.status === "unread" ? "rgba(235, 234, 234, 0.696)" : "transparent",
  };

  return (
    <>
      <section style={styles}>
        <img src={props.img} alt="An avatar" className="avatar" />
        <p className="notification-text">
          <span className="user-name">{props.user}</span> {props.action}
          {props.target && <span className="target"> {props.target}</span>}
          {props.activity && (
            <span className="activity"> {props.activity}</span>
          )}
          {props.status === "unread" ? <span></span> : null}
        </p>

        <div className="bottom-text">
          <small className="time">{props.time}</small>
        </div>

        {props.message && <p className="message">{props.message}</p>}
        {props.yourPicture && (
          <img src={props.yourPicture} className="your-post" />
        )}
      </section>
    </>
  );
}
