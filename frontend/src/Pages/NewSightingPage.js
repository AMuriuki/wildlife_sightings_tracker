import { useEffect, useState } from "react";
import Body from "../components/Body";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useApi } from "../context/ApiProvider";

export default function NewSightingPage() {

    const [species, setSpecies] = useState();
    const api = useApi();

    const navigate = useNavigate()

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const lastSeen = new Date(form["date-of-sighting"].value)
        const speciesId = form["select-species"].value;
        const image = form["image-file"].value;

        if (!lastSeen || !speciesId || !image) {
            alert("Missing required fields.");
            return;
        }

        try {
            const response = await api.post("/sightings/", {
                last_seen: lastSeen,
                image: image,
                species_id: speciesId
            });
            if (response.ok) {
                // handle successful response
                alert("New sighting created");
                navigate('/')
            } else {
                // Handle error response
                console.log("Failed to create sighting");
            }
        } catch (error) {
            // handle network error
            console.log("Network error:", error);
        }
    }

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const response = await api.get("/species");
                setSpecies(response.ok ? response.body : null);
            } catch (error) {
                console.log("Failed to fetch species", error);
                setSpecies(null);
            }
        };
        fetchSpecies();
    }, [api]);

    if (!species) {
        return null;
    }

    // create an array of species options from the species response
    const options = species.data.map((item) => (
        <option key={item.id} value={item.id}>
            {item.title}
        </option>
    ));

    return (
        <Body>
            <Card
                heading="Add a new animal sighting"
                currentPage="New sighting"
                species={options}
                onSubmit={handleFormSubmit}
            />
        </Body>
    );
}