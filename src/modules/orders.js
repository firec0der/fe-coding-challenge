const fetchOrders = () => (
  fetch('https://18d9382a-0730-4340-952c-340f90890c88.mock.pstmn.io/orders', {
    headers: {
      'x-api-key': 'f747cdbe08f3497395174d140b3fa1f4',
    },
  })
    .then(response => Promise.all([response, response.json()]))
);
const fetchOrdersRequest = () => ({ type: "FETCH_REQUEST" });
const fetchOrdersSuccess = (payload) => ({ type: "FETCH_SUCCESS", payload });
const fetchOrdersError = () => ({ type: "FETCH_ERROR" });

const orders = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return {...state, orders: action.payload, isLoading: false, error: null};
    case "FETCH_ERROR":
      return {...state, orders: null, isLoading: false, error: true};
    default:
      return state;
  }
};

export const fetchOrdersWithRedux = () => (
  (dispatch) => {
    dispatch(fetchOrdersRequest());
    return fetchOrders().then(([response, json]) => {
      if(response.status === 200){
        dispatch(fetchOrdersSuccess(json))
      }
      else{
        dispatch(fetchOrdersError())
      }
    })
  }
);

export default orders;
