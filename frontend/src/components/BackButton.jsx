import React from 'react'

import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({destination = '/users/dashboard'}) => {
  return (
    <div>
      {/*bg-sky-800 text-white px-4 py-1 rounded-lg w-fit */}
        <Link to={destination} >
            <BsArrowLeft className='text-2xl bg-sky-800 text-white w-10 h-7 rounded-md p-1 font-bold '/>
        </Link>
    </div>
  )
}

export default BackButton;