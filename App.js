import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      places: []
    };
  }

  placeNameChangeHandler = (val) => {
    this.setState({placeName:val})
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  };

  render() {
    const placesOutput = this.state.places.map((place,i) => (
        <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.placeInput}
              value={this.state.placeName}
              onChangeText={this.placeNameChangeHandler}
              placeholder="Find a place"
          />

          <Button id="add" title="Add" onPress={this.placeSubmitHandler} style={styles.placeButton}/>
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
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
  },
  listContainer: {
    width: "100%"
  }
});
