import React from "react";
import Table from "./modules/Table";

class Usuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cedula: "",
            nombresYApellidos: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        });
    }

    render() {
        return (
            <div className="container">
                <label className="d-block my-2">
                    Cédula
                    <input
                        className="m-2"
                        type="text"
                        id="cedula"
                        onChange={this.handleChange}
                    ></input>
                </label>

                <label className="d-block my-2">
                    Nombres Y Apellidos
                    <input
                        className="m-2"
                        type="text"
                        id="nombresYApellidos"
                        onChange={this.handleChange}
                    ></input>
                </label>

                <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                        this.props.agregarUsuario(this.state);
                    }}
                >
                    Agregar
                </button>
                <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                        this.props.buscarUsuario(this.state);
                    }}
                >
                    Buscar
                </button>
                <Table
                    data={this.props.lista}
                    head={["Cédula", "Nombres Y Apellidos"]}
                />
            </div>
        );
    }
}

export default Usuarios;
