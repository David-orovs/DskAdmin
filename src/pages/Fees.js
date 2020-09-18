import React from 'react'
import HCard from './General/HCard'
import Colors from '../utils/colors'


export default function Fees() {
    return (
      <section className='overview'>
        <div className='row'>
          <div className='col-sm-3'>
            <HCard iconName='car' backgroundColor={Colors.teal} label='ferrari' number={50000000} />
          </div>
          <div className='col-sm-3'>
            <HCard iconName='money' backgroundColor={Colors.pink} label='set tax' number={5000} />
          </div>
        </div>
      </section>
    )
}
