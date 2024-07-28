import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../services/redux/store";
import { loginUser } from "../../services/redux/login/action";
import { mobile } from "../../responsive";

const Container = styled('div')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#c3c0c0',
}));

const Wrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(7.5),
  width: '40%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  backgroundColor: '#fff',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  padding: "20px",
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
}));

const Title = styled('h1')(({ theme }) => ({
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}));

const Form = styled('form')(({ theme }) => ({
  margin: 'auto',
}));

const Input = styled('input')(({ theme }) => ({
  width: '100%',
  flex: 1,
  margin: theme.spacing(1.25, 0, 0, 0),
  padding: theme.spacing(1.25, 2.5),
}));

const Button = styled('button')(({ theme }) => ({
  width: '40%',
  backgroundColor: 'transparent',
  border: '1px solid teal',
  color: 'teal',
  padding: theme.spacing(1, 1.25),
  marginTop: theme.spacing(1.25),
  '&:hover': {
    backgroundColor: 'teal',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  '&:disabled': {
    color: 'teal',
    cursor: 'not-allowed',
  },
}));

const AnotherOption = styled('span')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1.25),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0, 1.25),
  textAlign: 'start',
}));

const Links = styled('span')(({ theme }) => ({
  textDecoration: 'underline',
  color: 'blue',
  cursor: 'pointer',
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userData = useAppSelector((state) => state.user.userDataState.userData);

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      navigate("/");
    }
  }, [userData, navigate]);

  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
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
            <Link to="/register">Register</Link>
          </Links>
        </AnotherOption>
      </Wrapper>
    </Container>
  );
};

export default Login;
