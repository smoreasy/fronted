import { atom } from 'recoil';
import { recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist({
   key: 'user',
   storage: localStorage,
});

export const IsLogin = atom({
   key: 'IsLogin',
   default: false,
   effects_UNSTABLE: [persistAtom],
});

export const UserAtom = atom({
   key: 'UserAtom',
   default: {},
   effects_UNSTABLE: [persistAtom],
});