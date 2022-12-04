class Pasaje {
    constructor(silla, fecha, pasajero, itinerario) {
        this.silla = silla;
        this.fecha = fecha;
        this.pasajero = pasajero;
        this.itinerario = itinerario;
    }

    equals(obj) {
        let iguales = false;
        if (obj instanceof Pasaje) {
            iguales =
                this.itinerario.equals(obj.itinerario) &&
                this.pasajero.equals(obj.pasajero) &&
                this.fecha.equals(obj.fecha) &&
                this.estado === obj.estado;
        }
        return iguales;
    }
}

export default Pasaje;
