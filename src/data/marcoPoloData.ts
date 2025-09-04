export interface Location {
  id: string;
  name: string;
  modernName?: string;
  coordinates: [number, number]; // [lat, lng]
  type: 'city' | 'region' | 'route' | 'court' | 'trade-center';
  yearVisited?: number;
  significance: string;
  description: string;
  historicalContext: string;
  economicImportance?: string;
  culturalNotes?: string;
}

export interface Route {
  id: string;
  name: string;
  type: 'silk-road' | 'sea-route' | 'overland';
  coordinates: [number, number][];
  description: string;
  yearActive: number;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  type: 'travel' | 'political' | 'economic' | 'cultural' | 'biographical';
  location?: string;
  coordinates?: [number, number];
}

export const marcoPoloLocations: Location[] = [
  {
    id: 'venice',
    name: 'Venice',
    coordinates: [45.4408, 12.3155],
    type: 'city',
    yearVisited: 1254,
    significance: 'Birthplace and starting point of Marco Polo\'s journey',
    description: 'The wealthy maritime republic where Marco Polo was born in 1254. Venice was the premier trading power connecting Europe with the Byzantine Empire and the East.',
    historicalContext: 'Venice in the 13th century was at its commercial zenith, controlling much of Mediterranean trade. The city was a sophisticated republic with extensive trading networks.',
    economicImportance: 'Venice was the primary European gateway for Eastern luxury goods including spices, silk, and precious stones.',
    culturalNotes: 'A cosmopolitan city where East met West, with significant Byzantine and Islamic influences.'
  },
  {
    id: 'constantinople',
    name: 'Constantinople',
    modernName: 'Istanbul',
    coordinates: [41.0082, 28.9784],
    type: 'city',
    yearVisited: 1260,
    significance: 'Capital of the Byzantine Empire, key stop on the journey East',
    description: 'The magnificent capital of the Byzantine Empire, serving as a crucial bridge between Europe and Asia.',
    historicalContext: 'In 1261, Constantinople was recently recaptured from the Crusaders by Michael VIII Palaiologos, restoring Byzantine rule.',
    economicImportance: 'Major trading hub controlling the Bosphorus strait, gateway to the Black Sea and routes to Asia.',
    culturalNotes: 'Center of Orthodox Christianity and heir to Roman imperial traditions, with impressive architecture including the Hagia Sophia.'
  },
  {
    id: 'trebizond',
    name: 'Trebizond',
    modernName: 'Trabzon',
    coordinates: [41.0027, 39.7168],
    type: 'city',
    yearVisited: 1261,
    significance: 'Important port on the Black Sea, gateway to the Silk Road',
    description: 'A prosperous port city on the Black Sea coast, serving as a major terminus of the Silk Road.',
    historicalContext: 'Capital of the Empire of Trebizond, one of the successor states of the Byzantine Empire after 1204.',
    economicImportance: 'Critical link in trade routes connecting Central Asia with the Mediterranean world.',
    culturalNotes: 'Greek-speaking city with strong Byzantine traditions and connections to Georgian and Armenian cultures.'
  },
  {
    id: 'tabriz',
    name: 'Tabriz',
    coordinates: [38.0962, 46.2738],
    type: 'city',
    yearVisited: 1262,
    significance: 'Major Persian trading city, administrative center of the Ilkhanate',
    description: 'One of the most important cities in the Mongol Ilkhanate, serving as both an administrative and commercial center.',
    historicalContext: 'Under Hulagu Khan and his successors, Tabriz became the de facto capital of the Ilkhanate, ruling over Persia and parts of the Middle East.',
    economicImportance: 'Major hub for silk production and trade, connecting routes from China, Central Asia, and the Indian Ocean.',
    culturalNotes: 'Center of Persian culture under Mongol rule, with significant Islamic scholarly and artistic traditions.'
  },
  {
    id: 'balkh',
    name: 'Balkh',
    coordinates: [36.7581, 66.8957],
    type: 'city',
    yearVisited: 1263,
    significance: 'Ancient Silk Road city, "Mother of Cities"',
    description: 'Known as the "Mother of Cities," Balkh was one of the oldest and most important cities on the Silk Road.',
    historicalContext: 'Ancient Bactria, conquered by Alexander the Great, later a major Buddhist center, and by Marco Polo\'s time under Mongol control.',
    economicImportance: 'Strategic crossroads connecting routes from India, China, Central Asia, and the Middle East.',
    culturalNotes: 'Former center of Zoroastrianism and Buddhism, birthplace of the poet Rumi, rich multicultural heritage.'
  },
  {
    id: 'kashgar',
    name: 'Kashgar',
    coordinates: [39.4704, 75.9699],
    type: 'city',
    yearVisited: 1274,
    significance: 'Oasis city at the crossroads of the Silk Road',
    description: 'Major oasis city where the northern and southern Silk Road routes converged before crossing the Taklamakan Desert.',
    historicalContext: 'Under the rule of the Mongol Yuan Dynasty, Kashgar was a vital staging point for caravans crossing between East and West.',
    economicImportance: 'Essential supply point for long-distance trade, famous for its bazaars and as a center for jade trade.',
    culturalNotes: 'Diverse population including Turkic peoples, with Islamic culture predominating alongside Buddhist influences.'
  },
  {
    id: 'khanbaliq',
    name: 'Khanbaliq',
    modernName: 'Beijing',
    coordinates: [39.9042, 116.4074],
    type: 'court',
    yearVisited: 1275,
    significance: 'Capital of Kublai Khan\'s Yuan Dynasty, Marco Polo\'s primary destination',
    description: 'The magnificent capital of Kublai Khan\'s Mongol Empire, where Marco Polo spent nearly two decades in service.',
    historicalContext: 'Newly established capital of the Yuan Dynasty (1271-1368), representing the pinnacle of Mongol power in China.',
    economicImportance: 'Administrative center of the world\'s largest economy, controlling vast trade networks across Asia.',
    culturalNotes: 'Synthesis of Mongol, Chinese, Central Asian, and Persian cultures under Kublai Khan\'s cosmopolitan court.'
  },
  {
    id: 'quanzhou',
    name: 'Quanzhou',
    modernName: 'Zayton',
    coordinates: [24.8741, 118.6757],
    type: 'trade-center',
    yearVisited: 1292,
    significance: 'Major Chinese port, departure point for Southeast Asia',
    description: 'One of China\'s most important ports, described by Marco Polo as one of the largest harbors in the world.',
    historicalContext: 'During the Song and Yuan dynasties, Quanzhou was China\'s primary international trading port.',
    economicImportance: 'Gateway for Chinese exports and imports, connecting China with Southeast Asia, India, and the Arabian Peninsula.',
    culturalNotes: 'Cosmopolitan port with significant Arab, Persian, and Southeast Asian merchant communities.'
  },
  {
    id: 'hormuz',
    name: 'Hormuz',
    coordinates: [27.1036, 56.4408],
    type: 'trade-center',
    yearVisited: 1293,
    significance: 'Strategic port controlling the Persian Gulf',
    description: 'Vital port city controlling access to the Persian Gulf and trade routes to India and beyond.',
    historicalContext: 'Under the rule of local dynasties, Hormuz was a key player in Indian Ocean trade networks.',
    economicImportance: 'Major entrepôt for spices, precious stones, and other luxury goods from India and Southeast Asia.',
    culturalNotes: 'Multicultural trading center with Persian, Arab, and Indian influences.'
  },
  {
    id: 'samarkand',
    name: 'Samarkand',
    coordinates: [39.6270, 66.9745],
    type: 'city',
    yearVisited: 1273,
    significance: 'Crossroads of Central Asian trade, intellectual center',
    description: 'One of the greatest cities of the Silk Road, renowned for its scholars, artisans, and magnificent architecture.',
    historicalContext: 'Ancient Sogdian capital, conquered by Alexander the Great, later ruled by various Islamic dynasties and then the Mongols.',
    economicImportance: 'Major center for silk production, metalworking, and as a transit point for goods between East and West.',
    culturalNotes: 'Center of Islamic learning and astronomy, famous for its madrasas and as birthplace of many scholars.'
  },
  {
    id: 'baghdad',
    name: 'Baghdad',
    coordinates: [33.3152, 44.3661],
    type: 'city',
    yearVisited: 1272,
    significance: 'Former Abbasid capital, center of Islamic civilization',
    description: 'The legendary "City of Peace," once the largest city in the world and center of the Islamic Golden Age.',
    historicalContext: 'Recently conquered by the Mongols in 1258, ending the Abbasid Caliphate. Still recovering from the devastation.',
    economicImportance: 'Major trading hub on the Tigris River, connecting Persian Gulf with Central Asian routes.',
    culturalNotes: 'Former center of Islamic scholarship, translation movement, and the House of Wisdom before Mongol conquest.'
  },
  {
    id: 'acre',
    name: 'Acre',
    coordinates: [32.9253, 35.0818],
    type: 'city',
    yearVisited: 1271,
    significance: 'Last major Crusader stronghold in the Holy Land',
    description: 'Fortified port city and the final major bastion of the Crusader Kingdom of Jerusalem.',
    historicalContext: 'Under Crusader control but facing increasing pressure from the Mamluk Sultanate.',
    economicImportance: 'Important Mediterranean port linking European merchants with Eastern trade routes.',
    culturalNotes: 'Meeting point of Latin Christian, Byzantine, and Islamic cultures with diverse merchant communities.'
  },
  {
    id: 'karakorum',
    name: 'Karakorum',
    coordinates: [47.2083, 102.8464],
    type: 'city',
    yearVisited: 1264,
    significance: 'Former capital of the Mongol Empire',
    description: 'The ceremonial capital of the Mongol Empire under Genghis Khan and his successors.',
    historicalContext: 'By Marco Polo\'s time, gradually losing importance as Mongol khans established regional capitals.',
    economicImportance: 'Administrative center controlling vast trade networks across the Mongol Empire.',
    culturalNotes: 'Cosmopolitan city with Buddhist, Christian, Muslim, and Tengrist influences reflecting Mongol religious tolerance.'
  },
  {
    id: 'tyre',
    name: 'Tyre',
    coordinates: [33.2704, 35.2038],
    type: 'city',
    yearVisited: 1271,
    significance: 'Ancient Phoenician port and Crusader stronghold',
    description: 'Historic port city with millennia of maritime trading heritage.',
    historicalContext: 'One of the last Crusader territories, would fall to the Mamluks in 1291.',
    economicImportance: 'Traditional center of purple dye production and Mediterranean commerce.',
    culturalNotes: 'Ancient Phoenician heritage mixed with Crusader, Byzantine, and Islamic influences.'
  },
  {
    id: 'aden',
    name: 'Aden',
    coordinates: [12.7797, 45.0365],
    type: 'trade-center',
    yearVisited: 1293,
    significance: 'Strategic port controlling Red Sea trade',
    description: 'Crucial port city controlling the entrance to the Red Sea and routes to India.',
    historicalContext: 'Under the rule of the Rasulid dynasty, major player in Indian Ocean trade.',
    economicImportance: 'Essential stop for merchants traveling between the Mediterranean, Indian Ocean, and Far East.',
    culturalNotes: 'Arab trading center with influences from Indian, Persian, and African merchants.'
  },
  {
    id: 'colombo',
    name: 'Selan (Ceylon)',
    modernName: 'Colombo',
    coordinates: [6.9271, 79.8612],
    type: 'trade-center',
    yearVisited: 1293,
    significance: 'Spice trading center, known for cinnamon and precious stones',
    description: 'Island kingdom famous throughout Asia for its spices, especially cinnamon, and precious gems.',
    historicalContext: 'Under various local kingdoms, heavily involved in Indian Ocean trade networks.',
    economicImportance: 'Primary source of cinnamon for global markets, also famous for sapphires and rubies.',
    culturalNotes: 'Buddhist kingdom with Tamil, Sinhalese, and Arab merchant influences.'
  },
  {
    id: 'java',
    name: 'Java Minor',
    modernName: 'Sumatra',
    coordinates: [-0.7893, 113.9213],
    type: 'region',
    yearVisited: 1292,
    significance: 'Spice islands, source of pepper and other valuable spices',
    description: 'Large island kingdom rich in spices, particularly pepper, which was as valuable as gold.',
    historicalContext: 'Under the Majapahit Empire and various local sultanates, crucial to maritime trade.',
    economicImportance: 'Major source of pepper, nutmeg, cloves, and other spices highly sought after in Europe.',
    culturalNotes: 'Hindu-Buddhist kingdoms with growing Islamic influence through Arab and Indian traders.'
  }
];

export const silkRoadRoutes: Route[] = [
  {
    id: 'northern-silk-road',
    name: 'Northern Silk Road',
    type: 'silk-road',
    coordinates: [
      [45.4408, 12.3155], // Venice
      [41.0082, 28.9784], // Constantinople
      [41.0027, 39.7168], // Trebizond
      [38.0962, 46.2738], // Tabriz
      [35.6892, 51.3890], // Tehran area
      [36.7581, 66.8957], // Balkh
      [38.5449, 68.7870], // Dushanbe area
      [39.4704, 75.9699], // Kashgar
      [43.8254, 87.6177], // Urumqi area
      [39.9042, 116.4074]  // Beijing
    ],
    description: 'The primary overland route taken by the Polo family, passing through Central Asia',
    yearActive: 1271
  },
  {
    id: 'southern-sea-route',
    name: 'Southern Sea Route',
    type: 'sea-route',
    coordinates: [
      [24.8741, 118.6757], // Quanzhou
      [1.3521, 103.8198],  // Singapore area
      [13.0827, 80.2707],  // Chennai area
      [19.0760, 72.8777],  // Mumbai area
      [27.1036, 56.4408],  // Hormuz
      [29.3117, 47.4818],  // Kuwait area
      [26.0667, 50.5577],  // Bahrain
      [25.2048, 55.2708],  // Dubai area
      [45.4408, 12.3155]   // Venice
    ],
    description: 'The sea route used by Marco Polo for his return journey, connecting the Indian Ocean with the Persian Gulf',
    yearActive: 1292
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'marco-birth',
    year: 1254,
    title: 'Marco Polo Born in Venice',
    description: 'Marco Polo is born into a merchant family in the Republic of Venice.',
    type: 'biographical',
    location: 'Venice',
    coordinates: [45.4408, 12.3155]
  },
  {
    id: 'mongol-conquest-baghdad',
    year: 1258,
    title: 'Mongols Conquer Baghdad',
    description: 'Hulagu Khan captures Baghdad, ending the Abbasid Caliphate and establishing Mongol control over Mesopotamia.',
    type: 'political',
    coordinates: [33.3152, 44.3661]
  },
  {
    id: 'first-polo-journey',
    year: 1260,
    title: 'Niccolò and Maffeo Polo Begin First Journey',
    description: 'Marco\'s father and uncle embark on their first trading expedition to the East.',
    type: 'travel',
    location: 'Venice',
    coordinates: [45.4408, 12.3155]
  },
  {
    id: 'byzantine-reconquest',
    year: 1261,
    title: 'Byzantine Reconquest of Constantinople',
    description: 'Michael VIII Palaiologos recaptures Constantinople from the Latin Empire, restoring Byzantine rule.',
    type: 'political',
    location: 'Constantinople',
    coordinates: [41.0082, 28.9784]
  },
  {
    id: 'kublai-becomes-khan',
    year: 1260,
    title: 'Kublai Khan Becomes Great Khan',
    description: 'Kublai Khan becomes the Great Khan of the Mongol Empire, later founding the Yuan Dynasty in China.',
    type: 'political',
    coordinates: [39.9042, 116.4074]
  },
  {
    id: 'polo-family-departs',
    year: 1271,
    title: 'The Polo Family Departs for Asia',
    description: 'Marco Polo, aged 17, departs Venice with his father and uncle on their famous journey to the court of Kublai Khan.',
    type: 'travel',
    location: 'Venice',
    coordinates: [45.4408, 12.3155]
  },
  {
    id: 'yuan-dynasty-founded',
    year: 1271,
    title: 'Yuan Dynasty Founded',
    description: 'Kublai Khan establishes the Yuan Dynasty, marking the beginning of Mongol rule over all of China.',
    type: 'political',
    coordinates: [39.9042, 116.4074]
  },
  {
    id: 'polos-reach-court',
    year: 1275,
    title: 'Polos Reach Kublai Khan\'s Court',
    description: 'After four years of travel, the Polo family arrives at Khanbaliq and is received by Kublai Khan.',
    type: 'travel',
    location: 'Khanbaliq',
    coordinates: [39.9042, 116.4074]
  },
  {
    id: 'marco-in-service',
    year: 1275,
    title: 'Marco Polo Enters Khan\'s Service',
    description: 'Marco Polo enters the service of Kublai Khan, beginning nearly two decades at the Mongol court.',
    type: 'biographical',
    location: 'Khanbaliq',
    coordinates: [39.9042, 116.4074]
  },
  {
    id: 'polos-return-journey',
    year: 1292,
    title: 'Polos Begin Return Journey',
    description: 'The Polo family begins their return journey to Venice, escorting a Mongol princess by sea route.',
    type: 'travel',
    location: 'Quanzhou',
    coordinates: [24.8741, 118.6757]
  },
  {
    id: 'polos-return-venice',
    year: 1295,
    title: 'Polos Return to Venice',
    description: 'After 24 years, the Polo family returns to Venice, completing one of history\'s greatest journeys.',
    type: 'travel',
    location: 'Venice',
    coordinates: [45.4408, 12.3155]
  },
  {
    id: 'marco-imprisoned',
    year: 1298,
    title: 'Marco Polo Imprisoned in Genoa',
    description: 'Marco Polo is captured during a naval battle between Venice and Genoa and imprisoned.',
    type: 'biographical',
    coordinates: [44.4056, 8.9463]
  },
  {
    id: 'book-written',
    year: 1298,
    title: 'The Travels of Marco Polo Written',
    description: 'While imprisoned, Marco Polo dictates his travels to fellow prisoner Rustichello da Pisa.',
    type: 'cultural',
    coordinates: [44.4056, 8.9463]
  }
];