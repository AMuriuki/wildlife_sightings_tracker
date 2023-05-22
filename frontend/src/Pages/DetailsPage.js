import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Body from "../components/Body";
import Card from "../components/Card";
import TimeAgo from "../components/TimeAgo";
import { useApi } from "../context/ApiProvider";

export default function DetailsPage() {
    const { speciesId } = useParams();
    const [species, setSpecies] = useState();
    const api = useApi();

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const response = await api.get("/sightings/" + speciesId);
                setSpecies(response.ok ? response.body : null);
            } catch (error) {
                console.error("Failed to fetch species:", error);
                setSpecies(null);
            }
        };

        fetchSpecies();
    }, [speciesId, api]);

    const columnNames = ["Image", "Seen"];

    if (!species) {
        return null; // You can render a loading state or an error message here
    }
    
    return (
        
        <Body>
            <Card
                heading={species.data[0].species.title + " sightings"}
                tableData={species.data.map((details) => ({
                    image: details.image,
                    last_seen: <TimeAgo isoDate={details.last_seen} />,
                }))}
                columnNames={columnNames}
                currentPage="Details"
            />
        </Body>
    );
}
