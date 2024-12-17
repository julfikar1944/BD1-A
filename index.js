const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let totalCartValue = newItemPrice + cartTotal;
  res.send(totalCartValue.toString());
});

app.get('/membership-discount', (req, res) => {
  let cartTotal =  parseFloat(req.query.cartTotal);
  let isMember = parseFloat(req.query.isMember) === 'true';
  let discount = isMember ? 0.1 : 0;
  let finalPrice = cartTotal * (1-discount);
  res.send(finalPrice.toString());
});

app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let taxRate = 0.05;
  let tax = cartTotal * taxRate;
  res.send(tax.toString());
});

app.get('/shipping-cost', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let shippingCost = weight * distance * 0.1;
  res.send(shippingCost.toString());
});

app.get('/loyalty-points', (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyaltyPoints = purchaseAmount * 2;
  res.send(loyaltyPoints.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
