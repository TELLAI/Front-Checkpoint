import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {getContinents} from "../graphQl/queryApi";
import "./Continents.css"
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export interface Icontinent {
    code: string,
    name: string
}

const Continents = () => {
    const {data, refetch} = useQuery(getContinents)
    const [continents, setContinents] = useState([])

    useEffect(() => {
        if (data) {
            setContinents(data.continents);
        }

    }, [data]);

    return (
        <div className={"continentsPage"}>
            <h1>Continents</h1>
            <div className="continents">
                {continents && continents.map((continent: Icontinent, index: number) => {
                    return (
                        <div key={index} className={`continent ${continent}`}>
                            <a href={`/continent/${continent.code}`}>
                                {continent.name}
                            </a>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default Continents;