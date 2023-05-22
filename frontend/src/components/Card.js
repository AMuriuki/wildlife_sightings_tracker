import React from "react";
import ImagePopup from "../components/ImagePopup";

export default function Card({ heading, description, tableData, columnNames, currentPage, species, onSubmit }) {
    return (
        <>
            <div className="card mb-3 mt-3">
                <div className="card-body position-relative">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>{heading}</h3>
                            <p className="mt-2">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {currentPage === "Sightings" || currentPage === "Details" ? (<div className="card mb-3">
                <div className="card-body pt-0 px-0">
                    <div className="d-flex align-items-center justify-content-end my-3">
                        <div className="d-flex">
                            <a href="/new" className="btn btn-falcon-success btn-sm mx-3">+ New Sighting</a>
                        </div>
                    </div>
                    <div id="tableExample4">
                        <div className="table-responsive scrollbar">
                            <table className="table table-striped fs--1 mb-0 overflow-hidden">
                                <thead className="bg-200 text-900">
                                    <tr>
                                        {columnNames.map((columnName, index) => (
                                            <th key={index} className="sort pe-1 align-middle white-space-nowrap">{columnName}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="list">
                                    {tableData.map((row, index) => (
                                        <tr key={index} className="btn-reveal-trigger">
                                            <th className="align-middle white-space-nowrap">
                                                {currentPage === "Sightings" ? (
                                                    <a href={"/details/" + row.species.id}>{row.species.title}</a>) : (<ImagePopup index={index} imageUrl={row.image} />)}
                                            </th>
                                            <td className="align-middle white-space-nowrap email">
                                                {row.last_seen}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>) : (<div className="card mb-3">
                <div className="card-body bg-light">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="date-of-sighting">
                                Date of Sighting
                            </label>
                            <input className="form-control" id="date-of-sighting" type="date" required  ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="select-species">
                                Species
                            </label>
                            <select className="form-select" id="select-species">
                                <option defaultValue="selected">Select species</option>
                                {species}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image Address</label>
                            <input id="image-file" className="form-control" type="text"></input>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>)}
        </>
    );
}
