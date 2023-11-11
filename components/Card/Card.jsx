const Card = () => {
  return (
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src='https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg'
            alt='Room'
          />
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
            <HeartButton />
          </div>
        </div>
        <div className='font-semibold text-lg'>Sidemen, Indonesia</div>
        <div className='font-light text-neutral-500'>
          5 nights . June 19 - 26
        </div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ 200</div>
          <div className='font-light'>night</div>
        </div>
      </div>
    </div>
  )
}

export default Card
