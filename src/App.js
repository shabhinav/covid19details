import React,{Component}from 'react';
import './App.css';
import Main from './Components/main'
import {BrowserRouter as Router,Route} from 'react-router-dom'
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
           <Route path='/' exact component={Main} />
           <Route path='/:country' component={CountryInfo}/>
        </Router>
      </div>
    )
  }
}


export default App;

