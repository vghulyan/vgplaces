import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {

    state = {
        placeName: 'Yerevan'
    };

    placeNameChangeHandler = (val) => {
        this.setState({placeName:val})
    };

    placeSubmitHandler = () => {
        if(this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    };


    render() {
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                    placeholder="Find a place"
                />

                <Button id="add" title="Add"
                        onPress={this.placeSubmitHandler}
                        style={styles.placeButton}/>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%",
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    placeButton: {
        width: "30%"
    }
});


export default PlaceInput;