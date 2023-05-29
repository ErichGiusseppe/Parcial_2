import Card from "react-bootstrap/Card";
import { PrincipalContext } from "./cards";

import { FormattedMessage, FormattedDate } from 'react-intl';
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
      <Card className="mb-2" style={{ padding: "20px", width: "30rem", backgroundColor: "#f9f1f1", border: "1px solid black", maxHeight: "500px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
   <Card.Title>
      <strong>
         <FormattedMessage id="detail.nombre" defaultMessage={detail.nombre} />
      </strong>
   </Card.Title>
   <Card.Text style={{ marginBottom: "10px" }}>
      <FormattedDate
         value={new Date(detail.fecha_cultivo)}
         year="numeric"
         month="long"
         day="numeric"
      />
   </Card.Text>
   <Card.Img variant="top" src={detail.imagen} style={{ width: "40%" }} />
   <Card.Text>
      <FormattedMessage id="Notas:" defaultMessage="Notas:" />
   </Card.Text>
   <Card.Text>{detail.notas}</Card.Text>
   <Card.Text>
      <strong>
         <FormattedMessage
         id="detail.altura"
         defaultMessage="Cultivado a una altura de {altura} metros"
         values={{ altura: detail.altura }}
         locale={navigator.language}
         />
      </strong>
   </Card.Text>
   <Card.Text>
      {detail.region}
   </Card.Text>
   </Card>

 );
}