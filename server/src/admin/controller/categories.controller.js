const categorydata = require('./../../static-data/manage-categories.json');
const categorySchema = require('../models/category-model');
exports.getallcategories = async (req, res) => {
  let {
    page = 1, limit = 10
  } = req.query;
  try {
    // execute query with page and limit values
    page = parseInt(page);
    limit = parseInt(limit);
    const categories = await categorySchema.aggregate([
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
          __L: true,
          __C: true,
          __STATUS: '$__STATUS.__NAME',
          __STATUSID: '$__STATUS._id',
        }
      }])
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    // get total documents in the Posts collection 
    const count = await categorySchema.countDocuments();

    // return response with posts, total pages, and current page
    res.json({
      categories,
      totalpages: Math.ceil(count / limit),
      currentpage: page
    });
  } catch (err) {
    console.error(err.message);
  }
};

exports.addbulkcategories = (req, res) => {
  categorySchema.insertMany(categorydata).then((response) => {
    console.log('============Category data pushed to DB');
  });
  res.status(201).json({
    message: 'Sample 201',
    result: res
  });
};