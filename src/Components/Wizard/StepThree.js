import React, { Component } from 'react';
import { thisTypeAnnotation } from '@babel/types';
import axios from 'axios';




class StepThree extends Component {
    clearInputs(){
        this.setState({
            name:'',
            address:'',
            city:'',
            propertystate:'',
            zipcode: ''
        })
    }

    addNewProperty(){
        let promise = axios.post('/api/property', {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            propertystate: this.props.propertystate,
            zipcode: this.props.zipcode,
            img: this.props.img,
            mortgage: this.props.mortgage,
            rent: this.props.rent
        });
        promise.then(() =>{
            this.clearInputs()
        })

        }
    

    render() {
        const {updateMortgage, updateRent} = this.props
        return (
            <div>
                Monthly Mortgage Amount: <input onChange={(e) => updateMortgage(e.target.value)}></input>
                Desired Monthly Rent: <input onChange={(e) => updateRent(e.target.value)}></input>
    
                <br></br>

                <button onClick={() => this.addNewProperty()}><Link to='/'>Complete</Link></button>
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
        zipcode,
        img,
        mortgage,
        rent
    }
}


export default connect(mapStateToProps, {updateMortgage, updateRent}) (StepThree);

// export default StepThree;