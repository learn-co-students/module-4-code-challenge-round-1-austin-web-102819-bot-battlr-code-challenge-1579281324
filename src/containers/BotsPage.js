import React from "react";
import BotsCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"


class BotsPage extends React.Component {

  constructor() {
    super()
  
    this.state = {
       allBots: [],
       botArmy: []
    }
  }

  addBotToArmy = (bot) => {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })
  }

  removeBotFromArmy = (robot) => {
    this.setState({
      botArmy: this.state.botArmy.filter(bot => bot.id != robot.id)
    })
  }
  


  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data =>
      {this.setState({allBots: data});
    });
  }

 


  render() {
    return (
      <div>
       <YourBotArmy
       bots={this.state.botArmy}
       handleClick={this.removeBotFromArmy}
       />
        <BotsCollection
         bots={this.state.allBots}
         addBotToArmy={this.addBotToArmy}
         />
      </div>
    );
  }

}

export default BotsPage;
