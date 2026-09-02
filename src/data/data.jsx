const airlines = [
  {
    id: "indigo",
    name: "IndiGo",

    cabin: {
      maxWeight: 7,
      length: 55,
      width: 35,
      height: 25,
      maxTotalDimensions: 115,
    },

    checked: {
      maxWeight: 15,
      maxTotalDimensions: 158,
    },

    baggagePolicyUrl: "https://www.goindigo.in/baggage.html",
  },

  {
    id: "airindia",
    name: "Air India",

    cabin: {
      maxWeight: 7,
      length: 55,
      width: 40,
      height: 20,
      maxTotalDimensions: 115,
    },

    checked: {
      maxWeight: 15,
      maxTotalDimensions: 158,
    },

    baggagePolicyUrl: "https://www.airindia.com/in/en/travel-information/baggage-guidelines.html",
  },
];

export default airlines;