import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { useAppDispatch, useAppSelector } from "../../services/redux/store";
import { Grid } from "@mui/material";
import { getAllProduct } from "../../services/redux/product/action";

const Container = styled(Grid)(({ theme }) => ({
  padding: "20px",
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
}));

const Products = ({ cat, filters, sort }) => {
  const dispatch = useAppDispatch();
  const getProducts = useAppSelector(
    (state) => state.product.productDataState.productDataList
  );
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    void dispatch(getAllProduct(cat));
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        getProducts.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [getProducts, cat, filters]);
  useEffect(() => {
    if (sort === "sort") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  //  console.log(filteredProducts)

  return (
    <Container container spacing={2}>
      {cat
        ? filteredProducts.map((item) => {
            return <Product item={item} key={item.id} />;
          })
        : getProducts.map((item) => {
            return <Product item={item} key={item.id} />;
          })}
    </Container>
  );
};

export default Products;
