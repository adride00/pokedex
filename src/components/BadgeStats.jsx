import React from 'react';
import {stats} from './styles/card.js'
export default class BadgeStats extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            stats: []
        }
    }
  render() {
    return (
      <>
        <div className="col-3 bg-light-subtle rounded-3 border">
            <i><img src={this.props.stat.icon} width="25" alt="" /></i>
            <p className="" style={stats}>{this.props.stat.name}</p>
            <p className='fw-bold'>{this.props.stat.value}</p>
        </div>
      </>
    );
  }
}