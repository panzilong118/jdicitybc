# jdicitybc

1 创建项目脚手架
1.1 优化开发编译速度
1）webpack打包之后的文件过大的解决方法 - https://juejin.im/post/5a9d17446fb9a028d374e733
     webpack devtool https://webpack.docschina.org/configuration/devtool/
2) webpack打包优化 - happy pack (todo)

1.2 引入eslint代码校验
1) 引入eslint文件夹 - src & components
2) 引入城市计算平台的校验规则
3) 校验规则在没有改动的时候报错
比如uc-fun的引入,原因是eslint库版本不一致问题，解决方案是使版本一致

1.3.babelrc配置antd组件库

2.项目文件组织结构（文件结构及要求如下，以一个简单的组件 - Cinput目录结构为例）
2.1 components - 所有组件对应的源代码均放在该文件夹下

2.2 components/index.js ： 所有组件出口文件
export { default as Cinput } from ‘./Cinput’;

2.3 components/组件文件夹：一个组件对应一个文件夹
要求：组件所有内容必须包含在该文件夹，不允许放在其他文件夹下。
公共主题theme和公共util除外(保持与平台项目同步)todo-主题可以类似antd覆盖，util需要记录后同步
例如：components/Cinput
要求：组件名称命名规范 文件夹或文件名称：大写，分割使用中划线“-”
Cinput/index.js ：必须有该文件，将最终完成或合成的组件导出。组件实现也可在该组件内。
export default Cinput;
Cinput/other.js  ： 尽量和 index.js 同级，除非需要其他资源文件支持才可创建新的文件夹
Cinput/style/index.less ：一般用于存放该组件的样式。
Cinput/style/other.less ：和 index.less同级的其他自定义样式。
注：1.若b.less引用了a.less定义的变量，需在b.less中引入a.less

2.4 lib - 编译后的文件目录

2.5 src/index.js - 做组件的开发和调试使用

3.创建组件
3.1 步骤
1）已有项目中沉淀的组件
2）由于组件共性，逐步沉淀到公共组件文件夹中：src/components/common
3）经历实际项目验证后，可以抽取到react公共组件库中
4）组件命名规则：大驼峰法

3.2 组件样板参考
1）简单组件 - Cinput
2）复杂组件 - Flow

3.3 复杂组件引入文件的组织结构 - 保持组件的独立性，逐步梳理出组件的公共依赖.
1)uc-fun的加入
2)公共库的提取

3.4 样式定义
1）样式不支持css module的写法
2）要求 class命名： 小写，以中划线“-”分割，class 以  jdic-** 开头
3）需要在组件文件*.js中单独引入样式 - import './style/index.less';
3）引入prefixCls

4.组件开发&项目自测
4.1 运行：npm run dev , 浏览器输入http://localhost:8080
4.2 编译 : npm run compile
4.3 项目自测， 编译后的目录：lib   -->替换 项目目录 / node_modules / jdicitybc / lib
4.4 todo: 配置npm link

5.创建测试项目(jest)，并通过Jest测试 (todo)
jest单元测试:分为两种，dom测试和断言测试
5.1dom测试
说明：会根据测试用例的场景，生成组件最终生成的真实dom结构。如果修改组件后，执行dom测试，会提示dom结构发生改变，方便我们校验。
使用：
在组件目录下，新建__test__文件夹，用于存放测试用例以及测试结果。
测试用例的文件要以XXX.test.js命名
dom测试的结果会在_snapshots_文件夹下生成
具体的jest的语法可以在网上搜索下相关资料，并参考ant的测试用例使用

5.2断言测试
说明：会根据自定义的断言进行测试，有任意一个断言失败则不通过，并在控制台提示错误
其他说明同上

5.3具体操作
控制台执行： npm test --rootDir /components/alert
其中/components/alert为需要执行测试组件的目录

6.撰写readme文档 (todo)
todo文档生成器

7.组件发布到npm官网或私服 -  http://cf-b2b.jdcloud.com/pages/viewpage.action?pageId=493254
7.1 todo： 创建npm账号
7.2 todo： 包取名 -  jdicitycc
7.3 在已有的版本上修改版本号
7.4 npm login 后输入username, password, email
7.5 npm publish

8.组件替换
import CInput from './cInput’; ->
import { Cinput } from 'panzilongtest';
