class Hora {
    constructor(hora, minuto) {
        this.hora = hora;
        this.minuto = minuto;
    }

    equals(obj) {
        let iguales = false;
        if (obj instanceof Hora) {
            iguales = this.hora === obj.hora && this.minuto === obj.minuto;
        }
        return iguales;
    }

    toString() {
        return this.hora + ":" + this.minuto;
    }
}

export default Hora;
