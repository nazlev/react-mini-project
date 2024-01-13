import { useEffect, useRef, useState } from "react";
import Block from "../Currency/Block";

function CurrencyPage() {
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);
  const ratesRef = useRef({});


  useEffect(() => {
    fetch('https://api.currencybeacon.com/v1/latest?api_key=RfAlCGlv0A6firCHHFxSNQLo60qIKU8i')
    .then(response => response.json())
    .then(json => {
      ratesRef.current = json.rates;
      onChangeToInput(1);
    }).catch((error) => {
      console.warn(error);
      alert("warn")
    })
    // eslint-disable-next-line
  }, []);
  

  const onChangeFromInput = (value) => {
    const startValue = value / ratesRef.current[fromCurrency];
    const resultValue = startValue * ratesRef.current[toCurrency];
    setFromPrice(value);
    setToPrice(resultValue.toFixed(3));
  };


  useEffect(() => {
    onChangeFromInput(fromPrice);
    // eslint-disable-next-line
  }, [fromCurrency]);


  const onChangeToInput = (value) => {
    const startResult = ratesRef.current[fromCurrency] / ratesRef.current[toCurrency];
    const result = value * startResult;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  }


  useEffect(() => {
    onChangeToInput(toPrice);
    // eslint-disable-next-line
  }, [toCurrency]);

  return (
    <div className="Currency">
      <Block 
        values={fromPrice} 
        currency={fromCurrency} 
        onChangeCurrency={setFromCurrency} 
        onChangeInput={onChangeFromInput}
      />
      <Block 
        values={toPrice} 
        currency={toCurrency} 
        onChangeCurrency={setToCurrency} 
        onChangeInput={onChangeToInput}
      />
    </div>
  );
}

export default CurrencyPage;