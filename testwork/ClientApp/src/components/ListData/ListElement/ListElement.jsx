import React from 'react';

const ListElement = (props) => {

    const date = props.dateBirth.substring(0, 10).match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})/);
    const localizedDate = `${date[3]}.${date[2]}.${date[1]}`;

  return (
      <tr>
          <td>{props.username}</td>
          <td>{props.phone}</td>
          <td>{localizedDate}</td>
          <td>{props.product}</td>
          <td>{props.colorPhone}</td>
          <td>{props.headset ? "+" : "-"}</td>
          <td>{props.charge ? "+" : "-"}</td>
      </tr>
  );
};

export default ListElement;