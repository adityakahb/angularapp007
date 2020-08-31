const {
  validationResult
} = require('express-validator');
const userdata = require('./../../static-data/manage-users.json');
const userSchema = require('../models/user-model');
const statusSchema = require('../models/status-model')
exports.getAllUsers = async (req, res) => {
  let {
    page = 1, limit = 10
  } = req.query;
  try {
    // execute query with page and limit values
    page = parseInt(page);
    limit = parseInt(limit);
    const users = await userSchema.aggregate([{
          $lookup: {
            from: 'status_master',
            localField: '__STATUSID',
            foreignField: "_id",
            as: "__STATUS"
          }
        },
        {
          $unwind: '$__STATUS'
        },
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
        }
      ])
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
    res.status(200).send(err);
  }
};

exports.getuser = async (req, res) => {
  try {
    const user = await userSchema.findById(req.params.id);
    if (user) {
      res.json({
        user
      });
    } else {
      res.send('not_found');
    }
  } catch (err) {
    res.status(200).send(err);
  }
};

exports.adduser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      let userdata = req.body;
      const checkuser = await userSchema.findOne({
        __PRIMARYEMAIL: userdata.__PRIMARYEMAIL
      }).lean();
      if ((checkuser || {})._id) {
        res.json({
          error: 'Email already in use.'
        });
      } else {
        const activestatus = await statusSchema.findOne({
          __TYPE: 'active'
        });
        // console.log('=========activestatus', activestatus);
        if (activestatus) {
          userdata.__JOINED = new Date();
          if ((userdata.__PUBLICNAME || '').length === 0) {
            let mname = (userdata.__MIDDLENAME || '').length > 0 ? ' ' + userdata.__MIDDLENAME.charAt(0) + '.' : '';
            userdata.__PUBLICNAME = `${userdata.__FIRSTNAME}${mname} ${userdata.__LASTNAME}`;
          }
          userdata.__STATUSID = activestatus._id;
          const userObj = new userSchema(userdata);
          const usercreated = await userObj.save();
          res.json({
            usercreated: usercreated
          });
        } else {
          res.json({
            activestatus: {}
          });
        }
      }

      // userSchema.create()
      // bcrypt.hash(req.body.__PASSWORD, 10).then((hash) => {
      //   const admin = new adminSchema({.li76iln   nx
      //     __FIRSTNAME: req.body.__FIRSTNAME,
      //     __MIDDLENAME: req.body.__MIDDLENAME,
      //     __LASTNAME: req.body.__LASTNAME,
      //     __EMAIL: req.body.__EMAIL
      //   });
      //   const auth = new authSchema({
      //     __EMAIL: req.body.__EMAIL,
      //     __PASSWORD: hash
      //   });
      //   admin.save().then((response) => {
      //     auth.save().then((a_response) => {
      //       // res.status(201).json({
      //       //   message: 'Auth for the user successfully created!',
      //       //   result: a_response
      //       // });
      //       res.status(201).json({
      //         message: 'Admin successfully created!',
      //         result: response
      //       });
      //     }).catch(a_error => {
      //       res.status(500).json({
      //         error: a_error
      //       });
      //     });
      //   }).catch(error => {
      //     res.status(500).json({
      //       error: error
      //     });
      //   });
      // });
    }
  } catch (err) {
    console.log('========err', err);
    res.status(200).send(err);
  }
};

exports.updateuser = async (req, res) => {
  res.json({

  });
};

exports.deleteuser = async (req, res) => {
  res.json({

  });
};

// exports.addbulkusers = (req, res) => {
//   userSchema.insertMany(userdata).then((response) => {
//     console.log('============User data pushed to DB');
//   });
//   res.status(201).json({
//     message: 'Sample 201',
//     result: res
//   });
// };