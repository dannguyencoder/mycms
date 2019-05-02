import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

export default props =>

  <div className='buttons fadein col-md-12'>
    <div className='button col-md-6'>
      <label htmlFor='single'>
        <FontAwesomeIcon icon={faImage} color='#3B5998' size='10x' />
        {/* <img className='image' src='http://localhost:3001\images\User\1\2019\04\20\Moon.jpg'/> */}
      </label>
      <input type='file' id='single-avatar' name='single-avatar' onChange={props.onChange} />
    </div>

    {/* <div className='button col-md-6'>
      <label htmlFor='multi'>
        <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' />
      </label>
      <input type='file' id='multi-avarta' name='multi-avarta' onChange={props.onChange} multiple />
    </div> */}
  </div>