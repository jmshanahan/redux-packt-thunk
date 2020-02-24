import { SWITCH_CUSTOMER, RESET_AFTER_SUBMIT } from "../actions/types";

let initialState = [
  {
    id: 1,
    name: "John",
    selected: true
  },
  {
    id: 2,
    name: "Bill",
    selected: false
  }
];

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_CUSTOMER:
      let newState = [...state];
      newState.forEach(c => {
        if (c.id === action.payload) c.selected = true;
        else c.selected = false;
      });
      return newState;
    case RESET_AFTER_SUBMIT:
      let nextState = [...state];
      nextState.forEach(c => (c.selected = false));
      return nextState;
    default:
      return state;
  }
};
export default customersReducer;
