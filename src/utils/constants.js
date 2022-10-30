import { enumVisibilityComment, enumVisibilityFeed } from './app-config'

export const APP_ROUTER = {
  INDEX: '/',
  MY_NETWORK: '/my-network',
  DISCOVER_HUB: 'my-network/discover-hub/',
  EVENTS: '/my-network/network-manager/events/',
  JOBS: '/jobs',
  MESSAGING: '/messaging',
  NOTIFICATION: '/notifications',
  PREMIUM: '/premium',
  PROFILE: '/profile',
  MY_ITEMS: '/my-items',
  GROUPS: '/groups',
  FOLLOWED_HASHTAGS: '/following',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
}
export const menuItems = [
  {
    title: 'Home',
    icon: 'entypo:home',
    activeIcon: 'fa:home',
    url: APP_ROUTER.INDEX,
    key: '/',
  },
  {
    title: 'My Network',
    icon: 'eva:people-fill',
    activeIcon: 'bi:people-fill',
    url: APP_ROUTER.MY_NETWORK,
    key: '/my-network',
  },
  {
    title: 'Jobs',
    icon: 'uil:bag',
    activeIcon: 'uis:bag',
    url: APP_ROUTER.JOBS,
    key: '/jobs',
  },
  {
    title: 'Messaging',
    icon: 'eva:message-square-fill',
    activeIcon: 'jam:messages-f',
    url: APP_ROUTER.MESSAGING,
    key: '/messaging',
  },
  {
    title: 'Notifications',
    icon: 'dashicons:bell',
    activeIcon: 'entypo:bell',
    url: APP_ROUTER.NOTIFICATION,
    key: '/notifications',
  },
]

export const optionsForVisibility = {
  feed: {
    rubric: 'Who can see your post?',
    sub_rubric:
      'Your post will be visible on feed, on your profile and in search results',
    alternatives: [
      {
        id: 1,
        value: enumVisibilityFeed.all,
        label: 'Anyone',
        title: 'Anyone',
        subTitle: 'Anyone on or off LinkedIn',
        icon: 'bx:world',
      },
      {
        id: 2,
        value: enumVisibilityFeed.connections,
        label: 'Connections',
        title: 'Connections only',
        subTitle: 'Connections on LinkedIn',
        icon: 'eva:people-fill',
      },
      {
        id: 3,
        value: enumVisibilityFeed.onlyMe,
        label: 'Only me',
        title: 'Only me',
        subTitle: 'Nobody can see this post, only you',
        icon: 'ri:git-repository-private-fill',
      },
    ],
  },

  comment: {
    rubric: 'Who can comment on your post?',
    sub_rubric: '',
    alternatives: [
      {
        id: 1,
        value: enumVisibilityComment.connections,
        label: 'Connections',
        title: 'Connections only',
        subTitle: 'Connections who can view can also comment',
        icon: 'eva:people-fill',
      },
      {
        id: 2,
        value: enumVisibilityComment.none,
        label: 'No one',
        title: 'No one',
        subTitle: 'Nobody can comment on this post',
        icon: 'uil:comment-slash',
      },
    ],
  },
}
