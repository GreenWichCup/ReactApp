class Hello extends React.Component {
  static defaultProps = {
    field: "'The AmaZing React!!!' "
  }
  render() {
    let symbol = "!".repeat(this.props.point);
    return (
      <div>
        <h1>
          Hello {this.props.to}! Focus on {this.props.field} Algorithmy at least{" "}
          {this.props.time} hours{symbol}
        </h1>
        <img src={this.props.img} />
      </div>
    );
  }
}
