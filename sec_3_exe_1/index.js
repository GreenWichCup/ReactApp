function run() {
  const emojis = ["🐲", "🐝", "🐬"];
  for (let i = 0; i < emojis.length; i++) {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
}

class App extends React.Component {
  render() {
   
    return (
      <div>
        <h1>Slot Machine!</h1>
        <Machine 
        s1={run()} 
        s2={run()} 
        s3={run()} 
      />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
