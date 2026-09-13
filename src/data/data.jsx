const airlines = [
  {
    id: "indigo",
    name: "IndiGo",

    seo: {
      title: "IndiGo Baggage Size Checker – Cabin & Checked | BagInAir",
      description:
        "Check your IndiGo domestic cabin or checked bag size and weight. Enter your bag dimensions to see if it fits IndiGo baggage limits.",
    },

content: {
  intro:
    "Check your IndiGo domestic baggage size, weight and allowance before your flight. Enter your cabin or checked bag dimensions and weight to compare your luggage with the available IndiGo baggage limits.",

  cabinTitle: "IndiGo Cabin Baggage Size & Weight",

  cabinText:
    "For domestic travel, IndiGo allows one cabin bag up to 55 × 35 × 25 cm with a maximum weight of 7 kg. One additional personal article, such as a small laptop bag or purse, may also be carried up to 3 kg.",

  checkedTitle: "IndiGo Checked Baggage Size & Weight",

  checkedText:
    "For standard domestic travel, IndiGo provides a 15 kg checked baggage allowance per passenger. The maximum checked baggage dimension is 158 cm in total, calculated as length + width + height. The applicable allowance can vary depending on the booking and travel conditions.",

  sizeCalculation:
    "Checked baggage size is calculated by adding the length, width and height of the bag. For example, a bag measuring 70 × 50 × 38 cm has total dimensions of 158 cm.",

  cabinGuide:
    "Measure your cabin bag's length, width and height in centimetres and check its weight. IndiGo's standard cabin baggage limit is 55 × 35 × 25 cm and 7 kg, with an additional personal article allowed up to 3 kg.",

  checkedGuide:
    "For checked baggage, check both the total dimensions and weight. The standard domestic allowance is 15 kg, while the applicable baggage allowance can vary depending on your booking and travel conditions.",

  measuringGuide:
    "Measure the complete length, width and height of your luggage in centimetres. For checked baggage, add all three dimensions together. For cabin baggage, compare each dimension with the permitted cabin bag size.",

  carryItems: [
    {
      name: "Laptop",
      cabin: "Yes",
      checked: "Yes*",
      note: "IndiGo recommends carrying valuable electronics in cabin baggage."
    },
    {
      name: "Mobile charger",
      cabin: "Yes",
      checked: "Yes"
    },
    {
      name: "Medicines",
      cabin: "Yes*",
      checked: "Yes*",
      note: "Carry medicines with the appropriate prescription where required."
    },
    {
      name: "Clothes",
      cabin: "Yes",
      checked: "Yes"
    },
    {
      name: "Dry food",
      cabin: "Yes",
      checked: "Yes"
    },
    {
      name: "Dry fruits",
      cabin: "Yes",
      checked: "Yes*",
      note: "Dry coconut/copra has restrictions."
    },
    {
      name: "Baby stroller / pram",
      cabin: "Yes*",
      checked: "Yes*",
      note: "Must be foldable."
    },
    {
      name: "Bicycle",
      cabin: "No",
      checked: "Yes*",
      note: "Special baggage conditions apply and it should be dismantled."
    },
    {
      name: "Musical instrument",
      cabin: "Yes*",
      checked: "Yes*",
      note: "Conditions and charges may apply."
    },
    {
      name: "Glass items",
      cabin: "Yes*",
      checked: "Yes*",
      note: "Must be properly packed to prevent damage."
    }
  ],

  cabinPacking: [
    "Medicines",
    "Valuables",
    "Fragile items",
    "Important documents",
    "Cameras and electronics"
  ],

  liquids:
    "Liquids, gels, pastes and aerosols carried in cabin baggage are subject to security screening. Individual liquid containers should have a maximum volume of 100 ml and should fit comfortably inside a transparent, resealable 1-litre plastic bag, subject to applicable security rules.",

  excessBaggage:
    "Baggage exceeding the applicable free allowance may be subject to additional charges. The applicable excess baggage rules and charges can vary, so check your booking and IndiGo's current baggage information before travelling.",

  infantBaggage:
    "For domestic travel, IndiGo allows one hand baggage item up to 7 kg and 115 cm total dimensions for an infant. Checked baggage allowance for infants is NIL. One stroller or baby pram per infant is allowed without charge, subject to the applicable conditions.",

  specialBaggage:
    "Special or non-standard baggage such as bicycles, musical instruments and other oversized items may have additional conditions or charges. Check IndiGo's current baggage rules before travelling with special items.",

  restrictedItems:
    "Some items are restricted or prohibited in cabin or checked baggage for safety and security reasons. Always check IndiGo's current dangerous-goods and baggage rules before travelling with an item that may have special restrictions."
},


faq: [
{
question: "What is the cabin baggage size for IndiGo?",
answer:
"IndiGo cabin baggage can be up to 55 × 35 × 25 cm and must not exceed 7 kg."
},
{
question: "What is the IndiGo cabin baggage size in cm?",
answer:
"The cabin baggage size used by BagInAir for IndiGo is 55 × 35 × 25 cm, with a maximum weight of 7 kg."
},
{
question: "How much cabin baggage can I carry on IndiGo?",
answer:
"IndiGo allows one cabin bag with a maximum weight of 7 kg, subject to the applicable fare and travel rules."
},
{
question: "What is the IndiGo check-in baggage size limit?",
answer:
"The maximum checked baggage dimension used by the checker is 158 cm in total, calculated as length + width + height."
},
{
question: "How much checked baggage is allowed on IndiGo domestic flights?",
answer:
"The standard domestic checked baggage allowance used by BagInAir is 15 kg, although the actual allowance can vary depending on the route and fare."
},
{
question: "How does the IndiGo baggage size checker work?",
answer:
"Enter your bag type, dimensions and weight. BagInAir compares your measurements with the available IndiGo baggage limits."
}
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
      title: "Air India Baggage Size Checker – Cabin & Checked | BagInAir",
      description:
        "Check your Air India domestic cabin or checked bag size and weight. Enter your bag dimensions to see if it fits Air India baggage limits.",
    },

    content: {
      intro:
        "Check your Air India domestic baggage size and weight before your flight. Enter your cabin or checked bag dimensions and weight to compare your bag with the applicable Air India baggage limits.",

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
          "The cabin baggage weight limit used by BagInAir is 7 kg. The applicable allowance can vary by fare, route and travel class.",
      },
      {
        question: "What is the Air India check-in baggage size limit?",
        answer:
          "The maximum checked baggage dimension used by BagInAir is 158 cm in total, calculated as length + width + height.",
      },
      {
        question: "How much checked baggage is allowed on Air India?",
        answer:
          "The standard allowance used by this checker is 15 kg, but the actual allowance can vary depending on your fare, route and travel class.",
      },
      {
        question: "How does the Air India baggage size checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagInAir compares your measurements with the available Air India baggage limits.",
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
      title: "SpiceJet Baggage Size Checker – Cabin & Checked | BagInAir",
      description:
        "Check your SpiceJet domestic cabin or checked bag size and weight. Enter your bag dimensions to see if it fits SpiceJet baggage limits.",
    },

    content: {
      intro:
        "Check your SpiceJet domestic baggage size and weight before your flight. Enter your cabin or checked bag dimensions and weight to compare your bag with the available SpiceJet baggage limits.",

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
          "The cabin baggage weight limit used by BagInAir is 7 kg. The applicable allowance may vary depending on your fare and route.",
      },
      {
        question: "What is the SpiceJet check-in baggage size limit?",
        answer:
          "The maximum checked baggage dimension used by BagInAir is 158 cm in total, calculated as length + width + height.",
      },
      {
        question: "How much checked baggage is allowed on SpiceJet?",
        answer:
          "The standard checked baggage limit used by this checker is 15 kg, although the actual allowance can vary by route and fare.",
      },
      {
        question: "How does the SpiceJet baggage size checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagInAir compares your measurements with the available SpiceJet baggage limits.",
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
      title: "Akasa Air Baggage Size Checker – Cabin & Checked | BagInAir",
      description:
        "Check your Akasa Air domestic cabin or checked bag size and weight. Enter your bag dimensions to see if it fits Akasa Air baggage limits.",
    },

    content: {
      intro:
        "Check your Akasa Air domestic baggage size and weight before your flight. Enter your cabin or checked bag dimensions and weight to compare your bag with the available Akasa Air baggage limits.",

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
          "The cabin baggage weight limit used by BagInAir is 7 kg. The applicable allowance may vary according to the airline's current rules.",
      },
      {
        question: "What is the Akasa Air check-in baggage size limit?",
        answer:
          "The maximum checked baggage dimension used by BagInAir is 158 cm in total, calculated as length + width + height.",
      },
      {
        question: "How much checked baggage is allowed on Akasa Air?",
        answer:
          "The standard checked baggage limit used by this checker is 15 kg, but the actual allowance may vary by fare and route.",
      },
      {
        question: "How does the Akasa Air baggage size checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagInAir compares your measurements with the available Akasa Air baggage limits.",
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
      title: "Alliance Air Baggage Size Checker – Cabin & Checked | BagInAir",
      description:
        "Check your Alliance Air domestic cabin or checked bag size and weight. Enter your bag dimensions to see if it fits Alliance Air baggage limits.",
    },

    content: {
      intro:
        "Check your Alliance Air domestic baggage size and weight before your flight. Enter your cabin or checked bag dimensions and weight to compare your bag with the available Alliance Air baggage limits.",

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
          "The cabin baggage weight limit used by BagInAir is 5 kg, with maximum dimensions of 40 × 30 × 15 cm.",
      },
      {
        question: "What is the Alliance Air check-in baggage size limit?",
        answer:
          "The maximum checked baggage total dimension used by BagInAir is 270 cm.",
      },
      {
        question: "How much checked baggage is allowed on Alliance Air?",
        answer:
          "The checked baggage weight limit used by BagInAir is 15 kg. The actual allowance can depend on the applicable booking and route.",
      },
      {
        question: "How does the Alliance Air baggage size checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagInAir compares your measurements with the available Alliance Air baggage limits.",
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
      title: "FLY91 Baggage Size Checker – Cabin & Checked | BagInAir",
      description:
        "Check your FLY91 domestic cabin or checked bag size and weight. Enter your bag dimensions to see if it fits FLY91 baggage limits.",
    },

    content: {
      intro:
        "Check your FLY91 domestic baggage size and weight before your flight. Enter your cabin or checked bag dimensions and weight to compare your bag with the available FLY91 baggage limits.",

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
          "The cabin baggage weight limit used by BagInAir is 7 kg, with maximum dimensions of 35 × 30 × 20 cm.",
      },
      {
        question: "What is the FLY91 check-in baggage size limit?",
        answer:
          "The maximum checked baggage total dimension used by BagInAir is 158 cm.",
      },
      {
        question: "How much checked baggage is allowed on FLY91?",
        answer:
          "The checked baggage weight limit used by BagInAir is 15 kg. Actual baggage allowance can depend on the applicable airline rules.",
      },
      {
        question: "How does the FLY91 baggage size checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagInAir compares your measurements with the available FLY91 baggage limits.",
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
        "Air India Express Baggage Size Checker – Cabin & Checked | BagInAir",
      description:
        "Check your Air India Express domestic cabin or checked bag size and weight. Enter your dimensions to see if your bag fits the available limits.",
    },

    content: {
      intro:
        "Check your Air India Express domestic baggage size and weight before your flight. Enter your cabin or checked bag dimensions and weight to compare your bag with the available Air India Express baggage limits.",

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
          "What is the Air India Express check-in baggage size limit?",
        answer:
          "The maximum total checked baggage dimensions used by BagInAir are 319 cm, calculated from the length, width and height.",
      },
      {
        question:
          "How much checked baggage is allowed on Air India Express?",
        answer:
          "Air India Express checked baggage allowance varies by fare. Different fares can include different checked baggage allowances, so check your booking for the exact allowance.",
      },
      {
        question:
          "How does the Air India Express baggage size checker work?",
        answer:
          "Enter your bag type, dimensions and weight. BagInAir compares your measurements with the available Air India Express baggage limits.",
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