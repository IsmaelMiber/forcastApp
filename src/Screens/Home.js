import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { getCITIES } from "../redux/Actions";
import store from "../redux/store";
import { connect } from 'react-redux'
import Splash from "./Splash";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    showDetailsOfCityForcast = (city) => {
        this.props.navigation.navigate({
            routeName: "City",
            params: {
                city
            }
        })
    }

    componentDidMount() {
        var unsbscribe = store.subscribe(() => {
            setTimeout(() => {
                this.setState({loading: false});
                unsbscribe();
            }, 2000);
        });
        this.props.getCities();
    }


    render() {
        var {cities} = this.props;

        if(this.state.loading) {
            return <Splash />
        }

        return(
            <View style={{flex: 1, backgroundColor: "#ddd"}}>
                <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "#eee", paddingVertical: 16,}}>
                    <Text style={{fontSize: 16, fontWeight: "bold"}}>AccuWeather Top 5 Cites</Text>
                </View>
                <ScrollView style={{flexGrow: 1}} contentContainerStyle={{flexGrow: 1}}>
                    <View style={{flex: 1, paddingHorizontal: 24, paddingVertical: 40, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between",}}>
                        {
                            cities && cities.length > 0 ?
                                cities.map((city, index) => {
                                    return(
                                        <TouchableOpacity onPress={() => this.showDetailsOfCityForcast(city)} key={index} style={{marginBottom: 20, borderRadius: 20, width: 150, backgroundColor: "#f2f9fb", height: 150, justifyContent: "center", alignItems: "center"}}>
                                            <Text style={{fontWeight: "bold", fontSize: 20}}>{city.EnglishName}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            :
                                <View style={{flex: 1, alignItems: "center", justifyContent: "center",}}>
                                    <Text style={{fontSize: 16, fontWeight: "bold", textAlign: "center",}}>Error Connection</Text>
                                </View>
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        cities: state.cities.cities,
    });
}


const mapDispatchToProps = (dispatch) => ({
    getCities: () => dispatch(getCITIES)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);