import React from 'react'

class Machine extends React.Component {
  static defaultProps = {
    result: "play",
  };

  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;
    const style = { fontSize: "50px" };

    return (
      <div className={`MachineOutput ${winner ? "win" : "lose"}`}>
        <span style={style}>📧</span>
        <span style={style}>🍖</span>
        <span style={style}>🌾</span>
        <p className ={winner ? "win" : "lose"}>{winner ? "You win" : "You lose"}</p>
      </div>
    );
  }
}
export default Machine;
