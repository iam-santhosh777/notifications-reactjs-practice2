const Notification = (props) => {
  //  Write your code here.
  const { container, imgUrl, text } = props;
  return (
    <li className={container}>
      <img src={imgUrl} />
      <p>{text}</p>
    </li>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      container="box1"
      imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="Information Message"
    />
    <Notification
      container="box2"
      imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      text="Success Message"
    />
    <Notification
      container="box3"
      imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      text="Warning Message"
    />
    <Notification
      container="box4"
      imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      text="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
