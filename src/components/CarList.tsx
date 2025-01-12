import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import type { Car } from '../api/Car';

interface CarListProps {
  cars: Car[],
  onCarClick: (car: Car) => void
}

export default function CarList({ cars, onCarClick }: CarListProps) {
  return (
    <div>
      <ListGroup>
        {
          cars.map(car => {
            return (
              <ListGroupItem key={car.id} action onClick={() => onCarClick(car)}>
                {`${car.manufacturer} ${car.model}`}
              </ListGroupItem>
            );
          })
        }
      </ListGroup>
    </div>
  );
}