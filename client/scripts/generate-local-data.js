const fs = require('fs');

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
  let userlen = randomNum(10, 40);
  for (let i=0; i< userlen; i++) {
    let obj = {};
    obj._id = randomID(24);
    obj.__FIRSTNAME = firstnames[Math.floor(Math.random() * firstnames.length)];
    let middlenum = randomNum(1, 5);
    obj.__MIDDLENAME = middlenum < 3 ? middlenames[Math.floor(Math.random() * middlenames.length)] : '';
    obj.__LASTNAME = lastnames[Math.floor(Math.random() * lastnames.length)];
    obj.__DATEOFBIRTH = randomDate(new Date(1940, 0, 1), new Date(2000, 11, 31));
    let statusnum = randomNum(1, 5);

    obj.__EMAIL = [];

    let emaillen = randomNum(1, 3);
    for (let j=0; j<emaillen; j++) {
      let obj1 = {};
      obj1.__ISPRIMARY = j===0 ? true : false;
      obj1.__ADDRESS = randomEmail();
      obj.__EMAIL.push(obj1);
    }

    obj.__STATUS = statusnum < 3 ? 'active' : 'inactive';
    arr.push(obj);
  };
  return arr;
};

const generateFiles = () => {

  let usersData = generateUsersData();

  fs.writeFile('./projects/admin/src/app/data/manage-users.json', JSON.stringify(usersData), function (err) {
    if (err) throw err;
    console.log('Users Data Replaced');
  });
};

generateFiles();
