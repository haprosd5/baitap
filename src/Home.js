import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

// thanh phan
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }
    componentDidMount() {
        try {
            fetch("https://tygia.000webhostapp.com/get_tin.php")
                .then((res) => res.json())
                .then((temp => {
                    this.setState({ data: temp })
                }))

        } catch (error) {

        }

    }
    _renderItem({ item, index }) {
        return (
            <View style={{
                width: null, height: 100, justifyContent: 'center', alignItems: 'center',
                borderColor: 'blue', borderWidth: 1, borderRadius: 5, flexDirection: 'row'
            }}>
                <TouchableOpacity style={{
                    flex: 1, marginLeft: 5
                }}
                    onPress={() => this.props.navigation.navigate('Item', { link: item.link })}
                >
                    <Image source={{ uri: item.image }}
                        style={{ width: 100, height: 95, resizeMode: 'cover' }} />

                </TouchableOpacity>
                <Text onPress={() => this.props.navigation.navigate('Item', { link: item.link })}
                    style={{ flex: 2 }} numberOfLines={1}>
                    {item.title}
                </Text>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.data}
                    renderItem={({ item, index }) => this._renderItem({ item, index })}
                />

            </View>
        );
    }
}

export default Home;