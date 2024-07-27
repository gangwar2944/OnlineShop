import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Typography, Select, MenuItem, TextField } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled(Box)({});
const Title = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1.25),
  marginTop: theme.spacing(7.5),
}));
const FilterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));
const Filter = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1.25),
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
const FilterText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
}));
const StyledSelect = styled(Select)(({ theme }) => ({
  marginLeft: theme.spacing(1.25),
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(1.25, 0, 0, 0),
  },
}));

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("sort");

  const handleFilters = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filters, [name]: value });
  };
  const color = ["White", "Black", "Yellow", "Green", "Red", "Blue", "Gray"];
  const size = ["S", "M", "L", "XL", "XXL"];
  return (
    <Container>
      <Navbar />
      <Title variant="h5">{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter1</FilterText>
          <TextField
            name="color"
            onChange={handleFilters}
            variant="outlined"
            label="Color"
            size="small"
            select
            sx={{ width: "150px",marginLeft:"10px" }}
          >
            {color.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="size"
            onChange={handleFilters}
            variant="outlined"
            label="Size"
            size="small"
            select
            sx={{ width: "150px",marginLeft:"10px" }}
          >
            {size.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Filter>
        <Filter>
          <FilterText>Filter2</FilterText>
          <TextField
            onChange={(e) => setSort(e.target.value)}
            variant="outlined"
            label="Sort"
            size="small"
            select
            sx={{ width: "150px",marginLeft:"10px" }}
          >
            <MenuItem value="sort">Sort</MenuItem>
            <MenuItem value="dec">Price (dec)</MenuItem>
            <MenuItem value="incre">Price (asc)</MenuItem>
          </TextField>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
