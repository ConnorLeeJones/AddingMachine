import { ConnorStack } from './connor-stack';
import { SourceListMap } from 'source-list-map';
//import { openSync } from 'fs';

export class Eval {
    vals = new ConnorStack<number>();
    ops = new ConnorStack<string>();
    tokens = [];

    run(str: String){
        this.tokens = str.split(" ");
        this.tokens.forEach((token) => {
            if (token == '('){}
            else if (token == '+')
                this.ops.push(token);
            else if (token == '-')
                this.ops.push(token);
            else if (token == '*')
                this.ops.push(token);
            else if (token == '/')
                this.ops.push(token);
            else if (token == 'sqrt')
                this.ops.push(token);
            else if (token == '%')
                this.ops.push(token);
            else if (token == ')'){
                let op = this.ops.pop();
                let v = this.vals.pop();
                if (op == '+')
                    v = this.vals.pop() + v;
                else if (op == '-')
                    v = this.vals.pop() - v;
                else if (op == '*')
                    v = this.vals.pop() * v;
                else if (op == '/')
                    v = this.vals.pop() / v;
                else if (op == 'sqrt')
                    v = Math.sqrt(v);
                else if (op == '%')
                    v = this.vals.pop() % v;
                this.vals.push(v);
            }
            else {
                this.vals.push(parseFloat(token));
            } 
        });
        return this.vals.pop();
    }

}
