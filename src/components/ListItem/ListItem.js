import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listItem = (props) => (
    <View>
        <Text style={styles.listItem}>
            {props.placeName}
        </Text>
    </View>
);

const styles = StyleSheet.create({
   listItem: {
       width: "100%",
       padding: 10,
       backgroundColor: "#eee",
       marginBottom: 5
   }
});

export default listItem;