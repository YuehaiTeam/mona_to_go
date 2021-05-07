// import {
//     ArtifactStarsData,
//     ArtifactSubStatData,
//     ArtifactSubStatLookupTable,
//     ArtifactSubStatMinMax,
//     Rarity,
//     SubStat,
//     SubStatKeys,
// } from './data/artifact'
import { MonaData } from './data/example'
import { SetKeys, setLookup, SlotKeys, slotLookup, StatKeys, statLookup } from './data/translation'

// const getTotalPossibleRolls = (rarity: Rarity) =>
//     ArtifactStarsData[rarity]!.subBaseHigh + ArtifactStarsData[rarity]!.numUpgradesOrUnlocks
//
// const getRollsRemaining = (level: number, rarity: Rarity) => Math.ceil((rarity * 4 - level) / 4)
//
// /**
//  * Returns the list of possible rolls for the stat
//  */
// const getSubStatRollData = (subStatKey: SubStatKeys, rarity: Rarity) =>
//     ArtifactSubStatData[subStatKey]?.[rarity] ?? []
//
// const maxSubStatValues = (statKey: SubStatKeys, numStars = 5): number =>
//     ArtifactSubStatMinMax[statKey].max[numStars]
//
// /**
//  * Try to find the list of rolls that makes up the sub stat
//  */
// const getSubStatRolls = (
//     subStatKey: SubStatKeys,
//     subStatVal: number,
//     rarity: Rarity
// ): number[][] => {
//     const rollData = getSubStatRollData(subStatKey, rarity)
//     if (!rollData.length) return []
//
//     const lookupTable = ArtifactSubStatLookupTable[subStatKey][rarity]
//     const lookupValue = subStatVal.toFixed(1)
//
//     if (lookupTable && lookupTable[lookupValue]) {
//         return lookupTable[lookupValue].map((roll) => roll.map((i) => rollData[i]))
//     } else {
//         return []
//     }
// }
//
// const getSubStatEfficiency = (subStatKey: SubStatKeys, rolls: number[]): number => {
//     const sum = rolls.reduce((a, b) => a + b, 0)
//     const max = subStatKey ? maxSubStatValues(subStatKey) * rolls.length : 0
//     return max ? Math.round((sum / max) * 100 * 100) / 100 : 0
// }
//
// const getArtifactEfficiency = (subStats: SubStat[], rarity: Rarity, level: number) => {
//     const totalRolls = getTotalPossibleRolls(5)
//     const rollsRemaining = getRollsRemaining(level, rarity)
//     const current = subStats.reduce(
//         (sum, { key, accurateValue }) =>
//             sum + (key ? accurateValue! / ArtifactSubStatMinMax[key].max[5] : 0),
//         0
//     )
//     const maximum = current + rollsRemaining
//     const currentEfficiency = (current * 100) / totalRolls
//     const maximumEfficiency = (maximum * 100) / totalRolls
//     return { currentEfficiency, maximumEfficiency }
// }

// Turns out GO will fill in things like rolls and efficiency
export const monaToGO = (monaData: MonaData, minLevel: number = 0, minRarity: number = 3) => {
    const artifacts = [
        ...monaData.cup,
        ...monaData.feather,
        ...monaData.flower,
        ...monaData.head,
        ...monaData.sand,
    ].filter((artifact) => artifact.star >= minRarity && artifact.level >= minLevel)
    return artifacts.reduce((acc, artifact, i) => {
        const artifact_id = `artifact_${i + 1}` // 1 indexed
        const subStats = artifact.normalTags.map((subStat) => {
            const key = statLookup[subStat.name as StatKeys]
            const value = subStat.value < 1 ? subStat.value * 100 : subStat.value
            // const rolls = getSubStatRolls(key, value, artifact.star as Rarity)[0]
            return {
                key,
                value,
                // rolls,
                // efficiency: getSubStatEfficiency(key, rolls),
                // accurateValue: sum(rolls),
            }
        })
        // const { currentEfficiency, maximumEfficiency } = getArtifactEfficiency(
        //     subStats,
        //     artifact.star as Rarity,
        //     artifact.level
        // )
        return {
            ...acc,
            [artifact_id]: {
                setKey: setLookup[artifact.setName as SetKeys],
                numStars: artifact.star,
                slotKey: slotLookup[artifact.position as SlotKeys],
                level: artifact.level,
                mainStatKey: statLookup[artifact.mainTag.name as StatKeys],
                substats: subStats,
                // currentEfficiency,
                // maximumEfficiency,
                id: artifact_id,
            },
        }
    }, {})
}

export const mergeGO = (
    goArtifacts: ReturnType<typeof monaToGO>,
    goDatabase: Record<string, any>
) => {
    const dbClone = { ...goDatabase }
    dbClone['artifactDatabase'] = goArtifacts
    return goDatabase
}

export { MonaData }
export default monaToGO
