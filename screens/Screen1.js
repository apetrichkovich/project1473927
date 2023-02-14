import { Button, StyleSheet, ImageBackground } from 'react-native';

const image = {uri: 'https://lifeimg.pravda.com/images/doc/e/2/e259fa6-skola.jpg'};

const Screen1 = ({navigation}) => {
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Button
                title="OK"
                onPress={() =>
                    navigation.navigate('Экран 2', {name: 'Jane'})
                }
            />
        </ImageBackground>
    );
};

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
});

export default Screen1;
