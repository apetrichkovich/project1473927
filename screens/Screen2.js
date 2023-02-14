import { Button } from 'react-native';

const Screen2 = ({navigation}) => {
    return (
        <Button
            title="Экран 3"
            onPress={() =>
                navigation.navigate('Экран 3', {name: 'Jane'})
            }
        />
    );
};

export default Screen2;
