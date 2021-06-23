const list = {
  enterprises: [
    {
      city: "",
      country: "",
      description: "",
      enterprise_name: "",
    },
  ],
};

export default function (state = list, action) {
  switch (action.type) {
    case "@LIST_ENTERPRISE_ALL":
      return (state = action.payload);
    default:
      return state;
  }
}
