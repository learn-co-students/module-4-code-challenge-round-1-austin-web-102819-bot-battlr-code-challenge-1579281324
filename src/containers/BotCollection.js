import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here
  constructor(props) {
	  super(props)
  
	  this.state = {
		   clicked: false,
		   clickedBot: null

	  }
  }
  

  handleClick = (bot) => {
	this.setState({
		clicked : !this.state.clicked,
		clickedBot: bot
	}, console.log(this.state))
  }

  



  render(){
	//   console.log(this.props)
  	return (

		(this.state.clicked === false) ? (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
			  {this.props.bots.map(bot =>(
				  <BotCard 
					bot={bot}
					key={bot.id}
					handleClick={this.handleClick}
					/>
			  ))} 
    		</div>
  	  </div>
		) : (
			<BotSpecs
			 bot={this.state.clickedBot}
			 handleClick={this.handleClick}
			 addBotToArmy={this.props.addBotToArmy}
			 />
		)
  	);
  }

//   <div className="row">
//   { //Check if message failed
// 	(this.state.message === 'failed')
// 	  ? <div> Something went wrong </div> 
// 	  : <div> Everything in the world is fine </div> 
//   }
// </div>

};

export default BotCollection;
