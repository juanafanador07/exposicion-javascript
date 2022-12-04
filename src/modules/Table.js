import React from "react";

class Table extends React.Component {
    render() {
        return (
            <table className="table table-bordered mt-2">
                <thead>
                    <tr>
                        {this.props.head.map((title) => {
                            return <th key={title}>{title}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((row) => {
                        return (
                            <tr key={row}>
                                {Object.values(row).map((col) => {
                                    if (typeof col != "object") {
                                        return <td key={col}>{col}</td>;
                                    } else {
                                        return (
                                            <td key={col.toString()}>
                                                {col.toString()}
                                            </td>
                                        );
                                    }
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default Table;
