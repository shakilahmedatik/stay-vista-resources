import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import Loader from '../../../Shared/Loader'

// export const data = [
//   ['Day', 'Sales'],
//   ['9', 1000],
//   ['10', 1170],
//   ['11', 660],
//   ['12', 1030],
// ]

export const options = {
  title: 'Sales Over Time',
  curveType: 'function',
  legend: { position: 'bottom' },
  series: [{ color: '#F43F5E' }],
}
const SalesLineChart = ({ data }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      {loading ? (
        <Loader smallHeight />
      ) : data.length > 1 ? (
        <Chart
          chartType='LineChart'
          width='100%'
          data={data}
          options={options}
        />
      ) : (
        <>
          <Loader smallHeight />
          <p className='text-center'>
            Not enough data available for this section!
          </p>
        </>
      )}
      {/* {data && (
        <Chart
          chartType='LineChart'
          width='100%'
          data={data}
          options={options}
        />
      )} */}
    </>
  )
}

export default SalesLineChart
