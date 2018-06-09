import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-image: url('login_signup_background_lblue.jpg');
    height: 100vh;
    width: 100vw;
    vertical-align: middle;
    display: table-cell;
`;

export const FormContainer = styled.div`
    margin: auto;
    width: 300px;
`;

export const Error = styled.h3`
    color: darkred;
    text-align: center;
`;

export const Href = styled(Link)`
    color: #212121;
    margin-top: 1rem;
    display: block;
    width: 100%;
    text-align: center;
`;

export const Header = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 3.5rem;
    text-align: center;
    padding-bottom: 4rem;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 1.5rem;
    border-bottom: 1px #212121 solid;
    margin-bottom: 1rem;
    padding-bottom: 0.3rem;
    color: #212121;
    
    :focus {
        outline: none;
    }
    
    ::placeholder {
        color: #212121;
        text-align: left;
    }
`;

export const Button = styled.button`
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
`;
