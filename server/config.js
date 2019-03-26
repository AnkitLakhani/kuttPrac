module.exports = {
  PORT: 3055,

  /* The domain that this website is on */
  DEFAULT_DOMAIN: 'https://44e050d7.ngrok.io',

  /* Neo4j database credential details */
  DB_URI: 'https://hobby-hljjgcdlapbogbkekgjfppcl.dbs.graphenedb.com:24780/db/data/',
  DB_USERNAME: 'ankitlakhani',
  DB_PASSWORD: 'b.6OXWz3vP4drO.FhYvVF7uhjsTPkNI',

  /* Redis host and port */
  REDIS_HOST: '127.0.0.1',
  REDIS_PORT: 6379,
  REDIS_PASSWORD: '',

  /* The daily limit for each user */
  USER_LIMIT_PER_DAY: 50,

  /* A passphrase to encrypt JWT. Use a long and secure key. */
  JWT_SECRET: 'ankit',

  /*
    Admin emails so they can access admin actions on settings page
    Array of strings
  */
  ADMIN_EMAILS: [`ankitlakhani52@gmail.com`],
  /*
    Invisible reCaptcha secret key
    Create one in https://www.google.com/recaptcha/intro/
  */
  RECAPTCHA_SECRET_KEY: '',

  /* 
    Google Cloud API to prevent from users from submitting malware URLs.
    Get it from https://developers.google.com/safe-browsing/v4/get-started
  */
  GOOGLE_SAFE_BROWSING_KEY: '',

  /* 
    Google Analytics tracking ID for universal analytics.
    Example: UA-XXXX-XX
  */
  GOOGLE_ANALYTICS: 'UA-136764701-1',

  /*
    Your email host details to use to send verification emails.
    More info on http://nodemailer.com/
  */
  MAIL_HOST: '',
  MAIL_PORT: 587,
  MAIL_SECURE: false,
  MAIL_USER: '',
  MAIL_FROM: 'ankitlakhani305@gmail.com', // Example: "Kutt <support@kutt.it>". Leave empty to use MAIL_USER
  MAIL_PASSWORD: '',

  /*
    The email address that will receive submitted reports.
  */
  REPORT_MAIL: 'ankitlakhani52@gmail.com',
};
