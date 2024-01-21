module.exports = {
  siteTitle: 'Pankaj Pawar | Software Developer | Freelancer',
  siteDescription:
    'Pankaj Pawar is a Software Developer at Engro Technologies, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Pankaj Pawar, Pankaj, Pawar, pankaj91as, software developer, software engineer, freelancer',
  siteUrl: 'https://pankaj91as.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Pankaj Pawar',
  location: 'Mumbai, India',
  email: 'pankaj91as@gmail.com',
  github: 'https://github.com/pankaj91as',
  twitterHandle: '@pankaj91as',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/pankaj91as',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/chandrika-deb/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/chandrikadeb7',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/chandrikadeb7',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/chandrikadeb7',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
