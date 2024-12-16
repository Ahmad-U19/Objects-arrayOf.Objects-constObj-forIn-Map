var per=new Object();
per.firstName = 'Ahmad Hassaan';
per.lastName = 'Uppal';
per.age=23;

//console.log(per);

document.write(per.lastName);

var arr=[
    {name:'Wasif',lastn:'Raza',ag:12},
    {name:'Aman',lastn:'Khan',ag:15},
    {name:'John',lastn:'Raza',ag:13},
    {name:'Hadiya',lastn:'Basit',ag:14}
]
console.log(arr);

for(var x=0;x<arr.length;x++){
    document.write("<br><br>" + arr[x].name + " " + arr[x].lastn + "  " + arr[x].age);
}

const a={
    na:'Karan Aujila',
    agee:25
};

document.write("<br>" + a.na + " " + a.agee);

a.na='Ahmad Uppal';
a.agee=21;

document.write("<br>" + a.na + " " + a.agee + "<br>");

for (var key in per){
    document.write(key + " : " + per[key] + "<br>")
}

var ac=[10,20,30];

var bc=ac.map(test);

function test(val){
   return val*10;
}

document.write(bc);