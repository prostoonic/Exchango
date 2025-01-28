import RotateIcon from './../images/rotate-icon'
import './../styles/style.css'
export default function App() {
  return (
    <>
      <div className="background"></div>
      <div className="header-wrapper">
        <h1 className='header'>Convert USD to GBP</h1>
      </div>
      <main className="converter">
        <div className="converter__header">
          <h2>Make fast and affordable international business payments</h2>
          <p className="converter__description">Send secure international business payments in <span>XX</span>  currencies, all at competitive rates with no hidden fees.</p>
        </div>
        <div className="content converter__body">
          <div className="converter__interface">
            <div className="converter__inputs-wrapper">
              <input type="number"  min="0" className="converter__input input converter__amount-input"/>
                <select name="currency" id="" className="converter__select input select">
                  <option value="USD">USD</option>
                  <option value="BYN">BYN</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <RotateIcon/>
              <div className="converter__inputs-wrapper">
              <input type="number" min="1" className="converter__input input converter__converted-input"/>
                <select name="currency" id="" className="converter__select input select">
                  <option value="USD">USD</option>
                  <option value="BYN">BYN</option>
                  <option value="EUR">EUR</option>
                </select>
            </div>
          </div>
          <div className="converter__footer">
            <div className="converter__exchange-rate">
              <p><span>1.00 USD = 0.8875 GBP</span></p>
            </div>
            <button className="button converter__button">Get started</button>
          </div>
        </div>
      </main>
    </>
  )
}