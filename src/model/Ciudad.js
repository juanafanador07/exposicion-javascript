class Ciudad {
    constructor(nombre) {
        this.nombre = nombre;
    }

    equals(obj) {
        let iguales = false;
        if (obj instanceof Ciudad) {
            iguales = this.nombre === obj.nombre;
        }
        return iguales;
    }

    toString() {
        return this.nombre;
    }
}

export default Ciudad;
