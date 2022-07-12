import { delay } from "../../utils/delay";

const data = [
  {
    id: 1,
    crimg:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    category: "Hotels",
    title: "Freehand Toronto - Premium King Room",
    location: "Toronto, Canada",
    description:
      "Architect David Chipperfield designed the airy interiors of this classic pergola-style house to celebrate the breathtaking surroundings of Lake Garda. From this prestigious position on the Eden Luxury Resort, you’ll enjoy endless views of the lake, as well as easy access to walking and biking trails.\nAfter a day on the lake, cool off in the pool or grab a drink at Eden’s gourmet restaurant.",
    services: {
      tv: true,
      kitchen: true,
      smoking: true,
      petFriendly: true,
      ac: true,
      wifi: false,
      noSmoking: false,
      pool: true,
    },
    info: {
      rules: [
        "Check-in: De 08:00 a 19:00",
        "No apto para niños o bebés",
        "No se permiten fiestas ni eventos",
      ],
      healthAndSecurity: [
        "Se aplican las prácticas de seguridad de Airbnb relacionadas con el COVID-19",
        "Lago, río u otro cuerpo de agua cercano",
      ],
      cancellationPolicy: [
        "Si cancelás antes del 5 jun., vas a obtener un reembolso parcial.",
        "Consultá la política de cancelación completa del anfitrión, que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
      ],
    },
  },
];

export const apiRequest = async () => {
  await delay(1000);

  return data;
};
