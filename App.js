import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Экран 1"
              component={Screen1}
              options={{title: 'Экран 1'}}
          />
          <Stack.Screen name="Экран 2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
