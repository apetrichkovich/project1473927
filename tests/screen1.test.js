import React from 'react';
import Screen1 from '../screens/Screen1';
import { render, fireEvent } from '@testing-library/react-native';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

test('screen 1', () => {
    const props = {navigation: {navigate: jest.fn()}};
    const { getByTestId } = render(<Screen1 {...props}/>);
    fireEvent.changeText(getByTestId('username'), 'Jestica');
    fireEvent.press(getByTestId('button'));
    expect(props.navigation.navigate).toHaveBeenCalledWith('Экран 2');
});
