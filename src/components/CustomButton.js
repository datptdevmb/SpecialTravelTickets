import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import stylesbutton from '../styles/components/CustomButton_style'

const CustomButton = ({style,title, onPress}) =>{
    const [pressnd, setpressnd] = useState(false)
    const handlePress = ()=>{
        setpressnd(true)
        onPress()
    }
    return(
        <View style={stylesbutton.containerbutton}>
            <TouchableOpacity style={[stylesbutton.button, style]} onPress={handlePress}>
                <Text style={stylesbutton.textbutton}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default CustomButton