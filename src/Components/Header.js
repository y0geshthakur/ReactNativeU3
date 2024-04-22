import { Text, View } from "react-native";

const Header =(props)=>{
    const {textStyling,viewStyle} = styles;
    return(
        <View style={viewStyle}>
            <Text style={textStyling}>{props.title}</Text>
        </View>
    )
}

const styles ={
    textStyling : {
        fontSize : 25
    },
    viewStyle :{
        backgroundColor : 'pink',
        height : 70,
        paddingTop : 20,
        justifyContent : 'center',
        alignItem : 'center'
    }
}
export default Header