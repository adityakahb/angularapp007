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
    colorhex: "36454f",
    name: "Black",
    url: "#"
  },
  {
    colorhex: "ffffff",
    name: "White",
    url: "#"
  },
  {
    colorhex: "0074d9",
    name: "Blue",
    url: "#"
  },
  {
    colorhex: "3c4477",
    name: "Navy Blue",
    url: "#"
  },
  {
    colorhex: "9fa8ab",
    name: "Grey",
    url: "#"
  },
  {
    colorhex: "d34b56",
    name: "Red",
    url: "#"
  },
  {
    colorhex: "5eb160",
    name: "Green",
    url: "#"
  },
  {
    colorhex: "9fa8ab",
    name: "Grey Melange",
    url: "#"
  },
  {
    colorhex: "36454f",
    name: "Charcoal",
    url: "#"
  },
  {
    colorhex: "3d9970",
    name: "Olive",
    url: "#"
  },
  {
    colorhex: "b03060",
    name: "Maroon",
    url: "#"
  },
  {
    colorhex: "eadc32",
    name: "Yellow",
    url: "#"
  },
  {
    colorhex: "f2f2f2",
    name: "Off White",
    url: "#"
  },
  {
    colorhex: "f1a9c4",
    name: "Pink",
    url: "#"
  },
  {
    colorhex: "f28d20",
    name: "Orange",
    url: "#"
  },
  {
    colorhex: "008080",
    name: "Teal",
    url: "#"
  },
  {
    colorhex: "cc9c33",
    name: "Mustard",
    url: "#"
  },
  {
    colorhex: "a03245",
    name: "Burgundy",
    url: "#"
  },
  {
    colorhex: "e8e6cf",
    name: "Beige",
    url: "#"
  },
  {
    colorhex: "915039",
    name: "Brown",
    url: "#"
  },
  {
    colorhex: "ff7f50",
    name: "Coral",
    url: "#"
  },
  {
    colorhex: "b7410e",
    name: "Rust",
    url: "#"
  },
  {
    colorhex: "800080",
    name: "Purple",
    url: "#"
  },
  {
    colorhex: "ffe5b4",
    name: "Peach",
    url: "#"
  },
  {
    colorhex: "ede6b9",
    name: "Cream",
    url: "#"
  },
  {
    colorhex: "2e8b57",
    name: "Sea Green",
    url: "#"
  },
  {
    colorhex: "40e0d0",
    name: "Turquoise Blue",
    url: "#"
  },
  {
    colorhex: "000000",
    name: "Multi",
    url: "#"
  },
  {
    colorhex: "c3b091",
    name: "Khaki",
    url: "#"
  },
  {
    colorhex: "5db653",
    name: "Lime Green",
    url: "#"
  },
  {
    colorhex: "8dc04a",
    name: "Fluorescent Green",
    url: "#"
  },
  {
    colorhex: "483c32",
    name: "Taupe",
    url: "#"
  },
  {
    colorhex: "e0b0ff",
    name: "Mauve",
    url: "#"
  },
  {
    colorhex: "d6d6e5",
    name: "Lavender",
    url: "#"
  },
  {
    colorhex: "4b302f",
    name: "Coffee Brown",
    url: "#"
  },
  {
    colorhex: "b9529f",
    name: "Magenta",
    url: "#"
  },
  {
    colorhex: "d2b48c",
    name: "Tan",
    url: "#"
  },
  {
    colorhex: "e5c74a",
    name: "Gold",
    url: "#"
  },
  {
    colorhex: "dd2f86",
    name: "Rose",
    url: "#"
  },
  {
    colorhex: "dbaf97",
    name: "Nude",
    url: "#"
  },
  {
    colorhex: "cc8240",
    name: "Bronze",
    url: "#"
  },
  {
    colorhex: "b3b3b3",
    name: "Steel",
    url: "#"
  }
];

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  return (Math.floor(Math.random() * 16777215).toString(16) + '000000').substr(0, 6);
};

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
  const prodLen = randomNum(16, 32);
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
        major: '' + randomNum(4999, 99999),
        minor: '' + randomNum(0, 99),
        currency: 'inr',
        type: 'primary'
      }];
    } else {
      obj.__PRICE = [{
        major: '' + randomNum(50000, 99999),
        minor: '' + randomNum(0, 99),
        currency: 'inr',
        type: 'secondary'
      }, {
        major: '' + randomNum(4999, 49999),
        minor: '' + randomNum(0, 99),
        currency: 'inr',
        type: 'primary'
      }];
    }

    let sellerLength = randomNum(4, 24);
    let sellerStr = [];
    for (let k = 0; k < sellerLength; k++) {
      sellerStr.push(mainArr[Math.floor(Math.random() * mainArr.length)]);
    }
    
    obj.__SELLER = {
      name: genCap(sellerStr.join(' ')),
      url: '#'
    };
    obj.__CATEGORY = {
      type: categories[Math.floor(Math.random() * categories.length)],
      url: '#'
    };
    obj.__COLOR = palette[Math.floor(Math.random() * palette.length)];
    obj.__URL = '#';
    obj.__IMAGES = [];
    
    let imglen = randomNum(1, 8);
    for (let k = 0; k < imglen; k++) {
      let imgObj = {} as IImage;
      let width = randomNum(250, 960);
      let height = randomNum(250, 960);

      let zoomw = width * 5;
      let zoomh = height * 5;

      let color1 = randomColor();
      let color2 = randomColor();
    
      imgObj.url = `https://via.placeholder.com/${width}x${height}/${color1}/${color2}`;
      imgObj.zoomurl = `https://via.placeholder.com/${zoomw}x${zoomh}/${color1}/${color2}`;
      obj.__IMAGES.push(imgObj);
    }

    arr.push(obj);
  }
  return arr;
};

export { generateBulkProductsData };
