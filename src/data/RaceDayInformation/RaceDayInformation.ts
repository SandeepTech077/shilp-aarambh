import { Helper } from "@/helper/InformationRaceDayHelper/Helper";

export const RaceDayInformation = {
  titleLogo: Helper.Logo,
  note: "Reporting Time: 1 Hour Prior to the flag-off time",
  raceCategories: [
    {
      category: "Half Marathon 21.0975Km",
      flagOffTime: "5:30 AM",
      cutOffTime: "3:30 HOURS",
    },
    {
      category: "10Km Vijay Diwas Run",
      flagOffTime: "6:45 AM",
      cutOffTime: "90 MINUTES",
    },
    {
      category: "5Km Fun Run",
      flagOffTime: "7:30 AM",
      cutOffTime: "60 MINUTES",
    },
  ],
  facilities: [
    "Hydration Zone",
    "Medical Zone",
    "Recovery Zone",
    "Chemical Toilets",
    "Baggage Counter",
  ],
  importantNotes: [
    "We strongly recommend you to not carry any baggage. If you are carrying any belongings on the race day, preferably keep them in your vehicles. We do have an accessible clock room but there are restrictions on size and weight of baggage. The organizer does not take responsibility for any losses or damage to the contents. All baggage will be screened for security reasons and we recommend not having anything valuable or fragile goods in your bag.",
    "Vehicle entry for participants only allowed from GIFT City Circle.",
    "We suggest you to pool with other participants. Vehicles need to be parked properly and do not keep any valuables in your car. For any loss or damage organizers will not be responsible for the same.",
  ],
  raceVenue: {
    title: "Race Day Venue",
    address:
      "Event Ground, Near Maple 99 Food County,Near GIFT TOWER TWO, GIFT CITY, Gandhinagar",
    qrImage: Helper.RaceQr,
    mapImage: Helper.RaceVenue,
  },
  raceParking: {
    title: "Race Day PARKING",
    parkingArea: "Parking Area, Near GIFT Tower One,GIFT CITY, Gandhinagar",
    parkingAreaMap: Helper.ParkingMap,
    parkingQr: Helper.ParkingQr,
  },
};

export const ExpoRaceDayData = {
  titleLogo: Helper.Logo,
  runningDetails: {
    expoTitle: "Collect Your Running Number & T-shirt",
    date: "Thursday 12 December & Friday 13 December 2024",
    time: "4 PM to 9 PM",
    venue:
      "Gujarat Technological University – Garden Area, Chandkheda, Ahmedabad",
    googleMapLink: " https://maps.app.goo.gl/feY3TdyDgkdEPJqY9",
    bibCollection: {
      title: "BIB Collection for Outstation Participants",
      date: "Date: Saturday 14 December 2024",
      time: "2 PM to 7 PM",
      venue: "Shilp Marketing Office, GIFT City, Gandhinagar",
      googleMapLink: "Google Map: https://maps.app.goo.gl/KyZPjf4YzDvy27aJ7",
    },

    descripation: [
      "Participants have to show the Email OR SMS which has their BIB number. Alternatively please show registration information via SMS/email while collecting the BIB. ",
      " At the time of bib collection, participants are requested to carry original ID proof (ID Proof which has a Photo and Date of Birth) ",
      "No race category changes will be allowed ",
      "No t-shirt exchange will be allowed. (We will try our best to accommodate the tee size selected by you. However, if unavailable, the next best available size tee will be offered. Any requests for change in sizes/color will not be entertained. Please note no race day tee will be couriered to anyone pre or post-event.)",
      "Participants will not be allowed on the Race Day without BIB ",
      "No running number will be posted to individual mailing addresses for whatever reasons. Further, no number of bibs will be handed over to any participant post the declared closing hours of the Expo.",
      "Unavailable for the BIB Collection? Assign someone! Authorization Letter signed by the registered runner. ",
      "He/She must carry a soft copy of the Registration Confirmation [With BIB Details] email / SMS.",
      "Soft Copy of their ID Proof Note: BIBs will not be distributed on race day. ",
    ],
    groupRegistration: {
      title: "Group/Corporate Registration",
      describation: [
        {
          id: 1,
          describation:
            "A group/corporates can send their representative to collect the running number of bibs on behalf of their team members. Running number bibs of the entire group participating will be handed over in one go. ",
        },
        {
          id: 2,
          describation:
            "No running number will be posted to individual mailing addresses for whatsoever reason. Further, no number of bibs will be handed over to any participant post the declared closing hours of the Expo.",
        },
        {
          id: 3,
          describation:
            "The representative/s needs to carry the following documents for collection of number bibs:",
          points: [
            "Printed copy of group/corporate confirmation email sent across to the group’s point person",
            "A printed copy of the signed letter on the company letterhead authorizes the representative to collect number bibs on behalf of the group.",
            "Govt. approved photo ID proof of the representative.",
          ],
        },
      ],
    },
    mote: "Note: BIBS & T-SHIRT WILL NOT BE DISTRIBUTED ON RACE DAY",
  },
};

export const PrizeMoney = {
  titleLogoSvg: Helper.prizeMoneyLogo,
  subTitle:
    "Prize money eligibility is subject to prize money rules and race regulations.​",
  merathonsTable: {
    halfMarathon: {
      title: Helper.halfMarathon,
      fastestWinners: {
        title: "Half Marathon Fastest Winners - Male & Female",
        headers: ["Position", "Prize Money"],
        rows: [
          ["1st", "₹ 15,000"],
          ["2nd", "₹ 12,000"],
          ["3rd", "₹ 10,000"],
        ],
      },
      ageCategoryWinners: {
        title: "Half Marathon Age Category Winners - Male & Female",
        headers: ["Position", "Prize Money"],
        rows: [
          ["1st", "₹ 12,500"],
          ["2nd", "₹ 10,000"],
          ["3rd", "₹ 7,500"],
        ],
      },
      ageGroups: {
        title: "Half Marathon Age groups (age as of 27th December, 2025)",
        headers: [],
        rows: [
          ["18 - 24 years", "40 - 44 years", "60 - 64 years"],
          ["25 - 29 years", "45 - 49 years", "65 - 69 years"],
          ["30 - 34 years", "50 - 54 years", "70 years & Above"],
          ["35 - 39 years", "55 - 59 years"],
        ],
      },
    },

    tenKmRun: {
      title: Helper.vijayDiwasLogo,
      fastestWinners: {
        title: "10 KM Fastest Winners - Male & Female",
        headers: ["Position", "Prize Money"],
        rows: [
          ["1st", "₹ 10,000"],
          ["2nd", "₹ 7,500"],
          ["3rd", "₹ 5,000"],
        ],
      },
      ageCategoryWinners: {
        title: "10 KM Age Category Winners - Male & Female",
        headers: ["Position", "Prize Money"],
        rows: [
          ["1st", "₹ 7,500"],
          ["2nd", "₹ 5,000"],
          ["3rd", "₹ 3,000"],
        ],
      },
      ageGroups: {
        title: "10 KM Age groups (age as of 27th December, 2025)",
        headers: [],
        rows: [
          ["18 - 24 years", "40 - 44 years", "60 - 64 years"],
          ["25 - 29 years", "45 - 49 years", "65 - 69 years"],
          ["30 - 34 years", "50 - 54 years", "70 years & Above"],
          ["35 - 39 years", "55 - 59 years"],
        ],
      },
    },
  },
  prizeMoneyRules: {
    title: "Prize Money Rules",
    points: [
      "The prize money applies to Indian participants only.",
      "The fastest winners will not be eligible for prizes in any age category.",
      "On Race Day a victory ceremony will be conducted for the fastest winners for men & women. (Results announced on race day are Provisional) ",
      "All winners will be announced on our website and our Social Media Channels 15 working days post the event after verification of the document. They will be provided with their winner’s prizes 45 days from the finish of the event. ",
      "The cut-off of finish time for prize money entitlement for the half marathon race category is 3 hours and for the 10Km is 90 minutes from start time.",
      "Finish positions of half marathon & 10Km runners falling within the age groups will be based on net finish times only.",
      "Finish positions of fastest/top/overall half marathon & 10Km runners will be based on gun finish times only.",
      "Runners must cross the start line within 10 minutes of the official start time of the 10km run & half marathon race category, to be eligible for timings, rankings, and thereby prize money (where applicable).",
      "Prize winners declared may be required to submit further proof of identity/age as may be required by the organizer for the cash prize which the Event Promoter may at its sole discretion withhold disbursement or disqualify the said participant from the competition. ",
      "Timings and rankings will not be generated for runners who miss running through all timing points, including the timing mats placed at the start and finish gates; the performance of such runners will be considered as incomplete and will not be considered for rankings nor prize money winnings.",
      "All prizes are subjected to taxation, providing age proof and completion of necessary formalities.",
      "On Investigation, If the runners are found to have interchanged their running number bib and/or bib tag with others, will not be entitled to any timing or prize money (where applicable). Such runners shall also be disqualified from future competitions.",
    ],
  },
  protestAndAppeals: {
    title: "Protests and Appeals",
    points: [
      "Any confirmed runner of the Shilp Aarambh GIFT City Run 2024 can protest concerning the official race results about the overall or age category finish positions declared after the race. ",
      "The Protest Letter must be sent to the following address: Race Director – Shilp Aarambh GIFT City Run, SnehShilp Foundation, SHILP 3, 3rd Floor, Sindhu Bhavan Road, Shilp Circle,  Bodakdev, Ahmedabad – 380054.  ",
      "Only the protest letters received on or before Tuesday, 31st December 2024, will be entertained. A jury shall deliberate, verify, and deliver its decision on the Protest within 14 working days of receiving the Protest Letter. ",
      "The decision will be intimated to the person protesting and shall be featured on the event website, where in favourable. The decision of the Event Organizer shall be final and binding on all. ",
      "Timing results: Where the timing result of a runner to his/her gender and/or age, is required to be updated online, the runner needs to write, no later than 31st December 2024, at snehshilpfoundation@gmail.com, specifying the nature of the edit required and attaching the relevant proof of change. Requests received after 31st December 2024 will not be entertained.",
    ],
  },
};

export const pacers = {
  titleLogoImage: Helper.pacersLogo,
  subTitle: "THE GREATEST HELP A RUNNER CAN GET! ",
  describation:
    "A pacer is someone who runs in races or marathons to help set the pace for a runner or runners. With professional runners, they are often used to help set a new personal record. In short, a pacer is a runner who helps another runner set a certain pace.",
  vijayDiwas: {
    title: "10KM VIJAY DIWAS RUN PACERS",
    winners: [
      {
        id: 1,
        name: "SANDHYA CHAUDHARY",
        title: "Bus Time: 65 Min",
        image: Helper.sandhya,
      },
      {
        id: 2,
        name: "NEHA KEDIA",
        title: "Bus Time: 75 Min",
        image: Helper.neha,
      },
      {
        id: 3,
        name: "MENKA SATWANI",
        title: "Bus Time: 85 Min",
        image: Helper.menka,
      },
      {
        id: 4,
        name: "VIBHA SANGAM",
        title: "Bus Time: 90 Min",
        image: Helper.vibha,
      },
    ],
  },
  halfMarathon: {
    title: "HALF MARATHON PACERS",
    winners: [
      {
        id: 1,
        name: "SUKRUTI DESAI",
        title: "Bus Time: 02:15",
        image: Helper.sukruti,
      },
      {
        id: 2,
        name: "DR. MANISHA ZADFIYA",
        title: "Bus Time: 02:30",
        image: Helper.manisha,
      },
      {
        id: 3,
        name: "UNNATI YASH BHAVSAR",
        title: "Bus Time: 02:45",
        image: Helper.unnati,
      },
      {
        id: 4,
        name: "SMITA ANAND",
        title: "Bus Time: 03:00",
        image: Helper.smitha,
      },
    ],
  },
};

export const FaqsData = {
  titleLogo: Helper.FaqsLogo,
  faqDataArray: [
    {
      id: 1,
      question: "What is the course of the race?",
      answer: ["Half Marathon 21.0975Km, 10KM Run & 5Km Fun Run"],
    },
    {
      id: 2,
      question: "What is the registration fee?",
      answer: [
        {
          title: "EARLY BIRD OFFER FROM 26 Aug - 27 Oct",
          points: [
            "Half Marathon - 799 ₹",
            "10Km Run - 599 ₹",
            "5Km Fun Run - 399 ₹",
          ],
        },
        {
          title: "REGULAR FEES FROM 28 Oct - 8 Dec",
          points: [
            "Half Marathon - 899 ₹",
            "10Km Run - 699 ₹",
            "5Km Fun Run - 499 ₹",
          ],
        },
      ],
    },
    {
      id: 3,
      question: "What is the minimum age of applicants for all the events?",
      answer: [
        "Half Marathon 21.0975Km - Only for 18 years and above (born on or before 14 December 2006)",
        "10Km Vijay Diwas Run: Only for 14 years and above (born on or before 14 December 2010)",
        "5Km Fun Run: Only for 8 years and above (born on or before 14 December 2016)",
      ],
    },
    {
      id: 4,
      question: "What does the registration fee cover?",
      answer: [
        "Official Race T-shirt",
        "Goodie Bag",
        "An official race BIB (RFID Tagged) for Half Marathon & 10KM Run",
        "Water energy drinks and refreshments along the course.",
        "Medical Support",
        "Post-race refreshments",
        "Finisher’s medal",
        "Timing SMS & Timing Certificate (Soft Copy) for Half Marathon & 10KM Run",
        "Participation Certificate for 5KM Fun Run.",
      ],
    },
    {
      id: 5,
      question: "When do the registrations begin and end?",
      answer: [
        "Registration Start on Sunday, 14th July 2024, 7 AM IST",
        "Registration End on Sunday, 8th December, 2024, 11.59 PM IST or as soon as running places are filled, whichever is earlier.",
      ],
    },
    {
      id: 6,
      question: "What is the last date of registration?",
      answer: [
        "Last of registration is 8th December, 2024, 11.59 PM IST or as soon as running places are filled, whichever i	earlier.",
      ],
    },
    {
      id: 7,
      question: "Can I apply offline?",
      answer: ["Only online registrations are available."],
    },
    {
      id: 8,
      question: "Can I register on the day of the event?",
      answer: [
        "No. Registration requests will not be entertained after the closure of respective registration dates.",
      ],
    },
    {
      id: 9,
      question: "What are the payment modes for registration?",
      answer: [
        {
          title: "Payments accepted only through online gateways",
          question: "The following online payment modes are available:",
          options: [
            "Debit card",
            "Credit card",
            "Net banking",
            "Google Pay",
            "PAYTM",
            "UPI",
          ],
        },
      ],
    },
    {
      id: 10,
      question: "Can I register myself for more than one race?",
      answer: [
        "No. Individual registration is limited to participation in only one Race. In case of multiple registrations, the registration will be cancelled.",
      ],
    },
    {
      id: 11,
      question:
        "Can I change my race category after confirmation of my registration for the race?",
      answer: [
        "No. Once the race category has been confirmed, the same cannot be changed later.",
      ],
    },
    {
      id: 12,
      question:
        "Can I transfer/cancel my registration? Will there be any refund?",
      answer: [
        "Sorry, no cancellations/transfers are possible and registration fees are non-refundable.",
      ],
    },
    {
      id: 13,
      question: "What are the cut off times for all the races?",
      answer: [
        "Half Marathon 21.0975Km: 3:30 HOURS",
        "10Km Run: 90 Minutes",
        "5Km Fun Run: 60 Minutes",
      ],
    },
    {
      id: 14,
      question: "Is the race route suitable for Bare Footed Runner?",
      answer: [
        "No. The race management team do not recommend barefoot running on the track. Anyone running barefoot is at his own risk and responsibility.",
      ],
    },
    {
      id: 15,
      question:
        "What are the Age Categories and Prizes at Shilp Aarambh GIFT City Run 2024?",
      answer: [
        {
          title:
            "Prize money is distributed in various age groups for both men and women. ",
          question:
            "Prize money is distributed in various age groups for both men and women. ",
          describtion:
            "You can see the Age Categories and other Prize Money related details including rules and regulations on following links:",
          points: ["Half Marathon", "10Km Vijay Diwas Run"],
        },
      ],
    },
  ],
};

export const RoutesMapData = {
  titleLogoImage: Helper.routesMap,
  routes: [
    {
      category: "Half Marathon 21.0975Km",
      flagOffTime: "5:30 AM",
      cutOffTime: "3:30 HOURS",
    },
    {
      category: "10Km Vijay Diwas Run",
      flagOffTime: "6:45 AM",
      cutOffTime: "90 MINUTES",
    },
    {
      category: "5Km Fun Run",
      flagOffTime: "7:30 AM",
      cutOffTime: "60 MINUTES",
    },
  ],
  links: [
    {
      label: "ROUTE MAP 21.0975 KM HALF MARATHON",
      url: "#half-marathon-map",  
      image: Helper.routemap1,
    },
    {
      label: "ROUTE MAP 10 KM VIJAY DIWAS RUN",
      url: "#vijay-diwas-map",
      image: Helper.routemap2,
    },
    {
      label: "ROUTE MAP 5 KM FUN RUN",
      url: "#fun-run-map",
      image: Helper.routemap3,
    },
  ],
};

export const HowToReachData = {
  titleImageLogo: Helper.ReachLogo,
  mapsDetails: [
    {
      id: 1,
      title: "Sabarmati Railway Station",
      location: "Located approximately 21 Km from GIFT City",
      ImageIframeLink:
        "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14646.719929252407!2d72.5629956!3d23.131609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x395e8346579448e9:0x2f0bcbde28d0f97e!2sSabarmati%20BG%20Railway%20Station,%20Sabarmati,%20Ahmedabad,%20Gujarat!3m2!1d23.077021!2d72.5888049!4m5!1s0x395e812d71691091:0x551229413b590cbb!2sSHILP%20AARAMBH%20-%20GIFT%20CITY%20RUN%202024,%20Gujarat%20International%20Finance%20Tec-City,%20Gujarat!3m2!1d23.1643583!2d72.6832194!5e0!3m2!1sen!2sin!4v1717661763004!5m2!1sen!2sin",
    },
    {
      id: 2,
      title: "Gandhinagar Railway Station",
      location: "Located approximately 11 Km from GIFT City",
      ImageIframeLink:
        "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14623.267017324963!2d72.6177687!3d23.2066056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x395c2b005d8f478b:0x85b4ccb875186f4b!2sGandhinagar%20railway%20station,%20Sector%2014,%20Gandhinagar,%20Gujarat!3m2!1d23.2347872!2d72.6303349!4m5!1s0x395e812d71691091:0x551229413b590cbb!2sSHILP%20AARAMBH%20-%20GIFT%20CITY%20RUN%202024,%20Gujarat%20International%20Finance%20Tec-City,%20Gujarat!3m2!1d23.1643583!2d72.6832194!5e0!3m2!1sen!2sin!4v1717664034699!5m2!1sen!2sin",
    },
    {
      id: 3,
      title: "Maninagar Railway Station",
      location: "Located approximately 25 Km from GIFT City",
      ImageIframeLink:
        "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14658.688316196902!2d72.5810279!3d23.0747992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x395e85de2fca2291:0xc16167a9cb6af153!2sManinagar%20(Ahmedabad),%20Punit%20Maharaj%20Rd,%20Maninagar,%20Ahmedabad,%20Gujarat%20380008!3m2!1d22.9986522!2d72.6113898!4m5!1s0x395e812d71691091:0x551229413b590cbb!2sSHILP%20AARAMBH%20-%20GIFT%20CITY%20RUN%202024,%20Gujarat%20International%20Finance%20Tec-City,%20Gujarat!3m2!1d23.1643583!2d72.6832194!5e0!3m2!1sen!2sin!4v1717665205555!5m2!1sen!2sin",
    },
    {
      id: 4,
      title: "Ahmedabad Railway Station",
      location: "Located approximately 30 Km from GIFT City",
      ImageIframeLink:
        "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14650.309933523365!2d72.5657611!3d23.0956937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x395e843228d1521d:0x1832cda1079e727e!2sAhmedabad%20Railway%20Junction,%20BOOKING%20OFFICE,%20AHMEDABAD%20JUNCTION%20RAILWAY%20STATION,%20Kalupur%20Railway%20Station%20Road,%20Sakar%20Bazzar,%20Kalupur,%20Ahmedabad,%20Gujarat!3m2!1d23.0264164!2d72.6011484!4m5!1s0x395e812d71691091:0x551229413b590cbb!2sSHILP%20AARAMBH%20-%20GIFT%20CITY%20RUN%202024,%20Gujarat%20International%20Finance%20Tec-City,%20Gujarat!3m2!1d23.1643583!2d72.6832194!5e0!3m2!1sen!2sin!4v1717666245092!5m2!1sen!2sin",
    },
  ],
};

export const NearByHotel = {
  titleImageLogo: Helper.nearByHotelLogo,
  mapsDetails: [
    {
      id: 1,
      title: "Grand Mercure",
      location: "200 Meters From Event Venue",
      ImageIframeLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.193782599264!2d72.68277841533514!3d23.16360481633538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8130692d9119%3A0x5775e19b2a085045!2sGrand%20Mercure%20Ahmedabad%20GIFT%20City!5e0!3m2!1sen!2sin!4v1717668481885!5m2!1sen!2sin",
    },
    {
      id: 2,
      title: "Gift City Club",
      location: "1.8 Km From Event Venue",
      ImageIframeLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.3563585444744!2d72.6873576!3d23.1604299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8004b323de1b%3A0x5015062f9fe4fd29!2sGIFT%20City%20Club!5e0!3m2!1sen!2sin!4v1717670122232!5m2!1sen!2sin",
    },
    {
      id: 3,
      title: "Hotel Royal Relax",
      location: "7.9 Km From Event Venue​",
      ImageIframeLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.231243081058!2d72.6315477!3d23.1851107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0076fe4c47%3A0x7e83eed97f013cc0!2sHotel%20Royal%20Relax!5e0!3m2!1sen!2sin!4v1717670852675!5m2!1sen!2sin",
    },
    {
      id: 4,
      title: "The Eiffel Hotel",
      location: "6.1 Km From Event Venue",
      ImageIframeLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.9793631152154!2d72.6525738!3d23.1569826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8100201d0e3b%3A0x42852fa76c2de0b6!2sTHE%20EIFFEL%20HOTEL%20%26%20BANQUET!5e0!3m2!1sen!2sin!4v1717671501043!5m2!1sen!2sin",
    },
    {
      id: 5,
      title: "FabHotel Prime Blue Moon",
      location: "5.7 Km From Event Venue",
      ImageIframeLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.090446581961!2d72.6496939!3d23.184616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2ba00389d9a9%3A0x564d2c3fefee946b!2sFabHotel%20Prime%20Blue%20Moon!5e0!3m2!1sen!2sin!4v1717672077562!5m2!1sen!2sin",
    },
    {
      id: 6,
      title: "Hotel The Grand Pritam",
      location: "7.1 Km From Event Venue",
      ImageIframeLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.148881367163!2d72.6346527!3d23.1827153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a15202f15df%3A0xe43668e39f105d85!2sHotel%20The%20Grand%20Pritam!5e0!3m2!1sen!2sin!4v1717672402012!5m2!1sen!2sin",
    },
  ],
};

export const AIIMSData = {
  titleImageLogo: Helper.aiimsLogo,
  describation:"The AIMS certificate stands as a prestigious endorsement, recognizing our commitment to organizing world-class road races that adhere to international standards of excellence. With the AIMS certificate in hand, we proudly affirm that our race meets the highest benchmarks of quality, safety, and accuracy, ensuring an exceptional experience for all participants. ",
  banner1:Helper.aiimsCertified10k,
  banner2:Helper.aiimsCertified21k,
}
