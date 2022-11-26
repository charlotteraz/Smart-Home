import React from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal';
import Button from 'components/Button';
import ReactSwitch from 'react-switch';
import Colors from 'constants/colors';
import { Strut } from 'components/Layout';

const ModalContainer = styled.div`
    position: relative;
    align-self: center;
    width: 225px;
    border-radius: 10px;
    background-color: ${Colors.white};
    border: solid 4px ${Colors.white};
    color: ${Colors.offBlack};
    padding: 10px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;

const Title = styled.h2``;

const StateTitle = styled.h3`
    font-weight: 400;
`;

const HorizontalContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const CloseButton = styled(Button)`
    position: absolute;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 1;
    color: ${Colors.offBlack};
    background-color: ${Colors.white};
`;

const DeviceStateModal = (props) => {
    const { name, state, onChange, onClose } = props;
    return (
        <Modal isOpen>
            <ModalContainer>
                <CloseButton title="&#10006;" onClick={onClose} />
                <Title>{name}</Title>
                <Strut vertical size={30} />
                <HorizontalContainer>
                    <StateTitle>State:</StateTitle>
                    <Strut size={15} />
                    <ReactSwitch
                        width={50}
                        height={24}
                        checked={state}
                        onChange={(checked) => onChange(checked)}
                    />
                </HorizontalContainer>
            </ModalContainer>
        </Modal>
    );
};

export default DeviceStateModal;
