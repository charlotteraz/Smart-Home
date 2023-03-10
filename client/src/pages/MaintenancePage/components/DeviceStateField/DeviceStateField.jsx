import React from 'react';
import ReactSwitch from 'react-switch';
import styled from 'styled-components';
import { Strut } from 'components/Layout';
import Colors from 'constants/colors';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    color: ${Colors.offBlack};
`;

const Title = styled.h1`
    font-size: 14px;
    font-weight: 500;
`;

const SampleSwitch = styled(ReactSwitch)``;

const DeviceStateField = (props) => {
    const { name, onChange, state } = props;

    const handleChange = (newChecked) => {
        onChange(newChecked);
    };

    return (
        <Container>
            <Title>{name}</Title>
            <Strut size={15} />
            <SampleSwitch height={20} width={35} checked={state} onChange={handleChange} />
        </Container>
    );
};

export default DeviceStateField;
