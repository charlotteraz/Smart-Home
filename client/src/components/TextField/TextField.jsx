import React from 'react';
import Colors from 'constants/colors';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 45px;
    padding: 0px 15px;
    margin: 0px;
    border: 1px solid #848484;
    border-radius: 20px;
    font-size: 11pt;
    box-sizing: border-box;
`;

const TextField = (props) => {
    const {
        className,
        placeholder,
        value,
        onChange,
        type = 'text',
        readOnly = false,
        disabled = false,
    } = props;

    return (
        <StyledInput
            className={className}
            style={disabled ? { backgroundColor: Colors.lightGray } : {}}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            disabled={disabled}
            type={type}
        />
    );
};

export default TextField;
