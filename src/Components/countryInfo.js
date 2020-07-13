import React, {useEffect,useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import './countryinfo.scss'


function CountryInfo(){

    const [CountryDetails, setState] = useState([]);
    const [CountryId,SetCountryId]=useState(0)
    const {country} = useParams();

        var Country = country.replace(/-/g, " ");  
    useEffect(() => {
        let Today=new Date()
        let date=''+Today.getDate()
        let Yesdate=''+(Today.getDate()-1)
        let Month=''+(Today.getMonth()+1)
        let Year=''+Today.getFullYear()

        if (Month.length < 2) 
            Month = '0' + Month;
        if (date.length < 2){ 
            date = '0' + date;
            Yesdate='0'+Yesdate
        }
        
        let TodayDate=Year+'-'+Month+'-'+date

        let YesterdatDate=Year+'-'+Month+'-'+Yesdate

        
        axios.get(`https://api.covid19api.com/country/${Country}?from=${YesterdatDate}T00:00:00Z&to=${TodayDate}T00:00:00Z`)
        .then((res)=>{
                setState(res.data[0])
            })
            .catch((err)=>{
                console.log(err)
            })
        
    }, [CountryId])

    return(
        <div className='CountryInfo container'>
            <h1>{CountryDetails.Country}</h1>
            <p >Coronavirus Cases</p>
            <p style={{fontSize:'54px',fontWeight:'800',color:'#aaa'}}>{CountryDetails.Confirmed}</p>
            <p >Deaths</p>
            <p style={{fontSize:'54px',fontWeight:'800',color:'#aaa'}}>{CountryDetails.Deaths}</p>
            <p >Recovered</p>
            <p style={{fontSize:'54px',fontWeight:'800',color:'#8ACA2B'}}>{CountryDetails.Recovered}</p>
        </div>
    )
}

export default CountryInfo