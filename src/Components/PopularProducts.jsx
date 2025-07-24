import ProductChanger from "../Hooks/ProductChanger.jsx";

function PopularProducts() {
      const products = [
    {
      name: "STONE CUP",
      price: 299,
      description: "Lorem ipsum dolor sit amet",
      imgUrl: "/product-1.jpg",
    },
    {
      name: "GRAY BAG",
      price: 299,
      description: "Lorem ipsum dolor sit amet",
      imgUrl: "/product-2.jpg",
    },
    {
      name: "CHAIR",
      price: 299,
      description: "Lorem ipsum dolor sit amet",
      imgUrl: "/product-3.jpg",
    },
    {
      name: "STOOL",
      price: 299,
      description: "Lorem ipsum dolor sit amet",
      imgUrl: "/product-4.jpg",
    }
  ]
  return (
    <ProductChanger products={products} />
  )
}

export default PopularProducts