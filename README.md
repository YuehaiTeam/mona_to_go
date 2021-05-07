# Mona to GO

Utility to convert Mona artifact format to GO format

## Usage
`monaToGO(monaData: MonaData, minLevel: number = 0, minRarity: number = 3)`
```typescript
import monaToGO from "@mr-quin/mona_to_go";

const converted = monaToGO(monaArtifact, 12, 4) // rarity should be 3 or higher

console.log(JSON.stringify(converted))
```

The converted result can then be merged with existing GO database:

```typescript
import { mergeGO } from "@mr-quin/mona_to_go";

const merged = mergeGO(converted, goDatabase)

console.log(JSON.stringify(merged))
```

`monaToGO()` expects a JS object literal in the form of 
```typescript
const monaArtifact = {
    version: "1",
    cocogoat: "1",
    flower: [],
    feather: [],
    sand: [],
    cup: [],
    head: []
}
```
JSON needs to be parsed with `JSON.parse()` first.

<sup>*GO = Genshin Optimizer*</sup>
