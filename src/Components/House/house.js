import React, { Component } from 'react'

 class House extends Component {
    render() {
        return (
            <div>
                <p>Property Name: {props.name}</p>
                <p>Address: {props.address}</p>
                <p>City: {props.city}</p>
                <p>State: {props.propertystate}</p>
                <p>Zipcode: {props.zipcode}</p>
                <button onClick={(props.deleteProperty(props.id))}>Delete</button>
            </div>
        )
    }
}

export default House;
