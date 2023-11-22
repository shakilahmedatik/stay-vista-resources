import { Chart } from 'react-google-charts'

export const data = [
  ['Day', 'Sales'],
  ['9', 1000],
  ['10', 1170],
  ['11', 660],
  ['12', 1030],
]

export const options = {
  title: 'Sales Over Time',
  curveType: 'function',
  legend: { position: 'bottom' },
  series: [{ color: '#F43F5E' }],
}
const SalesLineChart = () => {
  return (
    <Chart chartType='LineChart' width='100%' data={data} options={options} />
  )
}

export default SalesLineChart
