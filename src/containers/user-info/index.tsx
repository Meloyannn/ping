import { type FC } from 'react'
import UserInfoContext from './context'
import GetUserListButton from './containers/get-user-list-button'
import InfoContainer from './containers/info'

const UserInfoContainer: FC = () => {
    return <UserInfoContext>
        <GetUserListButton />
        <InfoContainer />
    </UserInfoContext>
}

export default UserInfoContainer