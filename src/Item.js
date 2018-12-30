import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { WebView } from "react-native-webview";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { navigation } = this.props;
        const link = navigation.getParam('link', 'NO-ID');
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    marginBottom: 5, width: null,
                    height: 40, backgroundColor: '#db2d43',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                     <Text style={{marginLeft: 10, color: '#fff', fontWeight: 'bold'}} onPress={() => this.props.navigation.goBack()}>Back</Text>
                </View>
                <WebView
                    source={{ uri: link }}
                    style={{ flex: 1 }}
                />
            </View>
        );
    }
}

export default Item;