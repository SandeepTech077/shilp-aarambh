import { Helper } from "@/helper/RaceCategoriesHelper/Helper";

export const HalfMerathonData = {
   
    banner: {
      banner: Helper.Banner,
      mobileBanner: Helper.MobileBanner,
      title: "HALF MARATHON",
    },

  toggles: [
    {
      id: "information",
      title: "Information",
    },
    {
      id: "entry",
      title: "ENTRY RULES & REGULATIONS",
    },
    {
      id: "prize",
      title: "PRIZE MONEY",
    },
    {
      id: "pacers",
      title: "PACERS",
    },
    {
      id: "runner",
      title: "RUNNERS INFORMATION",
    },
  ],

  togglesDetails: [
    {
      id: "information",
      inforamtion: {
        title: "INFORMATION",
        raceDay: "Sunday, 28th December, 2025",
        raceDistance:"21.0975KM",
        RegistrationDate: "",
        Start: "on Saturday, 26th July 2025, 7 AM IST",
        End: "on Sunday, 16th December, 2025, 11.59 PM IST or as soon as running places are filled, whichever is earlier",
        theMinimumAge:
          " to apply for the Half Marathon race category is 18 years (born on or before 27.12.2007)",
      },
      important: {
        paragraph: [
          "Participation confirmation shall be subject to – ",
          "a) Entry rules and regulations ",
          "b) Participant fulfilling the minimum age eligibility – completed 18 years of age (born on or before 27.12.2007) ",
          "On race day, registered participants will be lined up on a first come first served basis for the race start. ",
          "All finishers of the Half Marathon race category will get the finisher medal post their run on race day (medals will not be posted to individual runners). While provisional results will be available by 7 pm on race day, timing certificates of Half Marathon finishers will be available for download post 10 working days from race day.",
        ],
      },
      registration: {
        title: "REGISTRATION FEES",
        earlybird: {
          title: "EARLY BIRD OFFER",
          date: "26 July - 30 Sept",
          rupess: "₹ 899",
        },
        ragularFees: {
          title: "REGULAR FEE",
          data: "1 Oct - 16 Dec",
          rupess: "₹ 1199",
        },
        describation:
          "The registration fee paid is exclusively for your race category participation in the Shilp Aarambh GIFT City Run 2025.",
      },
      payment: {
        title: "PAYMENT MODES",
        describation: [
          "Credit Card and Debit cards (can only be used during online registrations)",
          "Net Banking (can only be used during online registrations)",
          "UPI & Wallet (can only be used during online registrations)",
        ],
        btnTitle: "Register Now ",
      },
    },
    {
      id: "entry",
      entry: {
        title: "ENTRY RULES & REGULATIONS",
        subTitle: "Participants must thoroughly read the mandated",
        points: [
          "Please thoroughly go through all information mentioned in this form before registering your entry.",
          "Participants can register only online using this registration link and pay applicable entry fees based on the race category opted for. No individual/group has been authorized to collect entries on behalf of the event organizer, Snehshilp Foundation.",
          "Once you register online, your details cannot be changed. For any corrections, please email snehshilpfoundation@gmail.com.",
          "Participants must register on or before the closing date of the registration, no new entry will be accepted post – 16th December, 2025",
          "Once registration is confirmed, the fee is non-refundable, IF THE EVENT IS CANCELLED DUE TO ANY UNFORESEEN CIRCUMSTANCES BEYOND THE CONTROL OF THE ORGANIZERS, THE REGISTRATION FEE PAID BY YOU FOR PARTICIPATION WILL BE ADJUSTED TOWARDS YOUR PARTICIPATION ON A NEW DATE. IN THE EVENT OF YOU BEING UNABLE TO PARTICIPATE ON THE NEW DATE, YOU WILL NOT BE ELIGIBLE FOR A REFUND. ",
          "Registration fees shall not be refunded under non-participation, including failure by a confirmed participant to collect his/her bib from the Expo or not allowed to run on the race day due to high temperature or being unwell.",
          "Please save the confirmation email received after registration as a reference for future communications.",
          "Runners found to have interchanged their running number bib and/or timing bib tag with another individual, will be disqualified from the event and shall not be allowed to apply or participate in the subsequent edition of the event.",
          "Please note if you don’t wear your timing bib tag as instructed, you won’t be able to get an official finish time and thereby the official certificate recording your finish times. No bib tag – No Timing – No Prize.",
          "No vehicles are allowed on the course. Anyone bringing wheeled vehicles will be disqualified from the race; you will be asked to leave the course.",
          "Only those confirmed participants wearing the running number bibs will be allowed on the route. Any person found wearing the incorrect bib or no bib will be disqualified and removed by the course security.",
          "Further, every runner must wear his/her running number bib on the front of the vest. Any mutilation, fold, alteration, or damage to the bib will amount to disqualification of the runner from the event.",
          "Organizers reserve the right to stop any participant from participating who is found medically unfit to continue in the opinion of the medical personnel.",
          "Baggage counters are available for all participants. It is strongly recommended that you do not leave valuables like mobile phones, cameras, jewelry, watches, electronic gadgets, etc. in the bag stored. Organizers are not responsible for any loss of baggage or belongings",
          "Participants must cooperate with the police and security personnel deputed at the event venue and on the route. Participants/supporters are liable to random checking on race day – this is for your security.",
          "The right to participate in the event and the rights and benefits available to the participant under this registration form is at the sole discretion of the Event Organizing team and cannot be transferred to any other person under any circumstances, and the participant alone shall be entitled to the rights and benefits arising hereunder.",
          "Any race day audio, video, or visual recordings made by a participant at the Shilp Aarambh GIFT City Run BIB Expo or on race day are to be used only for personal purposes; these cannot be used for any commercial purposes. ",
          "The event organizer reserves the right to amend or alter the terms of the Shilp Aarambh GIFT City Run at any point in time without any notice.",
        ],
      },
    },
    {
      id: "prize",
      prizeMoney: {
        title: "PRIZE MONEY",
        subTitle:
          "Prize money eligibility is subject to prize money rules and race regulations.​",
        tableOne: {
          title: "Half Marathon Fastest Winners - Male & Female",
          fastestWinnersPrizeMoney: [
            {
              potion: "1st",
              prizeMoney: "₹ 35,000",
            },
            {
              potion: "2nd",
              prizeMoney: "₹ 25,000",
            },
            {
              potion: "3rd",
              prizeMoney: "₹ 20,000",
            },
          ],
          describation:
            "Half Marathon Age Category Winners The top 3 Half Marathon finishers, male and female, falling within the age groups given below, shall be eligible to following prize money:",
          tableTwo: {
            title: "Half Marathon Age Category Winners - Male & Female",
            ageCategoryWinnersPrizeMoney: [
              {
                potion: "1st",
                prizeMoney: "₹ 12,500",
              },
              {
                potion: "2nd",
                prizeMoney: "₹ 10,000",
              },
              {
                potion: "3rd",
                prizeMoney: "₹ 7,500",
              },
            ],
          },
          thirdTable: {
            title: "Half Marathon Age groups (age as of 14th December 2024)",
            catagorys: [
              "18 - 24 years",
              "25 - 29 years",
              "30 - 34 years",
              "35 - 39 years",
              "40 - 44 years",
              "45 - 49 years",
              "50 - 54 years",
              "55 - 59 years",
              "60 - 64 years",
              "65 - 69 years",
              "70 years & Above",
            ],
          },
        },
      },
      prizeMoneyRules: {
        title: "Prize Money Rules",
        describation: [
          "The prize money applies to Indian participants only.",
          "The fastest winners will not be eligible for prizes in any age category.",
          "On Race Day a victory ceremony will be conducted for the fastest winners for men & women. (Results announced on race day are Provisional) ",
          "All winners will be announced on our website and our Social Media Channels 15 working days post the event after verification of the document. They will be provided with their winner’s prizes 60 days from the finish of the event. ",
          "The cut-off of finish time for prize money entitlement for the half marathon race category is 3 hours from start time.",
          "Finish positions of half marathon runners falling within the age groups will be based on net finish times only.",
          "Finish positions of fastest/top/overall half marathon runners will be based on gun finish times only.",
          "Runners must cross the start line within 10 minutes of the official start time of the half marathon race category, to be eligible for timings, rankings, and thereby prize money (where applicable).",
          "Prize winners declared may be required to submit further proof of identity/age as may be required by the organizer for the cash prize which the Event Promoter may at its sole discretion withhold disbursement or disqualify the said participant from the competition. ",
          "All prizes are subjected to taxation, providing age proof and completion of necessary formalities.",
          "Timings and rankings will not be generated for runners who miss running through all timing points, including the timing mats placed at the start and finish gates; the performance of such runners will be considered as incomplete and will not be considered for rankings nor prize money winnings.",
          "On Investigation, If the runners are found to have interchanged their running number bib and/or bib tag with others, will not be entitled to any timing or prize money (where applicable). Such runners shall also be disqualified from future competitions. ",
          "In the event of an investigation revealing the submission of fraudulent documents, you will face a LIFETIME BAN from participating in the Shilp Aarambh GIFT City Run. ",
          "Additional documents or video KYC may be requested for verification purposes.",
          "If any participant is found to have been banned by the Athletics Federation of India (AFI) or National Anti-Doping Agency (NADA), they will not be entitled to any prize money and banned for life from participating in any future editions of this event.",
        ],
      },
      protestAndApperals:{
        title:"Protests and Appeals",
        describations:[
            "Any confirmed runner of the Shilp Aarambh GIFT City Run 2025 can protest concerning the official race results about the overall or age category finish positions declared after the race. ",
            "The Protest email must be sent to snehshilpfoundation@gmail.com ",
            "Only the protest emails received on or before 30th December 2025 will be entertained. A jury shall deliberate, verify, and deliver its decision on the Protest within 10 working days of receiving the Protest email. ",
            "The decision will be intimated to the person protesting and shall be featured on the event website, where in favourable. The decision of the Event Organizer shall be final and binding on all.",
            "Timing results: Where the timing result of a runner to his/her gender and/or DOB is required to be updated online, the runner needs to write, no later than 5 January 2026, at snehshilpfoundation@gmail.com, specifying the nature of the edit required and attaching the relevant proof of change. Requests received after 5 January 2026 will not be entertained.",
        ]
      }
    },
    {
        id:"pacers",
        title:"HALF MARATHON PACERS",
        subTitle:"THE GREATEST HELP A RUNNER CAN GET!",
        describation:"A pacer is someone who runs in races or marathons to help set the pace for a runner or runners. With professional runners, they are often used to help set a new personal record. In short, a pacer is a runner who helps another runner set a certain pace.",
        profiles:[
            {
                id:1,
                profileImage:Helper.Sukruti,
                name:"SUKRUTI DESAI",
                time:"Bus Time: 02:15"
            },
            {
                id:2,
                profileImage:Helper.Manisha,
                name:"DR. MANISHA ZADFIYA.",
                time:"Bus Time: 02:30"
            },
            {
                id:3,
                profileImage:Helper.Unnati,
                name:"UNNATI YASH BHAVSAR",
                time:"Bus Time: 02:45"
            },
            {
                id:4,
                profileImage:Helper.Smita,
                name:"SMITA ANAND",
                time:"Bus Time: 03:00"
            }
        ]
    },
    {
       id:"runner",
       runnerInformation:{
            title:"Runners Information",
            describation:[
                "We can’t wait to welcome you to the start line of the 3rd Season of Shilp Aarambh GIFT City Run.",
                "We consider reading information in detail, with attention, as critical for your race day experience as are the months of training preparation preceding it.",

            ],
            iconsDetails:[
                {
                    id:1,
                    iconSvg:Helper.Expo,
                    profileName:"BIB EXPO"
                },
                {
                    id:2,
                    iconSvg:Helper.RaceIcon,
                    profileName:"RACE DAY INFORMATION"

                },
                {
                    id:3,
                    iconSvg:Helper.Routes,
                    profileName:"ROUTE MAPS"
                }
            ]

        }
    }
  ],
};
export const VijayDiwasData = { 
   
  banner: {
    banner: Helper.Banner,
    mobileBanner: Helper.MobileBanner,
    title: "10KM VIJAY DIWAS RUN",
  },

  toggles: [
    {
      id: "information",
      title: "Information",
    },
    {
      id: "entry",
      title: "ENTRY RULES & REGULATIONS",
    },
    {
      id: "prize",
      title: "PRIZE MONEY",
    },
    {
      id: "pacers",
      title: "PACERS",
    },
    {
      id: "runner",
      title: "RUNNERS INFORMATION",
    },
  ],

  togglesDetails: [
    {
      id: "information",
      inforamtion: {
        title: "INFORMATION",
        raceDay: "Sunday, 28th December, 2025",
         raceDistance:"10 KM",
        RegistrationDate: "",
        Start: "on Saturday, 26th July 2025, 7 AM IST",
        End: "on Sunday, 16th December, 2025, 11.59 PM IST or as soon as running places are filled, whichever is earlier",
        theMinimumAge:
          " to apply for the Half Marathon race category is 14 years (born on or before 27.12.2011)",
      },
      important: {
        paragraph: [
          "Participation confirmation shall be subject to – ",
          "a) Entry rules and regulations ",
          "b) Participant fulfilling the minimum age eligibility – completed 14 years of age (born on or before 27.12.2011) ",
          "On race day, registered participants will be lined up on a first come first served basis for the race start. ",
          "All finishers of the Half Marathon race category will get the finisher medal post their run on race day (medals will not be posted to individual runners). While provisional results will be available by 7 pm on race day, timing certificates of Half Marathon finishers will be available for download post 10 working days from race day.",
        ],
      },
      registration: {
        title: "REGISTRATION FEES",
        earlybird: {
          title: "EARLY BIRD OFFER",
          date: "26 July - 30 Sept",
          rupess: "₹ 699",
        },
        ragularFees: {
          title: "REGULAR FEE",
          data: "1 Oct - 16 Dec",
          rupess: "₹ 899",
        },
        describation:
          "The registration fee paid is exclusively for your race category participation in the Shilp Aarambh GIFT City Run 2025.",
      },
      payment: {
        title: "PAYMENT MODES",
        describation: [
          "Credit Card and Debit cards (can only be used during online registrations)",
          "Net Banking (can only be used during online registrations)",
          "UPI & Wallet (can only be used during online registrations)",
        ],
        btnTitle: "Register Now ",
      },
    },
    {
      id: "entry",
      entry: {
        title: "ENTRY RULES & REGULATIONS",
        subTitle: "Participants must thoroughly read the mandated",
        points: [
          "Please thoroughly go through all information mentioned in this form before registering your entry.",
          "Participants can register only online using this registration link and pay applicable entry fees based on the race category opted for. No individual/group has been authorized to collect entries on behalf of the event organizer, Snehshilp Foundation.",
          "Once you register online, your details cannot be changed. For any corrections, please email snehshilpfoundation@gmail.com.",
          "Participants must register on or before the closing date of the registration, no new entry will be accepted post – 16th December, 2025",
          "Once registration is confirmed, the fee is non-refundable, IF THE EVENT IS CANCELLED DUE TO ANY UNFORESEEN CIRCUMSTANCES BEYOND THE CONTROL OF THE ORGANIZERS, THE REGISTRATION FEE PAID BY YOU FOR PARTICIPATION WILL BE ADJUSTED TOWARDS YOUR PARTICIPATION ON A NEW DATE. IN THE EVENT OF YOU BEING UNABLE TO PARTICIPATE ON THE NEW DATE, YOU WILL NOT BE ELIGIBLE FOR A REFUND. ",
          "Registration fees shall not be refunded under non-participation, including failure by a confirmed participant to collect his/her bib from the Expo or not allowed to run on the race day due to high temperature or being unwell.",
          "Please save the confirmation email received after registration as a reference for future communications.",
          "Runners found to have interchanged their running number bib and/or timing bib tag with another individual, will be disqualified from the event and shall not be allowed to apply or participate in the subsequent edition of the event.",
          "Please note if you don’t wear your timing bib tag as instructed, you won’t be able to get an official finish time and thereby the official certificate recording your finish times. No bib tag – No Timing – No Prize.",
          "No vehicles are allowed on the course. Anyone bringing wheeled vehicles will be disqualified from the race; you will be asked to leave the course.",
          "Only those confirmed participants wearing the running number bibs will be allowed on the route. Any person found wearing the incorrect bib or no bib will be disqualified and removed by the course security.",
          "Further, every runner must wear his/her running number bib on the front of the vest. Any mutilation, fold, alteration, or damage to the bib will amount to disqualification of the runner from the event.",
          "Organizers reserve the right to stop any participant from participating who is found medically unfit to continue in the opinion of the medical personnel.",
          "Baggage counters are available for all participants. It is strongly recommended that you do not leave valuables like mobile phones, cameras, jewelry, watches, electronic gadgets, etc. in the bag stored. Organizers are not responsible for any loss of baggage or belongings",
          "Participants must cooperate with the police and security personnel deputed at the event venue and on the route. Participants/supporters are liable to random checking on race day – this is for your security.",
          "The right to participate in the event and the rights and benefits available to the participant under this registration form is at the sole discretion of the Event Organizing team and cannot be transferred to any other person under any circumstances, and the participant alone shall be entitled to the rights and benefits arising hereunder.",
          "Any race day audio, video, or visual recordings made by a participant at the Shilp Aarambh GIFT City Run BIB Expo or on race day are to be used only for personal purposes; these cannot be used for any commercial purposes. ",
          "The event organizer reserves the right to amend or alter the terms of the Shilp Aarambh GIFT City Run at any point in time without any notice.",
        ],
      },
    },
    {
      id: "prize",
      prizeMoney: {
        title: "PRIZE MONEY",
        subTitle:
          "Prize money eligibility is subject to prize money rules and race regulations.​",
        tableOne: {
          title: "10KM  Fastest Winners - Male & Female",
          fastestWinnersPrizeMoney: [
            {
              potion: "1st",
              prizeMoney: "₹ 25,000",
            },
            {
              potion: "2nd",
              prizeMoney: "₹ 20,000",
            },
            {
              potion: "3rd",
              prizeMoney: "₹ 17,500",
            },
          ],
          describation:
            "Half Marathon Age Category Winners The top 3 Half Marathon finishers, male and female, falling within the age groups given below, shall be eligible to following prize money:",
          tableTwo: {
            title: "10KM  Fastest Winners - Male & Female",
            ageCategoryWinnersPrizeMoney: [
              {
                potion: "1st",
                prizeMoney: "₹ 12,500",
              },
              {
                potion: "2nd",
                prizeMoney: "₹ 7,500",
              },
              {
                potion: "3rd",
                prizeMoney: "₹ 5,000",
              },
            ],
          },
          thirdTable: {
            title: "10KM  Fastest Winners - Male & Female",
            catagorys: [
              "18 - 24 years",
              "25 - 29 years",
              "30 - 34 years",
              "35 - 39 years",
              "40 - 44 years",
              "45 - 49 years",
              "50 - 54 years",
              "55 - 59 years",
              "60 - 64 years",
              "65 - 69 years",
              "70 years & Above",
            ],
          },
        },
      },
      prizeMoneyRules: {
        title: "Prize Money Rules",
        describation: [
          "The prize money applies to Indian participants only.",
          "The fastest winners will not be eligible for prizes in any age category.",
          "On Race Day a victory ceremony will be conducted for the fastest winners for men & women. (Results announced on race day are Provisional) ",
          "All winners will be announced on our website and our Social Media Channels 15 working days post the event after verification of the document. They will be provided with their winner’s prizes 60 days from the finish of the event. ",
          "The cut-off of finish time for prize money entitlement for the half marathon race category is 3 hours from start time.",
          "Finish positions of half marathon runners falling within the age groups will be based on net finish times only.",
          "Finish positions of fastest/top/overall half marathon runners will be based on gun finish times only.",
          "Runners must cross the start line within 10 minutes of the official start time of the half marathon race category, to be eligible for timings, rankings, and thereby prize money (where applicable).",
          "Prize winners declared may be required to submit further proof of identity/age as may be required by the organizer for the cash prize which the Event Promoter may at its sole discretion withhold disbursement or disqualify the said participant from the competition. ",
          "All prizes are subjected to taxation, providing age proof and completion of necessary formalities.",
          "Timings and rankings will not be generated for runners who miss running through all timing points, including the timing mats placed at the start and finish gates; the performance of such runners will be considered as incomplete and will not be considered for rankings nor prize money winnings.",
          "On Investigation, If the runners are found to have interchanged their running number bib and/or bib tag with others, will not be entitled to any timing or prize money (where applicable). Such runners shall also be disqualified from future competitions. ",
          "In the event of an investigation revealing the submission of fraudulent documents, you will face a LIFETIME BAN from participating in the Shilp Aarambh GIFT City Run. ",
          "Additional documents or video KYC may be requested for verification purposes.",
          "If any participant is found to have been banned by the Athletics Federation of India (AFI) or National Anti-Doping Agency (NADA), they will not be entitled to any prize money and banned for life from participating in any future editions of this event.",
        ],
      },
      protestAndApperals:{
        title:"Protests and Appeals",
        describations:[
            "Any confirmed runner of the Shilp Aarambh GIFT City Run 2025 can protest concerning the official race results about the overall or age category finish positions declared after the race. ",
            "The Protest email must be sent to snehshilpfoundation@gmail.com ",
            "Only the protest emails received on or before 30th December 2025 will be entertained. A jury shall deliberate, verify, and deliver its decision on the Protest within 10 working days of receiving the Protest email. ",
            "The decision will be intimated to the person protesting and shall be featured on the event website, where in favourable. The decision of the Event Organizer shall be final and binding on all.",
            "Timing results: Where the timing result of a runner to his/her gender and/or DOB is required to be updated online, the runner needs to write, no later than 5 January 2026, at snehshilpfoundation@gmail.com, specifying the nature of the edit required and attaching the relevant proof of change. Requests received after 5 January 2026 will not be entertained.",
        ]
      }
    },
    {
        id:"pacers",
        title:"10KM RUN PACERS",
        subTitle:"THE GREATEST HELP A RUNNER CAN GET!",
        describation:[
            "A pacer is someone who runs in races or marathons to help set the pace for a runner or runners.",
            "With professional runners, they are often used to help set a new personal record. In short, a pacer is a runner who helps another runner set a certain pace."
        ],
        profiles:[
            {
                id:1,
                profileImage:Helper.Sandhya,
                name:"SANDHYA CHAUDHARY",
                time:"Bus Time: 65 Min"
            },
            {
                id:2,
                profileImage:Helper.Neha,
                name:"NEHA KEDIA",
                time:"Bus Time: 75 Min"
            },
            {
                id:3,
                profileImage:Helper.Menka,
                name:"MENKA SATWANI",
                time:"Bus Time: 85 Min"
            },
            {
                id:4,
                profileImage:Helper.Vibha,
                name:"VIBHA SANGAM",
                time:"Bus Time: 90 Min"
            }
        ]
    },
    {
       id:"runner",
       runnerInformation:{
            title:"Runners Information",
            describation:[
                "We can’t wait to welcome you to the start line of the 4rd Season of Shilp Aarambh GIFT City Run.",
                "We consider reading information in detail, with attention, as critical for your race day experience as are the months of training preparation preceding it.",

            ],
            iconsDetails:[
                {
                    id:1,
                    iconSvg:Helper.Expo,
                    profileName:"BIB EXPO"
                },
                {
                    id:2,
                    iconSvg:Helper.RaceIcon,
                    profileName:"RACE DAY INFORMATION"

                },
                {
                    id:3,
                    iconSvg:Helper.Routes,
                    profileName:"ROUTE MAPS"
                }
            ]

        }
    }
  ],
};
export const FunRunData = {
  banner: {
    banner: Helper.Banner,
    mobileBanner: Helper.MobileBanner,
    title: "5 KM FUN RUN",
  },

  toggles: [
    { id: "information", title: "Information" },
    { id: "entry", title: "ENTRY RULES & REGULATIONS" },
    { id: "group", title: "GROUP REGISTRATION" },
    { id: "runner", title: "RUNNERS INFORMATION" },
  ],

  togglesDetails: [
    {
      id: "information",
      inforamtion: {
        title: "INFORMATION",
        raceDay: "Sunday, 28th December, 2025",
        raceDistance: "5KM",
        RegistrationDate: "",
        Start: "on Saturday, 26th July 2025, 7 AM IST",
        End: "on Sunday, 16th December, 2025, 11.59 PM IST or as soon as running places are filled, whichever is earlier",
        theMinimumAge: " to apply for the Half Marathon race category is 18 years (born on or before 27.12.2007)",
      },
      important: {
        paragraph: [
          "Participation confirmation shall be subject to – ",
          "a) Entry rules and regulations ",
          "b) Participant fulfilling the minimum age eligibility – completed 18 years of age (born on or before 27.12.2007) ",
          "On race day, registered participants will be lined up on a first come first served basis for the race start. ",
          "All finishers of the Half Marathon race category will get the finisher medal post their run on race day (medals will not be posted to individual runners). While provisional results will be available by 7 pm on race day, timing certificates of Half Marathon finishers will be available for download post 10 working days from race day.",
        ],
      },
      registration: {
        title: "REGISTRATION FEES",
        earlybird: {
          title: "EARLY BIRD OFFER",
          date: "26 July - 30 Sept",
          rupess: "₹ 399",
        },
        ragularFees: {
          title: "REGULAR FEE",
          data: "1 Oct - 16 Dec",
          rupess: "₹ 499",
        },
        describation:
          "The registration fee paid is exclusively for your race category participation in the Shilp Aarambh GIFT City Run 2025.",
      },
      payment: {
        title: "PAYMENT MODES",
        describation: [
          "Credit Card and Debit cards (can only be used during online registrations)",
          "Net Banking (can only be used during online registrations)",
          "UPI & Wallet (can only be used during online registrations)",
        ],
        btnTitle: "Register Now ",
      },
    },
    {
      id: "entry",
      entry: {
        title: "ENTRY RULES & REGULATIONS",
        subTitle: "Participants must thoroughly read the mandated",
        points: [
          "Please thoroughly go through all information mentioned in this form before registering your entry.",
          "Participants can register only online using this registration link and pay applicable entry fees based on the race category opted for. No individual/group has been authorized to collect entries on behalf of the event organizer, Snehshilp Foundation.",
          "Once you register online, your details cannot be changed. For any corrections, please email snehshilpfoundation@gmail.com.",
          "Participants must register on or before the closing date of the registration, no new entry will be accepted post – 16th December, 2025",
          "Once registration is confirmed, the fee is non-refundable, IF THE EVENT IS CANCELLED DUE TO ANY UNFORESEEN CIRCUMSTANCES BEYOND THE CONTROL OF THE ORGANIZERS, THE REGISTRATION FEE PAID BY YOU FOR PARTICIPATION WILL BE ADJUSTED TOWARDS YOUR PARTICIPATION ON A NEW DATE. IN THE EVENT OF YOU BEING UNABLE TO PARTICIPATE ON THE NEW DATE, YOU WILL NOT BE ELIGIBLE FOR A REFUND.",
          "Registration fees shall not be refunded under non-participation, including failure by a confirmed participant to collect his/her bib from the Expo or not allowed to run on the race day due to high temperature or being unwell.",
          "Please save the confirmation email received after registration as a reference for future communications.",
          "Runners found to have interchanged their running number bib and/or timing bib tag with another individual, will be disqualified from the event and shall not be allowed to apply or participate in the subsequent edition of the event.",
          "Please note if you don’t wear your timing bib tag as instructed, you won’t be able to get an official finish time and thereby the official certificate recording your finish times. No bib tag – No Timing – No Prize.",
          "No vehicles are allowed on the course. Anyone bringing wheeled vehicles will be disqualified from the race; you will be asked to leave the course.",
          "Only those confirmed participants wearing the running number bibs will be allowed on the route. Any person found wearing the incorrect bib or no bib will be disqualified and removed by the course security.",
          "Further, every runner must wear his/her running number bib on the front of the vest. Any mutilation, fold, alteration, or damage to the bib will amount to disqualification of the runner from the event.",
          "Organizers reserve the right to stop any participant from participating who is found medically unfit to continue in the opinion of the medical personnel.",
          "Baggage counters are available for all participants. It is strongly recommended that you do not leave valuables like mobile phones, cameras, jewelry, watches, electronic gadgets, etc. in the bag stored. Organizers are not responsible for any loss of baggage or belongings.",
          "Participants must cooperate with the police and security personnel deputed at the event venue and on the route. Participants/supporters are liable to random checking on race day – this is for your security.",
          "The right to participate in the event and the rights and benefits available to the participant under this registration form is at the sole discretion of the Event Organizing team and cannot be transferred to any other person under any circumstances, and the participant alone shall be entitled to the rights and benefits arising hereunder.",
          "Any race day audio, video, or visual recordings made by a participant at the Shilp Aarambh GIFT City Run BIB Expo or on race day are to be used only for personal purposes; these cannot be used for any commercial purposes.",
          "The event organizer reserves the right to amend or alter the terms of the Shilp Aarambh GIFT City Run at any point in time without any notice.",
        ],
      },
    },
    {
      id: "group",
      title: "GROUP REGISTRATION",
      describation: [
        "Group entries shall be accepted ONLY for the 5KM Fun Run Category. There shall be a minimum of 10 individual entries from the said participative categories to comprise a group.",
        "All members of the group must fulfill the minimum age eligibility to apply,",
        "All members of the group must fulfill the minimum age eligibility to apply,",
        "5Km Fun Run to be born on or before 14th December 2016",
      ],
      shortDescribation:
        "For group registration, please contact at snehshilpfoundation@gmail.com +91 87585 04535, +91 99014 94158",
    },
    {
      id: "runner",
      runnerInformation: {
        title: "Runners Information",
        describation: [
          "We can’t wait to welcome you to the start line of the 3rd Season of Shilp Aarambh GIFT City Run.",
          "We consider reading information in detail, with attention, as critical for your race day experience as are the months of training preparation preceding it.",
        ],
        iconsDetails: [
          {
            id: 1,
            iconSvg: Helper.Expo,
            profileName: "BIB EXPO",
          },
          {
            id: 2,
            iconSvg: Helper.RaceIcon,
            profileName: "RACE DAY INFORMATION",
          },
          {
            id: 3,
            iconSvg: Helper.Routes,
            profileName: "ROUTE MAPS",
          },
        ],
      },
    },
  ],
};
