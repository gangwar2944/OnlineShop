
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient((255,255,255,0.5),(255,255,255,0.5));
    background-image: url("https://images.unsplash.com/photo-1556741533-974f8e62a92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
`
const Wrapper = styled.div`
    margin-top: 60px;
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    margin: auto;
    ${mobile({width:"80%"})}

`
const Title = styled.h1`
    padding: 0 20px;
    ${mobile({padding:"0 5px",fontSize:"25px"})}
`
const Form = styled.form`
    margin: auto;
`
const Input = styled.input`
    min-width: 45%;
    flex: 1;
    margin: 10px 5px 0 0 ;
    padding: 10px 20px;
    ${mobile({width:"100%"})}
`
const Agrement = styled.div`
    font-size: 12px;
    margin: 10px 0;
`
const Button = styled.button`
    width: 40%;
    background-color: transparent;
    border: 1px solid teal;
    color:teal;
    padding: 8px 10px;
&:hover{
    background-color: teal;
    color: #fff;
    border: none;
    cursor: pointer;
}
`
const Register = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>Create An Account</Title>
                    <Form>
                        <Input placeholder="Enter your first name" />
                        <Input placeholder="Enter your last name" />
                        <Input placeholder="Enter your email" />
                        <Input placeholder="Enter your UserName" />
                        <Input placeholder="Enter your Password" />
                        <Input placeholder="Enter your confirm PassWord" />
                        <Agrement>
                            i authorise to the website ,that it will take my crediential
                        </Agrement>
                        <Button>register</Button>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default Register