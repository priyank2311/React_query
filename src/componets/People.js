import React from 'react';
import Person from './Person';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const fetchPerson = async () => {
    const res = await fetch('https://swapi.dev/api/people/');
    return res.json();
}

const People = () => {
    const { data, status } = useQuery('people', fetchPerson);
    console.log(data);

    return (
        <div>
            <h2>People</h2>

            {status === 'loading' && (
                <div>Loading Data...</div>
            )}

            {status === 'error' && (
                <div>Error fectching data</div>
            )}

            {status === 'success' && (
                <div>
                    {data.results.map(person => <Person key = {person.name} person={person} />)}
                </div>
            )}
        </div>
    );
}

export default function Wraped() {
    return (<QueryClientProvider client={queryClient}>
        <People />
    </QueryClientProvider>
    )
}