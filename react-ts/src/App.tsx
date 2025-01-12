import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import type { Car } from './api/Car';

import CarList from './components/CarList';
import CarDetail from './components/CarDetail';

const carArray: Car[] = [
  {
    id: 'f150',
    manufacturer: 'Ford',
    model: 'F-150',
    horsepower: 465
  },
  {
    id: 'm5',
    manufacturer: 'BMW',
    model: 'M5 Touring',
    horsepower: 520
  },
  {
    id: 'golf',
    manufacturer: 'VW',
    model: 'Golf VII',
    horsepower: 150
  }
];

function App() {

  const [cars] = useState<Car[]>(carArray);
  const [selectedCar, setSelecetedCar] = useState<Car | null>(null);

  return (
    <div>
      <h1 className='text-center mt-4'>Horsepower Selector</h1>
      <Container className='mt-4'>
        <Row>
          <Col>
            <CarList cars={cars} onCarClick={(c) => setSelecetedCar(c)} />
            <Button variant="primary" className='mt-4' onClick={() => { setSelecetedCar(null) }} >
              Deselect car
            </Button>
          </Col>
          <Col>
            <CarDetail car={selectedCar} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App
