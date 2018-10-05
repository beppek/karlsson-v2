module.exports = {
  siteTitle: 'Max Beppe Karlsson, Web Developer, Personal Blog', // Site title.
  siteTitleShort: 'MB Karlsson', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Technology, futurism, development', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://karlsson.com.au', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'A personal technology blog about programming and the future of the internet.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '2154615688119941', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-24085450-8', // GA tracking ID.
  // disqusShortname: "https-karlsson-com-au", // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Max Karlsson', // Username to display in the author segment.
  userTwitter: 'beppekarlsson', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Melbourne, Australia', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    'I dream about the future, and sometimes I like to talk about it. The rest of the time I work with code, and sometimes I like to talk about that too.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/beppek',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/beppekarlsson',
      iconClassName: 'fa fa-twitter'
    },
    {
      label: 'Email',
      url: 'mailto:max@karlsson.com.au',
      iconClassName: 'fa fa-envelope'
    }
  ],
  copyright: 'Copyright © 2018. Max Karlsson', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0' // Used for setting manifest background color.
};
