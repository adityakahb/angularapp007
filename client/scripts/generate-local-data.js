const fs = require('fs');
const XLSX = require('xlsx');

const totalProductsLength = 128;
const totalUsersLength = 16;
const totalSellersLength = 48;
const totalReviewsLength = 480;

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

const categories = [
  'Accessories',
  'Components',
  'Desktops',
  'External Devices & Data Storage',
  'Keyboards, Mice & Input Devices',
  'Laptops',
  'Monitors',
  'Networking Devices',
  'PC Speakers',
  'Printers',
  'Scanners',
  'Webcams & VoIP Equipment'
];

const domainList = ['com', 'net', 'co.in', 'co.uk', 'com.au', 'co', 'org', 'edu', 'io'];

const palette = require('./palette.json');
const firstnames = require('./firstnames.json');
const middlenames = require('./middlennames.json');
const lastnames = require('./lastnames.json');

const _productids = require('./../projects/admin/src/app/data/_productsids.json');
const _reviewids = require('./../projects/admin/src/app/data/_reviewsids.json');
const _sellerids = require('./../projects/admin/src/app/data/_sellersids.json');
const _userids = require('./../projects/admin/src/app/data/_usersids.json');

const _generatedSellers = require('./../projects/admin/src/app/data/manage-sellers.json');
const _generatedCategories = require('./../projects/admin/src/app/data/manage-categories.json');


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
  for (let i = 0; i < userlen; i++) {
    let obj = {};
    obj._id = _userids[Math.floor(Math.random() * _userids.length)];
    obj.__FIRSTNAME = firstnames[Math.floor(Math.random() * firstnames.length)];
    let middlenum = randomNum(1, 5);
    obj.__MIDDLENAME = middlenum < 3 ? middlenames[Math.floor(Math.random() * middlenames.length)] : '';
    obj.__LASTNAME = lastnames[Math.floor(Math.random() * lastnames.length)];
    obj.__DATEOFBIRTH = randomDate(new Date(1940, 0, 1), new Date(2000, 11, 31));

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

    let thisnum = randomNum(1, 5);

    obj.__PROFILEPIC = thisnum < 3 ? `https://via.placeholder.com/${width}x${height}/${color1}/${color2}` : '';

    let statusnum = randomNum(1, 5);
    obj.__STATUS = statusnum < 3 ? 'active' : 'inactive';

    arr.push(obj);
  };
  return arr;
};

const generateSellersData = () => {
  let arr = [];
  // let sellerlen = totalSellersLength;
  let sellerlen = 8;

  for (let i = 0; i < sellerlen; i++) {
    let obj = {};
    let nameLength = randomNum(2, 8);
    let nameStr = [];
    for (let k = 0; k < nameLength; k++) {
      nameStr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
    }
    obj.__NAME = genCap(nameStr.join(' '));
    obj.__URL = '#';
    obj.__SELLERID = _sellerids[Math.floor(Math.random() * _sellerids.length)];

    obj.__PRODUCTS = [];

    let sproductsLen = randomNum(1, 16);

    for (let k = 0; k < sproductsLen; k++) {
      let obj1 = {};
      let pnamelen = randomNum(4, 24);
      let pnameStr = [];
      for (let j = 0; j < pnamelen; j++) {
        pnameStr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
      }
      obj1._id = _productids[Math.floor(Math.random() * mainArr.length)];
      obj1.__NAME = genCap(pnameStr.join(' '));
      obj1.__URL = '#';
      let activenum = randomNum(1, 5);
      obj1.__ISACTIVE = activenum < 3 ? true : false;
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
      _id: randomID(24),
      __L: thislevel,
      __C: fullarr[thislevel]
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
  let obj = {};
  if ((cat.__S || []).length > 1) {
    let catindex = randomNum(0, cat.__S.length - 1);
    obj = findRightCategory(cat.__S[catindex], level++);
  } else if ((cat.__S || []).length === 1){
    obj = cat.__S[0];
  } else {
    obj = cat;
  }

  if (level === 0) {
    obj._parentid = cat._id;
  }

  return obj;
}

const generateProductsData = () => {
  let arr = [];
  let sellersArr = _generatedSellers || [];
  sellersArr.forEach((seller, sellerindex) => {
    if (sellerindex < sellersArr.length) {
      (seller.__PRODUCTS || []).forEach((prod, prodindex) => {
        let obj = {};
        obj._id = prod._id;
        obj.__NAME = prod.__NAME;
        obj.__URL = prod.__URL;
        obj.__ISACTIVE = prod.__ISACTIVE;
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
        let category_s = _generatedCategories[Math.floor(Math.random() * _generatedCategories.length)]
        obj.__CATEGORY = findRightCategory(category_s, 0);
        
        obj.__SPECS = parastr;

        obj.__SELLER = {
          _id: seller._id,
          __NAME: seller.__NAME,
          __URL: seller.__URL
        };
        arr.push(obj);
      });
    }
  });
  return arr;
};

const generateFiles = () => {

  let productids = [];
  let userids = [];
  let reviewids = [];
  let sellerids = [];

  for (let i = 0; i < totalProductsLength; i++) {
    productids.push(randomID(24));
  }
  for (let i = 0; i < totalUsersLength; i++) {
    userids.push(randomID(24));
  }
  for (let i = 0; i < totalSellersLength; i++) {
    sellerids.push(randomID(24));
  }
  for (let i = 0; i < totalReviewsLength; i++) {
    reviewids.push(randomID(24));
  }

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

  let usersData = generateUsersData();
  let sellersData = generateSellersData();

  // fs.writeFile('./projects/admin/src/app/data/manage-users.json', JSON.stringify(usersData), function (err) {
  //   if (err) throw err;
  //   console.log('Users Data Replaced');
  // });

  // fs.writeFile('./projects/admin/src/app/data/manage-sellers.json', JSON.stringify(sellersData), function (err) {
  //   if (err) throw err;
  //   console.log('Sellers Data Replaced');
  // });

  // let categoriessData = generateCategoriessData();

  // fs.writeFile('./projects/admin/src/app/data/manage-categories.json', JSON.stringify(categoriessData), function (err) {
  //   if (err) throw err;
  //   console.log('Categories Data Replaced');
  // });

  let productsData = generateProductsData();

  fs.writeFile('./projects/admin/src/app/data/manage-products.json', JSON.stringify(productsData), function (err) {
    if (err) throw err;
    console.log('Products Data Replaced');
  });
};

generateFiles();
