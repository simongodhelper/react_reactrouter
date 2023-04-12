const productList = [
  {
    id: 1,
    name: "產品A",
    price: 200,
    isSale: true,
    joind: true,
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
    isSale: false,
    joind: false,
    salePrice: 800,
    date: "2023-10-20 15:20:23",
    detail_1: "產品B的詳細資訊",
  },
  {
    id: 3,
    name: "產品C",
    price: 1000,
    isSale: true,
    joind: true,
    salePrice: 900,
    date: "2020-10-20 15:20:23",
    detail_1: "產品C的詳細資訊",
  },
  {
    id: 4,
    name: "產品D",
    price: 1200,
    isSale: true,
    joind: true,
    salePrice: 950,
    date: "2021-10-20 15:20:23",
    detail_1: "產品D的詳細資訊",
  },
  {
    id: 5,
    name: "產品E",
    price: 1300,
    isSale: true,
    joind: true,
    salePrice: 950,
    date: "2023-10-20 15:20:23",
    detail_1: "產品E的詳細資訊",
  },
  {
    id: 6,
    name: "產品F",
    price: 1300,
    isSale: true,
    joind: true,
    salePrice: 950,
    date: "2022-10-20 15:20:23",
    detail_1: "產品F的詳細資訊",
  },
  {
    id: 7,
    name: "產品G",
    price: 1300,
    isSale: true,
    joind: true,
    salePrice: 95000,
    date: "2023-10-20 15:20:23",
    detail_1: "產品G的詳細資訊",
  },
];

console.log(productList);

export default productList;
