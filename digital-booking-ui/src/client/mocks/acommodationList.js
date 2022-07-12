import { delay } from "../../utils/delay";

const data = [
  {
    id: "1",
    crimg:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    category: "Hotels",
    title: "Freehand Toronto - Premium King Room",
    location: "Toronto, Canada",
    description:
      "Designed by famed duo Roman & Williams, with custom art by Bard College students and alumni throughout.",
  },
  {
    id: "2",
    crimg:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740",
    category: "Hotels",
    title: "Riad Jaune Safran",
    location: "Marrakesh, Morocco",
    description:
      "Rented privately, you will have at your disposal: a patio with little pool (plounge), a traditional hammam, a beautiful terrace with shaded areas and solarium, and a friendly staff who will take care of you. Cleaning & breakfast are included.",
  },
  {
    id: "3",
    crimg:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    category: "Departments",
    title: "Room D at The Dutra Inn",
    location: "California, USA",
    description:
      "Salvaged and repurposed here in our only street-level loft, they bring in the light and life of downtown San Diego.",
  },
  {
    id: "4",
    crimg:
      "https://images.unsplash.com/photo-1554009975-d74653b879f1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1827",
    category: "Departments",
    title: "Piece-of-Art-Loft between Jungle Trees",
    location: "Tulum, Mexico",
    description:
      "This is a one of the kind loft: Awaking in soft sunlight between palms and trees and feeling the breeze from the ocean. Located in a quiet, safe and famous area of Tulum called la Veleta you get the best of magical Tulum: nature, luxury comfort and a world class design.",
  },
  {
    id: "5",
    crimg:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169",
    category: "Hostels",
    title: "Room Miro - EnjoyBCN Apts",
    location: "New York, USA",
    description:
      "4 Bunk-bed room with street view. There is a communal terrace, open every day from 10:00 to 18:00, on the top floor of the building.",
  },
  {
    id: "6",
    crimg:
      "https://images.unsplash.com/photo-1608344859055-a2d11495423d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=653",
    category: "Hostels",
    title: "Cozy & quiet Jungle Bungalow",
    location: "Nusa Dua, Indonesia",
    description:
      "Located on the hills but only a five minute drive to restaurants, the place is very quiet with no neighborhood around. We only have three bungalows to keep the place as quiet as possible.",
  },
  {
    id: "7",
    crimg:
      "https://images.unsplash.com/photo-1621891334762-e186f94d3a1d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
    category: "Bed and Breakfast",
    title: "Shoreditch Inn DD Room",
    location: "London, UK",
    description:
      "A complimentary continental vegetarian breakfast is available daily. Restaurants, shops, and bars can be reached within a 5-minute walk.",
  },
  {
    id: "8",
    crimg:
      "https://images.unsplash.com/photo-1613618948931-efbc3e6f9775?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887",
    category: "Bed and Breakfast",
    title: "GINA Recoleta B&B - Teo´s Room-",
    location: "Recoleta, Argentina",
    description:
      "Gina Bed & Breakfast is located in the exclusive neighborhood of Recoleta in the city of Buenos Aires, with has access to all of the city's attractions. The rooms are warm and comfy!",
  },
];

export const apiRequest = async () => {
  await delay(1000);

  return data;
};
