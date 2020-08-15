import { IProduct, IImage } from './../interfaces/product.interface';

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

const palette = [
  {
    __COLORHEX: "36454f",
    __NAME: "Black",
    __URL: "#"
  },
  {
    __COLORHEX: "ffffff",
    __NAME: "White",
    __URL: "#"
  },
  {
    __COLORHEX: "0074d9",
    __NAME: "Blue",
    __URL: "#"
  },
  {
    __COLORHEX: "3c4477",
    __NAME: "Navy Blue",
    __URL: "#"
  },
  {
    __COLORHEX: "9fa8ab",
    __NAME: "Grey",
    __URL: "#"
  },
  {
    __COLORHEX: "d34b56",
    __NAME: "Red",
    __URL: "#"
  },
  {
    __COLORHEX: "5eb160",
    __NAME: "Green",
    __URL: "#"
  },
  {
    __COLORHEX: "9fa8ab",
    __NAME: "Grey Melange",
    __URL: "#"
  },
  {
    __COLORHEX: "36454f",
    __NAME: "Charcoal",
    __URL: "#"
  },
  {
    __COLORHEX: "3d9970",
    __NAME: "Olive",
    __URL: "#"
  },
  {
    __COLORHEX: "b03060",
    __NAME: "Maroon",
    __URL: "#"
  },
  {
    __COLORHEX: "eadc32",
    __NAME: "Yellow",
    __URL: "#"
  },
  {
    __COLORHEX: "f2f2f2",
    __NAME: "Off White",
    __URL: "#"
  },
  {
    __COLORHEX: "f1a9c4",
    __NAME: "Pink",
    __URL: "#"
  },
  {
    __COLORHEX: "f28d20",
    __NAME: "Orange",
    __URL: "#"
  },
  {
    __COLORHEX: "008080",
    __NAME: "Teal",
    __URL: "#"
  },
  {
    __COLORHEX: "cc9c33",
    __NAME: "Mustard",
    __URL: "#"
  },
  {
    __COLORHEX: "a03245",
    __NAME: "Burgundy",
    __URL: "#"
  },
  {
    __COLORHEX: "e8e6cf",
    __NAME: "Beige",
    __URL: "#"
  },
  {
    __COLORHEX: "915039",
    __NAME: "Brown",
    __URL: "#"
  },
  {
    __COLORHEX: "ff7f50",
    __NAME: "Coral",
    __URL: "#"
  },
  {
    __COLORHEX: "b7410e",
    __NAME: "Rust",
    __URL: "#"
  },
  {
    __COLORHEX: "800080",
    __NAME: "Purple",
    __URL: "#"
  },
  {
    __COLORHEX: "ffe5b4",
    __NAME: "Peach",
    __URL: "#"
  },
  {
    __COLORHEX: "ede6b9",
    __NAME: "Cream",
    __URL: "#"
  },
  {
    __COLORHEX: "2e8b57",
    __NAME: "Sea Green",
    __URL: "#"
  },
  {
    __COLORHEX: "40e0d0",
    __NAME: "Turquoise Blue",
    __URL: "#"
  },
  {
    __COLORHEX: "000000",
    __NAME: "Multi",
    __URL: "#"
  },
  {
    __COLORHEX: "c3b091",
    __NAME: "Khaki",
    __URL: "#"
  },
  {
    __COLORHEX: "5db653",
    __NAME: "Lime Green",
    __URL: "#"
  },
  {
    __COLORHEX: "8dc04a",
    __NAME: "Fluorescent Green",
    __URL: "#"
  },
  {
    __COLORHEX: "483c32",
    __NAME: "Taupe",
    __URL: "#"
  },
  {
    __COLORHEX: "e0b0ff",
    __NAME: "Mauve",
    __URL: "#"
  },
  {
    __COLORHEX: "d6d6e5",
    __NAME: "Lavender",
    __URL: "#"
  },
  {
    __COLORHEX: "4b302f",
    __NAME: "Coffee Brown",
    __URL: "#"
  },
  {
    __COLORHEX: "b9529f",
    __NAME: "Magenta",
    __URL: "#"
  },
  {
    __COLORHEX: "d2b48c",
    __NAME: "Tan",
    __URL: "#"
  },
  {
    __COLORHEX: "e5c74a",
    __NAME: "Gold",
    __URL: "#"
  },
  {
    __COLORHEX: "dd2f86",
    __NAME: "Rose",
    __URL: "#"
  },
  {
    __COLORHEX: "dbaf97",
    __NAME: "Nude",
    __URL: "#"
  },
  {
    __COLORHEX: "cc8240",
    __NAME: "Bronze",
    __URL: "#"
  },
  {
    __COLORHEX: "b3b3b3",
    __NAME: "Steel",
    __URL: "#"
  }
];

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  return (Math.floor(Math.random() * 16777215).toString(16) + '000000').substr(0, 6);
};

const randomID = (length) => {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

const genCap = (str) => {
  let arr = (str || '').split(' ');
  let returnArr = [];
  for (let i=0; i < arr.length; i++) {
    if ((i+1)===1) {
      returnArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    } else if ((i+1)===2 || (i+1)===3) {
      returnArr.push(arr[i]);
    } else {
      let isprime = true;
      for(let x = 2; x < i; x++)
      {
        if(i % x === 0)
        {
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

const generateBulkProductsData = () => {
  let arr = [];
  const prodLen = 5;
  const createStatement = (sl, type) => {
    let strArr = [];
    for (let j = 0; j < sl; j++) {
      strArr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
    }
    return type === 'li' ? '<li>' + genCap(strArr.join(' ') + '.') + '</li>' : genCap(strArr.join(' ') + '.');
  };
  for (let i=0; i<prodLen; i++) {
    let obj = {} as IProduct;
    let nameLength = randomNum(4, 24);
    let nameStr = [];
    for (let k = 0; k < nameLength; k++) {
      nameStr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
    }
    obj.__NAME = genCap(nameStr.join(' '));
    let pricenum = randomNum(1, 2);
    if (pricenum === 1) {
      obj.__PRICE = [{
        __MAJOR: '' + randomNum(4999, 99999),
        __MINOR: '' + randomNum(0, 99),
        __CURRENCY: 'INR',
        __TYPE: 'primary'
      }];
    } else {
      obj.__PRICE = [{
        __MAJOR: '' + randomNum(50000, 99999),
        __MINOR: '' + randomNum(0, 99),
        __CURRENCY: 'INR',
        __TYPE: 'secondary'
      }, {
        __MAJOR: '' + randomNum(4999, 49999),
        __MINOR: '' + randomNum(0, 99),
        __CURRENCY: 'INR',
        __TYPE: 'primary'
      }];
    }

    let sellerLength = randomNum(4, 24);
    let sellerStr = [];
    for (let k = 0; k < sellerLength; k++) {
      sellerStr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
    }
    
    obj.__SELLER = {
      __NAME: genCap(sellerStr.join(' ')),
      __URL: '#'
    };
    obj.__CATEGORY = {
      __TYPE: categories[Math.floor(Math.random() * categories.length)],
      __URL: '#'
    };
    obj.__COLOR = palette[Math.floor(Math.random() * palette.length)];
    obj.__URL = '#';
    obj.__IMAGES = [];
    
    let imglen = randomNum(1, 8);
    for (let k = 0; k < imglen; k++) {
      let imgObj = {} as IImage;
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

    obj.__SPECS = parastr;
    obj.__QUANTITY = randomNum(100, 999);

    let reviewsLen = randomNum(0, 15);
    let reviewsArr = [];
    for (let j = 0; j < reviewsLen; j++) {
      reviewsArr.push(randomID(24));
    };
    obj.__REVIEWS = reviewsArr;

    arr.push(obj);
  }
  return arr;
};

export { generateBulkProductsData };
