import {
  faHome,
  faCut,
  faClipboardList,
  faMapMarkedAlt,
  faPhone
} from '@fortawesome/pro-duotone-svg-icons'

export default {
  facebook: 'https://facebook.com/',
  instagram: 'https://instagram.com/',
  googleApiKey: 'AIzaSyC8qn_9ItJ58ogb80aTKFMHo9kX2e5Ysn4',
  dev: process.env.NODE_ENV === 'development',
  firebase: 'https://baard2019.firebaseapp.com',
  pages: {
    index: {
      path: '/',
      en: 'HOME',
      ja: 'ホーム',
      icon: faHome
    },
    salon: {
      path: '/salon',
      en: 'SALON',
      ja: 'サロン・スタッフ紹介',
      icon: faCut
    },
    service: {
      path: '/service',
      en: 'SERVICE',
      ja: 'メニュー案内',
      icon: faClipboardList
    },
    access: {
      path: '/access',
      en: 'ACCESS',
      ja: 'アクセス',
      icon: faMapMarkedAlt
    }
  },
  tel: {
    string: '03-6876-6647',
    number: '0368766647',
    icon: faPhone
  }
}
