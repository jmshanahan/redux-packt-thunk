export const loadState = () => {
  let serialisedState = localStorage.getItem("state");
  if (serialisedState == null) return undefined;
  return JSON.parse(serialisedState);
};
export const saveState = state => {
  let serialiseState = JSON.stringify(state);
  localStorage.setItem("state", serialiseState);
};
