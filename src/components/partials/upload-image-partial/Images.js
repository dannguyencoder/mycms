import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default props =>
  props.images.map((image, i) =>
    <div key={i} className='fadein imageDiv'>
      <div
        onClick={() => props.removeImage(image.public_id)}
        className='delete'>
        <FontAwesomeIcon icon={faTimesCircle} size='2x' />
      </div>
      <img id='avarta' className="image" src={image.src} alt='' />
    </div>
  )