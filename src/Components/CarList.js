//step 1 : import libaries

import { Component } from "react";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import axios from "axios";
import CarDetails from "./CarDetails";
//step 2 : create component 

//functional component
// const CarList = () => { 
//     return(
//         <View>
//         <Text>Car List</Text>
//         </View>
//     )
// }

//class component
class CarList extends Component{

    state = {carList:[]}

    componentDidMount() {
        // console.log("Called from cdm")
        axios.get('https://my-json-server.typicode.com/gunjan-keswani/cars/cars')
        .then((response)=>{
            this.setState({carList:response.data})
        })
    }
    renderList = () =>{
        // return this.state.carList.map((brand)=>{
        //     return <Text key={brand.model[1].name}>{brand.model[1].name}</Text>
        // })
        return this.state.carList.map((brand)=>{
            return <CarDetails key={brand.model[1].name} brand={brand}/>
        })
    } 
    render(){
        console.log(this.state)
        return(
        <ScrollView>{
            this.renderList()
        }</ScrollView>
        )
    }
}

//step 3:  make component available to other component

export default CarList