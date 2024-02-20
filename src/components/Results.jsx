import { calculateInvestmentResults } from '../util/investment.js'

export default function Results({ input }) {
      console.log(input);
      const resultData =  calculateInvestmentResults(input);
      console.log(resultData);
      return (
            <p>Results..</p>
      )
}