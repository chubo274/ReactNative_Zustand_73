import AsyncStorage from '@react-native-async-storage/async-storage';
import { ZustandKeyPersist } from './keyZustand';

export interface IValueUpdate<T> {
  key: keyof T;
  value: any;
}

/// AsyncStorage function
export const getLocal = async (
    key: (typeof ZustandKeyPersist)[number],
): Promise<any> => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        if (
            !jsonValue ||
      jsonValue == null ||
      JSON.parse(jsonValue) == 'undefined' ||
      !JSON.parse(jsonValue)
        )
            return undefined;
        return JSON.parse(jsonValue);
    } catch (e) {
        console.info('localStoreRepo getUser Error', e);
        return undefined;
    }
};

export const setLocal = async (
    key: (typeof ZustandKeyPersist)[number],
    data: any,
): Promise<boolean> => {
    try {
        const jsonValue = JSON.stringify(
            data === undefined || data === null ? '' : data,
        );
        await AsyncStorage.setItem(key, jsonValue);
        return true;
    } catch (e) {
        console.info('localStoreRepo setUser Error', e);
        return false;
    }
};

export const updateLocal = async (
    key: (typeof ZustandKeyPersist)[number],
    data: Array<IValueUpdate<any>>,
): Promise<boolean> => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        const objValue = jsonValue != null ? JSON.parse(jsonValue) : undefined;
        if (jsonValue) {
            data.map((el: IValueUpdate<any>) => {
                objValue[el.key] = el.value;
            });
            const jsonValue = JSON.stringify(objValue);
            await AsyncStorage.setItem(key, jsonValue);
            return true;
        }
        return false;
    } catch (e) {
        console.info('localStoreRepo updateUser Error', e);
        return false;
    }
};

export const removeLocal = async (
    key: (typeof ZustandKeyPersist)[number],
): Promise<boolean> => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (e) {
        console.info('localStoreRepo removeUser Error', e);
        return false;
    }
};
