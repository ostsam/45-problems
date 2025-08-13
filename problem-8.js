// given current stock (product → quantity) and a list of orders (product → quantity),
// //return which orders cannot be fulfilled (product not in stock or insufficient quantity).

const stock2 = { orange: 5, grape: 45, mango: 1, apple: 10, potato: 3 };
const orders2 = { apple: 8, mango: 3, orange: 6, pear: 2 };
// expected: ["orange", "pear"]

const stockArr = Object.keys(stock2);
const orderArr = Object.keys(orders2);

const unfulfillableOrders = (stock, orders) => {
  let unfulfillable = [];

  const filtered = (stockArr, orderArr) => {
    orderArr.filter((order) => {
      if (!stockArr.includes(order)) {
        unfulfillable.push(order);
      }
    });
  };
  filtered(stockArr, orderArr);

  Object.entries(stock).map((stockk) =>
    Object.entries(orders).map((fruit) => {
      console.log("comparing ", stockk, "and", fruit);
      if (fruit[0] == stockk[0] && fruit[1] > stockk[1]) {
        unfulfillable.push(fruit[0]);
      }
    })
  );
  return unfulfillable;
}; // ["apple", "orange"]
// check key of each value for the stock and compare it to the order.
//If order.key > stock.key push into the unfullfillable array]]

//If order.key for stock.key doesn't exist push into the array
console.log(unfulfillableOrders(stock2, orders2));
