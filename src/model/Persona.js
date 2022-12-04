class Persona {
    constructor(cedula, nombresYApellidos) {
        this.cedula = cedula;
        this.nombresYApellidos = nombresYApellidos;
    }

    equals(obj) {
        let iguales = false;
        if (obj instanceof Persona) {
            iguales = this.cedula === obj.cedula;
        }
        return iguales;
    }

    toString() {
        return this.nombresYApellidos;
    }
}

export default Persona;
