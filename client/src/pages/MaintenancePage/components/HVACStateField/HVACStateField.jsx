import React from 'react';
import TextField from 'components/TextField';
import styled from 'styled-components';
import { Strut } from 'components/Layout';
import { clamp } from 'util/math';
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

const TempField = styled(TextField)`
    width: 50px;
    height: 25px;
    border-radius: 6px;
    padding-right: 0;
    padding-left: 5px;
    font-size: 10pt;
`;

const HVACStateField = (props) => {
    const { name, temp, onTempChange } = props;

    const handleTempChange = (e) => {
        if (!onTempChange) {
            return;
        }
        const { value } = e.target;
        const newTemp = value ? parseInt(value, 10) : 0;
        onTempChange(clamp(newTemp, 0, 100));
    };

    return (
        <Container>
            <Title>{name}</Title>
            <Strut size={15} />
            <TempField value={temp.toString()} onChange={handleTempChange} type="number" />
        </Container>
    );
};

export default HVACStateField;
