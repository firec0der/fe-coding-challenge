const fetchSingleOrder = (id) => (
  fetch(`https://18d9382a-0730-4340-952c-340f90890c88.mock.pstmn.io/orders/${id}`, {
    headers: {
      'x-api-key': 'f747cdbe08f3497395174d140b3fa1f4',
    },
  })
    .then(response => Promise.all([response, response.json()]))
    .catch(error => ([error, {"status": "error"}]))
);
const fetchSingleOrderRequest = () => ({ type: "FETCH_REQUEST" });
const fetchSingleOrderSuccess = (payload) => ({ type: "FETCH_SUCCESS", payload });
const fetchSingleOrderError = () => ({ type: "FETCH_ERROR" });

const orders = (state = {}, action) => {
  const index = {
    "FETCH_REQUEST": () => ({ ...state, isLoading: true, error: null }),
    "FETCH_SUCCESS": () => ({...state, singleOrder: action.payload, isLoading: false, error: null}),
    "FETCH_ERROR": () => ({...state, orders: null, isLoading: false, error: true}),
    'DEFAULT': () => (state),
  };
  return (index[action.type] || index['DEFAULT'])();
};

export const fetchSingleOrderWithRedux = (id) => (
  (dispatch) => {
    dispatch(fetchSingleOrderRequest());
    return fetchSingleOrder(id).then(([response, json]) => {
      if(response.status === 200){
        dispatch(fetchSingleOrderSuccess(json))
      }
      else{
        dispatch(fetchSingleOrderError())
      }
    })
  }
);

export default orders;
