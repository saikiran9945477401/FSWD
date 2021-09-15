class sai{
    balance=230000;
    constructor(a,b,c){
        this.acc_number=a;
        this.acc_name=b;
        this.acc_balance=c;
    }
}
class kiran {
    constructor(e,f,d){ 
        this.acc_num=e;
        this.acc_nam=f;
        this.balance=d;

    

}
}
let c1=new kiran(101,"saikiran",new sai(201,"bala",70000));
let c2=new kiran(102,"raki",new sai(122,"raja",5000000));
console.log(c1);
console.log(c2.balance);