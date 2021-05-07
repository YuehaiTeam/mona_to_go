import { GODump, monaDump } from './data/dump'
import monaToGO, { mergeGO, MonaData } from './index'

const converted = monaToGO(monaDump as MonaData, 12, 4)
const merged = mergeGO(converted, GODump)

import('fs').then((fs) =>
    fs.writeFile('result.json', JSON.stringify(merged, null, 2), (err) => {
        console.log(err)
    })
)
