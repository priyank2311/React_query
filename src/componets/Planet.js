import React, { useState } from 'react';
import Planets from './Planets';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const fetchPlanets = async (key, page) => {
    const res = await fetch('https://swapi.dev/api/planets/');
    return res.json();
}

const Planet = () => {
    //const [page, setPage] = useState(1);
    const { data, status } = useQuery('planet', fetchPlanets);

    return (
        <div>
            <h2>Planets</h2>

            {status === 'loading' && (
                <div>Loading Data...</div>
            )}

            {status === 'error' && (
                <div>Error fectching data</div>
            )}

            {status === 'success' && (
                <div>
                    {data.results.map(planet => <Planets key={planet.name} planet={planet} />)}
                </div>
            )}
        </div>
    );
}

export default function Wraped() {
    return (<QueryClientProvider client={queryClient}>
        <Planet />
    </QueryClientProvider>
    )
}