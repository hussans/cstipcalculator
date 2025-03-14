import React, { useState } from "react";
import InputField from "./InputField";

const TipCalculator = () => {
    
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [customTip, setCustomTip] = useState("");
  const tipPercentages = [5, 10, 15, 25, 50];

  const calculateValues = () => {
    const billAmount = parseFloat(bill) || 0; 
    const tipPercent = parseFloat(tipPercentage) || 0;
    const peopleCount = parseFloat(numberOfPeople) || 0;

    if(peopleCount === 0) {
      return { tipPerPerson: 0, totalPerPerson: 0 };
    }

    const tipAmount = billAmount * (tipPercent / 100);
    const totalBill = billAmount + tipAmount;

    const tipPerPerson = tipAmount / peopleCount;
    const totalPerPerson = totalBill / peopleCount;

    return {
      tipPerPerson: tipPerPerson,
      totalPerPerson: totalPerPerson,
    };
  };

  const { tipPerPerson, totalPerPerson } = calculateValues();

  const handleReset = () => {
    setBill("");
    setTipPercentage("");
    setNumberOfPeople("");
    setCustomTip("");
  };

  const handleTipSelect = (percentage) => {
    setTipPercentage(percentage);
    setCustomTip("");
  };

  const handleCustomTipChange = (e) => {
    const value = e.target.value;
    setCustomTip(value);
    setTipPercentage(value);
  };

  const isDisabled = !bill && !tipPercentage && !numberOfPeople;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-8">
        <InputField label="Bill" icon="/icon-dollar.svg" value={bill} onChange={(e) => setBill(e.target.value)} />
        <div className="mb-6">
          <label className="text-[hsl(186,14%,43%)] mb-4 block font-bold"> Select Tip % </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tipPercentages.map((percentage) => (
              <button key={percentage} onClick={() => handleTipSelect(percentage)} className={`p-2 text-xl font-bold rounded-lg transition-colors 
                ${ tipPercentage === percentage.toString() ? "bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)]" : "bg-[hsl(183,100%,15%)] text-white hover:bg-[hsl(172,67%,45%)] hover:text-[hsl(183,100%,15%)]"
                }`} >
                {percentage}%
              </button>
            ))}
            <input type="number" placeholder="Custom" className="p-2 text-center text-xl rounded-lg bg-[hsl(189,41%,97%)] focus:outline-[hsl(172,67%,45%)] font-bold text-[hsl(183,100%,15%)]" value={customTip} onChange={handleCustomTipChange} />
          </div>
        </div>
        <InputField label="Number of People" icon="/icon-person.svg" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} error={numberOfPeople === "0" ? "Can't be zero" : ""} />
      </div>
      <div className="bg-[hsl(183,100%,15%)] text-white p-8 rounded-xl flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-white"> Tip Amount </h3>
              <p className="text-[hsl(186,14%,43%)] text-sm"> / person </p>
            </div>
            <div className="text-3xl text-[hsl(172,67%,45%)] font-bold">
              ${tipPerPerson.toFixed(2)}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white"> Total </h3>
              <p className="text-[hsl(186,14%,43%)] text-sm"> / person </p>
            </div>
            <div className="text-3xl text-[hsl(172,67%,45%)] font-bold">
              ${totalPerPerson.toFixed(2)}
            </div>
          </div>
        </div>
        <button onClick={handleReset} disabled={isDisabled} className={`w-full py-3 mt-8 rounded-lg uppercase font-bold transition-colors 
            ${  isDisabled ? "bg-[hsl(183,100%,15%)] text-[hsl(183,100%,15%)] opacity-50" : "bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)] hover:bg-[hsl(172,67%,55%)]"
            }`} >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TipCalculator;
