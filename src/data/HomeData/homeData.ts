import { Helper } from "@/helper/HomePageImages/Helper";

export const homeData = {
  BannerSection: {
    Banner: Helper.Banner,
    MobileBanner: Helper.MobileBanner,
    EventDate: "25 December, 2025",
    EventTime: "9:00 AM",
    EventLocation: "Gift City, Gandhinagar",
  },
  resgisterSection: {
    leftIcon: Helper.LeftIcon,
    centerContent: "Book your spot before the LAUNCH offer ends on 25 August!!",
    rightIcon: Helper.RightIcon,
    buttonText: "Register Now",
  },
  youtubeSection: {
    Logo: Helper.EventLogo,
    description:
      "Shilp Aarambh GIFT City Run was conceived as a celebration of fitness, community, and a shared vision for a healthier, drug-free future. The event was born out of the idea that by coming together, we can make a difference in the lives of individuals struggling with drug addiction. It's an opportunity to raise awareness, promote a healthy lifestyle, and build a supportive community.",
    youtubeLink: "https://www.youtube.com/embed/ukJgQc9HuLM?start=1",
  },
  raceCategary: {
    icon: Helper.LeftIcon,
    backGroundImage: Helper.Banner,
    title: "RACE CATEGORY",
    profiles: [
      {
        id: 1,
        profileImage: Helper.ProfileImage1,
        raceDistance: "21.0975 KM",
        raceName: "Half Marathon",
        buttontext: "Register now",
        buttonIcon: Helper.RightSideArrow,
      },
      {
        id: 2,
        profileImage: Helper.ProfileImage2,
        raceDistance: "10 KM",
        raceName: "Vijay Diwas Run",
        buttontext: "Register now",
        buttonIcon: Helper.RightSideArrow,
      },
      {
        id: 3,
        profileImage: Helper.ProfileImage3,
        raceDistance: "5 KM",
        raceName: "Fun Run",
        buttontext: "Register now",
        buttonIcon: Helper.RightSideArrow,
      },
    ],
  },
  vijaySection: {
    iconTitle: Helper.VijayTitle,
    description:
      "The AIMS certificate stands as a prestigious endorsement, recognizing our commitment to organizing world-class road races that adhere to international standards of excellence. With the AIMS certificate in hand, we proudly affirm that our race meets the highest benchmarks of quality, safety, and accuracy, ensuring an exceptional experience for all participants.",
    btnTitle: "Register Now ",
    VijayLogo: Helper.VijayLogo,
  },
  vijayDiwasSection: {
    leftSection: {
      imageBanner: Helper.VijayDiwasBanner,
    },
    rightSection: {
      logoTitleImage: Helper.VijayDiwas,
      subTilte: "Run for Victory, Run for Unity! ",
      describation: [
        "We are proud to introduce the VIJAY DIWAS RUN, a 10Km race dedicated to the wounded soldiers and brave hearts of the Indian Armed Forces who made the ultimate sacrifice in the 1971 war. As we celebrate the 3rd edition of the Shilp Aarambh GIFT City Run, this event takes on even greater significance. ",
        "Be a part of this exhilarating event on 28th December 2025, as we commemorate the 54th Vijay Diwas on 16th December. Let’s come together to honor their valor and celebrate the spirit of unity that binds our nation.",
      ],
      btnText: "Register Now",
    },
  },
  runnerInfo: {
    rightSection: {
      titleImage: Helper.LabelImage,
      describation:
        "We can’t wait to welcome you to the start line of the 4th Season of Shilp Aarambh GIFT City Run. We consider reading information in detail, with attention, as critical for your race day experience as are the months of training preparation preceding it.",
      btnText: "Register Now",
    },
    leftSection: {
      sections: [
        {
          id: 1,
          title: "PRICE MONEY",
          Svg: Helper.Price,
        },
        {
          id: 2,
          title: "RACE DAY INFORMATION",
          Svg: Helper.RaceInfo,
        },
        {
          id: 3,
          title: "BIB EXPO",
          Svg: Helper.Expo,
        },
        {
          id: 4,
          title: "Pacers",
          Svg: Helper.Pacers,
        },
        {
          id: 5,
          title: "ROUTE MAPS",
          Svg: Helper.Location,
        },
        {
          id: 6,
          title: "FAQ",
          Svg: Helper.FAQ,
        },
      ],
    },
  },
  sponsourSection: {
    topSection: {
      leftArrowSvg: Helper.LeftIcon,
      MiddleTitle: Helper.SponserTitle,
      RihjtArrowSvq: Helper.RightIcon,
    },
    BelowLogos: [
      {
        id: 1,
        logo: Helper.SnehFOundation,
      },
      {
        id: 2,
        logo: Helper.PefiLogo,
      },
      {
        id: 3,
        logo: Helper.AllLogo,
      },
    ],
  },
};
