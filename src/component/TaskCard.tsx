import React from 'react'

const TaskCard = ({title,id,points}  ) => {
  return (
    <div className='text-4xl border rounded-lg px-2 m-2 bg-gray-50'>
      <div className='text-4xl py-2 font-semibold'>
        {title}
      </div>
      <div className='py-2 flex gap-4 justify-between text-gray-500'>
        <div>{id}</div>
        <div>{points}</div>
        
      </div>
    </div>
  )
}

export default TaskCard