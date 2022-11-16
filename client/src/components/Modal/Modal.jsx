import React from 'react';
import ReactModal from 'react-modal';
import Colors, { HexToRGB } from 'constants/colors';

const Modal = (props) => {
    const { children, style, ...otherProps } = props;

    const contentElement = () => (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {children}
        </div>
    );

    return (
        <ReactModal
            style={{
                overlay: {
                    backgroundColor: HexToRGB(Colors.black, 0.2),
                },
            }}
            contentElement={contentElement}
            ariaHideApp={false}
            {...otherProps}
        />
    );
};

export default Modal;
