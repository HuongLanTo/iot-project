// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const Authorization = require("./authorization");
// const User = require("../../../models/mongo/user");
// const redis = require("redis");
// const { stringify } = require("flatted");
// const client = redis.createClient({
//   port: 6379,
//   host: '127.0.0.1',
//   password: "redis"
// })


// const login = async function (req, res) {
//   const body = req.body;

//   if (!body.username || !body.password) {
//     return res.status(200).send({
//       responseCode: 11,
//       responseMessage: "PARAM.INVALID",
//     });
//   }

//   let user = null;
//   await getUser(body.username).then(_user => {
//     user = _user
//     // console.log(user)
//   })

//   if (!user) {
//     return res.status(400).send({
//       responseCode: 0,
//       responseMessage: "Không tìm thấy user",
//     });
//   }
  
//   const is_valid = await bcrypt.compare(body.password, user.password);

//   if (!is_valid) {
//     return res.status(400).send({
//       responseCode: 0,
//       responseMessage: "Mật khẩu không chính xác",
//     });
//   }

//   client.select(2);
//   client.hmset("user_id_" + user.id, "name", user.name, "email", user.email,
//                 "phone", user.phone, "role", stringify(user.role), "status", 
//                 user.status, "approve", user.approve, "username", user.username )
//   client.expire("user_id_" + user.id, 72000)
//   const token = await Authorization.generateToken(user.id);

//   res.cookie("user_token", token.token, { maxAge: 20 * 60 * 60 * 1000 });
//   res.cookie("durations", token.durations, { maxAge: 20 * 60 * 60 * 1000 });

//   return res.status(200).send({
//     responseCode: 1,
//     responseMessage: { data: { cookies: token } },
//   });
// };

// function getUser(username) {
//   return new Promise((resolve) => {
//     User.findOne({ username: username })
//       // .select({ _id: 1, name: 1, email: 1, phone: 1, password: 1 })
//       .select({ _id: 1, name: 1, email: 1, phone: 1, role: 1, status: 1, approve: 1, username: 1, password: 1 })
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
// }

// module.exports = login;





const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Authorization = require("./authorization");
const User = require("../../../models/mongo/user");

const login = async function (req, res) {
  const body = req.body;

  if (!body.username || !body.password) {
    return res.status(200).send({
      responseCode: 11,
      responseMessage: "PARAM.INVALID",
    });
  }

  let user = null;
  await getUser(body.username).then(_user => user = _user)

  if (!user) {
    return res.status(400).send({
      responseCode: 0,
      responseMessage: "Không tìm thấy user",
    });
  }
  
  const is_valid = await bcrypt.compare(body.password, user.password);

  if (!is_valid) {
    return res.status(400).send({
      responseCode: 0,
      responseMessage: "Mật khẩu không chính xác",
    });
  }

  const token = await Authorization.generateToken(user.id);

  res.cookie("user_token", token.token, { maxAge: 20 * 60 * 60 * 1000 });
  res.cookie("durations", token.durations, { maxAge: 20 * 60 * 60 * 1000 });

  return res.status(200).send({
    responseCode: 1,
    responseMessage: { data: { cookies: token } },
  });
};

function getUser(username) {
  // await User.findOne({ username: username })
  //   .select({ _id: 1, name: 1, email: 1, phone:1 })
  //   .exec((err, data) => {
  //     if (err) {
  //       return res.status(500).send({
  //         responseCode: 0,
  //         responseMessage: "Lỗi trong quá trình kiểm tra user",
  //       });
  //     }
  //     console.log(data)
  //     return data;
  //   });
  //   console.log('abc')

  return new Promise((resolve) => {
    User.findOne({ username: username })
      .select({ _id: 1, name: 1, email: 1, phone: 1, password: 1 })
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
}

module.exports = login;
