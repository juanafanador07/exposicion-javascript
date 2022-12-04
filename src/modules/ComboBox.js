import React from "react";

class ComboBox extends React.Component {
    render() {
        return (
            <label className="d-block">
                {this.props.label}
                <select
                    className="btn btn-secondary m-2"
                    onChange={this.props.handleChange}
                    id={this.props.id}
                >
                    <option value="-1">Elige una Opcion</option>

                    {this.props.data.map((item, index) => {
                        return (
                            <option key={item.toString()} value={index}>
                                {item.toString()}
                            </option>
                        );
                    })}
                </select>
            </label>
        );
    }
}

export default ComboBox;
