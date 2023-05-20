import Body from "../components/Body";
import Card from "../components/Card";

export default function DetailsPage() {

    const details = {
        "data": [
            {
                "id": 5,
                "last_seen": "2022-11-05T20:21:26.333512",
                "species": {
                    "id": 5,
                    "sightings": {},
                    "title": "Zebra",
                    "url": "/api/species/5"
                },
                "url": "/api/sighting/5"
            },
            {
                "id": 4,
                "last_seen": "2022-05-21T03:27:23.520357",
                "species": {
                    "id": 5,
                    "sightings": {},
                    "title": "Zebra",
                    "url": "/api/species/5"
                },
                "url": "/api/sighting/4"
            }
        ],
        "pagination": {
            "count": 2,
            "limit": 25,
            "offset": 0,
            "total": 2
        }
    }

    return (
        <Body>
            <Card
                tableData={details.data.map(details => ({
                    species: details.species.title,
                    last_seen: details.last_seen
                }))}
            />
        </Body>
    )
}