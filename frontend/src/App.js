import Container from './components/Container';
import Navbar from './components/Navbar/Navbar';
import NavbarToggle from './components/Navbar/NavbarToggle';
import NavbarBrand from './components/Navbar/NavbarBrand';

export default function App() {
  const sightings = {
    "data": [
      {
        "id": 1,
        "last_seen": "2022-04-12T19:45:46.865997",
        "species": {
          "id": 1,
          "title": "Lion",
          "url": "/api/species/1"
        },
        "url": "/api/sighting/1"
      },
      {
        "id": 2,
        "last_seen": "2022-06-24T18:54:23.276090",
        "species": {
          "id": 2,
          "title": "Tiger",
          "url": "/api/species/2"
        },
        "url": "/api/sighting/2"
      },
      {
        "id": 3,
        "last_seen": "2022-08-09T13:49:35.506910",
        "species": {
          "id": 4,
          "title": "Giraffe",
          "url": "/api/species/4"
        },
        "url": "/api/sighting/3"
      },
      {
        "id": 4,
        "last_seen": "2022-05-21T03:27:23.520357",
        "species": {
          "id": 5,
          "title": "Zebra",
          "url": "/api/species/5"
        },
        "url": "/api/sighting/4"
      },
      {
        "id": 5,
        "last_seen": "2022-11-05T20:21:26.333512",
        "species": {
          "id": 5,
          "title": "Zebra",
          "url": "/api/species/5"
        },
        "url": "/api/sighting/5"
      }
    ],
    "pagination": {
      "count": 5,
      "limit": 25,
      "offset": 0,
      "total": 5
    }
  }

  return (
    <Container>
      <Navbar>
        <NavbarToggle />
        <NavbarBrand />
      </Navbar>
    </Container>
  );
}