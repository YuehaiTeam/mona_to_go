import { MonaData } from './data/example';
export declare const monaToGO: (monaData: MonaData, minLevel?: number, minRarity?: number) => {};
export declare const mergeGO: (goArtifacts: ReturnType<typeof monaToGO>, goDatabase: Record<string, any>) => Record<string, any>;
export { MonaData };
export default monaToGO;
