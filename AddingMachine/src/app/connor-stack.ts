export class ConnorStack<T> {
    _store: T[] = [];
    push(val: T){
        this._store.push(val);
    }
    pop(): T | undefined {
        return this._store.pop();
    }
    isEmpty(){
        return this.pop === undefined;
    }
}
