/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Text,
    TouchableOpacity, View
} from 'react-native';
const App = () => {
    return <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={{ width: 100, height: 50, backgroundColor: '#B123DD' }} onPress={() => console.log('a')}>
            <Text>
                button
            </Text>
        </TouchableOpacity>
    </View>
}


export default App;
