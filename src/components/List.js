const productList = [
  {
    id: 1,
    name: "產品A",
    price: 200,
    joind: false,
    salePrice: 100,
    date: "2023-10-25 15:20:23",
    detail_1: "產品A的詳細資訊",
    detail_2: "XDXDXDXDXDDXD",
    img_1: (
      <img
        src={`https://picsum.photos/id/10/1000/600`}
        style={{ width: "50%" }}
        alt=""
      />
    ),
  },
  {
    id: 2,
    name: "產品B",
    price: 800,
    joind: true,
    salePrice: 1801,
    date: "2023-10-20 15:20:23",
    detail_1: "產品B的詳細資訊",
  },
  {
    id: 3,
    name: "產品C",
    price: 1000,
    joind: true,
    salePrice: "",
    date: "2020-10-20 15:20:23",
    detail_1: "產品C的詳細資訊",
  },
  {
    id: 4,
    name: "產品D",
    price: 1200,
    joind: true,
    salePrice: 900,
    date: "2021-10-20 15:20:23",
    detail_1: "產品D的詳細資訊",
  },
  {
    id: 5,
    name: "產品E",
    price: 1300,
    joind: false,
    salePrice: 960,
    date: "2023-10-20 15:20:23",
    detail_1: "產品E的詳細資訊",
  },
  {
    id: 6,
    name: "產品F",
    price: 1300,
    joind: false,
    salePrice: 960,
    date: "2022-10-20 15:20:23",
    detail_1: "產品F的詳細資訊",
  },
  {
    id: 7,
    name: "產品G",
    price: 13000,
    joind: true,
    salePrice: 9600,
    date: "2023-10-20 15:20:23",
    detail_1: "產品G的詳細資訊",
  },
];
productList
  .map((product) => {
    if (product.price < product.salePrice || product.salePrice === "") {
      product.salePrice = product.price;
    }
    return product;
  })
  .forEach((product) => {
    if (new Date(product.date) < new Date()) {
      product.salePrice = product.price;
    }
  });

export default productList;
