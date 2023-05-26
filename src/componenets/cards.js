import Principal from "./card";
import Detail from "./detail";
import { Col, Container, Row } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';
import Button from 'react-bootstrap/Button';
import { Card} from "react-bootstrap";

const { useEffect, useState, createContext } = require("react");

export const PrincipalContext = createContext({
    principal: {},
    setPrincipals: () => { }
});

function Principals() {

    const setPrincipal = (principal) => {
        setState({ ...state, principal: principal })
    }
    const initState = {
        principal: [],
        setPrincipal: setPrincipal
    }
    const [state, setState] = useState(initState);

    const [principals, setPrincipals] = useState([]);


    useEffect(() => {

        const URL =
            "http://localhost:3001/cafes";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setPrincipals(data);
                console.log(data);
            });

    }, []);


    function showDetail (){
        if (PrincipalContext.principal != {}){
            return (<Col>
                <Detail/>
                </Col>)
        }
        else{
            return (
                <Col></Col>
            )
        }

    }

    return (
        <div className="container">
            <PrincipalContext.Provider value={state}>
                <Row>
                    <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-coffee-fresh-brown-poster-banner-background-image_133007.jpg" alt="Imagen" />
                </Row>
                <Row>
                    <Col>
                <table className="table"><thead className="table-dark"><tr>
                    <th scope="col">#</th>
                    <th scope="col">
                        <FormattedMessage id="Name" />
                    </th>
                    <th scope="col">
                        <FormattedMessage id="Tipo" />
                    </th>
                    <th scope="col">
                        <FormattedMessage id="Region" />
                    </th>
                </tr></thead>
                    <tbody>
                        {principals.map((principal) => (
                            <Principal principal={principal}></Principal>
                        ))}
                    </tbody></table>
                    </Col>
                    {showDetail ()}
                    </Row>
            </PrincipalContext.Provider>
        </div>
    );
}

export default Principals;