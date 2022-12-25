import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {
  Button,
  Toast,
  InputNumber,
  Icon,
  Cell,
  CellGroup,
  Collapse,
  CollapseItem,
  Switch,
  CountDown,
  Dialog,
  Popup,
  OverLay,
  Empty,
} from '@nutui/nutui-taro';
import './app.scss';

const App = createApp({
  onShow() {},
});

App.use(createPinia())
  .use(Button)
  .use(Toast)
  .use(InputNumber)
  .use(Icon)
  .use(Cell)
  .use(CellGroup)
  .use(Collapse)
  .use(CollapseItem)
  .use(Switch)
  .use(CountDown)
  .use(Dialog)
  .use(Popup)
  .use(OverLay)
  .use(Empty);

export default App;
