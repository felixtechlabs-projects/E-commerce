import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosEx = () => {
    const [data, setData] = useState({});

    const fetchData = async () => {
        try {
            const options = {
                method: 'GET',
                url: 'https://weather-api167.p.rapidapi.com/api/weather/forecast',
                params: {
                    place: 'Pune, IN',
                    cnt: '3',
                    units: 'standard',
                    type: 'three_hour',
                    mode: 'json',
                    lang: 'en'
                },
                headers: {
                    'x-rapidapi-key': 'c3bfc57163mshe3e68b1a54ea4adp147dabjsn29dc6b3ea246',
                    'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
                    Accept: 'application/json'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(); //side effect
    }, []);


    return (
        <div className='m-3'>
            { data.city && (
            <div className='w-1/4 border-gray-300 shadow p-2'>
                <p className='text-gray-500'> {data.city.name} , {data.city.country}</p>
                <h3 className='font-3xl font-bold'> {data.list[0].summery}</h3>
            </div>
             )}
        </div>
    )
}

export default AxiosEx