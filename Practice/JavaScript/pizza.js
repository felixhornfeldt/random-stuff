let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
}

const getSubTotal = (orderCount) => {
  return orderCount * 7.5;
}

const getTax = (orderCount) => {
  return getSubTotal(orderCount) * 0.06;
}

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
}

takeOrder('ham', 'thick');
takeOrder('pineapple', 'mid');
takeOrder('bacon', 'thin');

document.write(getTotal());