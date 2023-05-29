import React from "react";
import { PrincipalContext } from "./cards";

const { useContext } = require("react");

const Principal = (props) => {
    const principalState = useContext(PrincipalContext);

    function update() {
        principalState.setPrincipal(props.principal);
    }

    return (
        <tr onClick={update}>
            <th scope="row">{props.principal.id}</th>

            <td>{props.principal.nombre}</td>

            <td>{props.principal.tipo}</td>
            <td>{props.principal.region}</td>
        </tr>
    );
};

export default Principal;