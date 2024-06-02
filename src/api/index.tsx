import { TUser } from "../types";

export const getRandomUser = async (id: number): Promise<TUser | null> => {
    const URL = "https://jsonplaceholder.typicode.com/users";

    try {
        const response = await fetch(`${URL}/${id}`);
        const _user = (await response.json()) as TUser;
        return _user
    } catch {
        return null
    }
};
