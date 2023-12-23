import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FlightBookingForm = () => {
  const [flightType, setFlightType] = useState('one-way');
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [cabinClass, setCabinClass] = useState('economy');

  const handleFlightTypeChange = (e) => {
    setFlightType(e.target.value);
    if (e.target.value === 'oneway') {
      setEndDate('');
    }
  };

  const handleToggleFlyDirection = () => {
    const temp = startLocation;
    setStartLocation(endLocation);
    setEndLocation(temp);
  };

  const handleStartDateChange = (e) => {
    const formattedDate = e.target.value;
    setStartDate(formattedDate);
  };

  const handleEndDateChange = (e) => {
    const formattedDate = e.target.value;
    setEndDate(formattedDate);
  };

  return (
    <Container>
      <Form>
        <Row className="mb-3 fs-5">
          <Col>
            <Form.Check
              type="radio"
              label="One Way"
              name="flight-type"
              value="oneway"
              checked={flightType === 'oneway'}
              onChange={handleFlightTypeChange}
            />
          </Col>
          <Col>
            <Form.Check
              type="radio"
              label="Return"
              name="flight-type"
              value="return"
              checked={flightType === 'return'}
              onChange={handleFlightTypeChange}
            />
          </Col>
        </Row>

        <Row className="mb-3 fs-5">
          <Col>
            <Form.Group controlId="startFly">
              <Form.Label>Start Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter start location"
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={1} className="d-flex align-items-center justify-content-center">
            <Button variant="link" onClick={handleToggleFlyDirection} className='fs-4'>
              ⇋
            </Button>
          </Col>
          <Col>
            <Form.Group controlId="endFly">
              <Form.Label>End Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter end location"
                value={endLocation}
                onChange={(e) => setEndLocation(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3 fs-5">
          <Col>
            <Form.Group controlId="startDate">
              <Form.Label>Starting Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="returnDate">
              <Form.Label>Return Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                disabled={flightType === 'oneway'}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3 fs-5">
          <Col>
            <Form.Group controlId="travellers">
              <Form.Label>Number of Travelers</Form.Label>
              <Form.Control as="select" value={adults} onChange={(e) => setAdults(e.target.value)}>
                {[...Array(16).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="cabinClass">
              <Form.Label>Cabin Class</Form.Label>
              <Form.Control as="select" value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}>
                <option value="economy">Economy</option>
                <option value="premiumEconomy">Premium Economy</option>
                <option value="business">Business Class</option>
                <option value="firstClass">First Class</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center">
  <Button variant="primary" type="submit" className="bg-info fs-5">
    Search
  </Button>
</Row>

      </Form>
    </Container>
  );
};

export default FlightBookingForm;
