export default function Notification(props) {
  return (
    <>
      <section id={props.id}>
        <img src={props.img} alt="An avatar" />

        <div className="top-side-notification">
          <h3 className="user-name">{props.name}</h3>
          <p className="action">{props.action}</p>
          {props.target && <p className="target">{props.target}</p>}
        </div>

        <small className="time">{props.time}</small>
      </section>
    </>
  );
}
