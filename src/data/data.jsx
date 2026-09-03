const airlines = [
  {
    id: "indigo",
    name: "IndiGo",

    seo: {
      title: "IndiGo Baggage Size & Weight Checker | BagChecker",
      description:
        "Check IndiGo cabin and checked baggage size and weight limits before your flight.",
    },

    content: {
      intro:
        "Check your IndiGo baggage size and weight before your flight. Enter your bag dimensions and weight to see if it meets the available IndiGo baggage limits.",

      cabinTitle: "IndiGo Cabin Baggage Size & Weight",

      cabinText:
        "IndiGo cabin baggage can be up to 55 × 35 × 25 cm and must not exceed 7 kg.",

      checkedTitle: "IndiGo Checked Baggage Size & Weight",

      checkedText:
        "For standard domestic travel, IndiGo checked baggage allowance is 15 kg. The maximum checked baggage dimensions are 158 cm in total.",

      sizeCalculation:
        "Checked baggage size is calculated by adding the length, width and height of the bag.",
    },

    faq: [
      {
        question: "What is the cabin baggage size for IndiGo?",
        answer:
          "IndiGo cabin baggage can be up to 55 × 35 × 25 cm and must not exceed 7 kg.",
      },
      {
        question: "How much cabin baggage can I carry on IndiGo?",
        answer:
          "IndiGo allows one cabin bag with a maximum weight of 7 kg, subject to the applicable fare and travel rules.",
      },
      {
        question: "What is the checked baggage size limit for IndiGo?",
        answer:
          "The maximum checked baggage dimension is 158 cm in total, calculated as length + width + height.",
      },
      {
        question: "How much checked baggage is allowed on IndiGo?",
        answer:
          "The standard domestic checked baggage allowance is 15 kg, although baggage allowance can vary depending on the route and fare.",
      },
      {
        question: "How does the IndiGo baggage checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagChecker compares your measurements with the available IndiGo baggage limits.",
      },
    ],

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

    seo: {
      title: "Air India Baggage Size & Weight Checker | BagChecker",
      description:
        "Check Air India cabin and checked baggage size and weight limits before your flight.",
    },

    content: {
      intro:
        "Check your Air India baggage size and weight before travelling. Enter your bag dimensions and weight to compare them with the available Air India baggage limits.",

      cabinTitle: "Air India Cabin Baggage Size & Weight",

      cabinText:
        "Air India cabin baggage can be up to 55 × 40 × 20 cm with a maximum weight of 7 kg.",

      checkedTitle: "Air India Checked Baggage Size & Weight",

      checkedText:
        "The standard checked baggage limit used by this checker is 15 kg with maximum total dimensions of 158 cm. Allowances may vary by route, fare and travel class.",

      sizeCalculation:
        "Checked baggage size is calculated by adding the length, width and height of the bag.",
    },

    faq: [
      {
        question: "What is the cabin baggage size for Air India?",
        answer:
          "Air India cabin baggage can be up to 55 × 40 × 20 cm with a maximum weight of 7 kg.",
      },
      {
        question: "How much cabin baggage can I carry on Air India?",
        answer:
          "The cabin baggage weight limit used by BagChecker is 7 kg. The applicable allowance can vary by fare, route and travel class.",
      },
      {
        question: "What is the checked baggage size limit for Air India?",
        answer:
          "The maximum checked baggage dimension used by BagChecker is 158 cm in total, calculated as length + width + height.",
      },
      {
        question: "How much checked baggage is allowed on Air India?",
        answer:
          "The standard allowance used by this checker is 15 kg, but the actual allowance can vary depending on your fare, route and travel class.",
      },
      {
        question: "How does the Air India baggage checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagChecker compares your measurements with the available Air India baggage limits.",
      },
    ],

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

    seo: {
      title: "SpiceJet Baggage Size & Weight Checker | BagChecker",
      description:
        "Check SpiceJet cabin and checked baggage size and weight limits before your flight.",
    },

    content: {
      intro:
        "Check your SpiceJet baggage size and weight before your flight. Enter your bag dimensions and weight to compare them with the available SpiceJet baggage limits.",

      cabinTitle: "SpiceJet Cabin Baggage Size & Weight",

      cabinText:
        "SpiceJet cabin baggage can be up to 55 × 35 × 25 cm with a maximum weight of 7 kg.",

      checkedTitle: "SpiceJet Checked Baggage Size & Weight",

      checkedText:
        "The standard checked baggage limit used by this checker is 15 kg with maximum total dimensions of 158 cm. Actual allowances can vary by route and fare.",

      sizeCalculation:
        "Checked baggage size is calculated by adding the length, width and height of the bag.",
    },

    faq: [
      {
        question: "What is the cabin baggage size for SpiceJet?",
        answer:
          "SpiceJet cabin baggage can be up to 55 × 35 × 25 cm with a maximum weight of 7 kg.",
      },
      {
        question: "How much cabin baggage can I carry on SpiceJet?",
        answer:
          "The cabin baggage weight limit used by BagChecker is 7 kg. The applicable allowance may vary depending on your fare and route.",
      },
      {
        question: "What is the checked baggage size limit for SpiceJet?",
        answer:
          "The maximum checked baggage dimension used by BagChecker is 158 cm in total, calculated as length + width + height.",
      },
      {
        question: "How much checked baggage is allowed on SpiceJet?",
        answer:
          "The standard checked baggage limit used by this checker is 15 kg, although the actual allowance can vary by route and fare.",
      },
      {
        question: "How does the SpiceJet baggage checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagChecker compares your measurements with the available SpiceJet baggage limits.",
      },
    ],

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

    seo: {
      title: "Akasa Air Baggage Size & Weight Checker | BagChecker",
      description:
        "Check Akasa Air cabin and checked baggage size and weight limits before your flight.",
    },

    content: {
      intro:
        "Check your Akasa Air baggage size and weight before your flight. Enter your bag dimensions and weight to compare them with the available Akasa Air baggage limits.",

      cabinTitle: "Akasa Air Cabin Baggage Size & Weight",

      cabinText:
        "Akasa Air cabin baggage can be up to 55 × 35 × 25 cm with a maximum weight of 7 kg.",

      checkedTitle: "Akasa Air Checked Baggage Size & Weight",

      checkedText:
        "The standard checked baggage limit used by this checker is 15 kg with maximum total dimensions of 158 cm. Actual allowances can vary depending on the applicable fare and route.",

      sizeCalculation:
        "Checked baggage size is calculated by adding the length, width and height of the bag.",
    },

    faq: [
      {
        question: "What is the cabin baggage size for Akasa Air?",
        answer:
          "Akasa Air cabin baggage can be up to 55 × 35 × 25 cm with a maximum weight of 7 kg.",
      },
      {
        question: "How much cabin baggage can I carry on Akasa Air?",
        answer:
          "The cabin baggage weight limit used by BagChecker is 7 kg. The applicable allowance may vary according to the airline's current rules.",
      },
      {
        question: "What is the checked baggage size limit for Akasa Air?",
        answer:
          "The maximum checked baggage dimension used by BagChecker is 158 cm in total, calculated as length + width + height.",
      },
      {
        question: "How much checked baggage is allowed on Akasa Air?",
        answer:
          "The standard checked baggage limit used by this checker is 15 kg, but the actual allowance may vary by fare and route.",
      },
      {
        question: "How does the Akasa Air baggage checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagChecker compares your measurements with the available Akasa Air baggage limits.",
      },
    ],

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

    baggagePolicyUrl:
      "https://www.akasaair.com/quick-links/baggage",
  },

  {
    id: "allianceair",
    name: "Alliance Air",

    seo: {
      title: "Alliance Air Baggage Size & Weight Checker | BagChecker",
      description:
        "Check Alliance Air cabin and checked baggage size and weight limits before your flight.",
    },

    content: {
      intro:
        "Check your Alliance Air baggage size and weight before your flight. Enter your bag dimensions and weight to compare them with the available Alliance Air baggage limits.",

      cabinTitle: "Alliance Air Cabin Baggage Size & Weight",

      cabinText:
        "Alliance Air cabin baggage can be up to 40 × 30 × 15 cm with a maximum weight of 5 kg.",

      checkedTitle: "Alliance Air Checked Baggage Size & Weight",

      checkedText:
        "The baggage limits used by this checker allow up to 15 kg for checked baggage with maximum total dimensions of 270 cm.",

      sizeCalculation:
        "Checked baggage size is calculated by adding the length, width and height of the bag.",
    },

    faq: [
      {
        question: "What is the cabin baggage size for Alliance Air?",
        answer:
          "Alliance Air cabin baggage can be up to 40 × 30 × 15 cm with a maximum weight of 5 kg.",
      },
      {
        question: "How much cabin baggage can I carry on Alliance Air?",
        answer:
          "The cabin baggage weight limit used by BagChecker is 5 kg, with maximum dimensions of 40 × 30 × 15 cm.",
      },
      {
        question: "What is the checked baggage size limit for Alliance Air?",
        answer:
          "The maximum checked baggage total dimension used by BagChecker is 270 cm.",
      },
      {
        question: "How much checked baggage is allowed on Alliance Air?",
        answer:
          "The checked baggage weight limit used by BagChecker is 15 kg. The actual allowance can depend on the applicable booking and route.",
      },
      {
        question: "How does the Alliance Air baggage checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagChecker compares your measurements with the available Alliance Air baggage limits.",
      },
    ],

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

    baggagePolicyUrl:
      "https://plone.allianceair.in/allianceair/en/assets/policy/baggage-policy-19-08-2026.pdf",
  },

  {
    id: "fly91",
    name: "FLY91",

    seo: {
      title: "FLY91 Baggage Size & Weight Checker | BagChecker",
      description:
        "Check FLY91 cabin and checked baggage size and weight limits before your flight.",
    },

    content: {
      intro:
        "Check your FLY91 baggage size and weight before your flight. Enter your bag dimensions and weight to compare them with the available FLY91 baggage limits.",

      cabinTitle: "FLY91 Cabin Baggage Size & Weight",

      cabinText:
        "FLY91 cabin baggage can be up to 35 × 30 × 20 cm with a maximum weight of 7 kg.",

      checkedTitle: "FLY91 Checked Baggage Size & Weight",

      checkedText:
        "The checked baggage limits used by this checker allow up to 15 kg with maximum total dimensions of 158 cm.",

      sizeCalculation:
        "Checked baggage size is calculated by adding the length, width and height of the bag.",
    },

    faq: [
      {
        question: "What is the cabin baggage size for FLY91?",
        answer:
          "FLY91 cabin baggage can be up to 35 × 30 × 20 cm with a maximum weight of 7 kg.",
      },
      {
        question: "How much cabin baggage can I carry on FLY91?",
        answer:
          "The cabin baggage weight limit used by BagChecker is 7 kg, with maximum dimensions of 35 × 30 × 20 cm.",
      },
      {
        question: "What is the checked baggage size limit for FLY91?",
        answer:
          "The maximum checked baggage total dimension used by BagChecker is 158 cm.",
      },
      {
        question: "How much checked baggage is allowed on FLY91?",
        answer:
          "The checked baggage weight limit used by BagChecker is 15 kg. Actual baggage allowance can depend on the applicable airline rules.",
      },
      {
        question: "How does the FLY91 baggage checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagChecker compares your measurements with the available FLY91 baggage limits.",
      },
    ],

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

    baggagePolicyUrl:
      "https://fly91.in/conditions-of-carriage",
  },

  {
    id: "airindiaexpress",
    name: "Air India Express",

    seo: {
      title:
        "Air India Express Baggage Size & Weight Checker | BagChecker",
      description:
        "Check Air India Express cabin and checked baggage size and weight limits before your flight.",
    },

    content: {
      intro:
        "Check your Air India Express baggage size and weight before your flight. Enter your bag dimensions and weight to compare them with the available Air India Express baggage limits.",

      cabinTitle: "Air India Express Cabin Baggage Size & Weight",

      cabinText:
        "Air India Express cabin baggage can be up to 56 × 36 × 23 cm with a combined cabin baggage weight limit of 7 kg.",

      checkedTitle:
        "Air India Express Checked Baggage Size & Weight",

      checkedText:
        "Air India Express checked baggage allowance can vary by fare. The maximum total checked baggage dimensions used by this checker are 319 cm, while the applicable free baggage allowance depends on the fare and booking.",

      sizeCalculation:
        "Checked baggage size is calculated by adding the length, width and height of the bag. Air India Express checked baggage allowance can vary by fare.",
    },

    faq: [
      {
        question:
          "What is the cabin baggage size for Air India Express?",
        answer:
          "Air India Express cabin baggage can be up to 56 × 36 × 23 cm with a combined cabin baggage weight limit of 7 kg.",
      },
      {
        question:
          "How much cabin baggage can I carry on Air India Express?",
        answer:
          "The cabin baggage weight limit is 7 kg, subject to the applicable Air India Express baggage rules.",
      },
      {
        question:
          "What is the checked baggage size limit for Air India Express?",
        answer:
          "The maximum total checked baggage dimensions used by BagChecker are 319 cm, calculated from the length, width and height.",
      },
      {
        question:
          "How much checked baggage is allowed on Air India Express?",
        answer:
          "Air India Express checked baggage allowance varies by fare. Different fares can include different checked baggage allowances, so check your booking for the exact allowance.",
      },
      {
        question:
          "How does the Air India Express baggage checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagChecker compares your measurements with the available Air India Express baggage limits.",
      },
    ],

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

    baggagePolicyUrl:
      "https://www.airindiaexpress.com/support/faqs/baggage",
  },
];

export default airlines;