var PLAYERS = [
  {
  id: 1,
  name: "James",
  score: 31,
  },
  {
  id: 2,
  name: "Chris",
  score: 29,
  },
]

function Header(props) {
  return (<div className="header">
        <h1>{props.title}</h1>
      </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

// var Counter = React.createClass({
//   propTypes: {
//     initialScore: React.PropTypes.number.isRequired,
//   },

//   getInitialState: function () {
//     return {
//       score: this.props.initialScore,
//     }
//   },

//   incrementScore: function () {
//     this.setState({
//       score: (this.state.score + 1),
//     });
//   },

//   decrementScore: function () {
//     this.setState({
//       score: (this.state.score - 1),
//     });
//   },

//   render: function () {
//     return (
//       <div className="counter">
//         <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
//         <div className="counter-score"> {this.state.score} </div>
//         <button className="counter-action increment" onClick={this.incrementScore}> + </button>
//       </div>
//     );
//   }
// });

// function Counter(props) {
//   return (
//     <div className="counter">
//       <button className="counter-action decrement"> - </button>
//       <div className="counter-score"> {props.score} </div>
//       <button className="counter-action increment"> + </button>
//     </div>
//   )
// }


// Counter.propTypes = {
//   score: React.PropTypes.number.isRequired,
// };

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement" > - </button>  
      {/* onClick={this.decrementScore} */}
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" > + </button>
      {/* onClick={this.incrementScore} */}
    </div>
  );
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
};

function Player(props) {
  return <div className="player">
      <div className="player-name">{props.name}</div>
      <div className="player-score">
      <Counter score={props.score} />
      </div>
    </div>;
};

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};


var Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string,  //.isRequired,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
    })).isRequired,
  },

  getDefaultProps: function() {
    return {
      title: "Scoreboard",
    };
  },

  getInitialState: function() {
    return {
      players: this.props.initialPlayers,
    };
  },
  
  render: function() {
    return(
      <div className = "scoreboard" >
        <Header title={this.props.title} />

        <div className="players">
          {this.state.players.map(function(player) {
            return <Player key={player.id} name={player.name} score={player.score} />
          })}
        </div>
    </div >);
  }
});

// function Application(props) {
//   return (
//     <div className="scoreboard">
//     <Header title={props.title} />

//       <div className="players">
//         {props.players.map(function(player) {
//           return <Player key={player.id} name={player.name} score={player.score} />
//         })}
//       </div>
//   </div>);
// };

// Application.propTypes = {
//   title:React.PropTypes.string,  //.isRequired,
//   players: React.PropTypes.arrayOf(React.PropTypes.shape({
//     id: React.PropTypes.number.isRequired,
//     name: React.PropTypes.string.isRequired,
//     score: React.PropTypes.number.isRequired,
//   })).isRequired,
// };

// Application.defaultProps = {
//   title:"Scoreboard", 
// }

ReactDOM.render(<Application title="My Scoreboard" initialPlayers={PLAYERS}/>, document.getElementById('container'));