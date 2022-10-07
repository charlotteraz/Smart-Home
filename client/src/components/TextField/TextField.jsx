import Colors from 'helpers/colors';
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 45px;
    padding: 0px 15px;
    margin: 0px;
    border: 1px solid ${Colors.offBlack};
    border-radius: 10px;
    font-size: 11pt;
    box-sizing: border-box;
`;

const TextField = (props) => {
    const { placeholder, value, onChange, type = 'text' } = props;
    return <StyledInput placeholder={placeholder} value={value} onChange={onChange} type={type} />;
};

export default TextField;
