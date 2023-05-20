import Container from './components/Container';
import Navbar from './components/Navbar/Navbar';
import NavbarBrand from './components/Navbar/NavbarBrand';
import Card from './components/Card';
import Content from './components/Content';

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

  // create a unique list of species
  const speciesList = sightings.data.reduce((uniqueSpecies, sighting) => {
    const { id, title } = sighting.species;
    if (!uniqueSpecies.find(species => species.id === id)) {
      uniqueSpecies.push({ id, title });
    }
    return uniqueSpecies
  }, []);

  return (
    <Container>
      <Navbar>
        <NavbarBrand />
      </Navbar>
      <Content>
        <Card
          heading="Sightings"
          description="Animal sightings"
          tableData={speciesList.map(species => {
            const speciesSightings = sightings.data.filter(sighting => sighting.species.id === species.id);
            const lastSeen = speciesSightings[0].last_seen;
            return {
              species: species.title,
              last_seen: lastSeen
            }
          })
          }
        />
      </Content>
    </Container>
  );
}