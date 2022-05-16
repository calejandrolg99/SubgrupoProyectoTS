export interface Data<F,E> {

    getValue():F
    modifyValue(context:E):void
    

}