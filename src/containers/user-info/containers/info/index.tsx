import UserInfo from "../../../../components/user-info";
import { type FC } from 'react'
import { useUserInfoContext } from "../../context";

const InfoContainer: FC = () => {
    const { userInfo } = useUserInfoContext()

    return userInfo ? <UserInfo user={userInfo} /> : null

}

export default InfoContainer