import estantienD from "../images/estantien-desktop.png";
import estantienM from "../images/estantien-mobile.png";
import kicksD from "../images/kicks-desktop.png";
import kicksM from "../images/kicks-mobile.png";
import rentchainD from "../images/rentchain-desktop.png";
import rentchainM from "../images/rentchain-mobile.png";
import dashboardD from "../images/dashboard-desktop.png";
import dashboardM from "../images/dashboard-mobile.png";
import lyriclyD from "../images/lyricly-desktop.png";
import lyriclyM from "../images/lyricly-mobile.png";
import basicD from "../images/basic-desktop.png";
import basicM from "../images/basic-mobile.png";
import restD from "../images/restaurant-desktop.png";
import restM from "../images/restaurant-mobile.png";
import eccaraD from "../images/ecarra-desktop.png";
import eccaraM from "../images/ecarra-mobile.png";
import edmossD from "../images/edmoss-desktop.png";
import edmossM from "../images/edmoss-mobile.png";
import shopD from "../images/shop-desktop.png";
import shopM from "../images/shop-mobile.png";
import odinD from "../images/odinproject-desktop.png";
import odinM from "../images/odinproject-mobile.png";
import react from "../images/react-logo.svg";
import js from "../images/javascript-logo.png";
import html from "../images/html-logo.png";
import css from "../images/css-logo.png";
import tailwind from "../images/tailwind-logo.svg";
import mockaroo from "../images/mockaroo-logo.png";
import mui from "../images/material-ui.svg";
import swiper from "../images/swiper-logo.svg";
import aos from "../images/aos-logo.png";
import redux from "../images/redux-logo.svg";
import rechart from "../images/rechart-logo.svg";
import spotify from "../images/spotify-logo.svg";

export const projects = [
  {
    id: 1,
    title: "Estantien - Luxury Real Estate Platform",
    overview:
      "Estantien is a sophisticated web platform designed for luxury real estate, offering an exclusive gateway to premium properties. It provides users with advanced search capabilities, virtual tours, and a curated selection of high-end homes, apartments, and commercial properties. The platform aims to connect discerning clients with their dream properties through a seamless and personalized browsing experience.",
    features: [
      "Advanced Property Search: Intuitive features for finding specific types of luxury properties",
      "Virtual Tours: Immersive virtual experiences for property viewing",
      "Exclusive Listings: Access to premium and high-end real estate opportunities",
    ],
    imageDesktop: estantienD,
    imageMobile: estantienM,
    stacks: [react, tailwind, mui, swiper, mockaroo, aos],
    live: "https://estantien.vercel.app",
    github: "https://github.com/Jo-shua09/real-estate",
  },
  {
    id: 2,
    title: "Kicks - Online Sneaker & Footwear Store",
    overview:
      "Kicks is an e-commerce platform designed as a premier destination for trendy and comfortable footwear. It offers a diverse collection of the latest sneakers, boots, and athletic shoes, providing a seamless online shopping experience for customers looking for their perfect pair.",
    features: [
      "Extensive Footwear Collection: Features a wide range of sneakers, boots, and athletic shoes.",
      "Focus on Trends & Comfort: Curated selection emphasizing modern styles and wearability.",
      "User-Friendly Interface: Designed for easy Browse and shopping for footwear.",
    ],
    imageDesktop: kicksD,
    imageMobile: kicksM,
    stacks: [react, tailwind, mui, swiper, aos, redux],
    live: "https://kickss.vercel.app",
    github: "https://github.com/Jo-shua09/kicks-e-commerce",
  },
  {
    id: 3,
    title: " RentChain - Decentralized Renting & Property Management Platform",
    overview:
      "In collaboration with @emmyhack 'https://github.com/Emmyhack', Rentchain is an innovative blockchain-based web platform built on the Morph network, designed to revolutionize residential and commercial rent payments and property management. It offers a secure, transparent, and efficient solution for both landlords and tenants globally, leveraging decentralized technology to streamline transactions and interactions.",
    features: [
      "Secure & Transparent Payments: Facilitates decentralized rent payments using blockchain for enhanced security and transparency.",
      "Maintenance Logging: Enables easy logging and tracking of property maintenance requests.",
      "Multilingual Support: Designed for global usability with support for multiple languages....",
    ],
    imageDesktop: rentchainD,
    imageMobile: rentchainM,
    stacks: [react, tailwind],
    live: "https://rent-chain.vercel.app",
    github: "https://github.com/Emmyhack/Morph-RentChain",
  },
  {
    id: 4,
    title: "Admin Dashboard UI Concept",
    overview:
      "This project is a user interface (UI) concept for a modern and intuitive admin dashboard. It showcases a clean, functional design demonstrating how an administrative panel could be structured to manage various data points and operations efficiently. The focus was on creating a visually appealing and highly usable interface that provides a clear overview and easy navigation for administrative tasks.",
    features: [
      "Intuitive Navigation: Designed for easy access to different sections.",
      "Clean Data Visualization: Placeholder areas for charts, tables, and key metrics.",
      "Modern Aesthetic: Utilizes contemporary design principles for a professional look.",
    ],
    imageDesktop: dashboardD,
    imageMobile: dashboardM,
    stacks: [react, tailwind, rechart, mui],
    live: "",
    github: "https://github.com/Jo-shua09/admin-dashboard",
  },
  {
    id: 5,
    title: "Lyricly - Your Personal Music Companion",
    overview:
      "Lyricly is a web-based music companion designed to enhance the user's music discovery and organization experience. It provides a seamless platform for users to discover new artists, manage their favorite tracks through custom playlists, and easily find lyrics, creating a comprehensive personal music hub.",
    features: [
      "Music Discovery: Explore new artists and tracks.",
      "Spotify API Integration: Leverages Spotify's extensive music catalog and features for a rich user experience.",
    ],
    imageDesktop: lyriclyD,
    imageMobile: lyriclyM,
    stacks: [react, tailwind, mui, aos, spotify],
    live: "",
    github: "https://github.com/Jo-shua09/Lyricly-Music-",
  },
  {
    id: 6,
    title: "EDMOSS - Business Growth Consulting Landing Page",
    overview:
      "This project is the landing page for EDMOSS, a leading business consultancy firm based in Nigeria. The page is designed to serve as the primary digital gateway for the company, effectively showcasing its expertise in strategic growth, digital transformation, and operational excellence, specifically targeting Nigerian and broader African enterprises. It aims to establish EDMOSS as a trusted partner for businesses seeking sustainable growth and strategic advisory.",
    features: [
      "Strategic Messaging: Clearly articulates EDMOSS's focus on strategic growth, digital transformation, and operational excellence.",
      "Targeted Audience: Content is tailored for African enterprises and specifically highlights Nigerian business advisory.",
      "SEO Optimized: Comprehensive meta-data (description, keywords, Open Graph, Twitter cards, canonical URL, geo-tagging, and Schema.org markup) for strong search engine presence.",
    ],
    imageDesktop: edmossD,
    imageMobile: edmossM,
    stacks: [react, tailwind],
    live: "https://edmoss.vercel.app",
    github: "https://github.com/Jo-shua09/Edmoss_landingPage",
  },
  {
    id: 7,
    title: "Digital Branding & Product Design Agency Website (Concept)",
    overview:
      "This project is a conceptual website for a leading digital branding and product design agency, inspired by agencies that partner with global brands. The site aims to present a clean, professional, and engaging online presence that highlights the agency's expertise in crafting digital products, services, and e-commerce experiences.",
    features: [
      "Professional Design: A sleek and modern aesthetic suitable for a high-profile agency.",
      "Showcase of Services: Content focused on digital products, services, and e-commerce experiences.",
      "Interactive Elements: Potential for sliders or carousels (indicated by Swiper.js)",
    ],
    imageDesktop: basicD,
    imageMobile: basicM,
    stacks: [html, css, js, swiper],
    live: "https://baasic-dept.vercel.app",
    github: "https://github.com/Jo-shua09/BASIC-DEPT_web",
  },
  {
    id: 8,
    title: " The Odin Project (Concept)",
    overview:
      "This project is a conceptual web designed for The Odin Project, an open-source curriculum dedicated to empowering aspiring web developers. The page aims to clearly communicate the platform's mission: to provide comprehensive learning paths for individuals to kickstart and advance their careers in web development. The focus was on creating a welcoming and informative gateway for new learners.",
    features: [
      "Clear Value Proposition: Immediately conveys the purpose of The Odin Project.",
      "User-Friendly Design: Focused on guiding aspiring web developers.",
      "Engaging Typography: Utilizes the 'Inter' Google Font for readability and modern appeal.",
    ],
    imageDesktop: odinD,
    imageMobile: odinM,
    stacks: [html, css, js],
    live: "https://t-doinproject.vercel.app",
    github: "https://github.com/Jo-shua09/odinproject_clone",
  },
  {
    id: 9,
    title: "Evara Stores Redesign",
    overview:
      "This project is a revitalized e-commerce website, a 'revamped version' of the Cara store, now known as Evara Stores. The primary goal was to deliver a fresh design, significantly improve site navigation, and enhance the overall user experience for online shopping. It's a modern e-commerce solution built to facilitate seamless buying and selling.",
    features: [
      "Modern Design: A fresh and updated visual aesthetic.",
      "Enhanced User Experience: Focus on usability and customer satisfaction.",
      "E-commerce Functionality: Core features for online shopping, including product display and cart management.",
    ],
    imageDesktop: eccaraD,
    imageMobile: eccaraM,
    stacks: [html, css, js, swiper],
    live: "https://t-ecarra.vercel.app",
    github: "https://github.com/Jo-shua09/Ecarra_stores.commerce",
  },
  {
    id: 10,
    title: "Cara Store - E-commerce Website",
    overview:
      "This project is a foundational e-commerce website, named 'Cara Store', designed to provide a comprehensive online shopping experience. It serves as a digital storefront, enabling users to browse products and engage in online purchasing. The focus was on establishing a solid, functional e-commerce presence with a clean design.",
    features: [
      "Basic E-commerce Functionality: Core features for online shopping.",
      "Visual Enhancements: Utilizes Swiper.js for dynamic content display and Font Awesome for iconography.",
      "Themed Design: Features a #282828 (dark grey) theme color, indicating a specific brand aesthetic.",
    ],
    imageDesktop: shopD,
    imageMobile: shopM,
    stacks: [html, css, js],
    live: "https://tuma-shop.vercel.app",
    github: "https://github.com/Jo-shua09/e-commerce_web",
  },
  {
    id: 11,
    title: " Grilli Foods - Exclusive Restaurant Website",
    overview:
      "This project is a sophisticated website designed for 'Grilli Foods' , conceptualized as an exclusive and high-end restaurant. The platform aims to create an inviting online presence that reflects the restaurant's premium dining experience, showcasing its unique cuisine and elegant ambiance to attract discerning clientele.",
    features: [
      "Exclusive Food Restaurant Focus: Designed to appeal to a high-end dining audience.",
      "Elegant Typography: Incorporates 'DM Sans' and 'Forum' fonts for a sophisticated aesthetic.",
      "Detailed Cuisine Presentation: Designed to highlight 'expensive foods' and unique 'cuisine.'",
    ],
    imageDesktop: restD,
    imageMobile: restM,
    stacks: [html, css, js, swiper],
    live: "https://t-restuarant.vercel.app",
    github: "https://github.com/Jo-shua09/grilli-restaurant",
  },
];
