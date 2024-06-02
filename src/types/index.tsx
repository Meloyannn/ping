export type TUser = {
    id: number;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    },
    address: {
        city:string,
        geo:{
            lat:string,
            lng:string,
            steet:string,
            suite: string,
            zipcode: string
        }
    }
};

export type TUserRecord = Record<number, TUser>