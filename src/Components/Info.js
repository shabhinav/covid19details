import React, {Component } from 'react';
import axios from 'axios';
import './Info.scss';
import {BrowserRouter as Router,NavLink,withRouter} from 'react-router-dom';


class Info extends Component{

    state={
        virusDetails:[],
    }

    componentWillMount(){
        axios.get(`https://api.covid19api.com/summary`)
        .then((res)=>{

            this.setState({
                virusDetails: res.data.Countries.sort(function(a,b){
                   return b.TotalConfirmed-a.TotalConfirmed
                }),
            })
            this.setState({
                id:this.state.virusDetails.map((str)=>
                     str.CountryCode
            )
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className='Info container'>
                <h1 style={{textDecoration:'underline',paddingBottom:'50px'}}>COVID19 Cases All Over The World</h1>
                <table className='table table-hover table-bordered'>
                    <thead>
                        <th>Sno.</th>
                        <th scope='col'>Countries</th>
                        <th scope='col'>Total Cases</th>
                        <th scope='col'>New Cases</th>
                        <th scope='col'>Total Death</th>
                        <th scope='col'>New Death</th>
                        <th scope='col'>Total Recovered</th>
                        <th scope='col'>New Recovered</th>
                    </thead>
                    <tbody>
                        {this.state.virusDetails.map((str,index)=>
                        <tr>
                            <td>{index+1}</td>
                            <td><Router><NavLink to={str.Country.replace(/\s/g, "-").toLowerCase() } onClick={()=>this.props.history.push(str.Country)}>{str.Country}</NavLink></Router></td>
                            <td >{str.TotalConfirmed}</td>
                            <td >+{str.NewConfirmed}</td>
                            <td style={{backgroundColor:'red',color:'white'}}>{str.TotalDeaths}</td>
                            <td style={{color:'red'}}>+{str.NewDeaths}</td>
                            <td style={{backgroundColor:'#8ACA2B',color:'white'}}>{str.TotalRecovered}</td>
                            <td style={{color:'#8ACA2B'}}>+{str.NewRecovered}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(Info)

