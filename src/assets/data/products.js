import chair1 from "../img/products/chair/chair8.png";
import chair2 from "../img/products/chair/chair2.png";
import chair3 from "../img/products/chair/chair3.png";
import chair4 from "../img/products/chair/chair4.png";
import chair5 from "../img/products/chair/chair5.png";
import chair6 from "../img/products/chair/chair6.png";
import chair7 from "../img/products/chair/chair7.png";

import mattress1 from "../img/products/mattress/mattress1.jpg";
import mattress2 from "../img/products/mattress/mattress2.jpg";
import mattress3 from "../img/products/mattress/mattress3.jpg";
import mattress4 from "../img/products/mattress/mattress4.jpg";
import mattress5 from "../img/products/mattress/mattress5.jpg";
import mattress6 from "../img/products/mattress/mattress6.jpg";
import mattress7 from "../img/products/mattress/mattress7.jpg";
import mattress8 from "../img/products/mattress/mattress8.jpg";

import wardrobe1 from "../img/products/wardrobe/wardrobe1.jpg";
import wardrobe2 from "../img/products/wardrobe/wardrobe2.jpg";
import wardrobe3 from "../img/products/wardrobe/wardrobe3.jpg";
import wardrobe4 from "../img/products/wardrobe/wardrobe4.jpg";
import wardrobe5 from "../img/products/wardrobe/wardrobe5.jpg";
import wardrobe6 from "../img/products/wardrobe/wardrobe6.jpg";
import wardrobe7 from "../img/products/wardrobe/wardrobe7.jpg";

import table1 from "../img/products/table/table1.jpg";
import table2 from "../img/products/table/table2.jpg";
import table3 from "../img/products/table/table3.jpg";
import table4 from "../img/products/table/table4.jpg";
import table5 from "../img/products/table/table5.jpg";

import sofa1 from "../img/products/sofa/sofa1.png";
import sofa2 from "../img/products/sofa/sofa2.png";
import sofa3 from "../img/products/sofa/sofa3.png";
import sofa4 from "../img/products/sofa/sofa4.png";
import sofa5 from "../img/products/sofa/sofa5.png";
import sofa6 from "../img/products/sofa/sofa6.png";
import sofa7 from "../img/products/sofa/sofa7.png";
import sofa9 from "../img/products/sofa/sofa9.png";
import sofa10 from "../img/products/sofa/sofa10.png";

const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: chair1,
    category: "chair",
    price: 193,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Mark",
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: chair2,
    category: "chair",
    price: 253,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Davit",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Dani",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "03",
    productName: "Amazon Modern Sofa",
    imgUrl: chair3,
    category: "chair",
    groupBy: "best-saller",
    price: 173,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        reviewer: "Dimas",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        reviewer: "Zidan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Rivet Bigelow Modern ",
    imgUrl: chair4,
    category: "chair",
    price: 253,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Sinta",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Dewi",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "05",
    productName: "Fllufy Sheep Sofa",
    imgUrl: chair5,
    category: "chair",
    price: 163,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Dini",
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "06",
    productName: "Faux Velvet Sofa",
    imgUrl: chair6,
    category: "chair",
    price: 163,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Santi",
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Zara",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Fllufy Sheep Sofa",
    imgUrl: chair7,
    category: "chair",
    groupBy: "best-saller",
    price: 163,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Kiki",
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Saiful",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  // ========= Data Product Matress ======
  {
    id: "21",
    productName: "Apple iPhone 12 Pro",
    imgUrl: mattress1,
    category: "mattress",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Agung",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Feby",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "22",
    productName: "Sakarias Armchair",
    imgUrl: mattress2,
    category: "mattress",
    price: 99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Dinia",
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Nikita",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "23",
    productName: "Apple iPhone 12 Max",
    imgUrl: mattress3,
    category: "mattress",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Dimas",
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Seto",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Agung",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "24",
    productName: "Realme 8",
    imgUrl: mattress4,
    category: "mattress",
    price: 599,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Santi",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "One Plus Nord",
    imgUrl: mattress5,
    category: "mattress",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Dini",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Rahayu",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "26",
    productName: "Apple iPhone 13 Pro",
    imgUrl: mattress6,
    category: "mattress",
    price: 899,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Dini",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Santi",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "27",
    productName: "Samsung Galaxy S22",
    imgUrl: mattress7,
    category: "mattress",
    price: 699,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "John",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Doni",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "28",
    productName: "Rolex Watch",
    imgUrl: mattress8,
    category: "mattress",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Doni",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Rike",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  // ========== End =========

  // =========== Sofa ============
  {
    id: "30",
    productName: "Timex Easy Reader Watch",
    imgUrl: sofa1,
    category: "sofa",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Aden",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Sasa",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "31",
    productName: "Rolex Watch",
    imgUrl: sofa2,
    category: "sofa",
    groupBy: "best-saller",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Siti",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Dandi",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "32",
    productName: "Apple Watch",
    imgUrl: sofa3,
    category: "sofa",
    price: 399,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Salsa",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Dini",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "33",
    productName: "Beat Studio Wireless",
    imgUrl: sofa4,
    category: "sofa",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Fani",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Rama",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Pras",
        rating: 4.6,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, corrupti..",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "34",
    productName: "Beat EP Headphones",
    imgUrl: sofa5,
    category: "sofa",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Dandi",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Satria",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "35",
    productName: "Beat EP Headphones",
    imgUrl: sofa6,
    category: "sofa",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Riya",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Dini",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "36",
    productName: "Beat EP Headphones",
    imgUrl: sofa7,
    category: "sofa",
    groupBy: "best-saller",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Windi",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Risa",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "37",
    productName: "Beat EP Headphones",
    imgUrl: sofa9,
    category: "sofa",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Santia",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Ana",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "38",
    productName: "Beat EP Headphones",
    imgUrl: sofa10,
    category: "sofa",
    groupBy: "best-saller",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Dimas",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Royan",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  // ============ Table ====
  {
    id: "40",
    productName: "Timex Easy Reader Watch",
    imgUrl: table1,
    category: "table",
    groupBy: "best-saller",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Salma",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        reviewer: "Varel",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "41",
    productName: "Rolex Watch",
    imgUrl: table2,
    category: "table",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Angga",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Royan",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "42",
    productName: "Apple Watch",
    imgUrl: table3,
    category: "table",
    price: 399,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Angggun",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Santi",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "43",
    productName: "Beat Studio Wireless",
    imgUrl: table4,
    category: "table",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Santi",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Anis",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "44",
    productName: "Beat EP Headphones",
    imgUrl: table5,
    category: "table",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Imel",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Bela",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  // ============ wardrobe ====
  {
    id: "60",
    productName: "Timex Easy Reader Watch",
    imgUrl: wardrobe1,
    category: "wardrobe",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Anggi",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Hilda",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "61",
    productName: "Rolex Watch",
    imgUrl: wardrobe2,
    category: "wardrobe",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Firda",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Anggi",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "62",
    productName: "Apple Watch",
    imgUrl: wardrobe3,
    category: "wardrobe",
    price: 399,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Salma",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Nisa",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "63",
    productName: "Beat Studio Wireless",
    imgUrl: wardrobe4,
    category: "wardrobe",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Nur",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Dini",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "64",
    productName: "Beat EP Headphones",
    imgUrl: wardrobe5,
    category: "wardrobe",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Zainal",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Dana",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "65",
    productName: "Beat EP Headphones",
    imgUrl: wardrobe6,
    category: "wardrobe",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Anis",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Bela",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "66",
    productName: "Beat EP Headphones",
    imgUrl: wardrobe7,
    category: "wardrobe",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        reviewer: "Anggun",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        reviewer: "Fina",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
];

export default products;
