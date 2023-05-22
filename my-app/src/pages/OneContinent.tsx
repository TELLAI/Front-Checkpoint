import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {getOneContinent} from "../graphQl/queryApi";
import {useNavigate, useParams} from "react-router";

export interface ICountry {
    name: string,
    code: string,
}

const OneContinent = () => {
    let {id} = useParams();
    const {data, refetch} = useQuery(getOneContinent,
        {variables: {code: id}}
    )

    const [continent, setContinent] = useState()
    const [countries, setCountries] = useState([])

    useEffect(() => {
        if (data) {
            setCountries(data.continent.countries)
        } else {
            console.log("ya R")
        }
    }, [data])

    console.log("continents = ", countries);
    return (
        <div className={"countriesPage"}>
            <h1>Countries</h1>
            <div className="countries">
                {countries && countries.map((country: ICountry, index) => {
                    console.log("country = ", country);
                    return (<div key={index} className="country">{country.name}</div>)
                })}
            </div>
        </div>
    );
};

export default OneContinent;