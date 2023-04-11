const ProductPage = () => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
        </li>
      ))}
    </ul>
  );
};

export default ProductPage;
