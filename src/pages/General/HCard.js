import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class HCard extends React.Component {
  render() {
    let iconClass = `iconWrapper ${this.props.backgroundColor}`;
    return(
      <div className='hCard card'>
        <div style={{backgroundColor:`${this.props.backgroundColor}`}} className='iconWrapper'>
          <FontAwesome name={this.props.iconName} size='2x' />
        </div>
        <div className='label'>{this.props.label}</div>          
        <p className='dataWrapper__number'>{this.props.number}</p>
      </div>
    );
  }
}
