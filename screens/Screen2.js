import {Button, StyleSheet, View, Image} from 'react-native';
import {Component} from 'react';

const image1 = {uri: 'https://lifeimg.pravda.com/images/doc/e/2/e259fa6-skola.jpg'};
const image1i = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU'};

export default class Screen2 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            current: 0,
            angels: [180, 180, 180, 180, 180],
            images: [image1, image1, image1, image1, image1],
            showButton: false
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.rotate(),
            1
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    rotate() {
        const state = this.state;
        state.angels[state.current] -= 2;
        if (state.angels[state.current] === 90) {
            state.images[state.current] = image1i;
        }
        if (state.angels[state.current] === 0) {
            if (state.current < 4) {
                state.current++;
            } else {
                clearInterval(this.timerID);
                state.showButton = true;
            }
        }
        this.setState(state);
    }

    render() {
        return (
            <View>
                <View style={styles.view}>
                    <Image source={this.state.images[0]} style={[styles.image, {transform: [{rotateX: this.state.angels[0] + 'deg'}]}]}/>
                    <Image source={this.state.images[1]} style={[styles.image, {transform: [{rotateX: this.state.angels[1] + 'deg'}]}]}/>
                    <Image source={this.state.images[2]} style={[styles.image, {transform: [{rotateX: this.state.angels[2] + 'deg'}]}]}/>
                    <Image source={this.state.images[3]} style={[styles.image, {transform: [{rotateX: this.state.angels[3] + 'deg'}]}]}/>
                    <Image source={this.state.images[4]} style={[styles.image, {transform: [{rotateX: this.state.angels[4] + 'deg'}]}]}/>
                </View>
                {this.state.showButton && <Button title="Описание" onPress={() => this.props.navigation.navigate('Экран 3')}/>}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image: {
        width: 100,
        height: 100,
    },
});
