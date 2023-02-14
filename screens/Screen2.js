import { Text } from 'react-native';

const Screen2 = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

export default Screen2;
