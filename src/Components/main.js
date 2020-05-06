import React, { Component } from 'react'
import axios from 'axios';
import './main.scss';
import Info from './Info'



class Main extends Component{

    state={
        virusData:''
    }

    componentDidMount(){
        axios.get(`https://api.covid19api.com/summary`)
        .then((res)=>{
            this.setState({
                virusData:res.data.Global
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
            <div className='Main container'>
                    <div>
                        <p >Coronavirus Cases</p>
                        <p style={{fontWeight:'800',color:'#aaa'}}>{this.state.virusData.TotalConfirmed}</p>
                        <p >Deaths</p>
                        <p style={{fontWeight:'800',color:'#aaa'}}>{this.state.virusData.TotalDeaths}</p>
                        <p >Recovered</p>
                        <p style={{fontWeight:'800',color:'#8ACA2B'}}>{this.state.virusData.TotalRecovered}</p>
                    </div>
            </div>
            <Info/>
            </div>
        )
    }
}

export default Main