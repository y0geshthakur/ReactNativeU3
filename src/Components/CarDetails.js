import React from "react";
import { Button, Image, Text,View } from "react-native";
import Item from './Item';
import ItemSection from "./ItemSection";

const CarDetails = (props) =>{
    const {headContainer, headerText, imageStyle} = styles
    return (
        <Item>
            <ItemSection>
                <View style = {headContainer}>
                    <Text style = {headerText}>{props.brand.brand}</Text>
                    <Text style = {headerText}>{props.brand.brand} : {props.brand.model[1].name}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image style = {imageStyle} source={{uri: props.brand.model[0].image}}/>
            </ItemSection>
            <ItemSection>
            </ItemSection>
        </Item>
    )
}

styles = {
    headContainer: {
        flexDirection:'column',
        justifyContent: "flex-start"
    },

    headerText: {
        fontSize: 20,
        fontWeight: 500,
        textTransform: "uppercase" 
    },

    imageStyle: {
        height: 300,
        flex:1,
    }
}

export default CarDetails