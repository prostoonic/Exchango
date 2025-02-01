export async function convert(startingCurrecy,convertToCurrency,amount) {
    console.log('startingCurrecy',startingCurrecy);
    console.log('convertToCurrency',convertToCurrency);
    console.log('amount',amount);
    if(!startingCurrecy){
        return
    };

    if(!convertToCurrency){
        return
    };

    if(!amount){
        return
    };

    const convertedCurrency = await fetch(`https://v6.exchangerate-api.com/v6/6db6427cf01a7cc58c010aeb/pair/${startingCurrecy}/${convertToCurrency}/${amount}`)
    .then(res => res.json());
    // try {
    //     if(convertedCurrency.result == "error"){
    //         throw new Error;
    //     };
    //   } catch(e) {
      
    //     alert('Ошибка '); // (3) <--
      
    //   }
    return {conversionRate:convertedCurrency.conversion_rate,
            conversionResult:convertedCurrency.conversion_result};
}
// https://v6.exchangerate-api.com/v6/6db6427cf01a7cc58c010aeb/pair/${startingCurrecy}/${convertToCurrency}