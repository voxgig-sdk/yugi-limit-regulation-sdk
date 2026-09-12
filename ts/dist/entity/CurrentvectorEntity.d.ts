import { YugiLimitRegulationEntityBase } from '../YugiLimitRegulationEntityBase';
import type { YugiLimitRegulationSDK } from '../YugiLimitRegulationSDK';
import type { Control } from '../types';
import type { Currentvector, CurrentvectorListMatch } from '../YugiLimitRegulationTypes';
declare class CurrentvectorEntity extends YugiLimitRegulationEntityBase<Currentvector> {
    constructor(client: YugiLimitRegulationSDK, entopts: any);
    make(this: CurrentvectorEntity): CurrentvectorEntity;
    list(this: any, reqmatch?: CurrentvectorListMatch, ctrl?: Control): Promise<CurrentvectorEntity[]>;
}
export { CurrentvectorEntity };
