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

    baggagePolicyUrl:
      "https://www.airindia.com/in/en/travel-information/baggage-guidelines.html",
  },

  {
    id: "spicejet",
    name: "SpiceJet",

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

    baggagePolicyUrl: "https://corporate.spicejet.com/Baggage.aspx",
  },
  {
    id: "akasa",
    name: "Akasa Air",

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

    baggagePolicyUrl: "https://www.akasaair.com/quick-links/baggage",
  },
  {
    id: "allianceair",
    name: "Alliance Air",
    cabin: {
      maxWeight: 5,
      length: 40,
      width: 30,
      height: 15,
      maxTotalDimensions: 85,
    },
    checked: {
      maxWeight: 15,
      maxTotalDimensions: 270,
    },
    baggagePolicyUrl: "https://plone.allianceair.in/allianceair/en/assets/policy/baggage-policy-19-08-2026.pdf",
  },
  {
    id: "fly91",
    name: "FLY91",
    cabin: {
      maxWeight: 7,
      length: 35,
      width: 30,
      height: 20,
      maxTotalDimensions: 85,
    },
    checked: {
      maxWeight: 15,
      maxTotalDimensions: 158,
    },
    baggagePolicyUrl: "https://fly91.in/conditions-of-carriage",
  },
  {
    id: "airindiaexpress",
    name: "Air India Express",

    cabin: {
      maxWeight: 7,
      length: 56,
      width: 36,
      height: 23,
      maxTotalDimensions: 115,
    },

    checked: {
      maxWeight: null,
      maxTotalDimensions: 319,
      variesByFare: true,
    },

    baggagePolicyUrl: "https://www.airindiaexpress.com/support/faqs/baggage",
  },
];

export default airlines;