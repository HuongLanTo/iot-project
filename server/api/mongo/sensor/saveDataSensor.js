const fs = require("fs");
const Sensor = require("../../../models/mongo/sensor");
const Node = require("../../../models/mongo/node");
const path = require('path');
const log4js = require("log4js");
const { slugify } = require("../../../utils/common");
const { stringify } = require("flatted");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger(path.basename(__filename));

const saveDataSensor = async function saveDataSensor(data, ip) {
logger.info("listen data from ip: " + ip + " : " + stringify(data));
  var _value = {};

  if(!ip) {
      return;
  }

  // if(data.temperature) {
  //   _value.temperature = data.temperature;
  // }
  // if(data.humidity) {
  //   _value.humidity = data.humidity;
  // }
  // if(data.pm25) {
  //   _value.pm25 = data.pm25;
  // }
  // if(data.co) {
  //   _value.co = data.co;
  // }
  // if(data.pressure) {
  //   _value.pressure = data.pressure;
  // }
  // if(data.nh3) {
  //   _value.nh3 = data.nh3;
  // }
  // if(data.co2) {
  //   _value.co2 = data.co2;
  // }
  // if(data.smoke) {
  //   _value.smoke = data.smoke;
  // }

//   await Node.findOne(ip)
//   .exec((err, node) => {
//     if (err) {
//         logger.error("Lỗi trong quá trình xác định Node\n" + err.message)
//         return;
//     }
//     if (!node || !node._id) {
//         logger.info("Không tin thấy Node có IP: " + data.ip + " trong cơ sở dữ liệu")
//         return;
//     }
//     _value.node_id = node._id;
//     _value.ip = ip;
//     _value.sentByPiAt = data.sentByPiAt;
//   });

//   var value = new Sensor(_value);

//   try {
//     await value.save();
//     logger.info("Save data is sent from node ip: " + ip);
//     return;
//   } catch (err) {
//     logger.error("Lỗi trong quá trình lưu dữ liệu từ node ip: " + pi + "\n" + err.message);
//     return;
//   }
Node.findOne({ip: ip})
  .then(node => {
    if (!node || !node._id) {
        logger.info("cannot identify node with ip: " + ip)
        return;
    }

    if(node.approve == 0 || node.approve == -1) {
      logger.info("Cannot save data from node with ip: " + ip + ", reason: approve=" + node.approve);
      return;
    }

    if(node.status == 0 || node.status == -1) {
      logger.info("Cannot save data from node with ip: " + ip + ", reason: status=" + node.status);
      return;
    }

    if(data.temperature && node.temperature_status == 1) {
      _value.temperature = data.temperature;
    }
    if(data.humidity  && node.humidity_status == 1) {
      _value.humidity = data.humidity;
    }
    if(data.pm25  && node.dust_status == 1) {
      _value.pm25 = data.pm25;
    }
    if(data.co  && node.co_status == 1) {
      _value.co = data.co;
    }
    if(data.pressure  && node.pressure_status == 1) {
      _value.pressure = data.pressure;
    }
    if(data.nh3  && node.nh3_status == 1) {
      _value.nh3 = data.nh3;
    }
    if(data.co2  & node.co2_status == 1) {
      _value.co2 = data.co2;
    }
    if(data.smoke  && node.smoke_status == 1) {
      _value.smoke = data.smoke;
    }

    _value.node_id = node._id;
    _value.ip = ip;
    _value.sentByPiAt = data.sentByPiAt;
    var value = new Sensor(_value);
    value.save();
    // logger.info("Success save data from node with ip: : " + ip);
    return;
  })
  .catch(err => {
    logger.error("Error save data from node with ip: " + ip + "\n" + stringify(err));
    return;
  })
};

module.exports = saveDataSensor;
