import {View, Button, Text} from 'react-native';

const Screen3 = ({navigation}) => {
    return (
        <>
            <Text>Картинка 1</Text>
            <Text>Картинка 2</Text>
            <Text>Картинка 3</Text>
            <Text>Картинка 4</Text>
            <Text>Картинка 5</Text>
            <Button title="Ещё раз" onPress={() => navigation.navigate('Экран 1')}/>
        </>
    );
};

export default Screen3;
