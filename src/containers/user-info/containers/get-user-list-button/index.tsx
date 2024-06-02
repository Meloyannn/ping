import { useRef, type FC } from 'react'
import { useUserInfoActionsContext } from '../../context';
import { TUserRecord } from '../../../../types';
import { getRandomUser } from '../../../../api';
import Button from '../../../../components/button';

const GetUserListButton: FC = () => {
    const { setItem } = useUserInfoActionsContext()

    const _usersCache = useRef<TUserRecord>({})

    const receiveRandomUser = async () => {
        const id = Math.floor(Math.random() * (10 - 1)) + 1;

        if (id in _usersCache.current) {
            setItem(_usersCache.current[id])
        } else {
            const _user = await getRandomUser(id)

            if (_user) {
                _usersCache.current[id] = _user
                setItem(_usersCache.current[id])
            }
        }

    };

    return <Button callback={receiveRandomUser} />
}

export default GetUserListButton