import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import startmainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    loginHandler = () => {
        startmainTabs();
    };

    render() {
        return(
            <View>
                <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandler} />
            </View>
        )
    }
};

export default AuthScreen;