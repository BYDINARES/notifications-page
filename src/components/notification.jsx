export default function Notification(props) {
  return (
    <>
      <section>
        <img src={props.img} alt="An avatar" />

        <div className="top-side-notification">
          <h3 className="user-name">{props.user}</h3>
          <p className="action">{props.action}</p>
          {props.target && <p className="target">{props.target}</p>}
        </div>

        <small className="time">{props.time}</small>

        <p className="message">{props.message}</p>
      </section>
    </>
  );
}
