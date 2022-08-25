import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface CollectorModelState{
    name:string
}
export interface CollectorModelType{
    namespace:'collector',
    state:CollectorModelState,
    effects:{
        query:Effect
    };
    reduces:{
        save: Reducer<CollectorModelState>;
    };
    subscriptions: { setup: Subscription };
}
const CollectorModel = {
    namespace: 'collector',
    state:{},
    effects:{},
    reduces:{},
    subscriptions:{},
}

export default CollectorModel;