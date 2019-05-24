import React, { Component } from 'react';
import house from '../House/house';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../House/house';


class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            houseList:[]
        }

        this.getHouseList = this.getHouseList.bind(this);
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    getHouseList() {
        let promise = axios.get(`/api/houselist`);
        promise.then((res) => {
            this.setState({
                houseList: res.data
            })
        })
    }

    deleteProperty(id) {
        console.log('button works')
        let promise = axios.delete(`/api/property/${id}`);
        promise.then(() => {
         this.getHouseList()
        })
    }
    
    componentDidMount() {
        this.getHouseList()
    }

        

    render() {
        return (
            <div>
            {this.state.houseList.map((val) => {
                return(
                    <House
                        key={val.id}
                        id={val.id}
                        name={val.name}
                        address={val.address}
                        city={val.city}
                        state={val.state}
                        zipcode={val.zip}
                        deleteProperty={this.deleteProperty} />)

             
            })}
            <button><Link to='/wizard/step1'>Add New Property</Link></button>  
                
            </div>
        )
    }
};

export default Dashboard;