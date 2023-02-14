import { Button } from 'react-native';

const Screen1 = ({navigation}) => {
    return (
        <Button
            title="Экран 2"
            onPress={() =>
                navigation.navigate('Экран 2', {name: 'Jane'})
            }
        />
    );
};

export default Screen1;
