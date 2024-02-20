import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Results({ input }) {
      console.log(input);
      const resultData =  calculateInvestmentResults(input);
      const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
      console.log(resultData);
      return (
            <table id="result">
                  <thead>
                        <tr>
                              <th>Year</th>
                              <th>Investment Value</th>
                              <th>Interest (Year)</th>
                              <th>Total Interest</th>
                              <th>Investment Capital</th>
                        </tr>
                  </thead>
                  <tbody>
                        {resultData.map(yearData => {
                              const totalInterestValue = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                              const totalAmountInvested = yearData.valueEndOfYear - totalInterestValue;

                              return <tr key={yearData.year} >
                                    <td>{ formatter.format(yearData.year) }</td>
                                    <td>{ formatter.format(yearData.valueEndOfYear) }</td>
                                    <td>{ formatter.format(yearData.interest) }</td>
                                    <td>{ formatter.format(totalInterestValue) }</td>
                                    <td>{ formatter.format(totalAmountInvested) }</td>
                              </tr>
                        })}
                  </tbody>
            </table>
      )
}