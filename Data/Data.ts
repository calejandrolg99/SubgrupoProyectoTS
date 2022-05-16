export interface Data<F,E> {
    //METODOS DEFINIDOS EN EL CONTRATO
    getValue():F
    modifyValue(context:E):void
    

}