import React from "react";
import ComboBox from "./modules/ComboBox";
import Table from "./modules/Table";

class Tiquetes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            silla: "",
            fechaDia: "",
            fechaMes: "",
            fechaAnio: "",
            pasajero: "",
            itinerario: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let newState = {
            [event.target.id]: event.target.value,
        };

        if (event.target.id === "itinerario") {
            newState.itinerario = this.props.itinerarios[event.target.value];
        }

        if (event.target.id === "pasajero") {
            newState.pasajero = this.props.pasajeros[event.target.value];
        }

        this.setState({
            ...this.state,
            ...newState,
        });
    }

    render() {
        return (
            <div className="container">
                <label className="d-block my-2">
                    Silla
                    <input
                        className="m-2"
                        type="text"
                        id="silla"
                        onChange={this.handleChange}
                    ></input>
                </label>

                <label className="d-block my-2">
                    Fecha
                    <input
                        placeholder="Dia"
                        className="m-2"
                        type="text"
                        id="fechaDia"
                        onChange={this.handleChange}
                    ></input>
                    <input
                        placeholder="Mes"
                        className="m-2"
                        type="text"
                        id="fechaMes"
                        onChange={this.handleChange}
                    ></input>
                    <input
                        placeholder="Año"
                        className="m-2"
                        type="text"
                        id="fechaAnio"
                        onChange={this.handleChange}
                    ></input>
                </label>

                <ComboBox
                    label="Pasajero"
                    id="pasajero"
                    data={this.props.pasajeros}
                    handleChange={this.handleChange}
                />

                <ComboBox
                    label="Itinerario"
                    id="itinerario"
                    data={this.props.itinerarios}
                    handleChange={this.handleChange}
                />

                <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                        this.props.agregarTiquete(this.state);
                    }}
                >
                    Agregar
                </button>
                <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                        this.props.buscarTiquete(this.state);
                    }}
                >
                    Buscar
                </button>
                <Table
                    data={this.props.lista}
                    head={["Silla", "Fecha", "Pasajero", "Itinerario"]}
                />
            </div>
        );
    }
}

export default Tiquetes;
