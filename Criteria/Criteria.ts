
export class Criteria<K,V> {
    private next:Criteria<K,V>
    private key:K;
    private value:V;

    getValue(key:K):V{
        if(this.next){
            if(key == this.key){
                return this.value;
            }
            this.next.getValue(key);
        }
        return null
    }
    
    setNext(next: Criteria<K,V>):void{
        if (next) {
            this.next = next;
        }
    }

    addNext(next: Criteria<K,V>):void{
        if (next) {
            this.next.addNext(next);
        }
        this.setNext(next);
    }


}