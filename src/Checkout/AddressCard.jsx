import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../services/redux/store";
import { currentAddress } from "../services/redux/address/reducer";
// import { useDispatch } from "react-redux";

const AddressContainer = styled.div`
  width: 95%;
  padding: 20px;
  background-color: #fff;
  margin-bottom: 10px;
`;
const H3 = styled.h3`
  padding: 0 0 5px 0;
`;
const Para = styled.p`
  padding: 8px 0 8px 0;
`;
const AddressCard = (props) => {
  const data = props.data;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const redirectOrderSummury = (addId) => {
    dispatch(currentAddress(addId));
    navigate(`?step=3`);
  };

  return (
    <>
      <AddressContainer>
        <H3>
          {data?.firstname} {data?.lastname}
        </H3>
        <Para>{data?.area}</Para>
        <Para>{data?.landmark}</Para>
        <H3>{data?.pinCode}</H3>
        <Para>{data?.phoneNumber}</Para>

        <Button variant="contained" onClick={() => redirectOrderSummury(data)}>
          Delivered Here
        </Button>
      </AddressContainer>
    </>
  );
};

export default AddressCard;
