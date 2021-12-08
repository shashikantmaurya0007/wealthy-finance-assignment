import StockListConstants from "../Constants/StockListConstants";
const initailstate = {
    stocks: [],
    loading: false,
    errror: "",
};

const stockReducer = (state = initailstate, action) => {
    switch (action.type) {
        case StockListConstants.STOCKLIST_LOADING:
            {
                return {
                    ...state,
                    loading: true,
                    error: "",
                };
            }
        case StockListConstants.STOCKLIST_FAIL:
            {
                return {
                    ...state,

                    error: "something went wrong",
                };
            }
        case StockListConstants.STOCKLIST_SUCCESS:
            {
                return {
                    ...state,
                    stocks: action.payload,
                    loading: false,
                };
            }
        default:
            {
                return {
                    ...state,
                };
            }
    }
};

export default stockReducer;