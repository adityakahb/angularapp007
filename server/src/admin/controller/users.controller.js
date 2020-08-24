const userdata = require('./../../static-data/manage-users.json');
const userSchema = require('../models/user-model');
exports.getAllUsers = async (req, res) => {
  const {
    page = 1, limit = 10
  } = req.query;
  try {
    // execute query with page and limit values
    const users = await userSchema.aggregate([
      {
        $lookup: {
          from: 'status_master',
          localField: '__STATUSID',
          foreignField: "_id",
          as: "__STATUS"
        }
      }])
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // get total documents in the Posts collection 
    const count = await userSchema.countDocuments();

    // return response with posts, total pages, and current page
    res.json({
      users,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err.message);
  }
  // userSchema
  //   .find(null, {__FIRSTNAME: true, __MIDDLENAME: true, __LASTNAME: true})
  //   .limit(limit)
  //   .skip((page - 1) * limit)
  // .then((data) => {
  //   console.log('============data', data.length);
  // });
};
exports.addbulkusers = (req, res) => {
  userSchema.insertMany(userdata).then((response) => {
    console.log('============User data pushed to DB');
  });
  res.status(201).json({
    message: 'Sample 201',
    result: res
  });
};