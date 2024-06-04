import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type SectorInterface = {
    id?: number;
    name: string;
};

export interface SectorState {
    sectors: SectorInterface[] | null
    setSectors: (sectors: SectorInterface[] | null) => void;
}

export const useSectorStore = create<SectorState>()(
    devtools(
        persist(
            (set) => ({
                sectors: null,
                setSectors: (sectors) => set(() => ({sectors: sectors}))
            }),
            {name:"SectorStore"}
        )
    )
)