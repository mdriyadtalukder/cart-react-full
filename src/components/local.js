const lc=id=>{
    const gt=localStorage.getItem('storing');
    let obj={};
    if(gt){
        obj=JSON.parse(gt);
    }

    const qn=obj[id];
    if(qn){
        obj[id]=obj[id]+1
    }
    else{
        obj[id]=1;
    }
    const c=JSON.stringify(obj);
    localStorage.setItem('storing',c);
    
}
const adlo=()=>{
    const gt=localStorage.getItem('storing');
    let obj={};
    if(gt){
        obj=JSON.parse(gt);
    }
 return obj;
}
export {lc,adlo};