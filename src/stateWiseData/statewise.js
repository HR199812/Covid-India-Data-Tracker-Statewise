import React, { useEffect, useState } from 'react';
import './statewise.css';

const StateWise = () => {

    const [data, actualData] = useState([]);

    const getCovidData = async () => {

        const res = await fetch('https://api.covid19india.org/data.json');
        const result = await res.json();
        actualData(result.statewise);
    };

    useEffect(() => {
        getCovidData();
    }, []);


    return (
        <>
            <div className="container-fluid">
                <div className="main-heading">
                    <h1 className="text-center"><span className="font-weight-bold">Covid 19 </span>India Tracker Dashboard</h1>
                </div>
                <div className="mainTableDiv">
                    <div className="table-responsive">
                        <table>
                            <thead className="thead-dark">
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Active</th>
                                <th>Deaths</th>
                                <th>Recovered</th>
                                <th>Updated</th>
                            </thead>
                            <tbody>
                                {
                                    data.map((currElem, ind) => {
                                        return (
                                            <>
                                                <tr key={ind}>
                                                    <td className="statedata">{currElem.state}</td>
                                                    <td>{currElem.confirmed}</td>
                                                    <td>{currElem.active}</td>
                                                    <td className="deathdata">{currElem.deaths}</td>
                                                    <td>{currElem.recovered}</td>
                                                    <td>{currElem.lastupdatedtime}</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </>
    );
};

export default StateWise;