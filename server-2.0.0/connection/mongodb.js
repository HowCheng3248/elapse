const mongoose = require('mongoose');

module.exports = app => {
  const config = app.config.mongodb;

  const url = `mongodb://${config.user}:${config.pwd}@${config.host}:${config.port}/${config.name}`;
  const options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500
  };

  mongoose.connect(url, options);
  mongoose.Promise = global.Promise;

  const db = mongoose.connection;

  db.once('open', () => console.log('数据库连接成功'));
  db.on('error', () => {
    console.log('数据库连接错误：', err);
    mongoose.disconnect();
  });
  db.on('close', () => {
    console.log('数据库连接断开，重新连接...');
    mongoose.connect(url, options);
  });
}
