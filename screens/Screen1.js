import { Button, StyleSheet, ImageBackground, Text, TextInput } from 'react-native';
import { Component } from 'react';

const image = {uri: 'https://lifeimg.pravda.com/images/doc/e/2/e259fa6-skola.jpg'};

export default class Screen1 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: ''
        }
        this.setUsername = this.setUsername.bind(this); // you need this to be able to access state from setUsername
    }

    setUsername() {
        console.log('username is', this.state.username);
        this.props.navigation.navigate('Экран 2');
    }

    render() {
        return (
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Как вас зовут?</Text>
                <TextInput testID="username" style={styles.input} onChangeText={(username) => {this.setState({username})}}/>
                <Button testID="button" title="OK" onPress={this.setUsername}/>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
    },
});
