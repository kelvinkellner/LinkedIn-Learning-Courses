import node from './node';

class stack {
    private _top: node | null;

    constructor(list?: any[]) {
        this._top = null;
        let n: node | null = null;
        for (let i = 0; list && i<list.length; i++)
            n = new node(list[i], n, null);
        this._top = n;
    }

    is_empty(): boolean {
        return this._top === null;
    }

    push(value: any) {
        this._top = new node(value, this._top, null);;
    }

    pop(): any {
        let n = this._top;
        if (this._top)
            this._top = this._top.prev;
        return n?.value ?? null;
    }
}

function do_something() {
    const s = new stack([1,2,3,4,5,6,7]);
    s.push(8);
    console.log(s.is_empty());
    for (let i = 0; i < 8; i++)
        console.log(s.pop());
    console.log(s.is_empty());
}
do_something();