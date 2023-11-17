const ToggleBtn = ({ toggleHandler }) => {
  return (
    <>
      <label
        htmlFor='Toggle3'
        className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'
      >
        <input
          onChange={toggleHandler}
          id='Toggle3'
          type='checkbox'
          className='hidden peer'
        />
        <span className='px-4 py-1 rounded-l-md bg-rose-400 peer-checked:bg-gray-300'>
          Guest
        </span>
        <span className='px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-rose-400'>
          Host
        </span>
      </label>
    </>
  )
}

export default ToggleBtn
