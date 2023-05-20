import React from "react";

export default function Tablecomponent() {
    return (
        <div id="tableExample4" data-list='{"valueNames":["name","email","payment"],"filter":{"key":"payment"}}'>
            <div className="row justify-content-end g-0">
                <div className="col-auto px-3">
                    <select className="form-select form-select-sm mb-3" aria-label="Bulk actions" data-list-filter="data-list-filter">
                        <option selected="" value="">Select payment status</option>
                        <option value="Pending">Pending</option>
                        <option value="Success">Success</option>
                        <option value="Blocked">Blocked</option>
                    </select>
                </div>
            </div>
            <div className="table-responsive scrollbar">
                <table className="table table-sm table-striped fs--1 mb-0 overflow-hidden">
                    <thead className="bg-200 text-900">
                        <tr>
                            <th className="sort pe-1 align-middle white-space-nowrap" data-sort="name">Customer</th>
                            <th className="sort pe-1 align-middle white-space-nowrap" data-sort="email">Email</th>
                            <th className="sort align-middle white-space-nowrap text-end pe-4" data-sort="payment">Payment</th>
                        </tr>
                    </thead>
                    <tbody className="list" id="table-purchase-body">
                        <tr className="btn-reveal-trigger">
                            <th className="align-middle white-space-nowrap name"><a href="../../app/e-commerce/customer-details.html">Sylvia Plath</a></th>
                            <td className="align-middle white-space-nowrap email">john@gmail.com</td>
                            <td className="align-middle text-end fs-0 white-space-nowrap payment"><span className="badge badge rounded-pill badge-soft-success">Success<span className="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span></td>
                        </tr>
                        {/* Add more table rows here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}