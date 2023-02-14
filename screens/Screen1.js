import { Button } from 'react-native';

const Screen1 = ({navigation}) => {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Экран 2', {name: 'Jane'})
            }
        />
    );
};

export default Screen1;
