import { useState } from "react";
import styled from "styled-components";

const LoginForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const updateInput = event => {
        switch (event.target.name) {
            case 'name':
                setName(event.target.value)
                break;
            case 'email':
                setEmail(event.target.value)
                break;
             case 'password':
                setPassword(event.target.value)
                break;
            default:
                return;
        }
    };

       const authForm = (e) => {
        e.preventDefault();
        onSubmit(name,email,password)
        reset();
    };
    const reset = () => {
        setName('' )
        setEmail('')
        setPassword('')
    }

    return (
            <LogForm onSubmit={authForm}>
                 <LoginLabel htmlFor=''>Name
                 <LoginInput
                     type="text"
                     name="name"
                     value={name}
                     onChange={updateInput}
                     placeholder="Enter name"
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required
                    />
                 </LoginLabel>
                 <LoginLabel htmlFor=''>Email
                  <LoginInput
                     type="email"
                     name="email"
                     value={email}
                     onChange={updateInput}
                     placeholder="Enter email"
                     required
                    />
                </LoginLabel>
                 <LoginLabel htmlFor=''>Password
                  <LoginInput
                     type="password"
                     name="password"
                     value={password}
                     onChange={updateInput}
                     placeholder="Enter password"
                     required
                    />
                </LoginLabel>
                
                <LoginBtn type="submit">LogIn</LoginBtn>
            </LogForm>
            
        )
}

export default LoginForm;

const LogForm = styled.form`
  display: grid;
  margin-left:30px;
  width:20%;
`;

const LoginLabel = styled.label`
display:flex;
  font-size: 25px;
  margin-bottom: 15px;
  justify-content: space-between;
`;

const LoginInput = styled.input`
 margin-left: 20px;
`;

const LoginBtn = styled.button`
    border: none;
    width:100%;
    margin-top:10px;
    border-radius: 5px;
    font-size: 25px;
    color: white;
    background-color: black;
    box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
     &:hover{
    background-color: #02a639;
 }
`;