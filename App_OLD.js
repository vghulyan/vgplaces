import React, {Component} from 'react';
import {Platform, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
//import placeImage from './src/assets/Matenadaran.jpg';
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail';
import {addPlace, deletePlace, deselectPlace, selectPlace} from './src/store/actions/index';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'CMD+M, Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
        console.log('Place added: ', placeName);
    };

    placeDeleteHandler = () => {
        this.props.onDeletePlace();
    };

    modalCloseHandler = () => {
        this.props.onDeselectPlace();
    };

    placeSelectHandler = key => {
        this.props.onSelectPlace(key);
    };

    render() {

        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.placeDeleteHandler}
                    onModalClosed={this.modalCloseHandler}
                />
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <PlaceList
                    places={this.props.places}
                    onItemSelected={this.placeSelectHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listContainer: {
        width: "100%"
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);