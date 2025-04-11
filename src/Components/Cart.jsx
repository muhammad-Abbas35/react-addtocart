import React from "react";

export const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  console.log("cartAllProduct", cartAllProduct);
  const data = {
    id: 1,
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=70",
    imgCousins: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/p/u/8/-original-imagugptptuacajg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/c/p/-original-imagugptdmkvpwpm.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/f/r/2/-original-imagugptvr3dbzpb.jpeg?q=70",
    ],
    model: "vivo Y200 ",
    brand: "Vivo",
    price: 21999,
    color: "",
    space: "8 GB RAM | 128 GB ROM",
    camera: "64MP + 2MP | 16MP Front Camera",
    battery: "4800 mAh Battery",
    count: 1,
    isAdded: false,
    type: "Mobile",
    isTrending: true,
    description:
      "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box",
  };
  const handleDecrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };
  const handleIncrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  const handleDeleteItem = (id) => {
    const filterItem = cartAllProduct.filter((item) => item.id !== id);
    setCartAllProduct(filterItem);
  };
  return (
    <div className="container-fluid">
      <div className="row p-3 gap-3">
        {cartAllProduct.map((product) => {
          return (
            <div className="col-8 border rounded d-flex gap-3">
              <div className="p-1">
                <img
                  src={product.img}
                  alt={product.model}
                  className="cart-product-size"
                />
              </div>
              <div className="p-1 d-flex gap-3">
                <div>
                  <h3 className="text-hidden m-0">
                    {product.model.toLocaleUpperCase()}
                  </h3>
                  <p className="m-0 fs-5">
                    <span className="font-bold">Rs </span>
                    {product.price}
                  </p>
                  <p className="m-0 font-size-space font-bold">
                    {product.space}
                  </p>
                  <p className="m-0 font-bold">{product.camera}</p>
                  <div className="d-flex gap-3">
                    <p
                      className="m-0 p-0 border px-2 py-1 rounded pointer"
                      onClick={() => handleDecrement(product.id)}
                    >
                      -
                    </p>
                    <p className="m-0">{product.count}</p>
                    <p
                      className="m-0 p-0 border px-2 py-1 rounded pointer"
                      onClick={() => handleIncrement(product.id)}
                    >
                      +
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <p>{product.description}</p>
                  <p onClick={() => handleDeleteItem(product.id)}>
                    <i className="fa-solid fa-trash text-danger pointer"></i>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {cartAllProduct.length == 0 && (
          <div className="col-12">
            <h1 className="text-center fs-3">No Products Available in Cart</h1>
          </div>
        )}
      </div>
    </div>
  );
};
