import React from "react";
import { getProducts } from "../../utils/getProducts";
import Link from "next/link";

export async function getStaticProps() {
  const posts = await getProducts();

  return {
    props: {
      posts,
    },
  };
}

const Products = ({ products }) => {
  console.log(products);

  return (
    <div>
      {products?.map((product) => (
        <P>
          <Link href={`/products/${product._id}`}>{product.title}</Link>
        </P>
      ))}
      <h1>Posts</h1>
    </div>
  );
};

export default Products;
