import React from "react";
import { Link } from "react-router-dom";
import { PrincipalContext } from "./cards";

const { useContext } = require("react");

const Principal = (props) => {
    const principalState = useContext(PrincipalContext);

    function update() {
        principalState.setPrincipal(props.principal);
    }

    return (
        <tr>
            <th scope="row">{props.principal.id}</th>

            <td><Link onClick={update}>{props.principal.nombre}</Link></td>

            <td>{props.principal.tipo}</td>
            <td>{props.principal.region}</td>
        </tr>
    );
};

export default Principal;