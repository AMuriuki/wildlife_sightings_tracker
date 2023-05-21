import Body from "../components/Body";
import Card from "../components/Card";
import TimeAgo from "../components/TimeAgo";

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
                "url": "/api/sighting/5",
                "image": "https://animals.sandiegozoo.org/sites/default/files/2016-08/hero_zebra_animals.jpg"
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
                "url": "/api/sighting/4",
                "image": "https://www.earthandanimals.com/files/547756/catitems/Zebra2-939b212484e1f17c03b24c7c307b0619.jpg"
            }
        ],
        "pagination": {
            "count": 2,
            "limit": 25,
            "offset": 0,
            "total": 2
        }
    }

    const columnNames = ["Image", "Seen"]

    return (
        <Body>
            <Card
                heading={details.data[0].species.title + " sightings"}
                tableData={details.data.map(details => ({
                    image: details.image,
                    last_seen: <TimeAgo isoDate={details.last_seen} />
                }))}
                columnNames={columnNames}
                currentPage="Details"
            />
        </Body>
    )
}