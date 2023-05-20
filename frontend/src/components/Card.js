import React from "react";

export default function ({ heading, description, tableData }) {
    return (
        <>
            <div className="card mb-3">
                <div className="card-body position-relative">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>{heading}</h3>
                            <p className="mt-2">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body pt-0 px-0">
                    <div id="tableExample4">
                        <div className="table-responsive scrollbar">
                            <table className="table table-sm table-striped fs--1 mb-0 overflow-hidden">
                                <thead className="bg-200 text-900">
                                    <tr>
                                        <th className="sort pe-1 align-middle white-space-nowrap">Species</th>
                                        <th className="sort pe-1 align-middle white-space-nowrap">Last Seen</th>
                                    </tr>
                                </thead>
                                <tbody className="list" id="table-purchase-body">
                                    {tableData.map((row, index) => (
                                        <tr key={row.id} className="btn-reveal-trigger">
                                            <th className="align-middle white-space-nowrap">
                                                <a href="">{row.species.title}</a>
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
            </div>
        </>
    );
}
