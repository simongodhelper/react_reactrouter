function addCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const productList = [
  {
    id: 1,
    name: "產品A",
    price: 200,
    joind: false,
    kind: "Computer",
    salePrice: 100,
    date: "2023-10-25 15:20:23",
    detail_1: "產品A的詳細資訊",
    detail_2:
      "後台傳入時，可支援按enter可換行X可換行可換行\n可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行\nDXDDXD",
    detail_3: "123123123\n123123123",
    img_1: <img src={`https://picsum.photos/id/10/1000/600`} alt="" />,
    img_2: <img src={`https://picsum.photos/id/11/1000/600`} alt="" />,
    img_3: <img src={`https://picsum.photos/id/12/1000/600`} alt="" />,
  },
  {
    id: 2,
    name: "產品B",
    price: 800,
    joind: true,
    kind: "cloth",
    salePrice: 1801,
    date: "2023-10-25 15:20:23",
    detail_1: "產品B的詳細資訊",
    detail_2:
      "後台傳入時，可支援按enter可換行X可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行可換行\nDXDDXD",
    img_1: <img src={`https://picsum.photos/id/12/1000/600`} alt="" />,
  },
  {
    id: 3,
    name: "產品C",
    price: 1000,
    joind: true,
    kind: "Computer",
    salePrice: "",
    date: "2020-10-20 15:20:23",
    detail_1: "產品C的詳細資訊",
  },
  {
    id: 4,
    name: "產品D",
    price: 1200,
    joind: true,
    kind: "cloth",
    salePrice: 900,
    date: "2021-10-20 15:20:23",
    detail_1: "產品D的詳細資訊",
  },
  {
    id: 5,
    name: "產品E",
    price: 1300,
    joind: false,
    kind: "Computer",
    salePrice: 960,
    date: "2023-10-20 15:20:23",
    detail_1: "產品E的詳細資訊",
  },
  {
    id: 6,
    name: "產品F",
    price: 1300,
    joind: false,
    kind: "cloth",
    salePrice: 960,
    date: "2022-10-20 15:20:23",
    detail_1: "產品F的詳細資訊",
  },
  {
    id: 7,
    name: "產品G",
    price: 13000,
    joind: true,
    kind: "cloth",
    salePrice: 9600,
    date: "2023-10-20 15:20:23",
    detail_1: "產品G的詳細資訊",
  },
  {
    id: 8,
    name: "產品H",
    price: 13000,
    joind: false,
    kind: "Computer",
    salePrice: 9600,
    date: "2023-10-20 15:20:23",
    detail_1: "產品G的詳細資訊",
  },
];

productList.map((product) => {
  if (product.price < product.salePrice || product.salePrice === "") {
    product.salePrice = product.price;
  }
  product.price = addCommas(product.price);
  product.salePrice = addCommas(product.salePrice);
  return product;
})

export default productList;
