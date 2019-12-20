import React from "react";
import { View, Text } from "react-native";


function Splash(props) {
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 30, fontWeight:"bold"}}>Forcast App</Text>
        </View>
    )
}

export default React.memo(Splash);