import { Card } from "react-bootstrap";

const DetailsBody = ({ data, type }) => (
  <Card className="border-0 shadow-lg p-3">
    <Card.Body>
      <Card.Title as="h3" className="mb-4">
        <strong>INFORMATION</strong>
      </Card.Title>
      {type === 'manga' ? (
        <>
          <Card.Text><strong>Édition:</strong> {data.edition}</Card.Text>
          <Card.Text><strong>Nombre de tomes Total:</strong> {data.total_tome_number}</Card.Text>
          <Card.Text><strong>Année de sortie:</strong> {data.year_release}</Card.Text>
          <Card.Text><strong>Numéro de tome:</strong> {data.tome_number}</Card.Text>
        </>
      ) : (
        <>
          <Card.Text><strong>Nom:</strong> {data.first_name}</Card.Text>
          <Card.Text><strong>Prénom:</strong> {data.last_name}</Card.Text>
          <Card.Text><strong>Naissance:</strong> {data.birthdate}</Card.Text>
        </>
      )}
      <hr className="my-4" />
      <Card.Title as="h3" className="mb-4">
        <strong>DESCRIPTION</strong>
      </Card.Title>
      <Card.Text>
        {data.texte} 
      </Card.Text>
    </Card.Body>
  </Card>
);

export default DetailsBody;