export const en = {
  lang: 'en-US',
  label: 'English',
  themeConfig: {
    darkModeSwitchLabel: 'Dark mode',
    nav: [
      { text: 'Documentation', link: '/get-started/overview' },
      { text: 'Open App', link: 'https://app.have-fund.com' },
    ],
    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'What the Fund Is', link: '/get-started/overview' },
          { text: 'Mission and Values', link: '/get-started/mission' },
          { text: 'Glossary', link: '/get-started/glossary' },
        ],
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Decentralized Networks', link: '/core-concepts/decentralized-networks' },
          { text: 'Smart Contracts', link: '/core-concepts/smart-contracts' },
          { text: 'Address Management', link: '/core-concepts/address-management' },
          { text: 'The Avalanche Network', link: '/core-concepts/avalanche' },
        ],
      },
      {
        text: 'Using Have Fund',
        items: [
          { text: 'Web Application', link: '/using/web-application' },
          { text: 'Secondary Market', link: '/using/secondary-market' },
          { text: 'CLI', link: '/using/cli' },
        ],
      },
      {
        text: 'Money management',
        items: [
          { text: 'Strategy', link: '/management/strategy' },
          { text: 'Reserve', link: '/management/reserve' },
          { text: 'History', link: '/management/history' },
        ],
      },
      {
        text: 'DeFi Integrations',
        items: [
          {
            text: 'Tokens',
            items: [
              { text: 'Stablecoins', link: '/defi/tokens/stablecoins' },
              { text: 'Bitcoin', link: '/defi/tokens/bitcoin' },
              { text: 'AVAX', link: '/defi/tokens/avax' },
              { text: 'LINK', link: '/defi/tokens/link' },
            ],
          },
          {
            text: 'Protocols',
            items: [
              { text: 'AAVE', link: '/defi/protocols/aave' },
              { text: 'Uniswap', link: '/defi/protocols/uniswap' },
              { text: 'LFJ', link: '/defi/protocols/lfj' },
            ],
          },
        ],
      },
      {
        text: 'Code Reference',
        items: [
          { text: 'HAVE Token Contract', link: '/code/have-token' },
          { text: 'Have Fund Contract', link: '/code/have-fund' },
        ],
      },
      {
        text: 'Community',
        items: [
          { text: 'Telegram', link: '/community/telegram' },
          { text: 'YouTube', link: '/community/youtube' },
          { text: 'DeBank', link: '/community/debank' },
          { text: 'VK', link: '/community/vk' },
        ],
      },
      {
        text: 'FAQ',
        link: '/faq',
      },
    ],
  },
}
