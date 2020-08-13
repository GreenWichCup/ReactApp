function getNumb() {
  return Math.floor(Math.random() * 10) + 1;
}
class NumberPicker extends React.Component {
  render() {
    const num = getNumb();

    let msg1, msg2;
    if (num === 7) {
      msg1 = <img src="./robot.jpg" />;
      msg2 = <p>Congrats!!!</p>;
    } else {
      msg1 = "You can try again!!!";
      msg2 = null;
    }

    return (
      <div>
        <h1>My random number is : {num}</h1>
        {msg1}
        {msg2}
      </div>
    );
  }
}
