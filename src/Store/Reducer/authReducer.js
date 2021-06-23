export default function (state = [], action) {
  switch (action.type) {
    case "AUTH":
      return state = action.payload;
    default:
      return state;
  }
}
