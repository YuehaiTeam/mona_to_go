export declare type GOData = typeof goSample;
export declare type MonaArtifact = typeof monaArtifactSample;
export declare type MonaData = {
    [key: string]: any;
    flower: MonaArtifact[];
    feather: MonaArtifact[];
    head: MonaArtifact[];
    cup: MonaArtifact[];
    sand: MonaArtifact[];
};
export declare const monaArtifactSample: {
    setName: string;
    detailName: string;
    position: string;
    mainTag: {
        name: string;
        value: number;
    };
    normalTags: {
        name: string;
        value: number;
    }[];
    omit: boolean;
    level: number;
    star: number;
    id: number;
};
export declare const goSample: {
    artifact_1: {
        setKey: string;
        numStars: number;
        slotKey: string;
        level: number;
        mainStatKey: string;
        substats: {
            key: string;
            value: number;
            rolls: number[];
            efficiency: number;
            accurateValue: number;
        }[];
        currentEfficiency: number;
        maximumEfficiency: number;
        id: string;
    };
};
