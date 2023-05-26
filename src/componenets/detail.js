import Card from "react-bootstrap/Card";
import { PrincipalContext } from "./cards";

const { useContext } = require("react");


export default function Detail() {
    const principalState = useContext(PrincipalContext);


 return (
    <Card className="mb-2" style={{padding:"20px", width: "30rem"}} >
         <Card.Title>{principalState.principal.nombre}
         </Card.Title>
         <Card.Body>
         <Card.Text>{principalState.principal.region}</Card.Text>
      </Card.Body>
    </Card>

 );
}