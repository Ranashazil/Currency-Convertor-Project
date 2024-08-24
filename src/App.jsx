import { useState } from 'react'
import { InputBox } from './components'
import useMe from './hooks/useCurrencyInfo'
import './App.css'

function App() {

const [amount, setAmount] = useState(0)
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("pkr")
const [calculateAmount, setCalculateAmount] = useState(0)

const heyMine = useMe(from)
const opical = Object.keys(heyMine)

const swap = ()=>{
  setFrom(to)
  setTo(from)
  setCalculateAmount(amount)
  setAmount(calculateAmount)
}

const convert = ()=>{
  setCalculateAmount(amount * heyMine[to])
   
}
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://media.licdn.com/dms/image/D4D12AQGkhVu2gh8X6g/article-cover_image-shrink_600_2000/0/1716287814954?e=2147483647&v=beta&t=ED8s7ACPwHL_6r9e_9SsHwqzrqpG_1Gkng8sPu7umPo')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => { // jab b from submit hota ha to kahi na kahi jata ha kisi address p kiis url p to hm ni chahte k jaye to is liye lagaya ha convert 
                      e.preventDefault(); 
                     convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={opical}
                          onCurrencyChange={(currency)=> setAmount(currency)} 
                          selectCurrency={from}
                          onAmountChange = {(amount)=>setAmount(amount)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                        label="to"
                        amount={calculateAmount}
                        currencyOptions={opical}
                        onCurrencyChange={(currency)=> setTo(currency)} 
                        selectCurrency={to}
                          amountDisabled
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}, value = {calculateAmount}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
