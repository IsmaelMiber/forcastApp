import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function City(props) {
    var city = props.navigation.getParam("city");
    var forcast = city.zforcast;
    var { Headline, DailyForecasts } = forcast;
    var { Text: text = "" } = Headline;
    var { Day, Night, Temperature } = DailyForecasts[0];
    var { Minimum, Maximum } = Temperature;
    var { IconPhrase: DayPhase } = Day;
    var { IconPhrase: NightPhase } = Night;
    return(
        <View style={{flex: 1}}>
            <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "#eee", paddingVertical: 16,}}>
                <TouchableOpacity onPress={() => {props.navigation.goBack()}} style={{paddingVertical: 16, paddingHorizontal: 16, position: "absolute", top: 0, right: 0}}>
                    <FontAwesome name="chevron-right" size={22} />
                </TouchableOpacity>
                <Text style={{fontSize: 16, fontWeight: "bold", textAlign: "right"}}>{city.EnglishName}</Text>
            </View>
            <ScrollView>
                <View style={{paddingHorizontal: 24, paddingVertical: 40,}}>
                    <View style={{marginBottom: 20}}>
                        <Text style={{fontWeight: "bold"}}>Temperature:</Text>
                        <Text>
                            {"Minimum Temp: " + Minimum.Value + Minimum.Unit}
                        </Text>

                        <Text>
                            {"Maximum Temp: " + Maximum.Value + Maximum.Unit}
                        </Text>
                    </View>

                    <View style={{marginBottom: 20, flexDirection: "row",flexWrap: "wrap"}}>
                        <Text style={{fontWeight: "bold",}}>
                            Weather condition: 
                        </Text>
                        <Text>
                            {" " + text}
                        </Text>
                    </View>

                    <View style={{marginBottom: 20, flexDirection: "row",flexWrap: "wrap"}}>
                        <Text style={{fontWeight: "bold",}}>
                            Weather at Day: 
                        </Text>
                        <Text>
                            {" " + DayPhase}
                        </Text>
                    </View>

                    <View style={{flexDirection: "row",flexWrap: "wrap"}}>
                        <Text style={{fontWeight: "bold",}}>
                            Weather at Night: 
                        </Text>
                        <Text>
                            {" " + NightPhase}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default React.memo(City);