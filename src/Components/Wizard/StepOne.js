import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Connect } from 'react-redux';


 class StepOne extends Component {

    
    componentDidMount(){

    }

    render() {
        console.log(this.props)
        const{updateName, updateAddress, updateCity, updateState, updateZipcode} = this.props;

        return (
            <div>
                <input placeholder='Name' onChange={(e) => updateName(e.target.value)}></input>
                <input placeholder='Address' onChange={(e) => updateAddress(e.target.value)}></input>
                <input placeholder='City' onChange={(e) => updateCity(e.target.value)}></input>
                <input placeholder='State' onChange={(e) => updateState(e.target.value)}></input>
                <input placeholder='Zipcode' onChange={(e) => updateZipcode(e.target.value)}></input>
                <button><Link to='/wizard/step2'>Next</Link></button>
                <button><Link to='/'>Cancel</Link></button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { name, address, city, propertystate, zipcode} = state
    return {
        name,
        address, 
        city, 
        state,
        zipcode
    }
}


export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updatePropertyState, updateZipcode})(StepOne);

// export default StepOne;





