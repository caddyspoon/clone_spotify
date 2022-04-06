import React from 'react'
import { Link } from 'react-router-dom'

// import './NavigationBar.scss'


const NavigationBar = () => {


  return (
    <div className='NavigationBar'>
      <div className='NavigationBar__UpperBox'>
        <div className='NavigationBar__Logo'>
          <Link to='/'>
            <p>홈으로</p>
          </Link>
        </div>
        <div className='NavigationBar__LinkBox'>
          {/* <Link
            to='/introduce'
            className='NavigationBar__Link'
          >
            {introduceLinkText}
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
