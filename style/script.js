let hotel = [
  [
    {
      room: 1,
      price: 300,
      brand: "Luxe",
      children: false,
    },
    {
      room: 2,
      price: 4000,
      brand: "Deluxe",
      children: true,
    },
    {
      room: 3,
      price: 1000,
      brand: "Deluxe",
      children: false,
    },
    {
      room: 4,
      price: 900,
      brand: "Luxe",
      children: true,
    },
  ],
  [
    {
      room: 5,
      price: 700,
      brand: "Luxe",
      children: true,
    },
    {
      room: 6,
      price: 79000,
      brand: "President",
      children: true,
    },
    {
      room: 7,
      price: 600,
      brand: "Luxe",
      children: false,
    },
    {
      room: 8,
      price: 950,
      brand: "Luxe",
      children: true,
    },
  ],
  [
    {
      room: 9,
      price: 1900,
      brand: "Deluxe",
      children: false,
    },
    {
      room: 10,
      price: 5000,
      brand: "Deluxe",
      children: true,
    },
    {
      room: 11,
      price: 1000,
      brand: "Deluxe",
      children: false,
    },
    {
      room: 12,
      price: 250,
      brand: "Luxe",
      children: false,
    },
  ],
  [
    {
      room: 13,
      price: 10000,
      brand: "President",
      children: true,
    },
    {
      room: 11,
      price: 8000,
      brand: "President",
      children: false,
    },
  ],
];

let rooms = {
  all_roms: [],
  rooms: 0,
};
let brands = {
  president: [],
  deluxe: [],
  luxe: [],
};

let room_level = {
  perviy: 0,
  vtoroy: 0,
  tretiy: 0,
  chetvertiy: 0,
};

//1 отфильтровать по категориям
//2 добавить ключ eting с буленовым значением в каждый номер
//3 посчитать и красиво раставить все комнаты переменную rooms
//4 найти самую дорогую комнату
//5 посчитать сколько стоит каждый этаж
//6 посчитать сколько стоят все комнаты вместе взятые
//7 найти все комнаты в которых живут дети 
let children = []
let unchildren = []

// 7 \\
const setup = () => {
  for (let item of hotel) {
for( let itemTwo of item ){
      if (itemTwo.children === true) {
        children.push(itemTwo)
      } else {
        unchildren.push(itemTwo)
      }
      }
    }
  }


console.log(children,unchildren);


hotel = hotel.flat(Infinity) //можно сказать вытаскивает все илементы до указанной глубины 

// 1 \\
brands.president = hotel.filter(item => item.brand == "President")

brands.deluxe = hotel.filter(item => item.brand == "Deluxe")

brands.luxe = hotel.filter(item => item.brand == "Luxe")

// 2 \\
hotel.forEach(item => {
  item.eting = 'boolean'
})
console.log(brands)


// 3 \\
rooms.all_roms = hotel.sort((a, b) => a.price - b.price);
console.log(rooms);


// 4 \\ 
let most = {}
most = hotel.find(item => item.price > 10000)
console.log(most);
// 4 \\ 













// ** ЗАДАЧА 57 - Трансформация массива объектов
//  *
//  * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
//  *
//  * 2. Обратите внимание, что
//  *  - некоторые имена свойств в каждом сообщении изменены
//  *  - ID каждого сообщения увеличен на 1000
//  *
//  * 3. Исходный массив постов должен остаться без изменений
//  */

// const testPosts = [
//   {
//     postId: 234,
//     author: 'robd',
//     commentsQty: 5,
//   },
//   {
//     postId: 823,
//     author: 'sady',
//   },
//   {
//     postId: 161,
//     author: 'merryl',
//     commentsQty: 8,
//   },
// ]

// const processedPosts = processPosts(testPosts)
// console.log(processedPosts)

// [
//   {
//     postId: 1234,
//     postAuthor: 'robd',
//     postCommentsQty: 5
//   },
//   {
//     postId: 1823,
//     postAuthor: 'sady',
//     postCommentsQty: 0
//   },
//   {
//     postId: 1161,
//     postAuthor: 'merryl',
//     postCommentsQty: 8
//   }
// ]

// console.log(testPosts)
// оригинальный массив должен остаться без изменений