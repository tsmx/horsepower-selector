import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

import type { Car } from '../api/Car';

interface CarDetailProps {
  car: Car | null;
}

export default function CarDetail({ car }: CarDetailProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {car ? `${car.manufacturer} ${car.model}` : 'Please select a car on the left'}
        </Card.Title>
        {
          car ?
            (
              <Card.Text>{`Horsepower: ${car.horsepower}`}</Card.Text>
            ) :
            (
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={2} /> {' '}
                <Placeholder xs={1} />
              </Placeholder>
            )
        }
      </Card.Body>
    </Card>
  );
}