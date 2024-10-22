import { LANGUAGES } from 'shared/localization'
import { ModeTheme } from 'shared/theme';

export interface ISessionStorage {
  token?: string;
  refreshToken?: string;
}

export const ZustandKeyPersist: (keyof ZustandModel)[] = [
    'Localization',
    'ThemeApp',
];

// if change name of any key in ZustandModel, need check and change for all proj about store
export interface ZustandModel {
  Token?: ISessionStorage,
  Localization?: LANGUAGES,
  ThemeApp?: ModeTheme,
}