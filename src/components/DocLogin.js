import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';



const DocLogin = () => {
    return (
        <Container>
            <Component>
                <h1>Fill the form. <br /> It's easy.</h1>
                <RowOne>
                    <TextField id="standard-basic" label="Full Name" />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{ shrink: true, }}
                    />
                </RowOne>
                <RowTwo>
                    <TextField id="standard-basic" label="Email" />
                </RowTwo>
                <RowTwo>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </RowTwo>
                <RowTwo style={{ margin: '2rem 0 3rem 0' }}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Describe your Speciality"
                        multiline
                        rows={4}
                        variant="outlined"
                        defaultValue=" "
                    />
                </RowTwo>
                <SubmitButton>
                    Submit
                </SubmitButton>

            </Component>

            <RightText>
                <h2>Let's talk about our<br /> work culture.</h2>
                <p>At DocHouse, we aim to unleash the full potential of our colleagues, our teams and our customers. We respect differences in people and we value that everyone has specific talents to bring to the table. We believe that self-organization and a sense of purpose are important elements to unlock our full potential. We work in a humane way, though we don’t shy away from taking tough decisions when needed.</p>
            </RightText>
        </Container>
    )
}

export default DocLogin

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 10vh 14vw;
    align-items: center;
`

const Component = styled.div`
    width: 50%;
    padding-right: 2.5rem;

    h1{
        font-size: 3.5rem;
        line-height: 3.8rem;
        margin-bottom: 3rem;
    }
`

const RowOne = styled.div`
    margin-bottom: 1.5rem;
    width: 450px;
    display: flex;
    justify-content: space-between;


    div{
        /* margin-right: 0.75rem; */
        width: 90%;
    }
`

const RowTwo = styled.div`
    margin-bottom: 1.5rem;
    width: 425px;
    
    div{
        width: 100%;
    }
`

const SubmitButton = styled.button`
    border: none;
    color: #fff;
    background-color: #eb4d55;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    
    &:hover{
        background: #e3131d;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
`
const RightText = styled.div`
    width: 50%;
    border-left: 1px solid #dddbdb;
    padding: 1.5rem 0 1.5rem 2.5rem;

    h2{
        font-size: 1.9rem;
        line-height: 2rem;
        margin-bottom: 1.2rem;
    }

    p{
        font-size: 0.9rem;
        color: #9f9090;
        font-weight: 300;
    }
`