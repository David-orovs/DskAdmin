import React from 'react';
import HCard from './HCard';
import './overview.css'
import Colors from '../../utils/colors'
class Overview extends React.Component {

  render() {
    return (
      <section className='overview'>
        <div className='row'>
          <div className='col-sm-3'>
            <HCard iconName='money' backgroundColor={Colors.teal} label='outband bandwith' number={7842356} />
          </div>
          <div className='col-sm-3'>
            <HCard iconName='shopping-cart' backgroundColor={Colors.pink} label='inbound bandwith' number={1256} />
          </div>
          <div className='col-sm-3'>
            <HCard iconName='users' backgroundColor={Colors.black} label='users' number={8356} prefix='$' />
          </div>
          <div className='col-sm-3 '>
            <HCard iconName='bar-chart' backgroundColor={Colors.cyan} label='cars ordered' number={20085} suffix='%' />
          </div>
          <div className='col-sm-3 '>
            <HCard iconName='bar-chart' backgroundColor={Colors.purple} label='cars today' number={185} suffix='%' />
          </div>
        </div>
      </section>
    )
  }
}

export default Overview;


