let moveInt = 3




var keyMap = [];
document.addEventListener("keydown", onDocumentKeyDown, true); 
document.addEventListener("keyup", onDocumentKeyUp, true);


function onDocumentKeyDown(event){ 
    var keyCode = event.keyCode;
    keyMap[keyCode] = true;
}

function onDocumentKeyUp(event){
    var keyCode = event.keyCode;
    keyMap[keyCode] = false;

    console.log(plane.rotation)
    console.log(plane.position)

    if(keyCode == 37 ||keyCode == 39){
        const tl = new TimelineMax()
        tl.to(plane.rotation, .3, {y: -3.22})
    }

    if(keyCode == 38 ||keyCode == 40){
        const tl2 = new TimelineMax()
        tl2.to(plane.rotation, .3, {x: 1.5707963267948963})
    }
    if(keyCode == 32 ){
        const tl2 = new TimelineMax()
        tl2.to(plane.position, .3, {z: 43})
    }
}

function movements(){
    if(keyMap[37] == true){
        // e.keyCode === 37 /* LEFT */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */
        plane.rotation.y += moveInt/16;
        plane.position.x -= moveInt/2;
    }
    if(keyMap[39] == true){
        // e.keyCode === 39 /* RIGHT */ || e.keyCode === 68 /* d */
        plane.rotation.y -= moveInt/16;
        plane.position.x += moveInt/2;
    }
    if(keyMap[38] == true){
        // e.keyCode === 38 /* UP */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */
        plane.rotation.x += moveInt/40;
        plane.position.y += moveInt/3; 
    }
    if(keyMap[40] == true){
        // e.keyCode === 40 /* DOWN */ || e.keyCode === 83 /* s */
        plane.rotation.x -= moveInt/40;
        plane.position.y -= moveInt/3;   
    }
    if(keyMap[32] == true){
        // e.keyCode === 32 /* SPACE */
        // plane.rotation.x -= moveInt/40;
        plane.position.z -= moveInt/4;   
    }
}
