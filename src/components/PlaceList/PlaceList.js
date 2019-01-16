import React, { PureComponent } from 'react';
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";

class placeList extends PureComponent {

    _keyExtractor = (item, index) => item.key;

    _renderItem = (info) => (
        <ListItem
            id={info.item.key}
            placeName={info.item.name}
            placeImage={info.item.image}
            onItemPressed={() => this.props.onItemSelected(info.item.key)} />
    );

    render() {
        return(
            <FlatList
                style={styles.listContainer}
                data={this.props.places}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                /**
                renderItem={(info) => (
                    <ListItem
                        placeName={info.item.name}
                        placeImage={info.item.image}
                        onItemPressed={() => props.onItemSelected(info.item.key)} />
                )}
                */
            />
        )
    }

};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});


export default placeList;
