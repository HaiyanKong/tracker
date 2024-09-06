interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running',
  siteUrl: '/',
  logo: '',
  description: 'My running record',
  navLinks: [
    {
      name: 'Website',
      url: 'https://haiyankong.github.io/',
    },
    {
      name: 'Build Your Running',
      url: 'https://github.com/yihong0618/running_page',
    },
  ],
};

export default data;
