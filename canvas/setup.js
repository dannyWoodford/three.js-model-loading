let container
let camera
let renderer
let controls
let scene 


let plane 

let cloudParticle = []
let flash

let rain
let rainGeo
let rainCount = 3000

// let rainDrop



function init(){
    container = document.querySelector(".scene")

    //create scene
    scene = new THREE.Scene()
    // scene.background = new THREE.Color( "rgba(94, 48, 138, 0.847)" );

    const fov = 60
    const aspect = container.clientWidth / container.clientHeight
    const near = 1
    const far = 1000
    
    //create camera
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0,3, 57)


    // console.log(camera.rotation)
    

    
    // create light
    let light = new THREE.AmbientLight( 0x404040, 2 ); // soft white light
    scene.add( light );
    
    let directionalLight = new THREE.DirectionalLight( 0xebdfdf, 40 );
    directionalLight.position.set(0,80,0)
    scene.add( directionalLight );
    
    flash = new THREE.PointLight(0x1956e6, 70, 500 ,1.7);
    flash.position.set(Math.random()*200 -100,100,-60);
    scene.add(flash);
    
    
    //create renderer
    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    
    //controls
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.enableKeys = false


    container.appendChild(renderer.domElement)
    
    //load model
    let loader = new THREE.GLTFLoader()
    loader.load('./3d/scene.gltf', function(gltf){
        plane = gltf.scene.children[0]
        plane.position.set(0, 0, 43)

        plane.rotation.x = 1.5707963267948963
        plane.rotation.y = -3.22
        // plane.position.set(0,0,0)
        
        scene.add(gltf.scene)

        let listener = new THREE.AudioListener();
        camera.add( listener );
        
        // create the PositionalAudio object (passing in the listener)
        let sound = new THREE.PositionalAudio( listener );
        
        // load a sound and set it as the PositionalAudio object's buffer
        let audioLoader = new THREE.AudioLoader();
        audioLoader.load( 'canvas/jet-loop-01.ogg', function( buffer ) {
            sound.setBuffer( buffer );
            sound.setRefDistance( 20 );
            sound.setLoop( true );
            sound.setVolume( 0.7 );

            sound.play();
        });
    
        plane.add( sound );
    })


    
    // scene.fog = new THREE.FogExp2(0x1c1c2a, 0.00002)
    // renderer.setClearColor(scene.fog.color)


}









function animate(){
    if(Math.random() > 0.93 || flash.power > 100) {
        if(flash.power < 100) 
        flash.position.set(
            Math.random()*400,
            300 + Math.random() *200,
            100
          );
        flash.power = 50 + Math.random() * 800;
    }
    cloudParticle.forEach( p => {
        p.rotation.z -= 0.008
    })

    rainVariation()
    
    controls.update();

    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    movements(moveInt)
    

}

function onWindowResize(){
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    
    renderer.setSize(container.clientWidth , container.clientHeight)
}

window.addEventListener('resize', onWindowResize)



init()

setTimeout(() => {
    animate()
}, 800);