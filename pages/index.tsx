import React from "react";

import { Card, Container, Table } from "react-bootstrap";
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

  return (
    <Container>
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
          {statues.map((statue: Statue) => {
            return (
              <tr key={statue.name}>
                <td>{statue.name}</td>
                <td>
                  <Image
                    src={`https://einal3m.github.io/animal-crossing/images/acnh/statues/statue-${statue.name}-real.png`}
                    alt={statue.name}
                    width="64"
                    height="64"
                  />
                </td>
                <td>
                  {statue.hasFake && (
                    <Image
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
