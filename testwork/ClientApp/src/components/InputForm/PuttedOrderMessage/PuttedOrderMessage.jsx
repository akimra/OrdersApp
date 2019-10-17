import React from 'react';
import style from './PuttedOrderMessage.module.scss';
import {Alert} from "react-bootstrap";

const PuttedOrderMessage = () => {
    return(
        <Alert variant="success" className={style.successMessage}>
            Success!
        </Alert>
    );
};

export default PuttedOrderMessage;