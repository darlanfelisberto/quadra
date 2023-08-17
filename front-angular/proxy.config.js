const proxy = [
  {
    context: '/quadra',
    target: 'http://localhost:8081',
    pathRewrite: {'^/quadra' : ''}
  }
];
module.exports = proxy;
