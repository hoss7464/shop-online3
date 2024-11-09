import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg007 from "../Images/single-sofa-04.png";

import productImg07 from "../Images/arm-chair-01.jpg";
import productImg08 from "../Images/arm-chair-02.jpg";
import productImg09 from "../Images/arm-chair-03.jpg";
import productImg10 from "../Images/arm-chair-01.jpg";

import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";

import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import sofaSlide from "../Images/hero-img.png";
import watchSlide from "../Images/watch-07.png";

export const SliderData = [
  {
      id: 1,
      title: "10% Off For Your comfortable furnitures.",
      desc: "Enjoy 10% off on our range of comfortable furniture, designed to elevate your living space while providing maximum relaxation.",
      cover: sofaSlide,
  },
  {
      id: 2,
      title: "15% Off For Your next generation cellphones",
      desc: "Enjoy a 15% discount on your next generation cellphones! Upgrade to the latest technology and save while doing so. Don't miss out on this limited-time offer!",
      cover: phone08,
  },
  {
      id: 3,
      title: "30% Off For new headphones.",
      desc: "Enjoy a special 30% discount on new headphones! Don't miss this opportunity to upgrade your audio experience with high-quality sound and comfort.",
      cover: wireless01,
  },
  {
      id: 4,
      title: "20% Off For smartwatch",
      desc: "Enjoy a limited-time offer of 20% off on select smartwatches! Upgrade your tech game with the latest features in fitness tracking, notifications, and more.",
      cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car" style={{color : "#430E00"}}></ion-icon>,
    title: "Free Shipping",
    subtitle: "Free shipping is a promotional offer.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card" style={{color : "#430E00"}}></ion-icon>,
    title: "Safe Payment",
    subtitle: "Safe payment refers to secure transactions.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline" style={{color : "#430E00"}}></ion-icon>,
    title: "Secure Payment",
    subtitle: "This typically involves secure servers.",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset" style={{color : "#430E00"}}></ion-icon>,
    title: "Back Guarantee",
    subtitle: "commonly is a money-back guarantee.",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    discount:30,
    shortDesc:
      "Stone and Beam Westview is a collection from the Amazon-owned brand, known for its stylish and affordable home furnishings.",
    description:
      "The Westview line typically features modern design elements with a focus on comfort and durability, incorporating materials like wood and metal to create contemporary pieces for various living spaces. These products are designed to be both functional and aesthetically pleasing, appealing to a wide range of interior design styles.",
    reviews: [
      {
        rating: 4.7,
        text: "I bought one of them and I am comfortable with that.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    discount:20,
    shortDesc:
      "Rivet Bigelow Modern is a contemporary furniture collection or design style known for its clean lines, functional form, and a blend of modern aesthetics with industrial elements.",
    description:
      "Often characterized by minimalist designs, neutral color palettes, and materials like metal, wood, and glass, this style aims to create sleek and versatile spaces that prioritize both beauty and practicality. The collection likely emphasizes simplicity and a harmonious balance between comfort and style, appealing to those looking to create a stylish, modern living environment.",
    reviews: [
      {
        rating: 4.8,
        text: "I am satisfied with it's color.",
      },
      {
        rating: 4.8,
        text: "it is so comfortable.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    discount:15,
    shortDesc:
      "The Baltsar Chair, also known as the Baltsar Chair of Humanities, is a prestigious academic position typically associated with promoting research and teaching in the humanities, particularly related to Baltic studies or cultural issues. ",
    description:
      "It aims to foster interdisciplinary collaboration and elevate understanding of the region's history, literature, and societal dynamics. The exact details and significance may vary based on the institution offering the chair and its specific research focus.",
    reviews: [
      {
        rating: 4.6,
        text: "It is so small and I can put it whereever I want.",
      },
      {
        rating: 4.9,
        text: "I can take this chair wherever I want.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    discount:35,
    shortDesc:
      "The Helmar Chair is a distinctive piece of furniture known for its combination of modern design and comfort.",
    description:
      "Often characterized by its clean lines, ergonomic shape, and high-quality materials, it can serve as a stylish accent in various interior settings, ranging from contemporary to mid-century styles. Depending on the specific model, it may feature upholstered seating, hardwood frames, and customizable finishes, making it a versatile choice for home or office environments.",
    reviews: [
      {
        rating: 4.6,
        text: "It is so small and I can put it whereever I want.",
      },
      {
        rating: 4.9,
        text: "I can take this chair wherever I want.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    discount:10,
    shortDesc:
      "The Realme 8 is a mid-range smartphone launched by Realme in March 2021, featuring a 6.4-inch Super AMOLED display, a MediaTek Helio G95 processor, and a quad-camera setup with a 64 MP primary lens.",
    description:
      "It is equipped with up to 8GB of RAM and offers internal storage options of 128GB, expandable via a microSD card. The device also boasts a 5000mAh battery with 30W fast charging support, making it a solid choice for users seeking good performance and camera capabilities in an affordable package.",
    reviews: [
      {
        rating: 4.8,
        text: "My smartphone is so good in performance.",
      },
      {
        rating: 4.9,
        text: "My smartphone is so good in performance.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount:5,
    shortDesc:
      "The OnePlus Nord, launched in July 2020, is a mid-range smartphone designed to offer premium features at a more accessible price point.",
    description:
      "It features a 6.44-inch Fluid AMOLED display with a 90Hz refresh rate, Snapdragon 765G processor, and 5G connectivity. The device is known for its impressive camera capabilities, including a quad-camera setup on the back and dual front cameras, alongside a clean OxygenOS experience. It represents OnePlus's re-entry into the mid-range market, appealing to users seeking high performance without the flagship price.",
    reviews: [
      {
        rating: 4.8,
        text: "This gives you alot of oppurtunity in terms of performance.",
      },
      {
        rating: 4.9,
        text: "This gives you alot of oppurtunity in terms of performance.",
      },
    ],
    avgRating: 4.8,
  },

]

export const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    discount:30,
    shortDesc:
      "Stone and Beam Westview is a collection from the Amazon-owned brand, known for its stylish and affordable home furnishings.",
    description:
      "The Westview line typically features modern design elements with a focus on comfort and durability, incorporating materials like wood and metal to create contemporary pieces for various living spaces. These products are designed to be both functional and aesthetically pleasing, appealing to a wide range of interior design styles.",
    reviews: [
      {
        rating: 4.7,
        text: "I bought one of them and I am comfortable with that.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    discount:20,
    shortDesc:
      "Rivet Bigelow Modern is a contemporary furniture collection or design style known for its clean lines, functional form, and a blend of modern aesthetics with industrial elements.",
    description:
      "Often characterized by minimalist designs, neutral color palettes, and materials like metal, wood, and glass, this style aims to create sleek and versatile spaces that prioritize both beauty and practicality. The collection likely emphasizes simplicity and a harmonious balance between comfort and style, appealing to those looking to create a stylish, modern living environment.",
    reviews: [
      {
        rating: 4.8,
        text: "I am satisfied with it's color.",
      },
      {
        rating: 4.8,
        text: "it is so comfortable.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "sofa",
    price: 173,
    shortDesc:
      "The Amazon Brand Modern Sofa is a stylish and versatile piece of furniture designed to enhance the aesthetic of any living space.",
    description:
      "It typically features a contemporary design, available in various colors and materials to suit different decors. Known for its comfort, the sofa often includes plush cushions and a sturdy frame, providing both durability and support. Customers appreciate the balance of quality and affordability that comes with Amazon's branding, making it a popular choice for those looking to furnish their homes attractively without breaking the bank.",
    reviews: [
      {
        rating: 4.6,
        text: "Amazon facinates me to this day.",
      },
      {
        rating: 4.9,
        text: "Amazon facinates me to this day.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    discount:20,
    shortDesc:
      "Rivet Bigelow Modern is a contemporary furniture collection or design style known for its clean lines, functional form, and a blend of modern aesthetics with industrial elements.",
    description:
      "Often characterized by minimalist designs, neutral color palettes, and materials like metal, wood, and glass, this style aims to create sleek and versatile spaces that prioritize both beauty and practicality. The collection likely emphasizes simplicity and a harmonious balance between comfort and style, appealing to those looking to create a stylish, modern living environment.",
    reviews: [
      {
        rating: 4.8,
        text: "I am satisfied with it's color.",
      },
      {
        rating: 4.8,
        text: "it is so comfortable.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg04,
    category: "sofa",
    price: 163,
    shortDesc:
      "The Fluffy Sheep Sofa is a whimsically designed piece of furniture that typically features a soft, cloud-like appearance, resembling a sheep in both shape and texture.",
    description:
      "Often crafted from plush materials, it provides a comfortable seating option while adding a playful touch to interior decor. This unique sofa is popular in children's rooms, playrooms, or any space aiming for a cozy and inviting atmosphere. Its charming aesthetic and comfort make it a delightful addition to modern homes, appealing to both kids and adults alike.",
    reviews: [
      {
        rating: 4.6,
        text: "This sofa makes my inner design better and more beautiful.",
      },
      {
        rating: 4.9,
        text: "This sofa makes my inner design better and more beautiful.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "sofa",
    price: 163,
    shortDesc:
      "A faux velvet sofa combines the luxurious look of velvet with a more affordable and often more durable fabric option.!",
    description:
      "Typically made from polyester or a blend of synthetic materials, faux velvet sofas offer a soft, plush texture that enhances comfort while being easier to clean and maintain than real velvet. Available in various colors and styles, they can elevate any living space, making it feel sophisticated without the high upkeep associated with natural fabrics. Whether for a modern or traditional aesthetic, a faux velvet sofa is a stylish and practical choice for home decor.",
    reviews: [
      {
        rating: 4.6,
        text: "This sofa is good for getting rest.",
      },
      {
        rating: 4.9,
        text: "This sofa is good for getting rest.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg04,
    category: "sofa",
    price: 163,
    shortDesc:
      "The Fluffy Sheep Sofa is a whimsically designed piece of furniture that typically features a soft, cloud-like appearance, resembling a sheep in both shape and texture.",
    description:
      "Often crafted from plush materials, it provides a comfortable seating option while adding a playful touch to interior decor. This unique sofa is popular in children's rooms, playrooms, or any space aiming for a cozy and inviting atmosphere. Its charming aesthetic and comfort make it a delightful addition to modern homes, appealing to both kids and adults alike.",
    reviews: [
      {
        rating: 4.6,
        text: "This sofa makes my inner design better and more beautiful.",
      },
      {
        rating: 4.9,
        text: "This sofa makes my inner design better and more beautiful.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Sakarias Armchair",
    imgUrl: productImg07,
    category: "chair",
    price: 99,
    shortDesc:
      "The Sakarias Armchair is a stylish and functional piece of furniture designed by Danish design brand IKEA.",
    description:
      "Known for its modern aesthetic, the chair features a sleek silhouette, padded seating, and a sturdy frame, making it an ideal addition to contemporary living spaces. Its versatile design allows it to fit seamlessly in various decor styles, while the comfortable upholstery ensures it is a practical choice for both relaxation and socializing.",
    reviews: [
      {
        rating: 4.6,
        text: "I gives me a cozy feeling.",
      },
      {
        rating: 4.9,
        text: "I gives me a cozy feeling.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 173,
    shortDesc:
      "The modern arm sofa is a stylish and contemporary furniture piece that combines comfort and design, often featuring clean lines, minimalist aesthetics, and a range of upholstery options.",
    description:
      "Typically characterized by its low profile and sleek, often geometric shapes, this type of sofa enhances modern living spaces while providing ample seating. Available in various materials such as leather, fabric, or a blend, modern arm sofas can seamlessly fit into diverse decor styles, from industrial to bohemian, making them a versatile choice for any home.",
    reviews: [
      {
        rating: 4.6,
        text: "This sofa is good for guests.",
      },
      {
        rating: 4.9,
        text: "This sofa is good for guests.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    shortDesc:
      "The Baltsar Chair is a significant piece of furniture often noted for its unique design and artistic craftsmanship, typically associated with various cultural or historical contexts.",
    description:
      "Its design may reflect traditional styles or contemporary aesthetics, depending on the specific region or period it represents. This chair could also be a symbol of a particular cultural heritage or artistic movement, embodying the values and aesthetics of its time. If you're looking for more specific information about a particular Baltsar Chair or its relevance, please provide additional details!",
    reviews: [
      {
        rating: 4.6,
        text: "This chair is good for trip.",
      },
      {
        rating: 4.9,
        text: "This chair is good for trip.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    shortDesc:
      "The Helmar Chair is an elegant piece of furniture known for its unique design and comfort.",
    description:
      "Often featuring a combination of wood and upholstery, it reflects modern aesthetics while ensuring functionality. Ideal for both home and office settings, the Helmar Chair is appreciated for its ergonomic support and stylish appearance, making it a popular choice for those looking to elevate their interior decor.",
    reviews: [
      {
        rating: 4.6,
        text: "this chair is comfortable for hours of sitting.",
      },
      {
        rating: 4.9,
        text: "this chair is comfortable for hours of sitting.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Apple iPhone 12 Pro",
    imgUrl: phone01,
    category: "mobile",
    price: 799,
    shortDesc:
      "The Apple iPhone 12 Pro, released in October 2020, features a 6.1-inch Super Retina XDR display, A14 Bionic chip.",
    description:
      "The Apple iPhone 12 Pro, released in October 2020, features a 6.1-inch Super Retina XDR display, A14 Bionic chip, and a triple-camera system with enhanced low-light performance, including a LiDAR Scanner for improved night photography and augmented reality experiences. It supports 5G connectivity, MagSafe accessories, and offers up to 512GB of storage, all packaged in a durable, sleek design with a Ceramic Shield front cover for increased drop durability.",
    reviews: [
      {
        rating: 4.8,
        text: "I think it came from another galaxy.",
      },
      {
        rating: 4.9,
        text: "I think it came from another galaxy.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Sakarias Armchair",
    imgUrl: productImg10,
    category: "chair",
    price: 99,
    shortDesc:
      "The Sakarias Armchair is a modern, stylish piece of furniture characterized by its sleek design, often featuring bold lines and a contemporary aesthetic.",
    description:
      "It typically includes a supportive frame and comfortable upholstery, making it both functional and visually appealing for various living spaces. Its versatility allows it to complement a wide range of interior design styles, from minimalist to eclectic.",
    reviews: [
      {
        rating: 4.6,
        text: "This chair gives me a cozy feeling.",
      },
      {
        rating: 4.9,
        text: "This chair gives me a cozy feeling.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Apple iPhone 12 Max",
    imgUrl: phone02,
    category: "mobile",
    price: 799,
    shortDesc:
      "The iPhone 12 Pro Max, released in November 2020, features a 6.7-inch Super Retina XDR display, powerful A14 Bionic chip.",
    description:
      "The iPhone 12 Pro Max, released in November 2020, features a 6.7-inch Super Retina XDR display, powerful A14 Bionic chip, and advanced photography capabilities, including a triple-camera system with Night mode and 4K Dolby Vision recording. It supports 5G connectivity, offers improved battery life, and is built with a premium glass and stainless steel design. As part of Apple's ecosystem, it integrates seamlessly with other Apple products and services.",
    reviews: [
      {
        rating: 4.8,
        text: "This cellphone never get old.",
      },
      {
        rating: 4.9,
        text: "This cellphone never get old.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    shortDesc:
      "The Realme 8 is a mid-range smartphone released in March 2021, featuring a 6.4-inch Super AMOLED display with a 90Hz refresh rate.",
    description:
      "The Realme 8 is a mid-range smartphone released in March 2021, featuring a 6.4-inch Super AMOLED display with a 90Hz refresh rate, MediaTek Helio G95 processor, up to 8GB of RAM, and a quad-camera system with a 64MP main sensor. It runs on Realme UI 2.0 based on Android 11, offers a 5,000mAh battery with fast charging support, and boasts a sleek design appealing to budget-conscious users looking for solid performance and features.",
    reviews: [
      {
        rating: 4.8,
        text: "It's a good cellphone.",
      },
      {
        rating: 4.9,
        text: "It's a good cellphone.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    shortDesc:
      "The OnePlus Nord is a mid-range smartphone that was launched in July 2020, designed to offer a balance of performance and affordability.",
    description:
      "It features a Qualcomm Snapdragon 765G processor, a fluid AMOLED display with a 90Hz refresh rate, and a versatile camera setup, including a 48 MP main sensor. Known for its fast charging capabilities with Warp Charge technology, the Nord also emphasizes a premium design while maintaining a competitive price point, making it a popular choice among budget-conscious consumers looking for quality.",
    reviews: [
      {
        rating: 4.8,
        text: "I'ts a new generation smartphone.",
      },
      {
        rating: 4.9,
        text: "I'ts a new generation smartphone.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Apple iPhone 13 Pro",
    imgUrl: phone05,
    category: "mobile",
    price: 899,
    shortDesc:
      "The Apple iPhone 13 Pro, released in September 2021, features a 6.1-inch Super Retina XDR display, A15 Bionic chip.",
    description:
      "The Apple iPhone 13 Pro, released in September 2021, features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and an advanced triple-camera system that includes improved low-light performance and ProRAW support. It offers up to 1TB of storage, enhanced battery life, and supports 5G connectivity. The phone also introduced ProMotion technology with a 120Hz refresh rate, delivering smoother scrolling and responsiveness, making it a powerful choice for photography, gaming, and everyday tasks.",
    reviews: [
      {
        rating: 4.8,
        text: "It amazes me to this day.",
      },
      {
        rating: 4.9,
        text: "It amazes me to this day.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Samsung Galaxy S22",
    imgUrl: phone06,
    category: "mobile",
    price: 699,
    shortDesc:
      "The Samsung Galaxy S22, released in early 2022, features a sleek design with a 6.1-inch Dynamic AMOLED display and a resolution of 2400 x 1080 pixels.",
    description:
      "It is powered by the Snapdragon 8 Gen 1 or Exynos 2200 processor, depending on the region, and comes with options of 8GB RAM and up to 256GB of storage. The phone includes a versatile triple-camera system with a 50 MP main sensor, a 12 MP ultra-wide lens, and a 10 MP telephoto lens, along with a 10 MP front-facing camera. It offers various features such as 5G connectivity, an IP68 water and dust resistance rating, and supports wireless charging. Running on Samsung's One UI based on Android, the S22 is known for its performance, camera capabilities, and overall user experience.",
    reviews: [
      {
        rating: 4.8,
        text: "Samsung always has a new feature which I have not ever experienced.",
      },
      {
        rating: 4.9,
        text: "Samsung always has a new feature which I have not ever experienced.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Rolex Watch",
    imgUrl: watch01,
    category: "watch",
    price: 299,
    shortDesc:
      "Rolex is a prestigious Swiss watch manufacturer known for its luxurious timepieces, precision, and innovative technology.",
    description:
      "Founded in 1905, the brand is synonymous with quality and craftsmanship, having pioneered features such as the first waterproof watch and the self-winding mechanism. Rolex watches are often seen as status symbols and are highly sought after by collectors, with popular models like the Submariner, Daytona, and Datejust commanding significant attention in both the luxury market and investment circles.",
    reviews: [
      {
        rating: 4.8,
        text: "Something luxury.",
      },
      {
        rating: 4.9,
        text: "Something luxury.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Timex Easy Reader Watch",
    imgUrl: watch02,
    category: "watch",
    price: 299,
    shortDesc:
      "The Timex Easy Reader Watch is a popular timepiece known for its simplicity and readability, making it ideal for those who prefer a classic design with clear, large numerals.",
    description:
      "Typically featuring a durable leather or metal band and a resin or mineral crystal face, this watch often includes Indiglo night-light for visibility in low-light conditions. It is both stylish and practical, appealing to a wide range of customers seeking reliability and ease of use in their everyday watch.",
    reviews: [
      {
        rating: 4.8,
        text: "This watch is something new.",
      },
      {
        rating: 4.9,
        text: "This watch is something new.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "Rolex Watch",
    imgUrl: watch03,
    category: "watch",
    price: 299,
    shortDesc:
      "Rolex is a prestigious Swiss watch manufacturer known for its luxurious timepieces, precision, and innovative technology.",
    description:
      "Founded in 1905, the brand is synonymous with quality and craftsmanship, having pioneered features such as the first waterproof watch and the self-winding mechanism. Rolex watches are often seen as status symbols and are highly sought after by collectors, with popular models like the Submariner, Daytona, and Datejust commanding significant attention in both the luxury market and investment circles.",
    reviews: [
      {
        rating: 4.8,
        text: "something luxury.",
      },
      {
        rating: 4.9,
        text: "something luxury.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Apple Watch",
    imgUrl: watch04,
    category: "watch",
    price: 399,
    shortDesc:
      "The Apple Watch is a smartwatch designed and developed by Apple Inc., first introduced in 2015.",
    description:
      "It offers features such as fitness tracking, health monitoring, notifications, and customizable watch faces. With various models and styles, it integrates seamlessly with iOS devices, allowing users to receive calls, messages, and app notifications directly on their wrist. The latest versions also include advanced health features like ECG monitoring, blood oxygen levels, and improved fitness tracking capabilities, making it a popular choice for both casual users and fitness enthusiasts.",
    reviews: [
      {
        rating: 4.8,
        text: "It gives me alot of features.",
      },
      {
        rating: 4.9,
        text: "It gives me alot of features.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Beat Studio Wireless",
    imgUrl: wireless01,
    category: "wireless",
    price: 199,
    shortDesc:
      "The Beat Studio Wireless headphones are known for their stylish design, comfortable fit, and strong bass response, making them a popular choice for music lovers and casual listeners alike.",
    description:
      "They feature active noise cancellation, which helps create an immersive listening experience by reducing external distractions, and come with Bluetooth connectivity for wireless convenience. Battery life is generally impressive, offering several hours of playback on a single charge, and they often include a built-in microphone for hands-free calls and voice assistant access.",
    reviews: [
      {
        rating: 4.8,
        text: "Not bad.",
      },
      {
        rating: 4.9,
        text: "Not bad.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "Beat EP Headphones",
    imgUrl: wireless03,
    category: "wireless",
    price: 199,
    shortDesc:
      "Beats EP headphones are a wired option from Beats by Dre, designed to deliver solid sound quality with an emphasis on bass performance.",
    description:
      "They feature a lightweight, durable design with comfortable ear cushions for extended listening sessions. The headphones come with a remote control and microphone for hands-free calls and music controls, making them a practical choice for everyday use. The minimalist design is complemented by various color options, appealing to a wide range of consumers. Overall, the Beats EP offers an accessible entry point into the Beats brand with a focus on style and sound.",
    reviews: [
      {
        rating: 4.8,
        text: "It has a great sound.",
      },
      {
        rating: 4.9,
        text: "It has a great sound.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "22",
    productName: "Black Headphones",
    imgUrl: wireless02,
    category: "wireless",
    price: 169,
    shortDesc:
      "Black headphones are popular for their sleek, modern aesthetic and versatility, often chosen for various uses such as casual listening, gaming, or professional audio work.",
    description:
      "Black headphones are popular for their sleek, modern aesthetic and versatility, often chosen for various uses such as casual listening, gaming, or professional audio work. They come in a variety of styles, including over-ear, on-ear, and in-ear models, with features like noise cancellation, wireless connectivity, and built-in microphones, catering to a wide range of preferences and needs.",
    reviews: [
      {
        rating: 4.8,
        text: "It's something fragile.",
      },
      {
        rating: 4.9,
        text: "It's something fragile.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "23",
    productName: "Bluetooth Headphones",
    imgUrl: wireless04,
    category: "wireless",
    price: 139,
    shortDesc:
      "Bluetooth headphones are wireless audio devices that connect to compatible devices via Bluetooth technology, allowing users to listen to music, podcasts, and take calls without the hassle of cords.",
    description:
      "They come in various styles, including over-ear, on-ear, and in-ear designs, often featuring features like noise cancellation, touch controls, and built-in microphones. With advancements in battery life and sound quality, they have become increasingly popular among commuters, gamers, and fitness enthusiasts.",
    reviews: [
      {
        rating: 4.8,
        text: "I can carry it with myself wherever I go.",
      },
      {
        rating: 4.9,
        text: "I can carry it with myself wherever I go.",
      },
    ],
    avgRating: 4.8,
  },

];
