import React, { useState } from "react";

import { Container, Table, Modal, Row, Col } from "react-bootstrap";
import Image from "next/image";

type Statue = {
  name: string;
  hasFake: boolean;
};

export default function IndexPage() {
  const statues: Statue[] = [
    {
      name: "ancient",
      hasFake: true,
    },
    {
      name: "beautiful",
      hasFake: true,
    },
    {
      name: "familiar",
      hasFake: false,
    },
    {
      name: "gallant",
      hasFake: true,
    },
    {
      name: "great",
      hasFake: false,
    },
    {
      name: "informative",
      hasFake: true,
    },
    {
      name: "motherly",
      hasFake: true,
    },
    {
      name: "mystic",
      hasFake: true,
    },
    {
      name: "robust",
      hasFake: true,
    },
    {
      name: "rock-head",
      hasFake: true,
    },
    {
      name: "tremendous",
      hasFake: true,
    },
    {
      name: "valiant",
      hasFake: true,
    },
    {
      name: "warrior",
      hasFake: true,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handleStatueClick = (i: number) => {
    setShowModal(true);
    setModalIndex(i);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container>
      <Modal show={showModal} onHide={handleClose} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>{`${statues[modalIndex].name} statue`} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="h-75">
            <Col xs="12" sm="6">
              <h3>Real</h3>
              <div
                className="h-75"
                style={{
                  position: "relative",
                }}
              >
                <Image
                  style={{
                    objectFit: "contain",
                    objectPosition: "50% 50%",
                  }}
                  src={`https://einal3m.github.io/animal-crossing/images/acnh/statues/statue-${statues[modalIndex].name}-real.png`}
                  alt={statues[modalIndex].name}
                  fill
                />
              </div>
            </Col>
            <Col xs="12" sm="6">
              <h3>Fake</h3>
              {statues[modalIndex].hasFake && (
                <div
                  className="h-75"
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    style={{
                      objectFit: "contain",
                      objectPosition: "50% 50%",
                    }}
                    src={`https://einal3m.github.io/animal-crossing/images/acnh/statues/statue-${statues[modalIndex].name}-fake.png`}
                    alt={statues[modalIndex].name}
                    fill
                  />
                </div>
              )}{" "}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <h3>Statues</h3>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Real</th>
            <th>Fake</th>
            <th>Found</th>
            <th>Donated</th>
          </tr>
        </thead>
        <tbody>
          {statues.map((statue: Statue, i: number) => {
            return (
              <tr key={statue.name}>
                <td>{statue.name}</td>
                <td>
                  <Image
                    onClick={() => handleStatueClick(i)}
                    src={`https://einal3m.github.io/animal-crossing/images/acnh/statues/statue-${statue.name}-real.png`}
                    alt={statue.name}
                    width="64"
                    height="64"
                  />
                </td>
                <td>
                  {statue.hasFake && (
                    <Image
                      onClick={() => handleStatueClick(i)}
                      src={`https://einal3m.github.io/animal-crossing/images/acnh/statues/statue-${statue.name}-fake.png`}
                      alt={statue.name}
                      width="64"
                      height="64"
                    />
                  )}
                </td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
