import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import styled from 'styled-components';
import { Strut } from 'components/Layout';
import Colors from 'constants/colors';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 35px;
    padding: 5px 10px;
    background-color: ${Colors.white};
    color: ${Colors.offBlack};
    border: 2px solid ${Colors.offBlack};
    border-radius: 6px;
`;

const Title = styled.h1`
    font-size: 16pt;
    font-weight: 500;
`;

const DeviceStateField = (props) => {
    const { name, onChange, defaultState = false } = props;
    const [checked, setChecked] = useState(defaultState);

    const handleChange = (newChecked) => {
        setChecked(newChecked);
        onChange(newChecked);
    };

    return (
        <Container>
            <Title>{name}</Title>
            <Strut size={15} />
            <ReactSwitch checked={checked} onChange={handleChange} />
        </Container>
    );
};

export default DeviceStateField;
