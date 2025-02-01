import { useState } from "react";
import Form from "./../components/form"
import { convert } from '../api';

export default function App() {
    const [currency,setCurrency] = useState({
        startingCurrecy:'USD',
        convertToCurrency:'GBP',
        initialValue:'',
    });  

    const [conversionResult,setConversionResult] = useState({ conversionRate:'', conversionResult:''}); 

    function handleCurrencyChange(newCurrency){
        setCurrency({...currency, ...newCurrency})
    }

    async function convertCorrency() {
        if(!currency.startingCurrecy){
            return
        };
    
        if(!currency.convertToCurrency){
            return
        };
    
        if(!currency.initialValue){
            return
        };

        await convert(currency.startingCurrecy, currency.convertToCurrency, currency.initialValue)
            .then(v => {
                try {
                    setConversionResult(v);
                }catch(err){
                    console.error(err);
                }
            });
    }

    function reverseCurrency() {
        const reversedCurrency = {
            startingCurrecy:currency.convertToCurrency,
            convertToCurrency:currency.startingCurrecy,
        };

        setCurrency({...currency, ...reversedCurrency});
    }

    function dropResult(){
        setConversionResult({ conversionRate:'', conversionResult:''});
    }
    return (
        <>
            <div className="background"></div>
            <div className="header-wrapper">
                <h1 className='header'>Convert {currency.startingCurrecy} to {currency.convertToCurrency}</h1>
            </div>
            <Form onSubmit={convertCorrency} onCurrencyChange={handleCurrencyChange} currency={currency} conversionResult={conversionResult} reverseCurrency={reverseCurrency} dropResult={dropResult}/>
        </> 
    )
}