
export class Criteria<K,V> {
    private next:Criteria<K,V>
    private key:K;
    private value:V;

    constructor(key: K, value: V){
        this.key = key;
        this.value = value;
    }

    getValue(key:K):V{
        var value:V
        if(key == this.key){
            return this.value;
        }
        else{
            if(this.next){
                value = this.next.getValue(key);
                return value;
            }
        }
    }
    
    getKeys():K[]{
        var keys:K[] = [this.key];
        if(this.next){
            return keys.concat(this.next.getKeys());
        }
        return keys
    }


    setNext(next: Criteria<K,V>):void{
        if (!this.next) {
            this.next = next;
        }
    }

    addNext(next: Criteria<K,V>):void{
        if (!this.next) {
            this.setNext(next);
        }
        else{
            this.next.addNext(next);
        }
    }


}