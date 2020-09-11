const fs = require('fs');
const XLSX = require('xlsx');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({attrkey: 'sms'});

const totalProductsLength = 128;
const totalUsersLength = 64;
const totalSellersLength = 64;
const totalReviewsLength = 960;

const mainStr =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
  'Maecenas quam nunc, egestas ac porta ac, posuere eu metus. ' +
  'Etiam sollicitudin augue eget mauris vehicula, et congue purus pulvinar. ' +
  'Nullam vulputate metus sit amet odio mattis ultricies non sit amet nulla. ' +
  'Nulla facilisi. Nullam facilisis congue sollicitudin. ' +
  'In pharetra vehicula venenatis. Morbi eget tempor nisl, ut facilisis erat. ' +
  'Vivamus scelerisque, velit in faucibus maximus, turpis ipsum pulvinar ex, ac ultrices nunc quam commodo lacus. ' +
  'Vestibulum sed lacus volutpat, molestie erat nec, finibus massa. ' +
  'Phasellus laoreet malesuada tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ' +
  'Vivamus at luctus turpis, id fermentum ex. Proin at felis sit amet risus sodales porttitor et ut elit. ' +
  'In elementum arcu ut turpis gravida, finibus pulvinar urna lobortis. ' +
  'Praesent congue, felis ut fringilla aliquam, ex risus consectetur sem, vitae ornare lorem nunc a nulla. ' +
  'Curabitur aliquam neque purus, eget malesuada tortor ultricies id. ' +
  'Phasellus pellentesque tempus nibh vel vestibulum. ' +
  'Suspendisse consectetur maximus mattis. In eget nibh neque. ';

const domainList = ['com', 'net', 'co.in', 'co.uk', 'com.au', 'co', 'org', 'edu', 'io'];

const palette = require('./palette.json');
const firstnames = require('./firstnames.json');
const middlenames = require('./middlennames.json');
const lastnames = require('./lastnames.json');

// const _productids = require('./../projects/admin/src/app/data/_productsids.json');
// const _sellerids = require('./../projects/admin/src/app/data/_sellersids.json');
// const _userids = require('./../projects/admin/src/app/data/_usersids.json');

const _generatedSellers = require('./../src/exported-data/seller_master.json');
const _generatedCategories = require('./../src/exported-data/category_master.json');
const _generatedProducts = require('./../src/static-data/manage-products.json');
const _generatedStatuses = require('./../src/exported-data/status_master.json');
const _generatedCountries = require('./../src/exported-data/country_master.json');

const randomidchars = '0123456789abcdefghijklmnopqrstuvwxyz';

const emailalpha = 'abcdefghijklmnopqrstuvwxyz';
const emailnum = '0123456789';

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toUTCString();
}

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  return (Math.floor(Math.random() * 16777215).toString(16) + '000000').substr(0, 6);
};

const randomID = (length) => {
  let result = '';
  for (var i = length; i > 0; --i) result += randomidchars[Math.floor(Math.random() * randomidchars.length)];
  return result;
}

function randomEmail() {
  let part1 = '';
  let part1len = randomNum(4, 8);
  let part2 = '';
  let part2len = randomNum(0, 4);
  let part3 = '';
  let part3len = randomNum(2, 4);
  let domain1 = '';
  let domain1len = randomNum(4, 8);
  let domain2 = '';
  let domain2len = randomNum(0, 4);

  for (let l = part1len; l > 0; --l) {
    part1 += emailalpha[Math.floor(Math.random() * emailalpha.length)];
  };
  for (let l = part2len; l > 0; --l) {
    part2 += emailnum[Math.floor(Math.random() * emailnum.length)];
  };
  for (let l = part3len; l > 0; --l) {
    part3 += emailalpha[Math.floor(Math.random() * emailalpha.length)];
  };
  for (let l = domain1len; l > 0; --l) {
    domain1 += emailalpha[Math.floor(Math.random() * emailalpha.length)];
  };
  for (let l = domain2len; l > 0; --l) {
    domain2 += emailnum[Math.floor(Math.random() * emailnum.length)];
  };

  return part1 + part2 + part3 + '@' + domain1 + domain2 + '.' + domainList[Math.floor(Math.random() * domainList.length)];
}

const genCap = (str) => {
  let arr = (str || '').split(' ');
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) === 1) {
      returnArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    } else if ((i + 1) === 2 || (i + 1) === 3) {
      returnArr.push(arr[i]);
    } else {
      let isprime = true;
      for (let x = 2; x < i; x++) {
        if (i % x === 0) {
          isprime = false;
          break;
        }
      }
      returnArr.push(isprime ? arr[i].charAt(0).toUpperCase() + arr[i].slice(1) : arr[i]);
    }
  }
  return returnArr.join(' ');
};

let mainArr = [];
mainArr = mainStr.replace(/^\s+|\s+$/g, '').toLowerCase().split('. ').join(' ').split(', ').join(' ').split(' ');

const generateUsersData = () => {
  let arr = [];
  let userlen = totalUsersLength;
  // let userlen = 5;
  for (let i = 0; i < userlen; i++) {
    let obj = {};
    // obj._id = _userids[Math.floor(Math.random() * _userids.length)];
    obj.__FIRSTNAME = firstnames[Math.floor(Math.random() * firstnames.length)];
    let middlenum = randomNum(1, 5);
    obj.__MIDDLENAME = middlenum < 3 ? middlenames[Math.floor(Math.random() * middlenames.length)] : '';
    obj.__LASTNAME = lastnames[Math.floor(Math.random() * lastnames.length)];

    obj.__PUBLICNAME = `${obj.__FIRSTNAME}${(obj.__MIDDLENAME || '').length > 0 ? ' ' + obj.__MIDDLENAME.charAt(0) + '.' : ''} ${obj.__LASTNAME}`;

    let picnum = randomNum(1, 5);
    let width = randomNum(240, 560);
    let height = randomNum(240, 560);
    let color1 = randomColor();
    let color2 = randomColor();

    obj.__PROFILEPIC = picnum < 3 ? `https://via.placeholder.com/${width}x${height}/${color1}/${color2}` : '';

    let bionum = randomNum(1, 5);

    if (bionum < 3) {
      let biolen = randomNum(0, 4);
      let parastr = '';
      for (let j = 0; j < biolen; j++) {
        let totalstatements = randomNum(1, 5);
        let statementsArr = [];
        for (let k = 0; k < totalstatements; k++) {
          statementsArr.push(createStatement(randomNum(16, 48), 'p'));
        }
        parastr += '<p>' + statementsArr.join(' ') + '</p>';
      }
      obj.__BIO = parastr;
    }

    obj.__EMAIL = [];
    let emaillen = randomNum(1, 5);
    for (let j = 0; j < emaillen; j++) {
      let obj1 = {};
      obj1.__ISPRIMARY = j === 0 ? true : false;
      obj1.__ADDRESS = randomEmail();
      obj.__EMAIL.push(obj1);
    }

    let addresslen = randomNum(0, 4);
    obj.__ADDRESSES = [];

    for (let j = 0; j < addresslen; j++) {
      let obj1 = {};
      obj1.__ISBILLINGADDRESS = j === 0 ? true : false;
      obj1.__NAME = 'Address ' + (j + 1);
      obj1.__COUNTRYID = (_generatedCountries[Math.floor(Math.random() * _generatedCountries.length)])._id['$oid'];
      let fname = firstnames[Math.floor(Math.random() * firstnames.length)];
      let middlenum = randomNum(1, 5);
      let mname = middlenum < 3 ? middlenames[Math.floor(Math.random() * middlenames.length)] : '';
      let lname = lastnames[Math.floor(Math.random() * lastnames.length)];
      obj1.__FULLNAME = `${fname}${mname.length > 0 ? ' ' + mname : ''} ${lname}`;
      obj1.__MOBILENUMBER = randomNum(1000000000, 9999999999);
      obj1.__PINCODE = randomNum(100000, 999999);

      let aptstr = 'Flat # ' + randomNum(1000, 9999);
      let apt1len = randomNum(1, 6);
      let apt1arr = [];
      let apt2len = randomNum(0, 6);
      let apt2arr = [];
      let apt3len = randomNum(0, 6);
      let apt3arr = [];

      for (let k = 0; k < apt1len; k++) {
        apt1arr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
      }
      for (let k = 0; k < apt2len; k++) {
        apt2arr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
      }
      for (let k = 0; k < apt3len; k++) {
        apt3arr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
      }
      obj1.__APARTMENT = aptstr + ', ' + genCap(apt1arr.join(' '));
      obj1.__APARTMENT += apt2arr.length > 0 ? ', ' + genCap(apt2arr.join(' ')) : '';
      obj1.__APARTMENT += apt3arr.length > 0 ? ', ' + genCap(apt3arr.join(' ')) : '';

      apt1len = randomNum(1, 6);
      apt1arr = [];
      apt2len = randomNum(0, 6);
      apt2arr = [];
      apt3len = randomNum(0, 6);
      apt3arr = [];

      for (let k = 0; k < apt1len; k++) {
        apt1arr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
      }
      for (let k = 0; k < apt2len; k++) {
        apt2arr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
      }
      for (let k = 0; k < apt3len; k++) {
        apt3arr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
      }
      obj1.__AREA = genCap(apt1arr.join(' '));
      obj1.__AREA += apt2arr.length > 0 ? ', ' + genCap(apt2arr.join(' ')) : '';
      obj1.__AREA += apt3arr.length > 0 ? ', ' + genCap(apt3arr.join(' ')) : '';

      let lmnum = randomNum(1, 5);

      if (lmnum < 3) {
        aptstr = 'Near ';
        apt1len = randomNum(2, 7);
        apt1arr = [];
        for (let k = 0; k < apt1len; k++) {
          apt1arr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
        }
        obj1.__LANDMARK = aptstr + genCap(apt1arr.join(' '));
      }

      apt1len = randomNum(1, 3);
      apt1arr = [];
      for (let k = 0; k < apt1len; k++) {
        apt1arr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
      }
      obj1.__CITY = genCap(apt1arr.join(' '));

      apt1len = randomNum(1, 3);
      apt1arr = [];
      for (let k = 0; k < apt1len; k++) {
        apt1arr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
      }
      obj1.__STATE = {};
      obj1.__STATE.__NAME = genCap(apt1arr.join(' '));

      let ainfo = randomNum(1, 5);

      if (ainfo < 3) {
        let biolen = randomNum(0, 4);
        let parastr = '';
        for (let j = 0; j < biolen; j++) {
          let totalstatements = randomNum(1, 5);
          let statementsArr = [];
          for (let k = 0; k < totalstatements; k++) {
            statementsArr.push(createStatement(randomNum(8, 32), 'p'));
          }
          parastr += '<p>' + statementsArr.join(' ') + '</p>';
        }
        obj.__ADDITIONALINFO = parastr;
      }
      obj.__ADDRESSES.push(obj1);
    }

    obj.__DATEOFBIRTH = randomDate(new Date(1940, 0, 1), new Date(2000, 11, 31));
    obj.__JOINED = randomDate(new Date(2018, 0, 1), new Date());

    obj.__STATUSID = _generatedStatuses.filter(item => item.__TYPE === 'active')[0]._id['$oid'];

    arr.push(obj);
  };
  return arr;
};

const generateSellersData = () => {
  let arr = [];
  let sellerlen = totalSellersLength;
  // let sellerlen = 1;

  for (let i = 0; i < sellerlen; i++) {
    let obj = {};
    let nameLength = randomNum(2, 8);
    let nameStr = [];
    for (let k = 0; k < nameLength; k++) {
      nameStr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
    }
    obj.__NAME = genCap(nameStr.join(' '));
    obj.__URL = '#';
    obj.__JOINED = randomDate(new Date(2016, 0, 1), new Date(2018, 11, 31));

    obj.__EMAIL = [];

    let emaillen = randomNum(1, 3);
    for (let j = 0; j < emaillen; j++) {
      let obj1 = {};
      obj1.__ISPRIMARY = j === 0 ? true : false;
      obj1.__ADDRESS = randomEmail();
      obj.__EMAIL.push(obj1);
    }

    let width = randomNum(240, 560);
    let height = randomNum(240, 560);
    let color1 = randomColor();
    let color2 = randomColor();

    let picnum = randomNum(1, 5);
    obj.__PROFILEPIC = picnum < 3 ? `https://via.placeholder.com/${width}x${height}/${color1}/${color2}` : '';

    // obj.__SELLERID = _sellerids[Math.floor(Math.random() * _sellerids.length)];
    obj.__STATUSID = _generatedStatuses.filter(item => item.__TYPE === 'active')[0]._id['$oid'];

    obj.__PRODUCTS = [];

    let sproductsLen = randomNum(1, 32);

    for (let k = 0; k < sproductsLen; k++) {
      let obj1 = {};
      let pnamelen = randomNum(4, 24);
      let pnameStr = [];
      for (let j = 0; j < pnamelen; j++) {
        pnameStr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
      }
      // obj1._id = _productids[Math.floor(Math.random() * _productids.length)];
      obj1.__NAME = genCap(pnameStr.join(' '));
      obj1.__URL = '#';
      obj1.__CREATEDON = randomDate(new Date(2019, 0, 1), new Date());
      obj1.__STATUSID = _generatedStatuses.filter(item => item.__TYPE === 'active')[0]._id['$oid'];;

      let outofstocknum = randomNum(1, 5);
      obj1.__ISOUTOFSTOCK = outofstocknum < 3 ? true : false;
      obj.__PRODUCTS.push(obj1);
    }

    arr.push(obj);
  }

  return arr;
};

const genCat = (level, localarr, fullarr) => {
  var thislevel = level;
  var thisarr = localarr;
  var isfresh = false;
  var foundobj;

  var foundArr = thisarr.filter((arritem, arrindex) => {
    return (arritem.__L === thislevel && arritem.__C === fullarr[level]);
  });

  if (foundArr.length === 0 && fullarr[level] !== '') {
    isfresh = true;
    foundobj = {
      // _id: randomID(24),
      __L: thislevel,
      __C: fullarr[thislevel],
      __STATUSID: _generatedStatuses.filter(item => item.__TYPE === 'active')[0]._id['$oid']
    };
  } else {
    foundobj = foundArr[0];
  }

  if ((fullarr[level + 1] || '').length > 0) {
    if (!foundobj.__S) {
      foundobj.__S = [];
    }
    genCat(level + 1, foundobj.__S, fullarr);
  }

  if (isfresh) {
    thisarr.push(foundobj);
  }

  return thisarr;
};

const generateCategoriessData = () => {
  const workbook = XLSX.readFile('./scripts/categories.xlsx');
  let cells = (((workbook || {}).Sheets || {}).Sheet1 || {});
  let arr = [];
  for (const cell in cells) {
    if (cell !== '!ref' && cell !== '!margins') {
      let celldata = cells[cell];
      let keyArr = (celldata.w).split('/');

      arr = genCat(0, arr, keyArr);
    }
  }
  return arr;
};

const createStatement = (sl, type) => {
  let strArr = [];
  for (let j = 0; j < sl; j++) {
    strArr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
  }
  return type === 'li' ? '<li>' + genCap(strArr.join(' ') + '.') + '</li>' : genCap(strArr.join(' ') + '.');
};

const findRightCategory = (cat, level) => {
  let cobj = {};
  switch ((cat.__S || []).length) {
    case 0:
      cobj = cat;
      break;
    case 1:
      cobj = findRightCategory(cat.__S[0], level++);
      break;
    default:
      let catindex = randomNum(0, cat.__S.length - 1);
      cobj = findRightCategory(cat.__S[catindex], level++);
      break;
  }
  // if (level === 0) {
  //   cobj.__PARENTID = cat._id['$oid'];
  // }
  return cobj;
}

const generateProductsData = () => {
  let arr = [];
  let sellersArr = _generatedSellers || [];
  sellersArr.forEach((seller, sellerindex) => {
    if (sellerindex < sellersArr.length) {
      (seller.__PRODUCTS || []).forEach((prod, prodindex) => {
        let obj = {};
        // console.log('===========prod._id', prod._id);
        obj.__REFERENCEID = prod._id['$oid'];
        obj.__NAME = prod.__NAME;
        obj.__URL = prod.__URL;
        obj.__STATUSID = prod.__STATUSID['$oid'];
        obj.__ISOUTOFSTOCK = prod.__ISOUTOFSTOCK;
        let pricenum = randomNum(1, 2);
        if (pricenum === 1) {
          obj.__PRICE = [{
            __MAJOR: '' + randomNum(4999, 99999),
            __MINOR: '' + randomNum(0, 99),
            __CURRENCY: 'INR',
            __ISPRIMARY: true
          }];
        } else {
          obj.__PRICE = [{
            __MAJOR: '' + randomNum(60000, 99999),
            __MINOR: '' + randomNum(0, 99),
            __CURRENCY: 'INR',
            __ISPRIMARY: false
          }, {
            __MAJOR: '' + randomNum(4999, 59999),
            __MINOR: '' + randomNum(0, 99),
            __CURRENCY: 'INR',
            __ISPRIMARY: true
          }];
        }
        obj.__IMAGES = [];

        let imglen = randomNum(1, 8);
        for (let k = 0; k < imglen; k++) {
          let imgObj = {};
          let width = randomNum(240, 560);
          let height = randomNum(240, 560);

          let zoomw = width * 3;
          let zoomh = height * 3;

          let color1 = randomColor();
          let color2 = randomColor();

          let thisnum = randomNum(0, 4);

          imgObj.__URL = `https://via.placeholder.com/${width}x${height}/${color1}/${color2}`;
          if (thisnum > 1) {
            imgObj.__ZOOMURL = `https://via.placeholder.com/${zoomw}x${zoomh}/${color1}/${color2}`;
          }
          obj.__IMAGES.push(imgObj);
        }

        let paralen = randomNum(1, 5);
        let bulletlen = randomNum(0, 16);
        let bulletArr = [];
        let parastr = '';

        for (let j = 0; j < paralen; j++) {
          let totalstatements = randomNum(1, 5);
          let statementsArr = [];
          for (let k = 0; k < totalstatements; k++) {
            statementsArr.push(createStatement(randomNum(16, 48), 'p'));
          }
          parastr += '<p>' + statementsArr.join(' ') + '</p>';
        }

        for (let j = 0; j < bulletlen; j++) {
          bulletArr.push(createStatement(randomNum(16, 48), 'li'));
        }

        parastr += '<ul>' + bulletArr.join(' ') + '</ul>';
        obj.__CATEGORIES = [];

        let catelen = 1;
        for (let j = 0; j < catelen; j++) {
          let category_s = _generatedCategories[Math.floor(Math.random() * _generatedCategories.length)];
          let foundCat = findRightCategory(category_s, 0);
          obj.__CATEGORIES.push({
            __REFERENCEID: foundCat._id['$oid'],
            __L: foundCat.__L,
            __C: foundCat.__C,
            __PARENTID: category_s._id['$oid']
          });
        }
        obj.__CREATEDON = prod.__CREATEDON['$date'];
        obj.__SPECS = parastr;

        obj.__SELLERID = seller._id['$oid'];
        arr.push(obj);
      });
    }
  });
  return arr;
};

const generateReviewssData = () => {
  let arr = [];
  (_generatedProducts || []).forEach((prod, pindex) => {
    let reviewsLen = randomNum(0, 20);
    let hasreview = randomNum(1, 5);
    for (let i = 0; i < reviewsLen && hasreview < 3; i++) {
      let obj = {};
      // obj._id = randomID(24);
      // obj.__PRODUCTID = prod._id;

      let paralen = randomNum(1, 5);
      let bulletlen = randomNum(0, 16);
      let bulletArr = [];
      let parastr = '';

      for (let j = 0; j < paralen; j++) {
        let totalstatements = randomNum(1, 5);
        let statementsArr = [];
        for (let k = 0; k < totalstatements; k++) {
          statementsArr.push(createStatement(randomNum(16, 48), 'p'));
        }
        parastr += '<p>' + statementsArr.join(' ') + '</p>';
      }

      for (let j = 0; j < bulletlen; j++) {
        bulletArr.push(createStatement(randomNum(16, 48), 'li'));
      }

      parastr += '<ul>' + bulletArr.join(' ') + '</ul>';
      obj.__REVIEW = parastr;
      obj.__RATING = Math.floor((Math.random() * 5) + 1);
      obj.__STATUSID = _generatedStatuses.filter(item => item.__TYPE === 'active')[0]._id['$oid'];
      arr.push(obj);
    }
  });
  return arr;
};

const generateStatusData = () => {
  const statuses = [{
    __NAME: 'ACTIVE',
    __TYPE: 'active',
    __STATUS: 'active'
  }, {
    __NAME: 'INACTIVE',
    __TYPE: 'inactive',
    __STATUS: 'active'
  }, {
    __NAME: 'IN REVIEW',
    __TYPE: 'inreview',
    __STATUS: 'active'
  }, {
    __NAME: 'REPORTED',
    __TYPE: 'reported',
    __STATUS: 'active'
  }, {
    __NAME: 'ON HOLD',
    __TYPE: 'onhold',
    __STATUS: 'active'
  }, {
    __NAME: 'CANCELLED',
    __TYPE: 'cancelled',
    __STATUS: 'active'
  }, {
    __NAME: 'DELETED',
    __TYPE: 'deleted',
    __STATUS: 'inactive'
  }];
  let arr = [];

  for (let i = 0; i < statuses.length; i++) {
    arr.push(statuses[i]);
  }

  return arr;
};

const generateFiles = () => {

  let productids = [];
  let userids = [];
  let reviewids = [];
  let sellerids = [];

  // for (let i = 0; i < totalProductsLength; i++) {
  //   productids.push(randomID(24));
  // }
  // for (let i = 0; i < totalUsersLength; i++) {
  //   userids.push(randomID(24));
  // }
  // for (let i = 0; i < totalSellersLength; i++) {
  //   sellerids.push(randomID(24));
  // }
  // for (let i = 0; i < totalReviewsLength; i++) {
  //   reviewids.push(randomID(24));
  // }

  // fs.writeFile('./projects/admin/src/app/data/_productsids.json', JSON.stringify(productids), function (err) {
  //   if (err) throw err;
  //   console.log('Products Ids Replaced');
  // });
  // fs.writeFile('./projects/admin/src/app/data/_reviewsids.json', JSON.stringify(reviewids), function (err) {
  //   if (err) throw err;
  //   console.log('Review Ids Replaced');
  // });
  // fs.writeFile('./projects/admin/src/app/data/_sellersids.json', JSON.stringify(sellerids), function (err) {
  //   if (err) throw err;
  //   console.log('Seller Ids Replaced');
  // });
  // fs.writeFile('./projects/admin/src/app/data/_usersids.json', JSON.stringify(userids), function (err) {
  //   if (err) throw err;
  //   console.log('User Ids Replaced');
  // });

  // let usersData = generateUsersData();
  // fs.writeFile('./src/static-data/manage-users.json', JSON.stringify(usersData), function (err) {
  //   if (err) throw err;
  //   console.log('Users Data Replaced in Server');
  // });

  // let sellersData = generateSellersData();
  // fs.writeFile('./src/static-data/manage-sellers.json', JSON.stringify(sellersData), function (err) {
  //   if (err) throw err;
  //   console.log('Sellers Data Replaced in Server');
  // });

  // let categoriessData = generateCategoriessData();
  // fs.writeFile('./src/static-data/manage-categories.json', JSON.stringify(categoriessData), function (err) {
  //   if (err) throw err;
  //   console.log('Categories Data Replaced in Server');
  // });

  // let productsData = generateProductsData();
  // fs.writeFile('./src/static-data/manage-products.json', JSON.stringify(productsData), function (err) {
  //   if (err) throw err;
  //   console.log('Products Data Replaced in Server');
  // });

  // let reviewsData = generateReviewssData();

  // fs.writeFile('./projects/admin/src/app/data/manage-reviews.json', JSON.stringify(reviewsData), function (err) {
  //   if (err) throw err;
  //   console.log('Reviews Data Replaced in Server');
  // });

  // let statusdata = generateStatusData();
  // fs.writeFile('./src/static-data/manage-statuses.json', JSON.stringify(statusdata), function (err) {
  //   if (err) throw err;
  //   console.log('Reviews Data Replaced in Server');
  // });

// ./scripts/sms-20200905084511.xml
  let xml_string = fs.readFileSync('./scripts/sms-temp.xml', 'utf8');
  let addressarr = (`QP-NCCARD VK-PARDIS QP-LOANPL AA-AIRTEL +917092008228 JX-620016 JM-620016 JM-620016 JA-JIOINF JA-JIOINF JK-620016 
      BP-HXINSR VM-HOTSTR QP-APOLLO VK-PARDIS AA-ARWINF QP-ACTGRP QP-DHINSR BT-PLAYON TX-APOLLO QP-NCOFFR ADICICIL BZTAXSPN BHKOPPER JDJioPay JM620016 
      JAJIOINF BAACTGRP AXDOTAPT JD620016 +917028028070 AXSBICGV QPWORKHM QPHOMEWK JK620016 AXOMHTUN AXARWINF VKPARDIS ADPARDIS ADHDFCBK AXBAJAJF  
      BRHAPYGO MDMMMWOW BWHDLONS QPASHYNA BWHDLONS QPYOUMEE JX-JIONET TXMYTSKY BWluvlif AANTAROT BACLOUDS TXFLIGHT BVLWMONY BWFRNSIP QPACTGRP VMEASYTR 
      ADPZAHUT QPPANTLS BPHOMLNS VXYOUMEE BWKRNEWS BAbankzs QPBNGPLO ADMMTRIP BRIPEQTY VXGROFRS ADICICIB QPHDFCPL TXMYTSKY QPKHTWFT VKREGALs 
      ADWORKHM AXEASEMY QPINTHUB BZPLLALA AXAIRDAR AXiPaytm ADiPaytm JMJIOSVC QPPLOANS ADOLACAB VXOLACAB AXHDFCBK QP-EQGPRO JM-HOTSTR JX-HOTSTR VM-HOTSTR 
      BP-BizSMS QP-ADIDAS 56767184 BA-ACTGRP QP-HOMCEN BPDXKUJD TXGROFRS ADSBICRD BWCAHSRJ AXHDFCLI ADIndiGo AXIndiGo TXOLACAB TXOLAMNY AXACTGRP 
      JM-620038 JX-620038`).split(' ');
  let bodyArr = ['one time password', 'personal loan', 'never calls', 'OTP is ', 'EMI due on ', ' is the OTP', 'Arriving early', 'Arriving today', 'Dispatched: ', 'is OTP to access',
    'PRE-APPROVED', 'home loan', 'is due on', 'is pending', 'You are now eligible', 'You are eligible', 'OTP to approve ', '&lt;#&gt; ', '1114823543', 'XXXXX393425',
    've spent Rs.', 'Dear Customer', 'Dear Cardholder', 'As per your preference'
  ];
  let smsbody = '';
  let i = 0;
  if ((xml_string || '').length > 0) {
    parser.parseString(xml_string, function (error, result) {
      if (error === null) {
        const smsarr = ((result || {}).smses || {}).sms || [];
        console.log('========default length: ', smsarr.length);
        let newArr = [];
        
        smsarr.forEach(sms => {
          console.log('===sms', (sms.sms || {}).address);
          if (!addressarr.includes((sms.sms || {}).address)) {
            newArr.push(sms);
          }
          smsbody = ((sms.sms || {}).body || '').toLowerCase();
          for (i = 0; i< bodyArr.length; i++) {
            if (smsbody.indexOf(bodyArr[i].toLowerCase()) === -1) {
              newArr.push(sms);
              break;
            }
          }
          return true;
        });
        console.log('========new length: ', newArr);
      } else {
        console.log(error);
      }
    });
  }

  // fs.readFile('./scripts/sms-temp.xml', function(err, data) {
  //   if (data) {
  //     // const json = parser.toJson(data, {
  //     //   object: true,
  //     //   sanitize: false,
  //     //   trim: false
  //     // });
  //     // (((json || {}).smses || {}).sms || []).forEach(j => {
  //     //   console.log('===========j', j);
  //     // })
  //     // fs.writeFile('./scripts/smsjson.json', JSON.stringify(json), function (err) {
  //     //   if (err) throw err;
  //     //   console.log('SMS JSON 1');
  //     // });
  //     // console.log("to json ->", json);
  //     const smsarr = ((json || {}).smses || {}).sms || [];
  //     console.log('========default length: ', smsarr.length);
  //     let addressarr = (`QP-NCCARD VK-PARDIS QP-LOANPL AA-AIRTEL +917092008228 JX-620016 JM-620016 JM-620016 JA-JIOINF JA-JIOINF JK-620016 
  //     BP-HXINSR VM-HOTSTR QP-APOLLO VK-PARDIS AA-ARWINF QP-ACTGRP QP-DHINSR BT-PLAYON TX-APOLLO QP-NCOFFR ADICICIL BZTAXSPN BHKOPPER JDJioPay JM620016 
  //     JAJIOINF BAACTGRP AXDOTAPT JD620016 +917028028070 AXSBICGV QPWORKHM QPHOMEWK JK620016 AXOMHTUN AXARWINF VKPARDIS ADPARDIS ADHDFCBK AXBAJAJF  
  //     BRHAPYGO MDMMMWOW BWHDLONS QPASHYNA BWHDLONS QPYOUMEE JX-JIONET TXMYTSKY BWluvlif AANTAROT BACLOUDS TXFLIGHT BVLWMONY BWFRNSIP QPACTGRP VMEASYTR 
  //     ADPZAHUT QPPANTLS BPHOMLNS VXYOUMEE BWKRNEWS BAbankzs QPBNGPLO ADMMTRIP BRIPEQTY VXGROFRS ADICICIB QPHDFCPL TXMYTSKY QPKHTWFT VKREGALs 
  //     ADWORKHM AXEASEMY QPINTHUB BZPLLALA AXAIRDAR AXiPaytm ADiPaytm JMJIOSVC QPPLOANS ADOLACAB VXOLACAB AXHDFCBK QP-EQGPRO JM-HOTSTR JX-HOTSTR VM-HOTSTR 
  //     BP-BizSMS QP-ADIDAS 56767184 BA-ACTGRP QP-HOMCEN BPDXKUJD TXGROFRS ADSBICRD BWCAHSRJ AXHDFCLI ADIndiGo AXIndiGo TXOLACAB TXOLAMNY AXACTGRP 
  //     JM-620038 JX-620038`).split(' ');
  //     let bodyArr = ['one time password', 'personal loan', 'never calls', 'OTP is ', 'EMI due on ', ' is the OTP', 'Arriving early', 'Arriving today' , 'Dispatched: ', 'is OTP to access',
  //       'PRE-APPROVED', 'home loan', 'is due on', 'is pending', 'You are now eligible', 'You are eligible', 'OTP to approve ', '&lt;#&gt; ', '1114823543', 'XXXXX393425',
  //       've spent Rs.', 'Dear Customer', 'Dear Cardholder', 'As per your preference'];

  //     let smsbody = '';
  //     let i = 0;

  //     let newArr = smsarr.filter(sms => {
  //       if (
  //         addressarr.includes(sms.address)) {
  //           return false;
  //       }
  //       smsbody = (sms.body || '').toLowerCase();
  //       for (i = 0; i< bodyArr.length; i++) {
  //         if (smsbody.indexOf(bodyArr[i].toLowerCase()) > -1) {
  //           return false;
  //         }
  //       }
  //       return true;
  //     });
  //     console.log('========new length: ', newArr.length);

  //     // fs.writeFile('./scripts/smsjson.json', parser.toJson(data), function (err) {
  //     //   if (err) throw err;
  //     //   console.log('SMS JSON');
  //     // });
  //     // let xmlstr = '<smses count="'+ newArr.length + '" backup_set="928b744c-6514-4d2c-9633-27c31b387f79" backup_date="1599275767921" type="full">' + parser.toXml(JSON.stringify({sms: newArr}), {sanitize: true}) + '</smses>';
  //     // fs.writeFile('./scripts/sms-new.xml', xmlstr, function (err) {
  //     //   if (err) throw err;
  //     //   console.log('SMS XML');
  //     // });
  //   }
  // });
};

generateFiles();