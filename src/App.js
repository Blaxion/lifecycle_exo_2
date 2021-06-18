import React, {
  Component
} from 'react';
import "./App.css"

class App extends Component {
  
  state = {
    date: new Date()
  }
  test(){
    console.log(React);
  }
  
  theInterval;

  componentDidMount() {
    this.theInterval = setInterval(() => {
      this.setState({
        date: new Date()
      })
      console.log('intervall en cours');
      this.test()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.theInterval)
  }

  render() {
    return ( 
      <div className = 'horloge'>
        <div className = 'screen'>
          <p>{this.state.date.toLocaleString()}</p> 
          
        </div> 
      </div>
    );
  }
}

export default App;