
class App extends React.Component {
  
  render() {
    return (
      <div>
        <Hello 
        to="Jad" 
        field="JavaScript" 
        time={2}
        point= {7}
        img="./img/redmonkey.jpg"
        />
        <JSXDemo />
        <NumberPicker />
        <NumberPicker />
        <MapCard 
        names={["Jan","Vad","Lop"]}
        cards={["🚩","📐","📳","🏋"]}
        />
        <Hello 
        to="Jad...as always" 
        time={2}
        point= {7}
        />
         <Hello 
        to="...Jad?!!!...get out of me!" 
        time={2}
        point= {7}
        />



      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
