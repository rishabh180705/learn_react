import { useState } from 'react'
import InputBox from './components/input'
import useCurrencyInfo from './hooks/useCurrencyinfo';


function App() {
    const[amount,setAmount]=useState(0);
    const[from,setFrom]=useState('USD');
    const[to,setTo]=useState("INR");
    const[convertAmount,setConvertAmount]=useState(0);
    const CurrencyInfo=useCurrencyInfo(from)
  const options=Object.keys(CurrencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertAmount(amount);
    setAmount(convertAmount);
  }
  const convert=()=>{
    setConvertAmount(amount*CurrencyInfo[to])
  }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://miro.medium.com/max/3840/1*2bf303U0V7AH3wP6ezUZ5g.jpeg')`,
          }}
      >
          <div className="w-full text-center text-slate-950 font-extrabold text-3xl"> Currency Convertor
              <div className="w-full text-black max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onCurrencyChange={(currency)=> setFrom(currency)}
                              currencyOptions={options}
                              selectCurrency={from}
                              onAmountChange={(amount)=> setAmount(amount)}

                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                          onClick={swap}
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertAmount}
                              onCurrencyChange={(currency)=> setTo(currency)}
                              currencyOptions={options}
                              selectCurrency={to}
                              onAmountChange={(convertAmount)=> setAmount(convertAmount)}

                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}


export default App
