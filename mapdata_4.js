var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "",
    background_transparent: "yes",
    border_color: "#004B84",
    popups: "on_click",
    
    //State defaults
    state_description: "Preliminary notice is statutory in this state. You have to send your Prelien before 45 days from the first day on the Job.<br />",
    state_color: "#FFFFFF",
    state_hover_color: "#1A3066",
    state_url: "https://www.sunraynotice.com",
    border_size: "1.2",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#12141D",
    label_hover_color: "#fff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "public",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "Learn More",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      url: "https://sunray-notice.webflow.io/resources/hawaii"
    },
    AK: {
      name: "Alaska",
      color: "rgb(213,213,213)",
      inactive: "yes",
      url: "https://sunray-notice.webflow.io/resources/alaska"
    },
    FL: {
      name: "Florida",
      color: "rgb(213,213,213)",
      inactive: "yes",
            url: "https://sunray-notice.webflow.io/resources/florida"
    },
    NH: {
      name: "New Hampshire",
      url: "https://sunray-notice.webflow.io/resources/new-hampshire"
    },
    VT: {
      name: "Vermont",
      url: "https://sunray-notice.webflow.io/resources/vermont"
    },
    ME: {
      name: "Maine",
      url: "https://sunray-notice.webflow.io/resources/maine"
    },
    RI: {
      name: "Rhode Island",
      url: "https://sunray-notice.webflow.io/resources/rhode-island"
    },
    NY: {
      name: "New York",
      color: "#17598A",
      url: "https://sunray-notice.webflow.io/resources/new-york"
    },
    PA: {
      name: "Pennsylvania",
      url: "https://sunray-notice.webflow.io/resources/pennsylvania"
    },
    NJ: {
      name: "New Jersey",
      url: "https://sunray-notice.webflow.io/resources/new-jersey"
    },
    DE: {
      name: "Delaware",
      color: "rgb(213,213,213)",
      inactive: "yes",
      url: "https://sunray-notice.webflow.io/resources/delware"
    },
    MD: {
      name: "Maryland",
      color: "#17598A",
      url: "https://sunray-notice.webflow.io/resources/maryland"
    },
    VA: {
      name: "Virginia",
      url: "https://sunray-notice.webflow.io/resources/virgina"
    },
    WV: {
      name: "West Virginia",
      url: "https://sunray-notice.webflow.io/resources/west-virgina"
    },
    OH: {
      name: "Ohio",
      url: "https://sunray-notice.webflow.io/resources/ohio"
    },
    IN: {
      name: "Indiana",
      url: "https://sunray-notice.webflow.io/resources/indiana"
    },
    IL: {
      name: "Illinois",
      url: "https://sunray-notice.webflow.io/resources/illinois"
    },
    CT: {
      name: "Connecticut",
      color: "rgb(213,213,213)",
      inactive: "yes",
      url: "https://sunray-notice.webflow.io/resources/connecticut"
    },
    WI: {
      name: "Wisconsin",
      url: "https://sunray-notice.webflow.io/resources/wisconsin"
    },
    NC: {
      name: "North Carolina",
      url: "https://sunray-notice.webflow.io/resources/north-carolina"
    },
    DC: {
      name: "District of Columbia",
      color: "rgb(213,213,213)",
      inactive: "yes",
      url: "https://sunray-notice.webflow.io/resources/district-of-columbia"
    },
    MA: {
      name: "Massachusetts",
      url: "https://sunray-notice.webflow.io/resources/massachusetts"
    },
    TN: {
      name: "Tennessee",
      url: "https://sunray-notice.webflow.io/resources/tennessee"
    },
    AR: {
      name: "Arkansas",
      url: "https://sunray-notice.webflow.io/resources/arkansas"
    },
    MO: {
      name: "Missouri",
      url: "https://sunray-notice.webflow.io/resources/missouri"
    },
    GA: {
      name: "Georgia",
      url: "https://sunray-notice.webflow.io/resources/georgia"
    },
    SC: {
      name: "South Carolina",
      color: "rgb(213,213,213)",
      inactive: "yes",
      url: "https://sunray-notice.webflow.io/resources/south-carolina"
    },
    KY: {
      name: "Kentucky",
      url: "https://sunray-notice.webflow.io/resources/kentucky"
    },
    AL: {
      name: "Alabama",
      url: "https://sunray-notice.webflow.io/resources/alabama"
    },
    LA: {
      name: "Louisiana",
      url: "https://sunray-notice.webflow.io/resources/louisiana"
    },
    MS: {
      name: "Mississippi",
      url: "https://sunray-notice.webflow.io/resources/mississippi"
    },
    IA: {
      name: "Iowa",
      url: "https://sunray-notice.webflow.io/resources/iowa"
    },
    MN: {
      name: "Minnesota",
      url: "https://sunray-notice.webflow.io/resources/minnesota"
    },
    OK: {
      name: "Oklahoma",
      url: "https://sunray-notice.webflow.io/resources/oklahoma"
    },
    TX: {
      name: "Texas",
      url: "https://sunray-notice.webflow.io/resources/texas"
    },
    NM: {
      name: "New Mexico",
      url: "https://sunray-notice.webflow.io/resources/new-mexico"
    },
    KS: {
      name: "Kansas",
      color: "rgb(213,213,213)",
      inactive: "yes",
      url: "https://sunray-notice.webflow.io/resources/kansas"
    },
    NE: {
       name: "Nebraska",
      color: "rgb(213,213,213)",
      inactive: "yes",
      url: "https://sunray-notice.webflow.io/resources/nebraska"
    },
    SD: {
      name: "South Dakota",
      url: "https://sunray-notice.webflow.io/resources/south-dakota"
    },
    ND: {
      name: "North Dakota",
      url: "https://sunray-notice.webflow.io/resources/north-dakota"
    },
    WY: {
      name: "Wyoming",
      url: "https://sunray-notice.webflow.io/resources/wyoming"
    },
    MT: {
      name: "Montana",
      url: "https://sunray-notice.webflow.io/resources/montana"
    },
    CO: {
      name: "Colorado",
      url: "https://sunray-notice.webflow.io/resources/colorado"
    },
    UT: {
      name: "Utah",
      url: "https://sunray-notice.webflow.io/resources/utah"
    },
    AZ: {
      name: "Arizona",
      url: "https://sunray-notice.webflow.io/resources/arizona"
    },
    NV: {
      name: "Nevada",
      url: "https://sunray-notice.webflow.io/resources/nevada"
    },
    OR: {
      name: "Oregon",
      url: "https://sunray-notice.webflow.io/resources/oregon"
    },
    WA: {
      name: "Washington",
      url: "https://sunray-notice.webflow.io/resources/washington"
    },
    CA: {
      name: "California",
      url: "https://sunray-notice.webflow.io/resources/california"
    },
    MI: {
      name: "Michigan",
      url: "https://sunray-notice.webflow.io/resources/michigan"
    },
    ID: {
      name: "Idaho",
      url: "https://sunray-notice.webflow.io/resources/idaho"
    },
    GU: {
      name: "Guam",
      hide: "yes",
      url: "https://sunray-notice.webflow.io/resources/Guam"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes",
      url: "https://sunray-notice.webflow.io/resources/virgin-islands"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes",
      url: "https://sunray-notice.webflow.io/resources/puerto-rico"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes",
      url: "https://sunray-notice.webflow.io/resources/northern-mariana-islands"
    },
    AS: {
      name: "American Samoa",
      hide: "yes",
      url: "https://sunray-notice.webflow.io/resources/american-samoa"
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  regions: {}
};
