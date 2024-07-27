import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { login } from '../services/redux/apiCalls';
import { mobile } from "../responsive";
import { loginUser } from "../services/redux/login/action";
import { useAppDispatch, useAppSelector } from "../services/redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c3c0c0;
`;
const Wrapper = styled.div`
  margin-top: 60px;
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  margin: auto;
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
  text-transform: uppercase;
  ${mobile({ fontSize: "20px" })}
`;
const Form = styled.form`
  margin: auto;
`;
const Input = styled.input`
  width: 100%;
  flex: 1;
  margin: 10px 0 0 0;
  padding: 10px 20px;
`;
const Button = styled.button`
  width: 40%;
  background-color: transparent;
  border: 1px solid teal;
  color: teal;
  padding: 8px 10px;
  margin-top: 10px;

  &:hover {
    background-color: teal;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
`;
const AnotherOption = styled.span`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  text-align: start;
`;
const Links = styled.span`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userData = useAppSelector((state) => state.user.userDataState.userData);
  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      navigate("/");
    }
  }, [userData]);
  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <Input
              placeholder="Enter your UserName & email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick}>Login</Button>
            {/* {error && <Error>Something went wrong ....</Error>} */}
          </Form>
          <AnotherOption>
            <Links>Forget Password</Links>
            <Links>
              <Link to="/register">Register</Link>{" "}
            </Links>
          </AnotherOption>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
