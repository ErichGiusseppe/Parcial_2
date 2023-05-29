import Principal from "./card";
import Detail from "./detail";
import { Col, Row } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';
import './cards.css';
import cafe from './cafe.png';
import { useState, useEffect, createContext } from "react";

export const PrincipalContext = createContext({
  principal: {},
  setPrincipals: () => {}
});

function Principals() {
  const [state, setState] = useState({
    principal: undefined,
    setPrincipal: (principal) => setState({ ...state, principal: principal })
  });

  const [principals, setPrincipals] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:3001/cafes";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setPrincipals(data);
      });
  }, []);

  return (
    <div className="container">
      <div
        className="banner-text"
        style={{
          fontFamily: 'Indie Flower',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '36px',
          lineHeight: '53px',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
          flex: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        }}
      >
        El aroma mágico
      </div>
      <div className="mt-3"></div>
      <PrincipalContext.Provider value={state}>
        <Row className="banner-img">
          <img src={cafe} alt="Banner de café" />
        </Row>
        <div className="my-3"></div>
        <Row className="p-0" style={{ width: "100%" }}>
          <Col>
            <div className="table-container">
              <table className="table" style={{ margin: 0 }}>
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">
                      <FormattedMessage id="Nombre" />
                    </th>
                    <th scope="col">
                      <FormattedMessage id="Tipo" />
                    </th>
                    <th scope="col">
                      <FormattedMessage id="Region" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {principals.map((principal) => (
                    <Principal key={principal.id} principal={principal} />
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
          <Col>
            {state.principal !== undefined ? <Detail /> : null}
          </Col>
        </Row>
      </PrincipalContext.Provider>
    </div>
  );
}

export default Principals;