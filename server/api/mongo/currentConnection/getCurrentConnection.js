const log4js = require("log4js");
const path = require("path");
const { stringify } = require("flatted");
const redis = require("redis");
const { promisify } = require("util");
const client = redis.createClient({
  port: 6379,
  host: "127.0.0.1",
  password: "redis",
});

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

let smembersAsync = promisify(client.smembers).bind(client);
let hgetallAsync = promisify(client.hgetall).bind(client);

const getActionLogs = async function getActionLogs(req, res) {
  let listInfoClient = [];
  let response;
  let listIp = [];

  client.select(1);

  smembersAsync("list_connect_socket").then(async function (result) {
    listIp = result;

    for (var index = 0; index < listIp.length; index++) {
      ip = listIp[index];
      await hgetallAsync("device_" + ip).then(function (info) {
        if (info) {
          listInfoClient.push({
            ip: ip,
            last_time_recieve: info.last_time_recieve,
            last_data_recieve: info.data,
          });
        }
      });
    }
    response = {
      responseCode: 1,
      responseMessage: "Get current connection success",
      responseData: { data: listInfoClient, total: listIp.length },
    };
    logger.info("response: " + stringify(response));
    return res.status(200).send(response);
  });

  //   await listIp.map(async (ip) => {
  //     client.hgetall("device_" + ip, (err, info) => {
  //       if (info) {
  //         console.log(info);
  //         listInfoClient.push({
  //           ip: ip,
  //           last_time_recieve: info.last_time_recieve,
  //           last_data_recieve: info.data,
  //         });
  //       }
  //     });
  //   });

  console.log(99999);
  //   await listIp.map(async (ip) => {
  //   for (var index = 0; index < listIp.length; index++) {
  //     console.log(index);
  //     ip = listIp[index];
  //     console.log(ip);
  //     console.log(listIp[index]);
  //     hgetallAsync("device_" + ip).then(function (info) {
  //       console.log("aaaaaaaaaa");
  //       if (info) {
  //         console.log(info);
  //         listInfoClient.push({
  //           ip: ip,
  //           last_time_recieve: info.last_time_recieve,
  //           last_data_recieve: info.data,
  //         });
  //       }
  //     });
  //   }

  //   response = {
  //     responseCode: 1,
  //     responseMessage: "Get current connection success",
  //     responseData: { data: listInfoClient, total: listIp.length },
  //   };
  //   console.log("response: " + stringify(response));
  //   logger.info("response: " + stringify(response));
  //   return res.status(200).send(response);
};

module.exports = getActionLogs;
