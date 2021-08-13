export declare type Rarity = 1 | 2 | 3 | 4 | 5;
export declare type MainStatKeys = typeof allMainStatKeys[number];
export declare type SubStatKeys = typeof allSubStatKeys[number];
export declare type SlotKeys = typeof allSlotKeys[number];
export declare type SubStat = {
    key: SubStatKeys | '';
    value: number;
    rolls?: number[];
    efficiency?: number;
    accurateValue?: number;
};
export declare const allMainStatKeys: string[];
export declare const allSubStatKeys: string[];
export declare const allSlotKeys: string[];
export declare const ArtifactStarsData: {
    [key in Rarity]?: {
        subsBaselow: number;
        subBaseHigh: number;
        numUpgradesOrUnlocks: number;
    };
};
export declare const ArtifactMainStatData: {
    [key in Rarity]: {
        [key in MainStatKeys]: number[];
    };
};
export declare const ArtifactSubStatData: {
    [key in SubStatKeys]: {
        [key in Rarity]?: number[];
    };
};
export declare const ArtifactSubStatMinMax: {
    [k: string]: {
        max: {
            [k: string]: number;
        };
        min: {
            [k: string]: number;
        };
    };
};
export declare const ArtifactSlotsData: {
    [key in SlotKeys]: {
        name: string;
        stats: MainStatKeys[];
    };
};
export declare const ArtifactSubStatLookupTable: Record<SubStatKeys, {
    [key in Rarity]?: {
        [rounded: string]: number[][];
    };
}>;
