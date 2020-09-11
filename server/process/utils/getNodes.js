const moment = require("moment");
const Node = require("../../models/mongo/node");

async function getNodes(type = '') {
  return await Node.find({ status: 1 })
    .select({ _id: 1, name: 1, location: 1 })
    .populate({
      path: "location",
      populate: { path: "district province", select: "_id name" },
      select: "detail_location latitude longitude province district",
    })
    .then((data) => {
      let datetime = moment()
        .subtract(1, "hour")
        .set({ minute: 0, second: 0 })
        .toDate();

      if (['day', 'date'].includes(type)) {
        datetime = moment()
        .subtract(1, "day")
        .set({ minute: 23, second: 0 })
        .toDate();
      }

      return data.map((v) => {
        const location =
          v.location.detail_location +
          ", " +
          v.location.district.name +
          ", " +
          v.location.province.name;

        return {
          node_id: String(v._id),
          area_id: String(v.location.district._id),
          name: v.name,
          tem: 0,
          hum: 0,
          pm_25: 0,
          no: 0,
          co: 0,
          co2: 0,
          aqi: 0,
          datetime: datetime,
          area: v.location.district.name,
          location: location,
          lat: v.location.latitude,
          long: v.location.longitude,
        };
      });
    });
}

module.exports = getNodes;
