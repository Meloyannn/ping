import { type FC } from 'react'

const UserInfo: FC<{ user: any }> = ({ user }) => {
    return <table>
        <thead>
            <tr>
                <th>Username</th>
                <th>Phone number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{user.name}</td>
                <td>{user.phone}</td>
            </tr>
        </tbody>
    </table>

}

export default UserInfo