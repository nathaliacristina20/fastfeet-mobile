/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    signed: false,
    deliveryman: null,
    loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_REQUEST':
                draft.loading = true;
                break;
            case '@auth/SIGN_IN_SUCCESS':
                draft.signed = true;
                draft.loading = false;
                draft.deliveryman = action.payload;
                break;
            case '@auth/SIGN_IN_FAILURE':
                draft.loading = false;
                break;
            case '@auth/SIGN_OUT':
                draft.signed = null;
                break;
            default:
        }
    });
}
