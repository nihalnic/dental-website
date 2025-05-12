export const featuredBrandLogos = [
  "/assets/images/logos/one.png",
  "/assets/images/logos/two.png",
  "/assets/images/logos/three.png",
  "/assets/images/logos/four.png",
  "/assets/images/logos/five.png",
];

export const services = [
  {
    name: "General Dentistry",
    dis: "Routine care to maintain oral health.",
    image: "/assets/images/orthodontics.png",
    link: "/",
  },
  {
    name: "Cosmetic Dentistry",
    dis: "Services that improve the appearance of teeth",
    image: "/assets/images/cosmetic.png ",
    link: "/",
  },
  {
    name: "Orthodontics",
    dis: "Teeth alignment and bite correction",
    image: "/assets/images/orthodontics.png",
    link: "/",
  },
  {
    name: "Restorative Dentistry",
    dis: "Restoring damaged/missing teeth with implants, crowns, etc.",
    image: "/assets/images/restorative.png",
    link: "/",
  },
  {
    name: "Pediatric Dentistry",
    dis: "Specialized care for children’s teeth",
    image: "/assets/images/pediatric.png",
    link: "/",
  },
  {
    name: "Surgical & Specialized Care",
    dis: "Advanced treatments like root canals, gum surgery, or wisdom teeth removal",
    image: "/assets/images/surgical.png",
    link: "/",
  },
];

export const workResult = [
  {
    title: "Name",
    time: "60-min whitening",
    type: "4+ Shade  Jump",
    beforeImg: "/assets/images/before-img.png",
    afterImg: "/assets/images/after-img.png",
  },
  {
    title: "Name",
    time: "60-min whitening",
    type: "4+ Shade  Jump",
    beforeImg: "/assets/images/before-img.png",
    afterImg: "/assets/images/after-img.png",
  },
  {
    title: "Name",
    time: "60-min whitening",
    type: "4+ Shade  Jump",
    beforeImg: "/assets/images/before-img.png",
    afterImg: "/assets/images/after-img.png",
  },
];

export const doctors = [
  {
    name: "Alice",
    surname: "Dr",
    title: "FOUNDER, CLINICAL CARE LEAD",
    servicesTime: "Treated 25,000+ smiles :)",
    quotes:
      "I want to alleviate oral pain, prevent tooth loss, and create cavity-free communities.",

    img: "/assets/images/doctor-img.png",
  },
];

export const reviews = [
  {
    name: "Tania",
    surname: "Rahman",
    serviceName: "Root Canal ",
    rating: "4.5",
    img: "/assets/images/profile/profile-1.png",
    date: "22/03/2025",

    review:
      "Best dental experience I’ve ever had. The clinic was spotless, and the doctor made sure I understood every step of the procedure. Painless and smooth.",
  },

  {
    name: "Mahmudul",
    surname: "Hasan",
    serviceName: "Dental Cleaning & Checkup ",
    rating: "5",
    img: "/assets/images/profile/profile-2.png",
    date: "10/02/2025",

    review:
      "Very professional and polite staff. Everything felt safe and hygienic. Dr. Alice was excellent and gentle during the process.",
  },
  {
    name: "Sarah",
    surname: "Ahmed",
    serviceName: "Tooth Filling ",
    rating: "5",
    img: "/assets/images/profile/profile-2.png",
    date: "17/01/2025",

    review:
      "I used to be scared of the dentist, but they really changed that for me. Everything was pain-free and well explained.",
  },
  {
    name: "Rafiul",
    surname: "Islam",
    serviceName: "Smile Makeover (Veneers)",
    rating: "4.5",
    img: "/assets/images/profile/profile-2.png",
    date: "05/03/2025",

    review:
      "I love my new smile! The results are so natural and clean. Really boosted my confidence.",
  },
  {
    name: "Jannatul",
    surname: "Ferdose",
    serviceName: "Wisdom Tooth Extraction",
    rating: "4",
    img: "/assets/images/profile/profile-2.png",
    date: "01/02/2025",

    review:
      "Quick and efficient. Slight discomfort after the extraction but the doctor followed up to check in.",
  },
  {
    name: "Asif",
    surname: "Reza",
    serviceName: "Pediatric Dental Checkup",
    rating: "5",
    img: "/assets/images/profile/profile-2.png",
    date: "26/03/2025",

    review:
      "My kids were actually excited to visit again! The dentist was patient, kind, and very reassuring.",
  },
];

export const navLinks = [
  {
    title: "Home",
    URL: "/",
  },
  {
    title: "Services",
    URL: "/services",
  },
  {
    title: "team",
    URL: "/team",
  },
  {
    title: "about",
    URL: "/about",
  },
  {
    title: "contact",
    URL: "/contact",
  },
];

export const footerLinks = [
  {
    title: "USEFUL_LINKS",
    links: [
      { label: "Home", forward: "/" },
      { label: "About", forward: "/about" },
    ],
  },
  {
    title: "HELPFUL_LINKS",
    links: [
      { label: "Clinics", forward: "/clinics" },
      { label: "Careers", forward: "/careers" },
    ],
  },
];

export const brandInfo = {
  NAME: "Alice Dental",
  SLOGAN: "Your smile, our passion.",

  email: {
    placeholder: "info@alicedental.com",
    link: "mailto:info@alicedental",
  },

  address: {
    link: "https://goo.gl/maps/xyz123",
    placeholder:
      "RAS Plaza (7th Floor), Ka-11/2, (Bashundhara R/A Road Beside Jamuna Future Park). Dhaka, Bangladesh",
  },

  phone: {
    number: "+88013107-89148",
    link: "tel:+88013107-89148",
  },

  SOCIAL_LINKS: [
    {
      icon: "/assets/icons/fb.svg",
      link: "https://facebook.com",
    },
    {
      icon: "/assets/icons/insta.svg",
      link: "https://instagram.com",
    },
    { icon: "/assets/icons/fb.svg", link: "https://twitter.com" },
    {
      icon: "/assets/icons/fb.svg",
      link: "https://linkedin.com",
    },
  ],
  LOGO: "assets/images/logos/verticalLogo.svg",
};

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Alice Oasis Dental",
  image: "https://aliceoasisdental.com/og-image.jpg",
  url: "https://aliceoasisdental.com",
  telephone: "+880-1XXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "RAS Plaza (7th Floor), Ka-11/2",
    addressLocality: "Dhaka",
    addressRegion: "Dhaka",
    postalCode: "1212",
    addressCountry: "BD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.7806",
    longitude: "90.4074",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/aliceoasisdental",
    "https://www.instagram.com/aliceoasisdental",
  ],
};