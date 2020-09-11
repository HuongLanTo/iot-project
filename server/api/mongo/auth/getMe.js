// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const cookie = require("cookie");
// const log4js = require("log4js");
// const {parse, stringify} = require('flatted');

// const Authorization = require("./authorization");
// log4js.configure("./config/log4js.json");
// const logger = log4js.getLogger("getMe");
// const redis = require("redis");
// const { promisify } = require("util");
// const client = redis.createClient({
//   port: 6379,
//   host: "127.0.0.1",
//   password: "redis",
// });
// let hgetallAsync = promisify(client.hgetall).bind(client);
// let data =  null;

// const getMe = async function getMe(req, res) {
//   // const token = req.cookies ? req.cookies.user_token : null;
//   // const token = req.headers.cookie ? cookie.parse(req.headers.cookie).user_token : null;
//   var token;
//   if(req.headers.cookie) {
//     token = req.headers.cookie ? cookie.parse(req.headers.cookie).user_token : null;
//     // logger.info("request.headers.cookie: " + stringify(req.headers.cookie));
//   }else if(req.headers.cookies) {
//     token = req.headers.cookies ? cookie.parse(req.headers.cookies).user_token : null;
//     // logger.info("request.headers.cookies: " + stringify(req.headers.cookies));
//   }

//   // logger.info("request.headers: " + stringify(req.headers));
//   // logger.info("request.headers.cookie: " + stringify(req.headers.cookie));

//   // const token = req.headers.cookies ? req.headers.cookies.user_token : null;

//   const user = await Authorization.verifyToken(token);

//   if (!user) {
//     res.clearCookie("user_token");
//     res.clearCookie("durations");  

//     return res.status(400).send({
//       responseCode: 0,
//       responseMessage: "User không tồn tại",
//     });
//   }

//   await getUser(user.id);

//   if (!data) {
//     res.clearCookie("user_token");
//     res.clearCookie("durations");

//     return res.status(400).send({
//       responseCode: 0,
//       responseMessage: "User không tồn tạiiiiiiiiiiiiiii",
//     });
//   }

//   return res.status(200).send({
//     responseCode: 0,
//     responseMessage: "Thành công",
//     data: data,
//   });
// };

// async function getUser(userId) {
//   // await client.select(2);
//   // await hgetallAsync("user_id_" + userId)
//   // .then(info => {
//   //   if (info) {
//   //     data = {
//   //       approve: info.approve,
//   //       email: info.email,
//   //       name: info.name,
//   //       username: info.username,
//   //       phone: info.phone,
//   //       status: info.status,
//   //       role: JSON.parse(info.role),
//   //     }
//   //     return info;
//   //   }
//   // })
//   // .catch(err => {
//   //   return res.status(500).send({
//   //     responseCode: 0,
//   //     responseMessage: "Lỗi trong quá trình kiểm tra user\n" + stringify(err),
//   //   });


//   return new Promise((resolve) => {
//     User.findById(userId)
//       .select({ _id: 1, name: 1, email: 1, phone: 1, role: 1, status: 1, approve: 1, username: 1 })
//       .populate({
//         path : 'role',
//         populate : {
//           path : 'area_permission action_permission'
//         }
//       })
//       .exec((err, data) => {
//         if (err) {
//           return res.status(500).send({
//             responseCode: 0,
//             responseMessage: "Lỗi trong quá trình kiểm tra user",
//           });
//         }
//         resolve(data)
//       });

//   });


// };

// module.exports = getMe;






const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookie = require("cookie");
const log4js = require("log4js");
const {parse, stringify} = require('flatted');

const Authorization = require("./authorization");
const User = require("../../../models/mongo/user");

log4js.configure("./config/log4js.json");
const logger = log4js.getLogger("getMe");

const getMe = async function getMe(req, res) {
  // const token = req.cookies ? req.cookies.user_token : null;
  // const token = req.headers.cookie ? cookie.parse(req.headers.cookie).user_token : null;
  var token;
  if(req.headers.cookie) {
    token = req.headers.cookie ? cookie.parse(req.headers.cookie).user_token : null;
    // logger.info("request.headers: " + stringify(req.headers));
    // logger.info("request.headers.cookie: " + stringify(req.headers.cookie));
  }else if(req.headers.cookies) {
    token = req.headers.cookies ? cookie.parse(req.headers.cookies).user_token : null;
    // logger.info("request.headers: " + stringify(req.headers));
    // logger.info("request.headers.cookies: " + stringify(req.headers.cookies));
  }

  // logger.info("request.headers: " + stringify(req.headers));
  // logger.info("request.headers.cookie: " + stringify(req.headers.cookie));

  // const token = req.headers.cookies ? req.headers.cookies.user_token : null;

  const user = await Authorization.verifyToken(token);

  if (!user) {
    res.clearCookie("user_token");
    res.clearCookie("durations");  

    return res.status(400).send({
      responseCode: 0,
      responseMessage: "User không tồn tại",
    });
  }

  let  data = null;
  await getUser(user.id).then(_user => data = _user);

  if (!data) {
    res.clearCookie("user_token");
    res.clearCookie("durations");

    return res.status(400).send({
      responseCode: 0,
      responseMessage: "User không tồn tạiiiiiiiiiiiiiii",
    });
  }

  return res.status(200).send({
    responseCode: 0,
    responseMessage: "Thành công",
    data: data,
  });
};

async function getUser(userId) {
  // await User.findById(userId)
  //   .select({ _id, name, email, phone })
  //   .exec((err, data) => {
  //     if (err) {
  //       return res.status(500).send({
  //         responseCode: 0,
  //         responseMessage: "Lỗi trong quá trình kiểm tra user",
  //       });
  //     }
  //     return data;
  //   });

  return new Promise((resolve) => {
    User.findById(userId)
      // .select({ _id: 1, name: 1, email: 1, phone: 1 })
      .select({ _id: 1, name: 1, email: 1, phone: 1, role: 1, status: 1, approve: 1, username: 1 })
      .populate({
        path : 'role',
        populate : {
          path : 'area_permission action_permission'
        }
      })
      .exec((err, data) => {
        if (err) {
          return res.status(500).send({
            responseCode: 0,
            responseMessage: "Lỗi trong quá trình kiểm tra user",
          });
        }
        resolve(data)
      });
  });
};

module.exports = getMe;