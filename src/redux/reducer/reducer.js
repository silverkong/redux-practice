// 초기화 값
let initialState = {
  count: 0,
  id: "",
  password: "",
};

function reducer(state = initialState, action) {
  console.log(action);
  //   if (action.type === "INCREMENT") {
  //     // 다른 객체는 유지 : ...state
  //     return { ...state, count: state.count + 1 };
  //   }

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }
  //   return { ...state };
}

export default reducer;
