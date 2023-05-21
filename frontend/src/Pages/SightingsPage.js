import { useEffect, useState } from "react";
import Body from "../components/Body";
import Card from "../components/Card";
import TimeAgo from "../components/TimeAgo";
import { useApi } from "../context/ApiProvider";

export default function SightingsPage() {
    const [sightings, setSightings] = useState({ data: [] });

    const api = useApi()

    let url = '/sightings'

    useEffect(() => {
        (async () => {
            const response = await api.get(url);
            if (response.ok) {
                setSightings(response.body.data)
            } else {
                setSightings(null);
            }
        })();
    }, [api, url])

    // create a unique list of species
    const speciesList = sightings.data.reduce((uniqueSpecies, sighting) => {
        const { id, title } = sighting.species;
        if (!uniqueSpecies.find(species => species.id === id)) {
            uniqueSpecies.push({ id, title });
        }
        return uniqueSpecies
    }, []);

    const columnNames = ["Species", "Last Seen"]

    return (
        <Body>
            <Card
                heading="Sightings"
                description="Select animal to view its sightings or add a new sighting"
                tableData={speciesList.map(species => {
                    const speciesSightings = sightings.data.filter(sighting => sighting.species.id === species.id);
                    const lastSeen = speciesSightings[0].last_seen;
                    return {
                        species: species.title,
                        last_seen: <TimeAgo isoDate={lastSeen} />
                    }
                })}
                columnNames={columnNames}
                currentPage="Sightings"
            />
        </Body>
    )
}