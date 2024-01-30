import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Calculation = () => {
  const [values, setValues] = useState({
    wages: 0,
    benefits: 0,
    pensions: 0,
    otherIncome: 0,
    rent: 0,
    loans: 0,
    utilityBills: 0,
    otherOutgoings: 0,
    gambling: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: parseFloat(value) || 0,
    });
  };

  const calculateSum = (category) => {
    return category.reduce((sum, item) => sum + values[item], 0) + values.gambling;
  };

  const handleCalculate = () => {
    document.getElementById('sumIncomeResult').innerText = `Sum of Incomes: ${calculateSum(['wages', 'benefits', 'pensions', 'otherIncome'])}`;
    document.getElementById('sumOutcomeResult').innerText = `Sum of Outgoings: ${calculateSum(['rent', 'loans', 'utilityBills', 'otherOutgoings'])}`;
    document.getElementById('sumGamblingResult').innerText = `Sum of Gambling: ${values.gambling}`;
  };

  const data = [
    { name: 'Sum of Incomes', value: calculateSum(['wages', 'benefits', 'pensions', 'otherIncome']) },
    { name: 'Sum of Outgoings', value: calculateSum(['rent', 'loans', 'utilityBills', 'otherOutgoings']) },
    { name: 'Sum of Gambling', value: values.gambling },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="font-bold text-2xl md:text-3xl">Calculation</h2>
      <div className="flex flex-col sm:space-y-4 md:flex-row md:space-x-4">
        {['Wages', 'Benefits', 'Pensions', 'Other Income'].map((income) => (
          <div key={income} className="flex flex-col">
            <label className="text-lg">{income}:</label>
            <input type="number" name={income.toLowerCase().replace(' ', '')} value={values[income.toLowerCase().replace(' ', '')]} onChange={handleChange} className="border p-2" />
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:space-y-4 md:flex-row md:space-x-4 mt-4">
        {['Rent', 'Loans', 'Utility Bills', 'Other Outgoings'].map((outgoing) => (
          <div key={outgoing} className="flex flex-col">
            <label className="text-lg">{outgoing}:</label>
            <input type="number" name={outgoing.toLowerCase().replace(' ', '')} value={values[outgoing.toLowerCase().replace(' ', '')]} onChange={handleChange} className="border p-2" />
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:space-y-4 md:flex-row md:space-x-4 mt-4">
        <div className="flex flex-col">
          <label className="text-lg">Gambling:</label>
          <input type="number" name="gambling" value={values.gambling} onChange={handleChange} className="border p-2" />
        </div>
      </div>
      <br />
      <div className="flex justify-center">
        <button className="bg-yellow-500 opacity-90 text-black p-2" onClick={handleCalculate}>
          Calculate
        </button>
      </div>
      <div>
        <p id="sumIncomeResult" className="text-lg mt-4"></p>
        <p id="sumOutcomeResult" className="text-lg mt-2"></p>
        <p id="sumGamblingResult" className="text-lg mt-2"></p>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Calculation;
