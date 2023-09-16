import { atom } from 'recoil';
import { recoilPersist} from "recoil-persist";

const { persistAtom } = recoilPersist({
   key: 'isLogin',
   storage: localStorage,
});
export const isLogin = atom({
   key: 'isLogin',
   default: false,
   effects_UNSTABLE: [persistAtom],
});