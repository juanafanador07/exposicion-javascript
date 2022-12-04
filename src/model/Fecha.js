class Fecha {
    constructor(dia, mes, anio) {
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
    }

    equals(obj) {
        let iguales = false;
        if (obj instanceof Fecha) {
            iguales =
                this.dia === obj.dia &&
                this.mes === obj.mes &&
                this.anio === obj.anio;
        }
        return iguales;
    }

    toString() {
        return this.dia + "/" + this.mes + "/" + this.anio;
    }
}

export default Fecha;
