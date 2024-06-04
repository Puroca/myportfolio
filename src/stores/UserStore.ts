import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type UserInterface = {
    id?: number;
    lastName: string;
    firstName: string;
    email: string;
    admin?: boolean;
    job?: string;
    country?: string;
    password?: string;
    email_verified_at?: string;
};

export interface UserState {
    user: UserInterface | null;
    setUserState: (user: UserInterface | null) => void;

    users: UserInterface[] | null;
    setUsers: (users: UserInterface[] | null) => void;

    token: string | null;
    setToken: (token: string | null) => void;
}

export const useUserStore = create<UserState>()(
    devtools(
        persist(
            (set) => ({
                user: null,
                setUserState: (user) => set(() => ({ user: user })),

                users: null,
                setUsers: (users) => set(() => ({ users: users })),

                token: null,
                setToken: (token) => set(() => ({ token: token })),
            }),
            { name: "UserStore" }
        )
    )
);
