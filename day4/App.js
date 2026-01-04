import React from "react";
import { createRoot } from "react-dom/client";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Header = () => {
  return (
    <div id="container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/Kl3zy_LKADQyqC5E7TDNCJ-rQezxmoygEvFic7pUShQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTcv/MDY3LzI5Ny9zbWFs/bC9zcGljeS1mb29k/LWxvZ28tdGVtcGxh/dGUtdmVjdG9yLmpw/Zw"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>Cart</li>
          <li>Address</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // const RestaurantCard = ({resName,cuisines}) => {//destructing prop obj

  // console.log("props is obj", props.resData);

  const { resData } = props;
  console.log("resObj", resData?.info);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info || {};

  return (
    <div className="res-card" style={styleCard}>
      {/* <img
        alt="res-logo"
        className="res-logo"
        // this is the string concatination
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3 style={{ color: "green" }}>{resData.info.name}</h3>

      <h4 className="">{resData.info.cuisines.join(", ")}</h4>
      <h4 className="">{resData.info.avgRating} Stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4 className="">{resData.info.sla.deliveryTime + " Minutes"}</h4> */}

      <img
        alt="res-logo"
        className="res-logo"
        // this is the string concatination
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="res-details">
        <h3 style={{ color: "green" }}>{name}</h3>
        <h4 className="">{cuisines?.join(", ")}</h4>
        <h4 className="">{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4 className="">{sla?.deliveryTime + " Minutes"}</h4>
      </div>
    </div>
  );
};

const resList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "10583",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/a46c64e9-675b-45e5-9945-01a30b6cf99b_10583.JPG",
      locality: "Coles Road",
      areaName: "Frazer Town",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-04 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "2.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a4e521ad-9492-4617-89f6-0f053b7244e0",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-coles-road-frazer-town-rest10583",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "971742",
      name: "Easybites By Empire",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/16/d9259cc1-bc8f-4770-8652-5b078a69d120_971742.JPG",
      locality: "Malleshwaram",
      areaName: "Malleshwaram",
      costForTwo: "₹200 for two",
      cuisines: [
        "Burgers",
        "sandwich",
        "Fast Food",
        "Beverages",
        "Rolls & Wraps",
      ],
      avgRating: 4.4,
      parentId: "443171",
      avgRatingString: "4.4",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-03 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹299",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a4e521ad-9492-4617-89f6-0f053b7244e0",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/easybites-by-empire-malleshwaram-rest971742",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "696232",
      name: "ITC Aashirvaad Soul Creations",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/8/a0cdb01b-4ba8-4bf8-945c-ae58bc33c282_696232.jpg",
      locality: "Shivaji Nagar",
      areaName: "Dispensary Rd",
      costForTwo: "₹500 for two",
      cuisines: [
        "Indian",
        "pure veg",
        "Healthy Food",
        "Home Food",
        "South Indian",
        "North Indian",
        "Sweets",
      ],
      avgRating: 4.6,
      veg: true,
      parentId: "346141",
      avgRatingString: "4.6",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-04 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a4e521ad-9492-4617-89f6-0f053b7244e0",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/itc-aashirvaad-soul-creations-shivaji-nagar-dispensary-rd-rest696232",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "880834",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/0b6fb57c-5f1b-4bda-974a-cdb91efd0e1a_880834.JPG",
      locality: "FRAZER TOWN",
      areaName: "Coles Rd",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "2.4K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-04 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a4e521ad-9492-4617-89f6-0f053b7244e0",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-frazer-town-coles-rd-rest880834",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "755276",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "f44bc9708c514cd2dd6ae0d8b4677214",
      locality: "Pulikeshi Nagar",
      areaName: "Pulikeshi Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "4961",
      avgRatingString: "4.3",
      totalRatingsString: "3.6K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-04 02:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "188",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a4e521ad-9492-4617-89f6-0f053b7244e0",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-pulikeshi-nagar-rest755276",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "882679",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/0df62868-129b-47bf-9f27-50fafcf2a39d_882679.jpg",
      locality: "Aramanenagar",
      areaName: "Sadashivnagar",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-03 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a4e521ad-9492-4617-89f6-0f053b7244e0",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-aramanenagar-sadashivnagar-rest882679",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "288893",
      name: "Meghana Foods",
      cloudinaryImageId: "slheenytwb3iaypqf4yd",
      locality: "Dr. Rajkumar Road",
      areaName: "Rajajinagar",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian", "Chinese", "Seafood"],
      avgRating: 4.6,
      parentId: "635",
      avgRatingString: "4.6",
      totalRatingsString: "63K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-04 01:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a4e521ad-9492-4617-89f6-0f053b7244e0",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/meghana-foods-dr-rajkumar-road-rajajinagar-rest288893",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "577056",
      name: "SMOOR",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/2/e45efc3e-7775-4a94-99a2-82ba257e8f29_577056.JPG",
      locality: "Armane Nagar",
      areaName: "Malleshwaram",
      costForTwo: "₹450 for two",
      cuisines: [
        "Asian",
        "Burgers",
        "Italian",
        "Thai",
        "Sushi",
        "Salads",
        "Pastas",
        "Pizzas",
        "Mexican",
        "Chinese",
      ],
      avgRating: 4.7,
      parentId: "3506",
      avgRatingString: "4.7",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-01-04 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹300 OFF",
        subHeader: "ABOVE ₹949",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a4e521ad-9492-4617-89f6-0f053b7244e0",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/smoor-armane-nagar-malleshwaram-rest577056",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
const resObj = {
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "10583",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/a46c64e9-675b-45e5-9945-01a30b6cf99b_10583.JPG",
    locality: "Coles Road",
    areaName: "Frazer Town",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas", "Burger"],
    avgRating: 4.3,
    parentId: "721",
    avgRatingString: "4.3",
    totalRatingsString: "19K+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 3.7,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-01-04 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹49",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.4",
        ratingCount: "2.8K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-a4e521ad-9492-4617-89f6-0f053b7244e0",
  },
  cta: {
    link: "https://www.swiggy.com/city/bangalore/pizza-hut-coles-road-frazer-town-rest10583",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input />
        <button>Search</button>
      </div>
      <div className="res-container">
        {/* When we need component which can be reused create a component */}
        {/* RestaurantCard */}
        {/* if we want to pass data to the component we can pass as a pro(properties are the normal arguments to a fn) */}
        {/* <RestaurantCard
          name="Magana foods"
          cuisines="Biryani, North Indian, Asia"
        /> */}
        {/* <RestaurantCard resData={resObj} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} /> */}
        {resList.map((restaurant, index) => {
          // it take big performance issue
          // when we give the don't give key react will completely remove that list & add's it's from scratch. If we add will place ele at that place based on Id
          // using index is a bad pratice in react it's writen react doc also
          // not using key (not acceptable) <<< index as key <<< unique id (best pratice)
          return (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
        {/* Config driven UI */}
      </div>
    </div>
  );
};

const AppLoyout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

let root = createRoot(document.getElementById("root"));
root.render(<AppLoyout />);
