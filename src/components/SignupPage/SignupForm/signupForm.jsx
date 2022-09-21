import { useState } from "react";
import styled from "styled-components";

const SignupForm = ({onSubmit}) => {
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

       const registerForm = (e) => {
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
            <RegisterForm onSubmit={registerForm}>
                 <RegisterLabel htmlFor=''>Name
                 <RegisterInput
                     type="text"
                     name="name"
                     value={name}
                     onChange={updateInput}
                     placeholder="Enter name"
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required
                    />
                 </RegisterLabel>
                 <RegisterLabel htmlFor=''>Email
                  <RegisterInput
                     type="email"
                     name="email"
                     value={email}
                     onChange={updateInput}
                     placeholder="Enter email"
                     required
                    />
                </RegisterLabel>
                 <RegisterLabel htmlFor=''>Password
                  <RegisterInput
                     type="password"
                     name="password"
                     value={password}
                     onChange={updateInput}
                     placeholder="Enter password"
                     required
                    />
                </RegisterLabel>
                
                <RegisterBtn type="submit">SignUp</RegisterBtn>
            </RegisterForm>
            
        )
}

export default SignupForm;

const RegisterForm = styled.form`
  display: grid;
  margin-left:30px;
  width:20%;
`
const RegisterLabel = styled.label`
  display:flex;
  font-size: 25px;
  margin-bottom: 15px;
  justify-content: space-between;
`;

const RegisterInput = styled.input`
  margin-left: 20px;
`;

const RegisterBtn = styled.button`
    border: none;
    width:100%;
    margin-top:10px;
    border-radius: 5px;
    font-size: 25px;
    color:white;
    background-color: black;
    box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
     &:hover{
    background-color: #02a639;
 }
`;