import {Button, Text} from 'react-native';

const Screen3 = ({navigation, route}) => {
    return (
        <Button
            title="Экран 1"
            onPress={() =>
                navigation.navigate('Экран 1', {name: 'Jane'})
            }
        />
    );
};

export default Screen3;
