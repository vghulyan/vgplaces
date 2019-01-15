import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.ListItem} >
            <Text style={styles.textItem}>
                {props.placeName}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
   ListItem: {
       width: "100%",
       padding: 10,
       backgroundColor: "#eee",
       marginBottom: 5
   },
    textItem: {
       color: 'black'
    }
});

export default listItem;