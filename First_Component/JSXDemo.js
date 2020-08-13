function getMood() {
  const mood = ["Angry", "Happy", "Soso", "Silly", "Quiet", "Paranoid"];
  return mood[Math.floor(Math.random() * mood.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <img src="./dummy.jpg" />
        <p>My current mood is : {getMood().toLocaleUpperCase()}</p>
      </div>
    );
  }
}
