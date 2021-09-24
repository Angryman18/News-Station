import { createStore } from "redux";

const initialState = [
  {
    author: null,
    title: "Union Bank Q4 results: Profit after tax recorded at Rs 1,330 cr",
    description:
      "For the full year, the standalone profit stood at Rs 2,906 crore as against a loss of Rs 6,613 crore in 2019-20, the bank said in a press release",
    url: "https://www.businesstoday.in/sectors/banks/union-bank-q4-results-profit-after-tax-recorded-at-rs-1330-cr/story/441065.html",
    source: "businesstoday",
    image:
      "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-07T16:17:23+00:00",
  },
  {
    author: "XtraTime",
    title:
      "Sri Lankan cricketers agree to tour England after being served ultimatum by SLC Board",
    description:
      "Xtra Time Web Desk: Sri Lankan cricketers will be touring England without signing any contract with the Cricket Board. Kushal Perera and his boys have agreed to travel to England\u0026#8230;The post Sri Lankan cricketers agree to tour England after being served ultimatum by SLC Board first appeared on XtraTime | To get the best and exclusive sporting news, keep watching XtraTime.",
    url: "https://xtratime.in/sri-lankan-cricketers-agree-to-tour-england-after-being-served-ultimatum-by-slc-board/",
    source: "Xtratime",
    image: "https://picsum.photos/id/1/5616/3744",
    category: "sports",
    language: "en",
    country: "in",
    published_at: "2021-06-08T06:36:37+00:00",
  },
  {
    author: "Monit Khanna",
    title: "Eating Cocoa Helps Massively In Losing Weight, Shows Study",
    description:
      "Researchers discovered that the mice on cocoa supplements gained weight at a 21 percent lower rate and had smaller spleen weights compared to high-fat-fed control mice who weren\u2019t offered the cocoa supplement.\u00a0",
    url: "https://www.indiatimes.com/technology/science-and-future/cocoa-weight-loss-study-538424.html",
    source: "Indiatimes",
    image:
      "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T07:15:35+00:00",
  },
  {
    author: "Indiatimes",
    title:
      "Nithyananda Who Banned Indians From Entering \u0027Kailasa\u0027 Says His Arrival Will End COVID In India",
    description:
      "As India battles the brutal second wave of COVID, self-styled godman Nithyananda, in his new video, claimed that the COVID pandemic will end only when he lands in the country.",
    url: "https://www.indiatimes.com/news/india/nithyananda-who-banned-indians-from-entering-kailasa-says-his-arrival-will-end-covid-in-india-542169.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/Apr/nithyananda_60816fc15c713.PNG",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T07:15:35+00:00",
  },
  {
    author: "Aishwarya Dharni",
    title:
      "Watch: Healthcare Workers Dance To The Tunes Of \u0027Zingaat\u0027 At COVID Facility In Mumbai",
    description:
      "A video of medical professionals donning personal protective suits and dancing to Zingaat from the Marathi film Sairat has gone viral on social media. The video is said to be from a Mumbai COVID facility.",
    url: "https://www.indiatimes.com/trending/social-relevance/video-healthcare-dance-to-zingaat-tune-in-mumbai-542161.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/Jun/zingaat-dancing_60bf052a810fa.PNG",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T07:15:35+00:00",
  },
  {
    author: "Manisha Mandal",
    title:
      "Mahhi Vij\u0027s Younger Brother Succumbs To COVID, Actor Thanks Sonu Sood For Arranging Bed For Him",
    description:
      "This deadly virus has taken countless lives and wonder how many more deaths people will have to see especially of their loved ones. Bidding adieu to your loved ones is damn hard and right now television actress Mahhi Vij is going through that pain.",
    url: "https://www.indiatimes.com/entertainment/celebs/mahhi-vijs-younger-brother-succumbs-to-covid-actor-thanks-sonu-sood-for-arranging-bed-for-him-542160.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/Jun/FBImage1-9_60bf01893762c.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T07:15:35+00:00",
  },
  {
    author: "Indiatimes",
    title:
      "22 Allegedly Die During \u0027Mock Oxygen Drill\u0027 At Agra Hospital, Probe Ordered",
    description: "The matter is being investigated",
    url: "https://www.indiatimes.com/news/india/22-allegedly-die-during-mock-oxygen-drill-at-agra-hospital-probe-ordered-542170.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/Jun/FB---2021-06-08T115444936_60bf0ddcd0017.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T08:15:34+00:00",
  },
  {
    author: "Shweta Sengar",
    title:
      "After Aarey It\u0027s Aravali, 10,000 Illegal Houses That Destroyed Forest Area Will Be Demolished",
    description:
      "The Supreme Court has directed Haryana and the Faridabad municipal corporation to remove \u201call encroachments\u201d, consisting around 10,000 residential construction, in Aravali forest area near a village, saying \u201cland grabbers cannot take refuge in the rule of law\u201d and talk of \u201cfairness\u201d.",
    url: "https://www.indiatimes.com/news/india/after-aarey-its-aravali-10000-illegal-houses-that-destroyed-forest-area-will-be-demolished-542182.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/Jun/aravali_60bf202230d65.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T08:40:36+00:00",
  },
  {
    author: "Bobins Abraham",
    title:
      "A Mumbai Citizen\u0027s Initiative That Fed Millions During Pandemic \u0026 Lockdown Needs Your Help Now",
    description:
      "Born out of a citizen initiative in March 2020 where a group of people came together to feed a few people in their neighborhood following the first lockdown, Khaana Chahiye today has fed millions and continues to do so.",
    url: "https://www.indiatimes.com/news/india/a-mumbai-citizens-initiative-that-fed-millions-during-pandemic-lockdown-needs-your-help-now-542187.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/Jun/97522BB4-3924-48A4-8BFE-0F02BA10C0B7_60bf2761db5f9.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T09:10:37+00:00",
  },
  {
    author: "Bhupinder Singh",
    title:
      "World Oceans Day: 15 Beautiful Beaches Around The World You Must Visit At Least Once",
    description:
      "Now, making a list is always controversial and this is no exception. Dozens of other charming beaches were left out but we chose 15 beautiful beaches with stunning natural beauty for this list.",
    url: "https://www.indiatimes.com/trending/environment/world-oceans-day-beaches-you-must-visit-542202.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/photogallery/2021/Jun/fb_60bf3de065c7c.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T10:35:34+00:00",
  },
  {
    author: "Gursharan Bhalla",
    title:
      "No Funds To Run Hotel, Hyatt Regency In Mumbai Shuts Down \u0027Until Further Notice\u0027",
    description:
      "The hotel has temporarily suspended all operations due to no funds from Asian Hotels (West) Ltd., the owner of Hyatt Regency Mumbai said in a statement. The hotel, located close to the Mumbai airport, is owned by Asian Hotels (West) Ltd.",
    url: "https://www.indiatimes.com/news/india/hyatt-regency-mumbai-shuts-down-due-to-funds-shortage-542207.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/Jun/FBImage14-9_60bf42b282657.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T11:35:38+00:00",
  },
  {
    author: "Bobins Abraham",
    title:
      "Maratha Reservation: Here Is Why Uddhav Thackeray Wants The 50 Per Cent Cap Lifted",
    description:
      "Supreme Court said that people from the Maratha community cannot be declared as educationally and socially backward community to bring them within the reserved category.",
    url: "https://www.indiatimes.com/news/india/maratha-reservation-here-is-why-uddhav-thackeray-wants-the-50-per-cent-cap-lifted-542219.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/Jun/FBImage17_60bf5c5dae7a8.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T13:00:38+00:00",
  },
  {
    author: "Indiatimes",
    title:
      "COVID Certificates Linked To Passports; 22 Die In Agra During Mock Oxygen Drill + Top News",
    description: "ICYMI",
    url: "https://www.indiatimes.com/news/india/covid-certificates-linked-to-passports-22-die-in-agra-during-mock-oxygen-drill-top-news-542230.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/Jun/wrap-94_60bf607a970cf.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T13:00:38+00:00",
  },
  {
    author: "Basit Aijaz",
    title:
      "Netizens Mock Logan Paul For His \u0027Cuddle Match\u0027 With Floyd Mayweather Jr., Funny Memes Flood Twitter",
    description:
      "The bout, more than anything else, will be remembered for the two men hugging it out in the ring - the moment which has now led to a hilarious meme fest online.",
    url: "https://www.indiatimes.com/trending/wtf/logan-paul-and-floyd-mayweather-jr-cuddle-match-memes-542210.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/Jun/hug-floyd_60bf4cd6826dc.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T13:00:38+00:00",
  },
  {
    author: "Shweta Sengar",
    title:
      "Get Your Shots Again! US Universities Tell Students Who Took Covaxin Or Sputnik V Jabs",
    description:
      "Since March, over 400 US colleges and universities have announced students get Covid-19 vaccinations, ahead of the Autumn semester but those who have been inoculated with India\u0027s indigenous Covaxin or the Russian-made Sputnik V are being asked to re-vaccinate as these vaccines have not yet been approved by the World Health Organization (WHO).",
    url: "https://www.indiatimes.com/news/india/get-your-shots-again-us-universities-tell-students-who-took-covaxin-or-sputnik-v-jabs-542221.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/May/sputnik-vaccine_60ae1c217730b.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-06-08T13:00:38+00:00",
  },
  {
    author: "SportsCafe Desk",
    title:
      "Always have to win against Bayern Munich in order to win trophies, claims Kylian Mbappe",
    description:
      "Kylian Mbappe has lavished praise on Bayern Munich with the Frenchman praising the club for the way they\u2019ve recruited players and kept themselves at the top of the game for years. The PSG superstar also admitted that Lucas Hernandez has tried to get him to sign for the Bundesliga giants.",
    url: "https://sportscafe.in/football/articles/2021/jun/08/always-have-to-win-against-bayern-munich-in-order-to-win-trophies-claims-kylian-mbappe?utm_medium=rss",
    source: "Sportscafe",
    image:
      "https://cdn-images.spcafe.in/img/es3-cfill-w480-h240/articles/football/Kylian_Mbappe_France_Sweden_UEFA_Nations_League20_Twitter.jpg",
    category: "sports",
    language: "en",
    country: "in",
    published_at: "2021-06-08T13:06:02+00:00",
  },
  {
    author: "SportsCafe Desk",
    title:
      "WTC Final | Bumrah and Ishant have been bowling well but Shami holds the key, opines Parthiv Patel\u00a0",
    description:
      "Former Indian wicketkeeper Parthiv Patel has termed Mohammed Shami as the key bowler for India in the wTC Final, ahead of Jasprit Bumrah and Ishant Sharma. He also added that India\u0027s no.3 Cheteshwar Pujara can turn out to be the leading run-getter in the inaugural WTC final against New Zealand.",
    url: "https://sportscafe.in/cricket/articles/2021/jun/08/wtc-final-bumrah-and-ishant-have-been-bowling-well-but-shami-holds-the-key-opines-parthiv-patel?utm_medium=rss",
    source: "Sportscafe",
    image:
      "https://cdn-images.spcafe.in/img/es3-cfill-w480-h240-y1/articles/Cricket_1/Mohammed_Shami_Indian_team_Twitter_bcci.jpg",
    category: "sports",
    language: "en",
    country: "in",
    published_at: "2021-06-08T13:16:17+00:00",
  },
  {
    author: "Garima Satija",
    title:
      "\u0027Time To Take Car Out Again\u0027, Zoya Akhtar Shares Pic Of Iconic Car From Zindagi Na Milegi Dobara As Film Turns 10",
    description:
      "Hrithik Roshan, who starred in the film, commented, \u0022Hahaha yeah baby!\u0022",
    url: "https://www.indiatimes.com/entertainment/bollywood/time-to-take-car-out-again-zoya-akhtar-shares-pic-of-iconic-car-from-zindagi-na-milegi-dobara-as-film-turns-10-545020.html",
    source: "Indiatimes",
    image: "https://im.indiatimes.in/content/2021/Jul/Car_60efef9d539e4.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-07-15T09:00:36+00:00",
  },
  {
    author: "Sumedha Tripathi",
    title:
      "Ingenious! YouTuber Uses Tiny Nuclear Generator To Power Game Boy He Improvised \u0026 It Works Like A Charm",
    description:
      "A YouTuber charged his Gameboy with radioactive Hydrogen gas Tritium and played one hour of Tetris for a month.",
    url: "https://www.indiatimes.com/trending/jugaad/youtuber-charges-game-boy-using-tiny-nuclear-generator-545018.html",
    source: "Indiatimes",
    image:
      "https://im.indiatimes.in/content/2021/Jul/photo-1525799894461-3cfe39b72d69_60efe6c6d804e.jpg",
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-07-15T09:30:36+00:00",
  },
  {
    author: null,
    title: "Mapmaking company TomTom lowers forecasts amid chips shortage",
    description:
      "The shortage has had the twin effect of cutting car production, he added, and pushing manufacturers to prioritise simpler cars which use fewer chips.",
    url: "https://www.businesstoday.in/latest/corporate/story/mapmaking-company-tomtom-lowers-forecasts-amid-chips-shortage-301430-2021-07-15?utm_source=rssfeed",
    source: "Business Today | Latest Stock Market And Economy News India",
    image: null,
    category: "business",
    language: "en",
    country: "in",
    published_at: "2021-07-15T09:35:09+00:00",
  },
  {
    author: null,
    title:
      "Poco F3 GT launch soon: Specs, features, India price, and all that we know so far",
    description:
      "Poco F3 GT is set to arrive this month. Plenty of details are already available about this smartphone. So as to keep you updated, we decided to stack everything known about this smartphone so far.",
    url: "https://www.businesstoday.in/technology/story/poco-f3-gt-launch-soon-specs-features-india-price-and-all-that-we-know-so-far-301442-2021-07-15?utm_source=rssfeed",
    source: "businesstoday",
    image: null,
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-07-15T11:11:23+00:00",
  },
  {
    author: null,
    title: "Sensex rises 255 points to record high, Nifty ends above 15,900",
    description:
      "Sensex rose 255 points to close at an all-time high of 53,158 and Nifty climbed 70 points to all-time high of 15,924",
    url: "https://www.businesstoday.in/markets/stocks/story/sensex-rises-255-points-to-end-at-record-high-nifty-claims-15900-level-301447-2021-07-15?utm_source=rssfeed",
    source: "businesstoday",
    image: null,
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-07-15T11:35:40+00:00",
  },
  {
    author: null,
    title:
      "Realme GT Master Edition launch date is July 21, full specifications leaked",
    description:
      "The Realme GT Master Edition may come in two editions and use both Snapdragon 870 and Snapdragon 778G chips.",
    url: "https://www.businesstoday.in/technology/story/realme-gt-master-edition-launch-date-is-july-21-full-specifications-leaked-301450-2021-07-15?utm_source=rssfeed",
    source: "businesstoday",
    image: null,
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-07-15T11:41:27+00:00",
  },
  {
    author: null,
    title:
      "Noise ColorFit Ultra with 1.75-inch display, aluminium alloy body launched, price starts at Rs 4,499",
    description:
      "Noise ColorFit Ultra is yet another smartwatch that the company has launched in the budget category. The company had earlier launched Noise Active smartwatch and a couple of audio products.",
    url: "https://www.businesstoday.in/technology/story/noise-colorfit-ultra-with-175-inch-display-aluminium-alloy-body-launched-price-starts-at-rs-4499-301449-2021-07-15?utm_source=rssfeed",
    source: "businesstoday",
    image: null,
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-07-15T11:41:27+00:00",
  },
  {
    author: null,
    title:
      "Civil Aviation Ministry issues draft Drone Rules 2021; check out details",
    description:
      "The Drone Rules, 2021, are expected to replace the Unmanned Aircraft Systems (UAS) Rules that were issued in March this year. The Ministry has stated that drone corridors will be developed for cargo deliveries",
    url: "https://www.businesstoday.in/industry/aviation/story/civil-aviation-ministry-issues-draft-drone-rules-2021-check-out-details-301452-2021-07-15?utm_source=rssfeed",
    source: "businesstoday",
    image: null,
    category: "general",
    language: "en",
    country: "in",
    published_at: "2021-07-15T12:10:44+00:00",
  },
];

const defaultState = {
  data: initialState,
};

const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

const reduxStore = createStore(reducer);

export default reduxStore;
