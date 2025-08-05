import {
  Apple,
  Bean,
  Carrot,
  Cylinder,
  Flower2,
  Leaf,
  LeafyGreen,
  Pill,
  Shovel,
  Sprout,
  TreeDeciduous,
  Trees,
} from "lucide-react-native";

export const categories = [
  { id: "cat_1a2b", title: "Flower", icon: Flower2 },
  { id: "cat_2c3d", title: "Fruits", icon: Apple },
  { id: "cat_3e4f", title: "Vegetable", icon: Carrot },
  { id: "cat_4g5h", title: "Herbal", icon: Leaf },
  { id: "cat_5i6j", title: "Indoor", icon: TreeDeciduous },
  { id: "cat_6k7l", title: "Seeds", icon: Bean },
  { id: "cat_7m8n", title: "Leaf", icon: LeafyGreen }, // fallback: use Leaf if LeafyGreen not available
  { id: "cat_8o9p", title: "Medicine", icon: Pill },
  { id: "cat_9q0r", title: "Plants", icon: Sprout },
  { id: "cat_0s1t", title: "Tools", icon: Shovel },
  { id: "cat_1u2v", title: "Pot", icon: Cylinder }, // approximate pot shape
  { id: "cat_2w3x", title: "Accessories", icon: Trees }, // placeholder, adjust if better icon found
];

export const specialOffers = [
  {
    id: "offer_1b081",
    discount: 25,
    plantId: "plant_1a2b",
    until: "2025-09-04",
  },
  {
    id: "offer_2c192",
    discount: 15,
    plantId: "veg_2b3c",
    until: "2025-10-04",
  },
  {
    id: "offer_3d203",
    discount: 30,
    plantId: "veg_3c4d",
    until: "2025-11-04",
  },
  {
    id: "offer_4e314",
    discount: 20,
    plantId: "plant_1l2m",
    until: "2025-12-04",
  },
  {
    id: "offer_5f425",
    discount: 35,
    plantId: "plant_5t6u",
    until: "2026-01-04",
  },
];
export const favouriteList = [
  {
    id: "favourite_1a1b",
    plantId: "plant_1a2b",
  },
  {
    id: "favourite_8h9i",
    plantId: "plant_8h9i",
  },
  {
    id: "favourite_1a2b",
    plantId: "med_1a2b",
  },
  {
    id: "favourite_3c4d",
    plantId: "plant_3c4d",
  },
  {
    id: "favourite_2n3o",
    plantId: "plant_2n3o",
  },
  {
    id: "favourite_3c4d",
    plantId: "veg_3c4d",
  },
  {
    id: "favourite_4r5s",
    plantId: "plant_4r5s",
  },
  {
    id: "favourite_2b3c",
    plantId: "plant_2b3c",
  },
];
export const plants = [
  {
    id: "plant_1a2b",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    description:
      "The Snake Plant, also known as Mother-in-law's Tongue, is one of the most resilient indoor plants. It thrives in low to medium light conditions and requires minimal maintenance. Its upright, sword-shaped leaves help purify indoor air by removing toxins such as formaldehyde and benzene. Snake Plants are drought-tolerant and perfect for busy households or offices. Overwatering can harm them, so allowing the soil to dry between watering is ideal. This plant is also known for releasing oxygen at night, making it an excellent bedroom companion for better air quality and a touch of natural greenery.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "1 x weekly",
    sunlight: "low",
    categoryId: "cat_5i6j",
    price: 250,
    image: [
      "https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&w=800",
    ],
  },
  {
    id: "plant_2b3c",
    name: "Spider Plant",
    scientificName: "Chlorophytum comosum",
    description:
      "The Spider Plant is a fast-growing, low-maintenance houseplant ideal for beginners. It produces long, arching leaves with white or yellow stripes, and small plantlets that resemble spiders. This plant is highly effective at removing indoor pollutants like carbon monoxide and formaldehyde, improving overall air quality. Spider Plants prefer bright, indirect light but can tolerate lower light levels. Regular watering keeps the soil slightly moist but not soggy. With proper care, they produce cascading plantlets that can be propagated easily, making them a great decorative choice for hanging baskets and shelves in homes or offices.",
    fertilizerNeeded: "2 x monthly",
    waterNeeded: "2 x weekly",
    sunlight: "medium",
    categoryId: "cat_5i6j",
    price: 280,
    image: [
      "https://images.unsplash.com/photo-1610551724444-5fb527b5ad20?q=80&w=800",
    ],
  },
  {
    id: "plant_3c4d",
    name: "Peace Lily",
    scientificName: "Spathiphyllum wallisii",
    description:
      "The Peace Lily is a beautiful flowering indoor plant that is highly valued for its elegant white blooms and air-purifying abilities. It thrives in medium to low light and requires consistent moisture without waterlogging the soil. This plant is effective at removing indoor toxins like ammonia and trichloroethylene. Peace Lilies prefer slightly humid environments and benefit from occasional misting. They can flower multiple times a year with proper care, adding a touch of elegance to any room. Despite their beauty, they are mildly toxic to pets, so placement away from curious cats or dogs is recommended.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "2 x weekly",
    sunlight: "low",
    categoryId: "cat_5i6j",
    price: 440,
    image: [
      "https://images.unsplash.com/photo-1652731706550-c85ae3f0617a?q=80&w=800",
    ],
  },
  {
    id: "plant_4d5e",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    description:
      "Aloe Vera is a popular succulent plant renowned for its medicinal properties and gel-filled leaves. It thrives in bright, indirect sunlight and prefers dry soil conditions, making it a low-maintenance choice for indoor settings. Aloe Vera’s gel is commonly used to treat minor burns, skin irritations, and as a natural moisturizer. Overwatering should be avoided as it is highly susceptible to root rot. This plant is ideal for sunny windowsills and benefits from occasional feeding during its active growing season. Its dual purpose of beauty and utility makes it a favorite for many households worldwide.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "1 x weekly",
    sunlight: "medium",
    categoryId: "cat_5i6j",
    price: 60,
    image: [
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=800",
    ],
  },
  {
    id: "plant_5e6f",
    name: "Rubber Plant",
    scientificName: "Ficus elastica",
    description:
      "The Rubber Plant is a popular ornamental houseplant with large, glossy leaves that bring a tropical vibe to interiors. It thrives in bright, indirect light but can tolerate medium light. Rubber Plants prefer consistent moisture, though the topsoil should dry slightly between waterings to prevent root rot. They are effective at filtering airborne toxins and improving indoor air quality. This plant can grow tall with proper care, making it a striking statement piece. Occasional leaf wiping and monthly feeding during the growing season help keep the plant healthy and vibrant in home or office settings.",
    fertilizerNeeded: "2 x monthly",
    waterNeeded: "1 x weekly",
    sunlight: "medium",
    categoryId: "cat_5i6j",
    price: 280,
    image: [
      "https://images.unsplash.com/photo-1672062518782-706d6122c0e7?q=80&w=800",
    ],
  },
  {
    id: "plant_6f7g",
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    description:
      "The ZZ Plant is one of the most durable indoor plants, capable of surviving weeks of neglect. Its glossy, waxy leaves store water, allowing it to thrive in low-light and low-water conditions. It is a slow grower that adds a modern, minimalistic touch to interiors. This plant is highly tolerant of drought and only needs watering when the soil is completely dry. The ZZ Plant is also known for its air-purifying qualities, removing harmful chemicals from the environment. It is ideal for offices or homes where consistent plant care may be difficult due to busy schedules.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "2 x monthly",
    sunlight: "low",
    categoryId: "cat_5i6j",
    price: 750,
    image: [
      "https://images.unsplash.com/photo-1597593873848-409a508574f9?q=80&w=800",
    ],
  },
  {
    id: "plant_7g8h",
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    description:
      "Pothos, also known as Money Plant, is a versatile vining indoor plant famous for its heart-shaped green and golden variegated leaves. It thrives in a wide range of light conditions, from low to bright indirect light, making it highly adaptable. Pothos is drought-tolerant and ideal for beginners, as it only needs occasional watering. It can be grown in soil or water and is easily propagated. This plant is known for its excellent air-purifying properties and ability to trail beautifully from shelves or hanging baskets, bringing a lively, natural feel to any living space effortlessly.",
    fertilizerNeeded: "2 x monthly",
    waterNeeded: "1 x weekly",
    sunlight: "low",
    categoryId: "cat_5i6j",
    price: 550,
    image: [
      "https://images.unsplash.com/photo-1600411833114-bd695886396e?q=80&w=800",
    ],
  },
  {
    id: "plant_8h9i",
    name: "Philodendron",
    scientificName: "Philodendron hederaceum",
    description:
      "Philodendron is a classic indoor plant valued for its lush, trailing vines and heart-shaped leaves. It is highly adaptable to low or medium light conditions, making it ideal for indoor environments. Philodendrons prefer moist but well-draining soil, and allowing the top layer to dry slightly between waterings helps prevent root rot. This plant is easy to propagate from stem cuttings and can be trained to climb or cascade beautifully from planters. Regular pruning encourages fuller growth. Its low-maintenance nature and air-purifying properties make it a perfect companion for homes and offices seeking vibrant greenery.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "1 x weekly",
    sunlight: "low",
    categoryId: "cat_5i6j",
    price: 760,
    image: [
      "https://images.unsplash.com/photo-1692896315703-f700fd67c921?q=80&w=800",
    ],
  },
  {
    id: "plant_9i0j",
    name: "Areca Palm",
    scientificName: "Dypsis lutescens",
    description:
      "The Areca Palm is a popular indoor palm known for its feathery fronds and air-purifying benefits. It thrives in bright, indirect light and requires moderate watering, with the soil kept slightly moist but never soggy. This plant prefers a humid environment and benefits from occasional misting, making it perfect for tropical-themed interiors. Areca Palms can grow several feet tall indoors, becoming a striking focal point in living rooms or offices. Regular feeding during the growing season keeps it lush and vibrant. Its elegant, arching leaves make it a top choice for adding a natural, airy feel to homes.",
    fertilizerNeeded: "2 x monthly",
    waterNeeded: "2 x weekly",
    sunlight: "medium",
    categoryId: "cat_5i6j",
    price: 290,
    image: [
      "https://images.unsplash.com/photo-1636901943038-558c3e501344?q=80&w=800",
    ],
  },
  {
    id: "plant_0j1k",
    name: "Boston Fern",
    scientificName: "Nephrolepis exaltata",
    description:
      "The Boston Fern is a lush, feathery plant ideal for hanging baskets and adding a natural softness to interiors. It thrives in bright, indirect light and high humidity, making bathrooms or kitchens suitable spots. This fern requires consistently moist soil and should not be allowed to dry out completely. Regular misting or a nearby humidifier keeps it healthy. Boston Ferns are excellent at filtering indoor air and creating a refreshing environment. They need monthly feeding during the growing season and occasional trimming to maintain their shape. With proper care, they provide vibrant greenery year-round indoors.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "3 x weekly",
    sunlight: "medium",
    categoryId: "cat_5i6j",
    price: 1180,
    image: [
      "https://images.unsplash.com/photo-1526744603200-a2792eb71ed6?q=80&w=800",
    ],
  },
  {
    id: "plant_1l2m",
    name: "Chinese Evergreen",
    scientificName: "Aglaonema modestum",
    description:
      "Chinese Evergreen is a hardy indoor plant known for its striking variegated leaves with shades of green and silver. It thrives in low to medium light and prefers moist, well-drained soil. This plant is highly tolerant of neglect and can survive in less-than-ideal conditions, making it perfect for beginners. Chinese Evergreen also helps improve indoor air quality by filtering toxins. Regular watering and monthly fertilizing during the growing season keep it vibrant. Its compact size and beautiful foliage make it a popular choice for tabletops, shelves, or office desks.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "1 x weekly",
    sunlight: "low",
    categoryId: "cat_5i6j",
    price: 4870,
    image: [
      "https://images.unsplash.com/photo-1610551835289-9f8a81fc3a6c?q=80&w=800",
    ],
  },
  {
    id: "plant_2n3o",
    name: "Cast Iron Plant",
    scientificName: "Aspidistra elatior",
    description:
      "The Cast Iron Plant is famous for its toughness and ability to thrive in low-light, low-maintenance conditions. With broad, dark green leaves, it adds lush greenery to indoor spaces. It requires infrequent watering, preferring soil to dry out between watering sessions. The plant tolerates a wide range of temperatures and neglect, making it an excellent choice for offices or homes with minimal natural light. Cast Iron Plants benefit from occasional feeding during the growing season and are relatively pest-resistant. Their slow growth rate means less frequent repotting and upkeep.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "1 x biweekly",
    sunlight: "low",
    categoryId: "cat_5i6j",
    price: 5990,
    image: [
      "https://www.livelyroot.com/cdn/shop/files/PL_CIP_6IN1_studio_3a702efb-b81f-4dba-9ff4-bbb3423fe603.jpg?v=1750076154&width=800",
    ],
  },
  {
    id: "plant_3p4q",
    name: "Dracaena Golden Heart",
    scientificName: "Dracaena marginata",
    description:
      "Dracaena marginata, or the Dragon Tree, is a popular houseplant characterized by slender, arching leaves with red edges. It adapts well to indoor environments, tolerating low to medium light levels. This plant prefers moderate watering, allowing the soil to dry out slightly between waterings. Dracaena is an effective air purifier, known to remove toxins such as benzene and formaldehyde. It benefits from monthly fertilization during the growing season and occasional pruning to maintain its shape. Its architectural appearance adds a dramatic flair to modern interiors.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "1 x weekly",
    sunlight: "medium",
    categoryId: "cat_5i6j",
    price: 650,
    image: [
      "https://images.unsplash.com/photo-1612363066736-a4a933de2cab?q=80&w=800",
    ],
  },
  {
    id: "plant_4r5s",
    name: "Calathea",
    scientificName: "Calathea ornata",
    description:
      "Calathea ornata, also known as the Pinstripe Plant, is prized for its dark green leaves with striking pink stripes. It prefers medium to low indirect light and thrives in high humidity. This plant requires consistently moist soil but should never sit in water to avoid root rot. Regular misting or a humidifier is recommended to maintain leaf health. Calathea is a moderate grower and benefits from monthly feeding during its active season. Its beautiful foliage makes it a favorite among indoor plant enthusiasts looking to add color and texture to their collection.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "3 x weekly",
    sunlight: "low",
    categoryId: "cat_5i6j",
    price: 1480,
    image: [
      "https://images.unsplash.com/photo-1602879952653-a3830f12a7cb?q=80&w=800",
    ],
  },
  {
    id: "plant_5t6u",
    name: "Jade Plant",
    scientificName: "Crassula ovata",
    description:
      "The Jade Plant is a succulent with thick, glossy, oval-shaped leaves that store water, making it drought tolerant and easy to care for. It prefers bright light and well-drained soil and benefits from watering only when the soil has completely dried out. Jade Plants grow slowly but can live for decades, often considered a symbol of good luck and prosperity. They require minimal fertilization, usually once every few months during the growing season. This compact plant is ideal for windowsills, desks, or shelves, providing a touch of greenery with low maintenance.",
    fertilizerNeeded: "1 x quarterly",
    waterNeeded: "1 x biweekly",
    sunlight: "medium",
    categoryId: "cat_5i6j",
    price: 330,
    image: [
      "https://images.unsplash.com/photo-1616189597001-9046fce2594d?q=80&w=800",
    ],
  },
  {
    id: "herb_1a2b",
    name: "Mint",
    scientificName: "Mentha",
    description:
      "Mint is a fragrant herb widely used in culinary dishes, teas, and traditional medicine. Its refreshing aroma and cooling taste make it a favorite for garnishing drinks and flavoring foods. Mint grows best in moist soil and partial sunlight. Regular watering keeps the plant thriving, but overwatering should be avoided. Mint spreads quickly and can be grown in pots to control its growth. It contains natural compounds with digestive and soothing properties, making it a valuable herb for home gardens. With minimal care, mint can provide fresh leaves year-round for culinary and medicinal purposes.",
    fertilizerNeeded: "2 x monthly",
    waterNeeded: "3 x weekly",
    sunlight: "medium",
    categoryId: "cat_4g5h",
    price: 180,
    image: [
      "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=800",
    ],
  },
  {
    id: "herb_3c4d",
    name: "Lemongrass",
    scientificName: "Cymbopogon citratus",
    description:
      "Lemongrass is a tall, fragrant herb with a citrus aroma commonly used in Asian cuisine, teas, and traditional medicine. It thrives in full to partial sunlight and prefers well-draining soil with consistent moisture. Lemongrass has natural antimicrobial properties and is often used in herbal remedies for digestion and relaxation. Regular trimming encourages fresh growth, and the stalks can be harvested for culinary uses. It grows well in pots or garden beds and can also help repel insects due to its natural oils. Lemongrass adds beauty and utility to any herbal garden with minimal care needs.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "2 x weekly",
    sunlight: "medium",
    categoryId: "cat_4g5h",
    price: 350,
    image: [
      "https://images.unsplash.com/photo-1524641619328-f3b7444f7afa?q=80&w=800",
    ],
  },
  {
    id: "seed_1a2b",
    name: "Sunflower Seeds",
    scientificName: "Helianthus annuus",
    description:
      "Sunflower seeds are both ornamental and edible, producing tall, bright flowers that follow the sun. These seeds are easy to germinate and thrive in well-drained soil with plenty of sunlight. They require consistent watering, especially during early growth, but waterlogging should be avoided. Sunflowers attract pollinators and provide nutritious seeds high in healthy fats. Ideal for home gardens, they add beauty while producing edible seeds for snacking or cooking. Regular fertilization ensures healthy blooms, and they perform best in warm conditions during the spring and summer growing seasons.",
    fertilizerNeeded: "2 x monthly",
    waterNeeded: "3 x weekly",
    sunlight: "medium",
    categoryId: "cat_6k7l",
    price: 90,
    image: [
      "https://static.toiimg.com/thumb/msid-106160081,width-400,resizemode-4/106160081.jpg",
    ],
  },
  {
    id: "seed_2b3c",
    name: "Coriander Seeds",
    scientificName: "Coriandrum sativum",
    description:
      "Coriander seeds are a versatile spice and also the starting point for growing fresh coriander leaves (cilantro). They germinate quickly in loose, well-draining soil and prefer bright, indirect sunlight. The plants thrive with regular watering to keep the soil evenly moist but not soggy. Coriander seeds are aromatic and used in a variety of culinary dishes worldwide. The plant’s leaves and seeds are both edible, making it a dual-purpose garden addition. Light feeding every few weeks encourages strong growth. These seeds are perfect for kitchen gardens and small balcony planters.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "2 x weekly",
    sunlight: "medium",
    categoryId: "cat_6k7l",
    price: 50,
    image: [
      "https://sgaravatti.net/cdn/shop/articles/20160706170526-coriandolo_2048x.jpg",
    ],
  },
  {
    id: "seed_3c4d",
    name: "Marigold Seeds",
    scientificName: "Tagetes erecta",
    description:
      "Marigold seeds produce vibrant, golden flowers that are easy to grow and care for. They germinate quickly in well-draining soil with full sun exposure and minimal care. Marigolds are excellent companion plants in vegetable gardens because they help deter harmful insects. Regular watering during the initial growth stage is essential, but mature plants are drought-tolerant. Fertilization once a month enhances blooming. Their bright flowers also have mild medicinal uses and are often used in decorations or religious ceremonies. Marigolds are a cheerful and beneficial addition to home gardens or balcony planters.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "2 x weekly",
    sunlight: "medium",
    categoryId: "cat_6k7l",
    price: 120,
    image: [
      "https://greenparadiselive.com/cdn/shop/files/Marigoldseeds_1_1200x1200.png",
    ],
  },

  {
    id: "med_1a2b",
    name: "Neem",
    scientificName: "Azadirachta indica",
    description:
      "Neem is a highly valued medicinal plant with powerful antibacterial, antifungal, and antiviral properties. Its leaves, bark, and seeds have been used in traditional medicine for centuries. Neem thrives in bright sunlight and well-draining soil with moderate watering. It is known for its ability to naturally purify the air and repel pests, making it ideal for home gardens. Regular pruning encourages healthy growth, and the plant can be used for homemade remedies such as neem water sprays or skin treatments. Neem requires minimal care and provides year-round health benefits.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "1 x weekly",
    sunlight: "medium",
    categoryId: "cat_8o9p",
    price: 60,
    image: [
      "https://images.unsplash.com/photo-1669574753106-28167b097433?q=80&w=800",
    ],
  },
  {
    id: "med_2b3c",
    name: "Tulsi (Holy Basil)",
    scientificName: "Ocimum tenuiflorum",
    description:
      "Tulsi, also known as Holy Basil, is a sacred medicinal herb widely used in Ayurveda for its healing properties. It thrives in warm conditions with bright, indirect sunlight and moist soil. Tulsi leaves are known to boost immunity, reduce stress, and support respiratory health. Regular watering keeps the plant vibrant, but overwatering should be avoided. Tulsi grows quickly and can be harvested regularly for teas or herbal remedies. Light monthly fertilization ensures continuous growth. Its cultural significance and health benefits make it a must-have in home herbal gardens.",
    fertilizerNeeded: "1 x monthly",
    waterNeeded: "2 x weekly",
    sunlight: "medium",
    categoryId: "cat_8o9p",
    price: 130,
    image: [
      "https://images.unsplash.com/photo-1665479754958-1a8bdc47cc0d?q=80&w=800",
    ],
  },

  {
    id: "veg_1a2b",
    name: "Tomato",
    scientificName: "Solanum lycopersicum",
    description:
      "Tomatoes are one of the most popular vegetables to grow at home, producing juicy, flavorful fruits. They thrive in full sunlight and nutrient-rich, well-draining soil. Regular watering is crucial, especially during fruiting, to prevent cracking and blossom-end rot. Tomatoes benefit from weekly feeding with a balanced fertilizer during the growing season. Staking or caging the plants supports healthy growth and fruit development. With proper care, tomato plants can produce a continuous harvest for several months, making them a rewarding addition to any vegetable garden or balcony planter.",
    fertilizerNeeded: "1 x weekly",
    waterNeeded: "3 x weekly",
    sunlight: "medium",
    categoryId: "cat_3e4f",
    price: 1000,
    image: [
      "https://images.unsplash.com/photo-1723580864774-e84bb9770695?q=80&w=800",
    ],
  },
  {
    id: "veg_2b3c",
    name: "Spinach",
    scientificName: "Spinacia oleracea",
    description:
      "Spinach is a nutrient-rich leafy vegetable that grows quickly and can be harvested multiple times. It prefers cool temperatures and partial to full sunlight. The soil should remain consistently moist but not waterlogged. Spinach leaves are packed with vitamins and minerals, making them a healthy addition to salads, soups, and smoothies. Fertilizing every two weeks promotes lush growth. This plant grows well in containers and garden beds alike. With minimal care and regular watering, spinach provides a reliable source of fresh greens throughout the growing season.",
    fertilizerNeeded: "2 x monthly",
    waterNeeded: "3 x weekly",
    sunlight: "medium",
    categoryId: "cat_3e4f",
    price: 120,
    image: [
      "https://images.unsplash.com/photo-1648706573877-30d62ceed56b?q=80&w=627",
    ],
  },
  {
    id: "veg_3c4d",
    name: "Carrot",
    scientificName: "Daucus carota subsp. sativus",
    description:
      "Carrots are root vegetables valued for their sweet, crisp flavor and high nutritional content. They thrive in loose, sandy soil and require consistent watering to ensure even root development. Carrots prefer full sunlight but can tolerate partial shade. Thinning seedlings ensures straight, healthy roots. Fertilizing lightly every few weeks supports healthy growth without causing excessive leaf production. Carrots are a rewarding crop for home gardens, providing fresh, crunchy produce in as little as 60–80 days. Their vibrant orange color and health benefits make them a popular choice among home growers.",
    fertilizerNeeded: "2 x monthly",
    waterNeeded: "2 x weekly",
    sunlight: "medium",
    categoryId: "cat_3e4f",
    price: 79,
    image: [
      "https://images.unsplash.com/photo-1669845747033-ed26d43fa874?q=80&w=772",
    ],
  },
];
