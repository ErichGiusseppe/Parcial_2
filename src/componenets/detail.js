import Card from "react-bootstrap/Card";
import { PrincipalContext } from "./cards";


const { useEffect, useState ,useContext} = require("react");

export default function Detail() {
    const principalState = useContext(PrincipalContext);
    const [detail, setDetail] = useState({id:'',nombre:'',tipo:'',region:'',notas:'',fecha_cultivo:'',altura:'',imagen:''})
    useEffect(() => {
      if (principalState && principalState.principal) {
         
         const URL =
         `http://localhost:3001/cafes/${principalState.principal.id}`;
      fetch(URL)
          .then((data) => data.json())
          .then((data) => {
              setDetail(data);
          });

      }
      

  }, [principalState]);

 return (
   <Card className="mb-2" style={{ padding: "20px", width: "30rem", backgroundColor: "#f9f1f1",border: "1px solid black",maxHeight: "500px",display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",}}>
      <Card.Title ><strong>{detail.nombre}</strong></Card.Title>
      <Card.Text style={{ marginBottom: "10px" }}>
         {detail.fecha_cultivo}
      </Card.Text>
      <Card.Img variant="top" src={detail.imagen} style={{ width: "40%" }} />
      <Card.Text>
        Notas:
      </Card.Text>
      <Card.Text>{detail.notas}</Card.Text>
      <Card.Text>
      <strong>Cultivado a una altura de {detail.altura} metros</strong>
      </Card.Text>
      <Card.Text>
         {detail.region}
      </Card.Text>
    </Card>

 );
}