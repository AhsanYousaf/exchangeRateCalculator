import React,{useEffect} from "react";
import axios from "axios";

function ExchangeRate(){
    const [rates,setRates] = React.useState({})
    useEffect(() => {
    axios.get('http://api.coinlayer.com/api/live?access_key=2d1959ae1b73ad775e0b993f1b4f926a')
      .then(response => {
        const res = response.data.rates;
        //console.log(res);
        setRates(res);
        
      })
  }, []);
  //console.log(rates);

return(
    <div>
        <h1>Crypto Currency to USD And PKR Rates</h1>
        <table>
                <tr>
                    <th>Crypto Currency Name</th>
                    <th>Rate in USD</th>
                    <th>Rate in PKR</th>
                </tr>
        {
            Object.keys(rates).map((key, i) => (
                <tr key={i}>
                    <td>{key}</td>
                    <td>{rates[key]}</td>
                    <td>{rates[key]* 187.99}</td>
                </tr>
            ))
    
        }
        </table>
    </div>
);




}

export default ExchangeRate;