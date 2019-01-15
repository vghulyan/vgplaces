import React, {Component} from 'react';
import {Platform, StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
//import placeImage from './src/assets/Matenadaran.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'CMD+M, Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          //image: placeImage
          image: {
            uri: "https://lh5.googleusercontent.com/proxy/yHgJqa6ePPwafGEJ_grwalkoWaf5pYv9F5xRf5n2dBIPnI_dm9_9Ng12NoeXw79Q3PbKxsljsaKKnvZL6a5WHkMUIH4vHhiqiy9h6OycwT7Thjkj6xNlueKy5PSPEld5yKjybhrs0iNEBKzB=s1536-k-no"
          }
        })
      }
    })
  };

  placeDeleteHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    })
  };

  modalCloseHandler = () => {
    this.setState({ selectedPlace: null})
  };

  placeSelectHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
  };

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail
            selectedPlace={this.state.selectedPlace}
            onItemDeleted={this.placeDeleteHandler}
            onModalClosed={this.modalCloseHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
            places={this.state.places}
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
