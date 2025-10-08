export default function Notification(props) {
  return (
    <>
      <section>
        <img src={props.img} alt="An avatar" />
        <p className="notification-text">
          <span className="user-name">{props.user}</span> {props.action}
          {props.target && <span className="target"> {props.target}</span>}
          {props.activity && (
            <span className="activity"> {props.activity}</span>
          )}
        </p>

        <div className="bottom-text">
          <small className="time">{props.time}</small>
        </div>

        {props.message && <p className="message">{props.message}</p>}
      </section>
    </>
  );
}
