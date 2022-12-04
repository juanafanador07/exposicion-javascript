import React from "react";
import Table from "./modules/Table";

class Vuelos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            duracion: "",
            capacidad: "",
            origen: "",
            destino: "",
            horaSalida: "",
            minutoSalida: "",
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
                    Duración
                    <input
                        className="m-2"
                        type="text"
                        id="duracion"
                        onChange={this.handleChange}
                    ></input>
                </label>

                <label className="d-block my-2">
                    Capacidad
                    <input
                        className="m-2"
                        type="text"
                        id="capacidad"
                        onChange={this.handleChange}
                    ></input>
                </label>

                <label className="d-block my-2">
                    Origen
                    <input
                        className="m-2"
                        type="text"
                        id="origen"
                        onChange={this.handleChange}
                    ></input>
                </label>

                <label className="d-block my-2">
                    Destino
                    <input
                        className="m-2"
                        type="text"
                        id="destino"
                        onChange={this.handleChange}
                    ></input>
                </label>

                <label className="d-block my-2">
                    Salida
                    <input
                        placeholder="Hora"
                        className="m-2"
                        type="text"
                        id="horaSalida"
                        onChange={this.handleChange}
                    ></input>
                    <input
                        placeholder="Minuto"
                        className="m-2"
                        type="text"
                        id="minutoSalida"
                        onChange={this.handleChange}
                    ></input>
                </label>

                <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                        this.props.agregarVuelo(this.state);
                    }}
                >
                    Agregar
                </button>
                <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                        this.props.buscarVuelo(this.state);
                    }}
                >
                    Buscar
                </button>
                <Table
                    data={this.props.lista}
                    head={[
                        "Duración",
                        "Capacidad",
                        "Origen",
                        "Destino",
                        "Salida",
                    ]}
                />
            </div>
        );
    }
}

export default Vuelos;
