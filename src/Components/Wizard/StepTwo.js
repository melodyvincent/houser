import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Connect} from 'react-redux';
import {updateImg} from '../../ducks/reducer';
import { connect } from 'react-redux';
import {updateMortgage, updateRent} from '../../ducks/reducer';

class StepTwo extends Component {


    render() {
        const{updateImg} = this.props;
        return (
            <div>
                Property Image: <input placeholder="Image URL" onChange={(e) => updateImg(e.target.value)}></input>
                <button><Link to='wizard/step3'>Next Step</Link></button>
                <button><Link to ='/'>Cancel</Link></button>
                
            </div>
        )
    }
}

function mapStateToProps (state) {
    const{img} = state
    return {
        img
    }
}
export default connect(mapStateToProps, {updateImg})(StepTwo);