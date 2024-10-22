/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {
    NavigationContainer,
    NavigationContainerRef
} from '@react-navigation/native';
import { ISessionStorage, ZustandKeyPersist } from 'app/zustand/keyZustand';
import { ImageLoading } from 'components/image/ImageLoading';
import { AppToast } from 'components/toast/AppToast';
import React, { useEffect, useRef } from 'react';
import { Platform, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';
import NavigationService from 'shared/helpers/NavigationService';
import { configureLocalization, LANGUAGES } from 'shared/localization';
import ThemeProvider from 'shared/theme';
import RootStack from './modules/navigation';
import { useSave } from './zustand';
import { getLocal } from './zustand/asyncStoreFunc';

export const SessionStorage: ISessionStorage = {
    token: ''
}

export const appState = {
    initializeReady: false,
};

const App = () => {
    const routeNameRef = useRef();
    const navigationRef = useRef<any>();
    const save = useSave()

    getLocal('Localization').then((value?: LANGUAGES) => {
        configureLocalization(value);
    });

    useEffect(() => {
        ZustandKeyPersist.forEach((key: any) => {
            if (key != 'Localization') {
                getLocal(key).then((value: any) => {
                    save(key, value)
                })
            }
        })
    }, [save])

    return <ThemeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer
                ref={(ref: NavigationContainerRef<any>) => {
                    NavigationService.setTopLevelNavigator(ref);
                    navigationRef.current = ref;
                }}
                onReady={() => {
                    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
                }}
                onStateChange={async () => {

                    const previousRouteName = routeNameRef.current;
                    const currentRouteName = navigationRef.current.getCurrentRoute().name;

                    if (previousRouteName !== currentRouteName) {
                        // await analytics().logScreenView({
                        //     screen_name: currentRouteName,
                        //     screen_class: currentRouteName,
                        // });
                    }

                }}
            >
                <Host>
                    <StatusBar barStyle={Platform.select({ android: 'light-content', ios: 'dark-content', })} />
                    <AppToast />
                    <RootStack />
                    <ImageLoading />
                </Host>
            </NavigationContainer>
        </GestureHandlerRootView>
    </ThemeProvider>
};

export default App;
