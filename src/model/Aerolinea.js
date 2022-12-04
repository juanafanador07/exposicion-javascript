class Aerolinea {
    constructor() {
        this.tiquetes = [];
        this.itinerarios = [];
        this.usuarios = [];
    }

    buscarUsuarioCedula(cedula) {
        let persona = null;

        for (let i = 0; i < this.usuarios.length && persona === null; i++) {
            if (this.usuarios[i].cedula === cedula) {
                persona = this.usuarios[i];
            }
        }

        return persona;
    }

    buscarUsuarioObj(persona) {
        return this.buscarUsuarioCedula(persona.cedula);
    }

    agregarUsuario(persona) {
        let repetido = this.buscarUsuarioObj(persona) !== null;

        if (!repetido) {
            this.usuarios.push(persona);
        }

        return !repetido;
    }

    eliminarUsuario(persona) {
        return this.usuarios.pop(persona);
    }

    buscarTiquete(fecha, pasajero, itinerario) {
        let tiquete = null;

        for (let i = 0; i < this.tiquetes.length && tiquete === null; i++) {
            let tiqueteArray = this.tiquetes[i];
            let equalsFecha = tiqueteArray.fecha.equals(fecha);
            let equalsPasajero = tiqueteArray.pasajero.equals(pasajero);
            let equalsItinerario = tiqueteArray.itinerario.equals(itinerario);

            if (equalsFecha && equalsPasajero && equalsItinerario) {
                tiquete = tiqueteArray;
            }
        }

        return tiquete;
    }

    agregarTiquete(pasaje) {
        let repetido =
            this.buscarTiquete(
                pasaje.fecha,
                pasaje.pasajero,
                pasaje.itinerario
            ) !== null;

        if (!repetido) {
            this.tiquetes.push(pasaje);
        }

        return !repetido;
    }

    buscarVuelo(origen, destino, salida) {
        let vuelo = null;

        for (let i = 0; i < this.itinerarios.length && vuelo === null; i++) {
            let vueloArray = this.itinerarios[i];
            let equalsOrigen = vueloArray.origen.equals(origen);
            let equalsDestino = vueloArray.destino.equals(destino);
            let equalsSalida = vueloArray.salida.equals(salida);

            if (equalsOrigen && equalsDestino && equalsSalida) {
                vuelo = vueloArray;
            }
        }
        return vuelo;
    }

    buscarPosicionVuelo(vuelo) {
        let posicion = -1;

        for (let i = 0; i < this.itinerarios.length && posicion === -1; i++) {
            let vueloArray = this.itinerarios[i];

            if (vueloArray.equals(vuelo)) {
                posicion = i;
            }
        }

        return posicion;
    }

    buscarVueloObj(vuelo) {
        console.log(
            this.buscarVuelo(vuelo.origen, vuelo.destino, vuelo.salida)
        );
        return (
            this.buscarVuelo(vuelo.origen, vuelo.destino, vuelo.salida) !== null
        );
    }

    agregarVuelo(vuelo) {
        let repetido = this.buscarVueloObj(vuelo);
        if (!repetido) {
            this.itinerarios.push(vuelo);
        }

        return !repetido;
    }
}

export default Aerolinea;
