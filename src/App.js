import React,{Component}from 'react';
import './App.css';
import Main from './Components/main'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import CountryInfo from './Components/countryInfo'

class App extends Component{
  constructor(props){
    super(props)
    this.inputVal=React.createRef()
}

  render() {

    return (
      <div className='App'>
        <Router>
          <Switch>
           <Route path='/' exact component={Main} />
           <Route path='/:country' component={CountryInfo}/>
           </Switch>
        </Router>

        
      </div>
    )
  }
}


export default App;

