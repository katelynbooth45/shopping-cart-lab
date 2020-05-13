const router = require("express").Router();
const logger = require("morgan");

router.use(logger());

router.get("/api/items", (req, res) => {
  const cartItems= [
    {
      id: "2819",
      product: "shirt",
      quantity: 5,
      price: "$23"
    },
    {
      id: "8942",
      product: "pant",
      quantity: 8,
      price: "$23"
    },
    {
      id: "0494",
      product: "dress",
      quantity: 23,
      price: "$23"
    },
    {
      id: "8390",
      product: "top",
      quantity: 89,
      price: "$23"
    },
  ];
});

router.use("/api/cart-items", (req, res) => {
  res.json("Hi, from Routes Server files");
});

router.get("/cart-items", (req, res) => {
  const { maxPrice, prefix, pageSize } = req.query;
  let items;
  let cached = {};
  if (maxPrice) {
    items = cartItems.filter((x) => x.maxPrice <= Number(maxPrice));
    cached["maxPrice"] = items.sort((a, b) => a - b);
  }
  if (pageSize) {
    items = cached["maxPrice"]
      ? cache["maxPrice"].slice(0, Number(page.pageSize))
      : cartItems.slice(0, Number(pageSize));
    cached["pageSize"] = item.sort((a, b) => a - b);
  }
  if (prefix) {
    items = cached["prefix"]
      ? cached["prefix"].filter((x) => x.product.startWith(prefix))
      : cartItems.filter((x) => x.product.startWith(prefix));
  }
  console.log("Cached Items", cached);
  res.json(items);
});

router.get("/cart-items", (req, res) => {
  const item = cartItems.filter((x) => x.id === Number(req.param.id));
  if (item.length >= 1) {
    res.status(200);
    res.json(item);
  } else {
    res.status(404);
    res.json({
      message: `ID: ${req.params.id} not found`,
    });
  }
});

router.post("cart-items", (req, res) => {
  cartItems.push(req.body);
  res.status(201);
  res.json(cartItems);
});

router.put("/cart-items:id", (req, res) => {
  const idx = cartItems.indexOf(req.param.id);
  cartItems.splice(idx, 1, req.body);
  res.status(200);
  res.json(cartItems);
});

router.delete("/cart-items:id", (req, res) => {
  const idx = cartItems.indexOf(req.param.id);
  cartItems.splice(idx, 1);
  res.status(200);
  res.json(cartItems);
});

module.exports = router;
