import { create, StoreApi, UseBoundStore } from 'zustand';
import { ZustandKeyPersist, ZustandModel } from './keyZustand';
import { setLocal } from './asyncStoreFunc';
interface IRootState {
  state: ZustandModel;
  save: UseSave;
  get: UseGet;
}

type UseSave = <K extends keyof ZustandModel, V extends ZustandModel[K]>(key: K, value: V) => void;
type UseGet = <K extends keyof ZustandModel>(key: K) => ZustandModel[K];

const StoreZustand: UseBoundStore<StoreApi<IRootState>> = create((set, get) => ({
    state: {},
    save: (key, value) => {
        if (ZustandKeyPersist?.length > 0 && ZustandKeyPersist?.includes(key)) {
            setLocal(key, value).then(() => {
                return set((rootState: IRootState) => ({
                    state: {
                        ...rootState?.state,
                        [key]: value,
                    },
                }));
            });
        }

        return set((rootState: any) => {
            return {
                state: {
                    ...rootState?.state,
                    [key]: value,
                },
            };
        });
    },
    get: (key) => get()?.state?.[key],
}),
);

export const useSave = () => StoreZustand((rootState) => rootState?.save);
export const useGet = <K extends keyof ZustandModel>(key: K) => StoreZustand((rootState) => rootState?.state?.[key]);
export default StoreZustand;
