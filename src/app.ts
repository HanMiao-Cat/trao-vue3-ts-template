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
  onShow() {
    console.log('onShow');
  },
});

const NutUiComponents = [
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
];

NutUiComponents.forEach(item => {
  App.use(item);
});

App.use(createPinia());

export default App;
