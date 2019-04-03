// import Radio from 'antd';

// export { default as Button } from "./button";
// export { default as Icon } from "./icon";
// export { default as Input } from "./input";
//
// export { default as Row } from "./row";
// export { default as Col } from "./col";
//命名规则
// function camelCase(name) {
//     return name.charAt(0).toUpperCase() +
//         name.slice(1).replace(/-(\w)/g, (m, n) => {
//             return n.toUpperCase();
//         });
// }
// // 增加批量导入功能，不需要单独增加出口
// const req = require.context('../components', true, /^\.\/[^_][\w-]+\/index\.js?$/);
// req.keys().forEach((mod) => {
//     let v = req(mod);
//     if (v && v.default) {
//         v = v.default;
//     }
//     const match = mod.match(/^\.\/([^_][\w-]+)\/index\.js?$/);
//     if (match && match[1]) {
//         exports[camelCase(match[1])] = v;
//     }
// });
// console.log('export',exports);


export { default as Col } from './col';

export { default as Icon } from './icon';

export { default as Input } from './input';

export { default as Dropdown } from './dropdown';

export { default as Form } from './form';

export { default as Layout } from './layout';

export { default as Breadcrumb } from './breadcrumb';

export { default as Button } from './button';

export { default as Menu } from './menu';

export { default as Row } from './row';

export { default as Tooltip } from './tooltip';

export { default as Badge } from './badge';

export { default as DatePicker } from './date-picker';

export { default as Checkbox } from './checkbox';

export { default as message } from './message';

export { default as Modal } from './modal';

export { default as Upload } from './upload';

export { default as Progress } from './progress';

export { default as Select } from './select';

export { default as Tabs } from './tabs';

export { default as Pagination } from './pagination';

export { default as TimePicker } from './time-picker';

export { default as Steps } from './steps';

export { default as Spin } from './spin';

export { default as InputNumber } from './input-number';

export { default as Radio } from './radio';

export { default as TreeSelect } from './tree-select';

export { default as Tree } from './tree';

export { default as Avatar } from './avatar';

export { default as Timeline } from './timeline';

export { default as Transfer } from './transfer';

export { default as Table } from './table';

export { default as Rate } from './rate';

export { default as Alert } from './alert';

export { default as List } from './list';

export { default as Switch } from './switch';

export { default as Notification } from './notification';

export { default as Popconfirm } from './popconfirm';

export { default as AutoComplete } from './auto-complete';

export { default as Slider } from './slider';

export { default as Calendar } from './calendar';

export { default as Collapse } from './collapse';

export { default as Cascader } from './cascader/';

export { default as Affix } from './affix';

export { default as Carousel } from './carousel';

export { default as Card } from './card';

export { default as Anchor } from './anchor';

export { default as Popover } from './popover';

export { default as BackTop } from './back-top';

export { default as version } from './version';

export { default as LocaleProvider } from './locale-provider';

export { default as Mention } from './mention';

export { default as Tag } from './tag';

export { default as Divider } from './divider';

export { default as CInput } from './cinput';
