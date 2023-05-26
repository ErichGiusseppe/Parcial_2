import Card from "react-bootstrap/Card";
import { PrincipalContext } from "./cards";

const { useContext } = require("react");


export default function Detail() {
    const principalState = useContext(PrincipalContext);
    /*useEffect(() => {

      const URL =
         `http://localhost:3001/cafes/${PrincipalContext.principal.id}`;
      fetch(URL)
          .then((data) => data.json())
          .then((data) => {
              setPrincipals(data);
              console.log(data);
          });

  }, []);->Esto trae dentro de la id que selecciono el detail pero no alcance a integrarlo en la primera*/

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