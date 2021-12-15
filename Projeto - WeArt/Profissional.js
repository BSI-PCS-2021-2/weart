class Profissional extends Cliente{
    constructor() {
        super();
    }
    idProfissional = "";
    infoBancarias = "";
    tipoArte = "";

    oferecerServiço(){

    }
    aceitarTrabalho(){

    }
    entregarTrabalho(){

    }
    incluirPortfólio(){
        let unico = new Portfólio(this.idProfissional);
    }
}