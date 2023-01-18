export default defineAppConfig({
  pages: ['pages/video/video', 'pages/home/home', 'pages/login/login'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'musice',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页',
        iconPath: 'image/tabbar/music_normal.png',
        selectedIconPath: 'image/tabbar/music_active.png',
      },
      {
        pagePath: 'pages/video/video',
        text: '视频',
        iconPath: 'image/tabbar/video_normal.png',
        selectedIconPath: 'image/tabbar/video_active.png',
      },
    ],
  },
});
