import { DateRange } from 'react-date-range'

const DatePicker = ({ value, handleSelect }) => {
  return (
    <DateRange
      rangeColors={['#F43F5E']}
      ranges={[value]}
      onChange={handleSelect}
      date={value.startDate}
      direction='vertical'
      showDateDisplay={false}
      minDate={value.startDate}
      maxDate={value.endDate}
    />
  )
}

export default DatePicker
