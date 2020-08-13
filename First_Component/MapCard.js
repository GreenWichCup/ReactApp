class MapCard extends React.Component {
    render() {
        const { cards,names} = this.props;
        return ( names.map((name, index) => (
          <div key={index}>
            <h3>{name}</h3>
            <p>
              {cards.map((card) => (
                <span>{card}</span>
              ))}
            </p>
          </div>
        )));
      }
    }
 
