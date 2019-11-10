const INITIAL_STATE = { products: [], amount: 0 };

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@Cart/ADD':
            return { ...state, products: action.products };

        default:
            return state;
    }
}