import M11 from "../../../assets/m11.png";
import Gal from "../../../assets/gal.png";
import Indi from "../../../assets/indi.png";
import User from "../../../assets/user.png";
import Hero from "../../../assets/hero.png";
import Open from "../../../assets/open.png";
import Open1 from "../../../assets/open1.png";
import Open2 from "../../../assets/open2.png";
import Noma from "../../../assets/noma.png";
import Noma1 from "../../../assets/noma1.png";
import Noma2 from "../../../assets/noma2.png";
import Noma3 from "../../../assets/noma3.png";
import Noma4 from "../../../assets/noma4.png";

export const stateTemplate = {
  title: "",
  live: "",
  source: "",
  summary: "",
  tech: "",
  status: "",
  gallery: [],
  hero: "",
};

export const data = [
  {
    title: "m11-studio",
    live: "https://m11-n5ne.onrender.com/",
    source: "https://github.com/Medic1111/M11-STUDIO-REDUX",
    summary:
      "Introducing a minimalist E-commerce platform designed specifically for enthusiasts of wall and street art. This user-friendly platform offers a delightful interface and engaging user experience. Registered users can manage their shopping carts and securely complete transactions using credit cards. The platform also boasts convenient email notifications, order confirmations, and a real-time chat feature for prompt customer support.",
    tech: `The developed software is a full stack application leveraging a modern technology stack including React, Node.js, Express.js, MongoDB, and Vanilla CSS. To facilitate secure online payments, the Stripe API has been integrated into the platform. The authentication and authorization system has been meticulously crafted from scratch. To ensure robust security measures are in place, the application is guarding against XSS attacks, NoSQL script injection, and brute force attacks, while prioritizing data sanitization. Real-time chat functionality has been achieved through the utilization of Socket.io, enabling seamless communication between users and employees. The application incorporates automatic email notifications for various events such as user registration, purchases, and customer service interactions. Additionally, a scheduled cron task has been implemented to automatically empty inactive shopping carts every 24 hours and streamline the restocking process of products. To efficiently manage client-side state, Redux in conjunction with React-Redux and Redux Toolkit has been employed. The software's design embraces a clean and bold aesthetic, complemented by captivating animations from the React Awesome Reveal library. Horizontal scrolling has been implemented to provide users with a unique browsing experience. One notable feature is the dynamic product list, which automatically updates on a monthly basis. It showcases components such as the "current expo," "previous expo," and "spoiler," providing visitors with a glimpse into the latest offerings. This meticulously developed software solution offers an immersive, secure, and visually captivating experience for art enthusiasts, catering to their diverse needs in the world of e-commerce.`,
    status:
      "Please note that the featured project on my portfolio is currently in an MVP (Minimum Viable Product) status, and I wanted to be transparent about its progress. While the project is functional and publicly accessible, it is important to mention that there are known bugs and issues that are actively being addressed. My current focus is on testing and actively working on bug reporting and fixing to improve the project's stability and user experience. As this is a side-project and I have limited dedicated time available, I am working diligently to address these issues within the constraints of my schedule. I believe in openness and continuous improvement, and I am committed to resolving the bugs and enhancing the project further. Your understanding and patience are greatly appreciated as I strive to provide the best possible experience for users. Please feel free to reach out if you have any questions or require further clarification regarding the project's status or any other aspects.",
    gallery: [Gal, Indi, User, Hero],
    hero: M11,
  },
  {
    title: "nomad-me",
    live: "https://m11-n5ne.onrender.com/",
    source: "https://github.com/Medic1111/NOMAD-ME-NO-TS/tree/main",
    status:
      "In terms of the application's current status, it has achieved its primary objective of enhancing the previous version and delivering a more robust and feature-rich experience. However, due to time constraints and other priorities, I will no longer be actively working on further development or maintenance of the application. While the application is functional and ready for use, it is important to note that there is one known behavioral bug that may be addressed if time permits. This bug does not significantly impact the overall functionality or user experience, but it is something that may be resolved in the future. Despite this bug, the application remains in a stable state and can be utilized effectively for its intended purposes.",
    summary:
      "Introducing a travel style social media application designed to foster a positive and non-toxic environment. This enhanced version is a solo project, building upon a previous team effort. With lighthearted feedback on user activities, this platform allows users to connect and share their travel experiences. Users can filter and browse posts based on labels, upload images seamlessly, and engage in conversations through comments. The application prioritizes security and offers features like email notifications, password reset, and thorough API documentation. While the focus is primarily on functionality, the current version ensures a user-friendly experience across desktop and mobile devices.",
    tech: `This application is an enhanced version of a travel social media app initially developed during the Chingu.io 6-week program by a team of four using the PERN (PostgreSQL, Express.js, React, Node.js) stack. The personal refactored version, built with the MERN (MongoDB, Express.js, React, Node.js) stack, introduces new features and improvements while maintaining the core functionality.
      The key enhancements include a label filtering system that allows users to add tags to their posts and filter content based on those tags. The image upload process has been streamlined, eliminating the need for third-party hosting. Images now get uploaded directly to the server, which then stores them in the cloud and stores the corresponding URLs in the database.  
      Additional features introduced in this version include the ability to send welcome emails to newly registered users, a "Forgot password" functionality for resetting passwords, comment functionality to engage in discussions on posts, and an API documentation for those interested in the server-side.     
      Security measures have been significantly improved, with the implementation of secured HTTP headers, rate limiting to protect against brute force attacks, data sanitization to prevent NOSQL query injection, and measures to prevent parameter and query pollution. Encryption and secure HTTP-only cookies are utilized to protect user data.  
      The codebase has undergone refactoring, resulting in a significant reduction in additions and deletions, leading to improved code quality and maintainability. The application has been thoroughly tested using Jest and super test to ensure its stability and reliability. 
      While the primary focus of this version is on functionality and back-end enhancements, the user interface (UI) has been kept minimal and functional, ensuring a responsive and user-friendly experience across both desktop and mobile devices.`,
    gallery: [Noma2, Noma3, Noma1, Noma4],
    hero: Noma,
  },

  {
    title: "fleet-control",
    live: "https://m11-n5ne.onrender.com/",
    source: "https://github.com/Medic1111/M11-STUDIO-REDUX",
    summary:
      "Introducing a minimalist E-commerce platform designed specifically for enthusiasts of wall and street art. This user-friendly platform offers a delightful interface and engaging user experience. Registered users can manage their shopping carts and securely complete transactions using credit cards. The platform also boasts convenient email notifications, order confirmations, and a real-time chat feature for prompt customer support.",
    tech: `The developed software is a full stack application leveraging a modern technology stack including React, Node.js, Express.js, MongoDB, and Vanilla CSS. To facilitate secure online payments, the Stripe API has been integrated into the platform. The authentication and authorization system has been meticulously crafted from scratch. To ensure robust security measures are in place, the application is guarding against XSS attacks, NoSQL script injection, and brute force attacks, while prioritizing data sanitization. Real-time chat functionality has been achieved through the utilization of Socket.io, enabling seamless communication between users and employees. The application incorporates automatic email notifications for various events such as user registration, purchases, and customer service interactions. Additionally, a scheduled cron task has been implemented to automatically empty inactive shopping carts every 24 hours and streamline the restocking process of products. To efficiently manage client-side state, Redux in conjunction with React-Redux and Redux Toolkit has been employed. The software's design embraces a clean and bold aesthetic, complemented by captivating animations from the React Awesome Reveal library. Horizontal scrolling has been implemented to provide users with a unique browsing experience. One notable feature is the dynamic product list, which automatically updates on a monthly basis. It showcases components such as the "current expo," "previous expo," and "spoiler," providing visitors with a glimpse into the latest offerings. This meticulously developed software solution offers an immersive, secure, and visually captivating experience for art enthusiasts, catering to their diverse needs in the world of e-commerce.`,
    status:
      "Please note that the featured project on my portfolio is currently in an MVP (Minimum Viable Product) status, and I wanted to be transparent about its progress. While the project is functional and publicly accessible, it is important to mention that there are known bugs and issues that are actively being addressed. My current focus is on testing and actively working on bug reporting and fixing to improve the project's stability and user experience. As this is a side-project and I have limited dedicated time available, I am working diligently to address these issues within the constraints of my schedule. I believe in openness and continuous improvement, and I am committed to resolving the bugs and enhancing the project further. Your understanding and patience are greatly appreciated as I strive to provide the best possible experience for users. Please feel free to reach out if you have any questions or require further clarification regarding the project's status or any other aspects.",
    gallery: [Gal, Indi, User, Hero],
    hero: M11,
  },
  {
    title: "!cube-studio",
    live: "https://m11-n5ne.onrender.com/",
    source: "https://github.com/Medic1111/M11-STUDIO-REDUX",
    summary:
      "Introducing a minimalist E-commerce platform designed specifically for enthusiasts of wall and street art. This user-friendly platform offers a delightful interface and engaging user experience. Registered users can manage their shopping carts and securely complete transactions using credit cards. The platform also boasts convenient email notifications, order confirmations, and a real-time chat feature for prompt customer support.",
    tech: `The developed software is a full stack application leveraging a modern technology stack including React, Node.js, Express.js, MongoDB, and Vanilla CSS. To facilitate secure online payments, the Stripe API has been integrated into the platform. The authentication and authorization system has been meticulously crafted from scratch. To ensure robust security measures are in place, the application is guarding against XSS attacks, NoSQL script injection, and brute force attacks, while prioritizing data sanitization. Real-time chat functionality has been achieved through the utilization of Socket.io, enabling seamless communication between users and employees. The application incorporates automatic email notifications for various events such as user registration, purchases, and customer service interactions. Additionally, a scheduled cron task has been implemented to automatically empty inactive shopping carts every 24 hours and streamline the restocking process of products. To efficiently manage client-side state, Redux in conjunction with React-Redux and Redux Toolkit has been employed. The software's design embraces a clean and bold aesthetic, complemented by captivating animations from the React Awesome Reveal library. Horizontal scrolling has been implemented to provide users with a unique browsing experience. One notable feature is the dynamic product list, which automatically updates on a monthly basis. It showcases components such as the "current expo," "previous expo," and "spoiler," providing visitors with a glimpse into the latest offerings. This meticulously developed software solution offers an immersive, secure, and visually captivating experience for art enthusiasts, catering to their diverse needs in the world of e-commerce.`,
    status:
      "Please note that the featured project on my portfolio is currently in an MVP (Minimum Viable Product) status, and I wanted to be transparent about its progress. While the project is functional and publicly accessible, it is important to mention that there are known bugs and issues that are actively being addressed. My current focus is on testing and actively working on bug reporting and fixing to improve the project's stability and user experience. As this is a side-project and I have limited dedicated time available, I am working diligently to address these issues within the constraints of my schedule. I believe in openness and continuous improvement, and I am committed to resolving the bugs and enhancing the project further. Your understanding and patience are greatly appreciated as I strive to provide the best possible experience for users. Please feel free to reach out if you have any questions or require further clarification regarding the project's status or any other aspects.",
    gallery: [Gal, Indi, User, Hero],
    hero: M11,
  },
  {
    title: "open-source",
    live: "https://finally-seen-oizk.onrender.com/",
    source: "https://github.com/Medic1111/FINALLY-SEEN",
    summary:
      "FINALLY-SEEN is an upcoming project aimed at helping developers improve their portfolios by providing valuable feedback. As the creator of this project, my goal is to create a platform where developers can share their portfolio websites and receive constructive input from the community. I believe that everyone should have an opportunity to contribute to open source projects, regardless of their skill level. That's why I'm working hard to make FINALLY-SEEN accessible to developers of all backgrounds. Whether you're just starting out or have years of experience, there will be a task that suits your skills and interests.",
    tech: `The technology stack for FINALLY-SEEN includes React, React Router, TypeScript, MongoDB, Node.js, Express.js, and Tailwind CSS. These powerful tools will be leveraged to build a user-friendly and feature-rich platform that fosters collaboration and growth within the developer community.`,
    status:
      "Although the project is still in its early stages and undergoing further definition, its primary goal is to help developers, like myself, who are eager to contribute to open source projects by providing a welcoming entry point. I am committed to making this project accessible to developers of all skill levels, ensuring that everyone can find a suitable task and contribute meaningfully. I invite developers who are passionate about open source and want to improve their portfolios to join this project. Together, we can create a supportive environment where you can enhance your skills, receive valuable feedback, and make a positive impact on the community. As the creator and active contributor of FINALLY-SEEN, I take on multiple roles to ensure the project's success. In addition to shaping the project's direction, I actively engage with the community by opening new issues and describing tasks that developers can work on. I also take on the responsibility of reviewing pull requests, ensuring that the code meets the project's standards and providing constructive feedback.",
    gallery: [Open1, Open2],
    hero: Open,
  },
];
