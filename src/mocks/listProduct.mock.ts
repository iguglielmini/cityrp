import Coin from "@/assets/images/coins.jpg";
import Teste from "@/assets/images/noticia.jpg";
import Teste2 from "@/assets/images/festa.png";

const listProduct = [
  {
    id: "1",
    image: Coin,
    title: "1 Coins",
    price: 1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cupon: true,
  },
  {
    id: "2",
    image: Coin,
    title: "25 Coins",
    price: 25,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cupon: true,
  },
  {
    id: "3",
    image: Coin,
    title: "50 Coins",
    price: 50,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cupon: true,
  },
  {
    id: "4",
    image: Coin,
    title: "100 Coins",
    price: 100,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cupon: true,
  },
  {
    id: "5",
    image: Coin,
    title: "150 Coins",
    price: 150,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cupon: true,
  },
];

const listEvent = [
  {
    id: "1",
    image: Teste,
    title: "Guerra de gangs",
    price: null,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cupon: false,
  },
  {
    id: "2",
    image: Teste,
    title: "Anonymus",
    price: null,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cupon: false,
  },
  {
    id: "3",
    image: Teste2,
    title: "Festa no vanilla",
    price: null,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cupon: false,
  },
];

export { listProduct, listEvent };
