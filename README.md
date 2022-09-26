#### session-store-unit
- 该工具用途 通过 sid(session id) 操作 session-store 中的session数据

- 引用方式, 可选
    - 使用 npm install session-store-unit --save
    - 使用 package.json 写入 "session-store-unit": "github:upyun-dev/session-store-unit#v1.0.1",

- 示例

```js
// 创建的 sessionUnit 其内包含 2 个函数
const sessionStore = require('session-store-unit');

// 函数一 通过 ssessionId 获取指定的 session 数据
const sessionInfo = await sessionUnit.getSessionData(req.sessionStore, sid);

// 函数二 通过 ssessionId 和 pamars 对象 修改指定的 session 数据
/**
 * parmas: {
 *  key: value
 * }
 * 多层嵌套对象 可直接使用 'key1.key2.key3': value 修改
 */
await sessionUnit.setSessionData(req.sessionStore, sid, parmas);
```
