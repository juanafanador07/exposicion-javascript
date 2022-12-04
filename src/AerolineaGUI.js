import React from "react";
import Usuarios from "./Usuarios";
import Tiquetes from "./Tiquetes";
import Vuelos from "./Vuelos";
import Aerolinea from "./model/Aerolinea";
import Cliente from "./model/Cliente";
import Ciudad from "./model/Ciudad";
import Hora from "./model/Hora";
import Vuelo from "./model/Vuelo";
import Fecha from "./model/Fecha";
import Pasaje from "./model/Pasaje";

class AerolineaGUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aerolinea: new Aerolinea(),
        };

        this.agregarUsuario = this.agregarUsuario.bind(this);
        this.buscarUsuario = this.buscarUsuario.bind(this);
        this.agregarVuelo = this.agregarVuelo.bind(this);
        this.buscarVuelo = this.buscarVuelo.bind(this);
        this.agregarTiquete = this.agregarTiquete.bind(this);
        this.buscarTiquete = this.buscarTiquete.bind(this);
    }

    agregarUsuario(state) {
        let cliente = new Cliente(state.cedula, state.nombresYApellidos);
        let sePuedeAgregar = this.state.aerolinea.agregarUsuario(cliente);

        if (sePuedeAgregar) {
            this.setState({
                ...this.state,
            });
            alert("Usuario añadido correctamente.");
        } else {
            alert("El usuario ya existe.");
        }
    }

    buscarUsuario(state) {
        let persona = this.state.aerolinea.buscarUsuarioCedula(state.cedula);

        if (persona != null) {
            alert(`
                Usuario encontrado:
                Cédula: ${persona.cedula}
                Nombre: ${persona.nombresYApellidos}
            `);
        } else {
            alert("No se ha encontrado el usuario.");
        }
    }

    agregarVuelo(state) {
        let duracion = parseInt(state.duracion);
        let capacidad = parseInt(state.capacidad);
        let origen = new Ciudad(state.origen);
        let destino = new Ciudad(state.destino);
        let salida = new Hora(
            parseInt(state.horaSalida),
            parseInt(state.minutoSalida)
        );

        let vuelo = new Vuelo(duracion, capacidad, origen, destino, salida);
        let sePuedeAgregar = this.state.aerolinea.agregarVuelo(vuelo);

        if (sePuedeAgregar) {
            this.setState({
                ...this.state,
            });
            alert("Vuelo añadido correctamente.");
        } else {
            alert("El vuelo ya existe.");
        }
    }

    buscarVuelo(state) {
        let origen = new Ciudad(state.origen);
        let destino = new Ciudad(state.destino);
        let salida = new Hora(
            parseInt(state.horaSalida),
            parseInt(state.minutoSalida)
        );
        let vuelo = this.state.aerolinea.buscarVuelo(origen, destino, salida);
        if (vuelo !== null) {
            alert(`
                Vuelo encontrado:
                Duración: ${vuelo.duracion}
                Capacidad: ${vuelo.capacidad}
                Origen: ${vuelo.origen}
                Destino: ${vuelo.destino}
                Salida: ${vuelo.salida}
            `);
        } else {
            alert("No se ha encontrado el vuelo.");
        }
    }

    agregarTiquete(state) {
        let dia = parseInt(state.fechaDia);
        let mes = parseInt(state.fechaMes);
        let anio = parseInt(state.fechaAnio);
        let fecha = new Fecha(dia, mes, anio);

        let tiquete = new Pasaje(
            state.silla,
            fecha,
            state.pasajero,
            state.itinerario
        );

        let sePuedeAgregar = this.state.aerolinea.agregarTiquete(tiquete);

        if (sePuedeAgregar) {
            this.setState({
                ...this.state,
            });
            alert("Tiquete añadido correctamente.");
        } else {
            alert("El tiquete ya existe.");
        }
    }

    buscarTiquete(state) {
        let dia = parseInt(state.fechaDia);
        let mes = parseInt(state.fechaMes);
        let anio = parseInt(state.fechaAnio);
        let fecha = new Fecha(dia, mes, anio);

        let tiquete = this.state.aerolinea.buscarTiquete(
            fecha,
            state.pasajero,
            state.itinerario
        );

        if (tiquete != null) {
            alert(`
                    Tiquete encontrado:
                    Silla: ${tiquete.silla}
                    Fecha: ${tiquete.fecha}
                    Pasajero: ${tiquete.pasajero}
                    Itinerario: ${tiquete.itinerario}
                `);
        } else {
            alert("No se ha encontrado el tiquete.");
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center fw-bold my-2">Aerolínea</h1>
                <ul className="nav nav-tabs container">
                    <li className="nav-item">
                        <button
                            className="nav-link active"
                            data-bs-toggle="tab"
                            data-bs-target="#usuarios"
                        >
                            Usuarios
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#vuelos"
                        >
                            Vuelos
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#tiquetes"
                        >
                            Tiquetes
                        </button>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="usuarios">
                        <Usuarios
                            agregarUsuario={this.agregarUsuario}
                            buscarUsuario={this.buscarUsuario}
                            lista={this.state.aerolinea.usuarios}
                        />
                    </div>
                    <div className="tab-pane fade" id="vuelos">
                        <Vuelos
                            agregarVuelo={this.agregarVuelo}
                            buscarVuelo={this.buscarVuelo}
                            lista={this.state.aerolinea.itinerarios}
                        />
                    </div>
                    <div className="tab-pane fade" id="tiquetes">
                        <Tiquetes
                            agregarTiquete={this.agregarTiquete}
                            buscarTiquete={this.buscarTiquete}
                            pasajeros={this.state.aerolinea.usuarios}
                            itinerarios={this.state.aerolinea.itinerarios}
                            lista={this.state.aerolinea.tiquetes}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AerolineaGUI;
