import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { SectorInterface } from "./SectorStore";

export type BookInterface = {
    id?: number;
    name: string;
    user_id: number;
    sector_id: number;
    cover: string;
    affiliate_link: string;
    content: string;
    description: string;
    created_at: string;
    sector: SectorInterface;
};


export interface BookState {
    books: BookInterface[] | null;
    setBooks: (books: BookInterface[] | null) => void;
}

export const useBookStore = create<BookState>()(
    devtools(
        persist(
            (set) => ({
                books: null,
                setBooks: (books) => set(() => ({ books: books })),
            }),
            { name: "BookStore" }
        )
    )
);
