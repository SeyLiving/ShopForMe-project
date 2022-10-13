import React from "react";
import { getProducts } from "../utils/getProducts";

export async function getStaticPaths() {
  const res = await getProducts();

  const paths = res.map((product) => ({ params: { productId: String(product._id) } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const post = await getProducts(context.params.productId);

  return {
    props: {
      post,
    },
  };
}

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1>PostDetails</h1>
      <hr />
      {product.name}
    </div>
  );
};

export default ProductDetails;
