import { useState } from 'react'
import './App.css'

function App() {
  const [initialMoney, setInitialMoney] = useState('');
  const [rate, setRate] = useState('');
  const [expectedMoney, setExpectedMoney] = useState('');
  const [results, setResults] = useState([]);

  const calculateInvestment = () => {
    let money = parseFloat(initialMoney);
    const interestRate = parseFloat(rate) / 100;
    const goal = parseFloat(expectedMoney);
    let year = 2025;
    let data = [];

    if (isNaN(money) || isNaN(interestRate) || isNaN(goal) || money <= 0 || interestRate <= 0 || goal <= money) {
      alert("Vui lòng nhập số hợp lệ! Số tiền mong muốn phải lớn hơn số tiền gửi.");
      return;
    }

    while (money < goal) {
      let moneyAfterYear = money + money * interestRate;
      data.push({ year, money: money.toFixed(2), rate: (interestRate * 100).toFixed(2) + "%", afterYear: moneyAfterYear.toFixed(2) });
      money = moneyAfterYear;
      year++;
    }

    setResults(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Investment Calculator</h1>
      <div>
        <input
          type="number"
          placeholder="Nhập số tiền gửi"
          value={initialMoney}
          onChange={(e) => setInitialMoney(e.target.value)}
        />
        <label> Invest money</label>
      </div>

      <div>
        <input
          type="number"
          placeholder="Nhập lãi suất (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <label> Rate (%)</label>
      </div>

      <div>
        <input
          type="number"
          placeholder="Nhập số tiền mong muốn"
          value={expectedMoney}
          onChange={(e) => setExpectedMoney(e.target.value)}
        />
        <label> Expected money</label>
      </div>

      <button onClick={calculateInvestment}>Calculate</button>

      {results.length > 0 && (
        <table className='table'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Money</th>
              <th>Rate</th>
              <th>Money after year</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.money}</td>
                <td>{row.rate}</td>
                <td>{row.afterYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App
