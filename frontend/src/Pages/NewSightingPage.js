import { useEffect, useState } from "react";
import Body from "../components/Body";
import Card from "../components/Card";
import { useApi } from "../context/ApiProvider";

export default function NewSightingPage() {

    const [species, setSpecies] = useState();
    const api = useApi();

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
            />
        </Body>
    );
}