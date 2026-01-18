export const ru = {
  lang: 'ru-RU',
  label: 'Русский',
  themeConfig: {
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
    outlineTitle: 'На этой странице',
    darkModeSwitchLabel: 'Тёмная тема',
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },
    nav: [
      { text: 'Документация', link: '/ru/get-started/overview' },
      { text: 'Приложение', link: 'https://app.have-fund.com' },
    ],
    sidebar: [
      {
        text: 'Введение',
        items: [
          { text: 'Что такое Фонд', link: '/ru/get-started/overview' },
          { text: 'Миссия и ценности', link: '/ru/get-started/mission' },
          { text: 'Глоссарий', link: '/ru/get-started/glossary' },
        ],
      },
      {
        text: 'Базовые концепции',
        items: [
          { text: 'Децентрализованные сети', link: '/ru/core-concepts/decentralized-networks' },
          { text: 'Смарт-контракты', link: '/ru/core-concepts/smart-contracts' },
          { text: 'Управление адресами', link: '/ru/core-concepts/address-management' },
          { text: 'Сеть Avalanche', link: '/ru/core-concepts/avalanche' },
        ],
      },
      {
        text: 'Пользуемся Фондом',
        items: [
          { text: 'Веб-приложение', link: '/ru/using/web-application' },
          { text: 'Вторичный рынок', link: '/ru/using/secondary-market' },
          { text: 'Командная строка', link: '/ru/using/cli' },
        ],
      },
      {
        text: 'Управление капиталом',
        items: [
          { text: 'Стратегия', link: '/ru/management/strategy' },
          { text: 'Резерв', link: '/ru/management/reserve' },
          { text: 'История', link: '/ru/management/history' },
        ],
      },
      {
        text: 'Финансовые инструменты',
        items: [
          {
            text: 'Токены',
            items: [
              { text: 'Стейблкоины', link: '/ru/defi/tokens/stablecoins' },
              { text: 'Биткоин', link: '/ru/defi/tokens/bitcoin' },
              { text: 'Эфир', link: '/ru/defi/tokens/eth' },
              { text: 'AVAX', link: '/ru/defi/tokens/avax' },
              { text: 'BNB', link: '/ru/defi/tokens/bnb' },
              { text: 'Bera', link: '/ru/defi/tokens/bera' },
              { text: 'ARB', link: '/ru/defi/tokens/arb' },
              { text: 'LINK', link: '/ru/defi/tokens/link' },
              { text: 'XAUt', link: '/ru/defi/tokens/xaut' },
            ],
          },
          {
            text: 'Протоколы',
            items: [
              { text: 'AAVE', link: '/ru/defi/protocols/aave' },
              { text: 'Uniswap', link: '/ru/defi/protocols/uniswap' },
              { text: 'GMX', link: '/ru/defi/protocols/gmx' },
              { text: 'LFJ', link: '/ru/defi/protocols/lfj' },
            ],
          },
        ],
      },
      {
        text: 'Обзор кода',
        items: [
          { text: 'Контракт токена HAVE', link: '/ru/code/have-token' },
          { text: 'Контракт Фонда', link: '/ru/code/have-fund' },
        ],
      },
      {
        text: 'Сообщество',
        items: [
          { text: 'Telegram', link: '/ru/community/telegram' },
          { text: 'YouTube', link: '/ru/community/youtube' },
          { text: 'DeBank', link: '/ru/community/debank' },
          { text: 'VK', link: '/ru/community/vk' },
        ],
      },
      {
        text: 'Часто задаваемые вопросы',
        link: '/ru/faq',
      },
    ],
  },
}
