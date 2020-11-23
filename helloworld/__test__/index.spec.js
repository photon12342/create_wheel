// 测试helloworld => 是个标题
test('测试helloworld', () => {
  const ret = require('../index');
  // 断言
  // 如果ret为Hello World，则通过测试，否则不通过
  // jest helloworld --watch  实时监视测试结果
  expect(ret)
    .toBe('Hello World')
})
