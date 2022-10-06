class fakeApi {
  constructor(products) {
    this.products = products;
  }

  // METHODS
  getById = (req, res) => {
    const productFound = products.find(
      (product) => product.id === parseInt(req.params.id)
    );

    if (!productFound)
      return res.status(404).json({
        message: "Product not Found",
      });
    res.json(productFound);
  };

  addProduct = (req, res) => {
    const product = req.body;
    product.id = this.products.length + 1;
    this.products.push(product);
    res.json(product);
  };

  getProduct = (req, res) => {
    const { id } = req.params;
    this.getById(id) != null
      ? res.send({ product: this.getById(id) })
      : res.send({ error: "Product not found" });
  };

  updateProduct = (req, res) => {
    const newData = req.body;
    const productFound = products.find(
      (product) => product.id === parseInt(req.params.id)
    );

    if (!productFound)
      return res.status(404).json({
        message: "Product not Found",
      });

    products = products.map((p) =>
      p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
    );

    res.json({
      message: "Product Updated Successfully",
    });
  };

  deleteProduct = (req, res) => {
    const productFound = products.find(
      (product) => product.id === parseInt(req.params.id)
    );

    if (!productFound)
      return res.status(404).json({
        message: "Product not Found",
      });

    products = products.filter((p) => p.id !== parseInt(req.params.id));

    res.sendStatus(204);
  };
}

module.exports = fakeApi;
