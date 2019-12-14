export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  keywords: string[];
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * full url, no username
   */
  linkedin?: string;
  /**
   * full url, no username
   */
  github?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Kollan House',
  description: 'Operations, management, development. Reach out and we can do something amazing!',
  coverImage: 'img/blog-cover.jpg',
  keywords: ['personal blog, kollan house, kollan, kollan blog'],
  logo: '',
  lang: 'en',
  siteUrl: 'https://kollan.house',
  facebook: 'https://www.facebook.com/safsadkjxck',
  twitter: 'https://twitter.com/kollanhouse',
  github: 'https://github.com/R-K-H',
  linkedin: 'https://linkedin.com/in/kollan',
  showSubscribe: true,
  mailchimpAction: 'https://house.us4.list-manage.com/subscribe/post?u=68b29440fe8e9d7d7c3fed2d8&amp;id=1878f3bf5a',
  mailchimpName: 'b_68b29440fe8e9d7d7c3fed2d8_1878f3bf5a',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'is built on Gatsby Casper',
};

export default config;
