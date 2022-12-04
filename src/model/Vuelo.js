class Vuelo {
    constructor(duracion, capacidad, origen, destino, salida) {
        this.duracion = duracion;
        this.capacidad = capacidad;
        this.origen = origen;
        this.destino = destino;
        this.salida = salida;
    }

    equals(obj) {
        let iguales = false;
        if (obj instanceof Vuelo) {
            iguales =
                this.origen.equals(obj.origen) &&
                this.destino.equals(obj.destino) &&
                this.salida.equals(obj.salida);
        }
        return iguales;
    }

    toString() {
        return this.origen + " -> " + this.destino + " a las " + this.salida;
    }
}

export default Vuelo;
