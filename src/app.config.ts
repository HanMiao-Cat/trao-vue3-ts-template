export default defineAppConfig({
  pages: [
    'pages/home/home',
    'pages/video/video'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'musice',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页',
        iconPath: 'image/tabbar/profile_normal.png',
        selectedIconPath: 'image/tabbar/profile_active.png'
      },
      {
        pagePath: 'pages/video/video',
        text: '视频',
        iconPath: 'image/tabbar/music_normal.png',
        selectedIconPath: 'image/tabbar/music_active.png'
      }
    ]
  }
})
