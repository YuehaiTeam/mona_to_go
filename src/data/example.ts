export type GOData = typeof goSample
export type MonaArtifact = typeof monaArtifactSample
export type MonaData = {
    [key: string]: any
    flower: MonaArtifact[]
    feather: MonaArtifact[]
    head: MonaArtifact[]
    cup: MonaArtifact[]
    sand: MonaArtifact[]
}

export const monaArtifactSample = {
    setName: 'noblesseOblige',
    detailName: '宗室之花',
    position: 'flower',
    mainTag: {
        name: 'lifeStatic',
        value: 4780,
    },
    normalTags: [
        {
            name: 'recharge',
            value: 0.09699999999999999,
        },
        {
            name: 'attackPercentage',
            value: 0.146,
        },
        {
            name: 'attackStatic',
            value: 14,
        },
        {
            name: 'critical',
            value: 0.057999999999999996,
        },
    ],
    omit: false,
    level: 20,
    star: 5,
    id: 1620279147931,
}

export const goSample = {
    artifact_1: {
        setKey: 'BlizzardStrayer',
        numStars: 5,
        slotKey: 'flower',
        level: 20,
        mainStatKey: 'hp',
        substats: [
            {
                key: 'atk',
                value: 33,
                rolls: [15.56, 17.51],
                efficiency: 85.01285347043702,
                accurateValue: 33.07,
            },
            {
                key: 'atk_',
                value: 9.9,
                rolls: [4.66, 5.25],
                efficiency: 84.99142367066895,
                accurateValue: 9.91,
            },
            {
                key: 'eleMas',
                value: 37,
                rolls: [18.65, 18.65],
                efficiency: 80.00858000858001,
                accurateValue: 37.3,
            },
            {
                key: 'enerRech_',
                value: 11,
                rolls: [5.18, 5.83],
                efficiency: 84.9537037037037,
                accurateValue: 11.01,
            },
        ],
        currentEfficiency: 74.43701352297549,
        maximumEfficiency: 74.43701352297549,
        id: 'artifact_1',
    },
}
