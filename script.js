// var a = document.getElementById("demo").innerHTML = 5 + 6 ; //DOM
// var b = document.write("Hello World")
// // window.alert(5 + 6);
// // alert(5+17)
// // window.print() // To Print the Page.
// var x ;
// x = 5;
// console.log(x)



function getValue(){
    var x = document.getElementById("cars");
    var logox = document.getElementsByClassName("logo");
    var demo = document.getElementById("demo")
    if(x.value === 'alone'){
        logox.innerText = "Hello"
        demo.innerText = "alone"
    }else if(x.value === 'better'){
        alert("better")
    }else if(x.value === 'angry'){
        alert("angry")
    }else if(x.value === 'blessed'){
        alert("blessed")
    }else{
        alert("sorry")
    }
    // switch (x.value) {
    //     case 'volvo':
    //        value.innerText = "volvo"
    //         break;
    //     case 'saab':
    //         value.innerText = "saab"
    //         break;
    //     case 'opel':
    //         value.innerText = "opel"
    //         break;
    //     case 'audi':
    //     value.innerText = "audi"
    // break;
    // }

}

