export default function Calculator({userInput, onHandleInputChange}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={userInput.initialInvestment} onChange={(e) => onHandleInputChange('initialInvestment',e.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(e) => onHandleInputChange('annualInvestment',userInput)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(e) => onHandleInputChange('expectedReturn',e.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Duration</label>
          <input type="number" required value={userInput.duration} onChange={(e) => onHandleInputChange('duration',e.target.value)}/>
        </p>
      </div>
    </section>
  );
}
