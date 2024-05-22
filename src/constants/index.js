import { child_01 } from "../assets/images/products/child";
import { man_01 } from "../assets/images/products/man";
import { woman_01 } from "../assets/images/products/woman";
import { facebook, instagram, twitter } from "../assets/icons";

export const navLinks = [
  { path: "/home", title: "Home" },
  { path: "/about-us", title: "About Us" },
  { path: "/products", title: "Products" },
  { path: "/contact-us", title: "Contact Us" },
];
export const procedLink = [
  { path: "sign-in", title: "sign in" },
  { className: "mx-2 font-bold text-black", title: "or" },
  { path: "log-in", title: "log in" },
];
export const statistics = [
  { value: "11k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const topCloths = [
  {
    bigImg: child_01,
  },
  {
    bigImg: man_01,
  },
  {
    bigImg: woman_01,
  },
];

export const About_us = {
  title: "#what we do! ",
  About_text:
    "At own best, we believe that fashion is not just about what you wear, but it's a reflection of your personality, style, and aspirations. Established with a passion for providing trendsetting clothing options, we strive to empower individuals to express themselves through their fashion choices.",
  Our_Story:
    "own best began as a vision to create a platform where fashion enthusiasts could discover the latest trends, timeless classics, and everything in between, all in one place. Founded by Ermias Tekilemarkos in 2024, our journey started with a simple mission: to redefine online shopping by offering a curated selection of high-quality apparel at affordable prices.",
  ourServices: ["on line shoping", "free delivery", "one week gurantee"],
};

export const PopularProductCatagory = [
  {
    id: "1",
    catagotyName: "men's",
  },
  {
    id: "2",
    catagotyName: "women's",
  },
  {
    id: "3",
    catagotyName: "child's",
  },
];


export const products = [
  {
    imgURL: child_01,
    name: "product_name",
    price: "$200.20",
    catagory: "child's",
  },
  {
    imgURL: child_01,
    name: "product_name",
    price: "$200.20",
    catagory: "child's",
  },
  {
    imgURL: man_01,
    name: "product_name",
    price: "$200.20",
    catagory: "men's",
  },
  {
    imgURL: man_01,
    name: "product_name",
    price: "$200.20",
    catagory: "men's",
  },
  {
    imgURL: man_01,
    name: "product_name",
    price: "$200.20",
    catagory: "men's",
  },
  {
    imgURL: man_01,
    name: "product_name",
    price: "$200.20",
    catagory: "men's",
  },
  {
    imgURL: woman_01,
    name: "product_name",
    price: "$200.20",
    catagory: "women's",
  },
  {
    imgURL: woman_01,
    name: "product_name",
    price: "$200.20",
    catagory: "women's",
  },
  {
    imgURL: woman_01,
    name: "product_name",
    price: "$200.20",
    catagory: "women's",
  },
  {
    imgURL: woman_01,
    name: "product_name",
    price: "$200.20",
    catagory: "women's",
  },
  {
    imgURL: child_01,
    name: "product_name",
    price: "$200.20",
    catagory: "child's",
  },
  {
    imgURL: child_01,
    name: "product_name",
    price: "$200.20",
    catagory: "child's",
  },
  {
    imgURL: woman_01,
    name: "product_name",
    price: "$200.20",
    catagory: "women's",
  },
  {
    imgURL: child_01,
    name: "product_name",
    price: "$200.20",
    catagory: "child's",
  },
  {
    imgURL: child_01,
    name: "product_name",
    price: "$200.20",
    catagory: "child's",
  },
  {
    imgURL: man_01,
    name: "product_name",
    price: "$200.20",
    catagory: "men's",
  },
];

export const childCatagoty = products.filter(product => product.catagory === "child's");
export const menCatagoty = products.filter(product => product.catagory === "men's");
export const womenCatagory = products.filter(product => product.catagory === "women's");

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "MENS", link: "/" },
      { name: "WOMENS", link: "/" },
      { name: "CHILDS", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@ownbest.com", link: "mailto:customer@ownbest.com" },
      { name: "+251948309786", link: "tel:+251948309786" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo", path: '/https://www.facebook.com/' },
  { src: twitter, alt: "twitter logo", path: '/https://twitter.com/'},
  { src: instagram, alt: "instagram logo", path: '/https://www.instagram.com/'},
];
