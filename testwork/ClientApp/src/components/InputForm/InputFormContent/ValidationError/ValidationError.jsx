import React from 'react';
import { Alert } from 'react-bootstrap';
import style from "./ValidationError.module.scss";

const ValidationError = (props) => {
    const list = Object.keys(props.formErrors).map((fieldName, i) => {

        if (props.formErrors[fieldName]) {
            return (
                <p key={i}>
                    {fieldName === "netError" ? fieldName : ""} {props.formErrors[fieldName]}
                </p>
            );
        } else {
            return null;
        }

    });

    return (
      <Alert variant="danger" className={style.errorBox}>
          {list}
      </Alert>
    );
};

export default ValidationError;