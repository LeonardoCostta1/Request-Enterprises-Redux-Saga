const enterprises = {
  enterprise: [
    {
      city: "",
      country: "",
      description: "",
      enterprise_name: "",
    },
  ],
};

export default function (state = enterprises, action) {
  switch (action.type) {
    case "@ENTERPRISE":
      return (state = action.payload);
    default:
      return state;
  }
}
