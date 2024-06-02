import { useMemo, useState, createContext, useContext, type FC, type ReactNode } from "react";
import { TUser, TUserRecord } from "../../../types";


const UserInfoProvider = createContext<{ userInfo: TUser | null }>({ userInfo: null })
const UserInfoActions = createContext<{ setItem: ((item: TUser) => void) }>({ setItem: (item: TUser) => { } })

export const useUserInfoContext = () => useContext(UserInfoProvider)
export const useUserInfoActionsContext = () => useContext(UserInfoActions)

const UserInfoContext: FC<{ children: ReactNode }> = ({ children }) => {
    const [item, setItem] = useState<TUser | null>(null);

    const actions = useMemo(() => ({ setItem: setItem }), [setItem])
    const data = useMemo(() => ({ userInfo: item }), [item])

    return <>
        <UserInfoProvider.Provider value={data}>
            <UserInfoActions.Provider value={actions}>
                {children}
            </UserInfoActions.Provider >
        </UserInfoProvider.Provider>
    </>
}

export default UserInfoContext