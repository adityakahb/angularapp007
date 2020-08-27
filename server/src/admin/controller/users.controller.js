const userdata = require('./../../static-data/manage-users.json');
const userSchema = require('../models/user-model');
exports.getAllUsers = async (req, res) => {
  let {
    page = 1, limit = 10
  } = req.query;
  try {
    // execute query with page and limit values
    page = parseInt(page);
    limit = parseInt(limit);
    const users = await userSchema.aggregate([
      {
        $lookup: {
          from: 'status_master',
          localField: '__STATUSID',
          foreignField: "_id",
          as: "__STATUS"
        }
      },
      {$unwind:'$__STATUS'},
      {
        $project: {
          _id: true,
          __FIRSTNAME: true,
          __MIDDLENAME: true,
          __LASTNAME: true,
          __EMAIL: true,
          __PROFILEPIC: true,
          __JOINED: true,
          __STATUS: '$__STATUS.__NAME',
          __STATUSID: '$__STATUS._id',
        }
      }])
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    // get total documents in the Posts collection 
    const count = await userSchema.countDocuments();

    // return response with posts, total pages, and current page
    res.json({
      users,
      totalpages: Math.ceil(count / limit),
      currentpage: page
    });
  } catch (err) {
    console.error(err.message);
  }
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