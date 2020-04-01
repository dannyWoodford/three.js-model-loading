
const vertex = new THREE.Vector3();

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < rainCount; i++) {
    vertices.push( 
        Math.random() * 120 - 60,
        Math.random() * 180 - 80,
        Math.random() * 130 - 60
    );
}
    
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

const material =  new THREE.PointsMaterial({
        color: '#ffffff',
        size: .3,
        transparent: true,
        map: THREE.ImageUtils.loadTexture(
            'images/snow_mask_2.png'),
        blending: THREE.AdditiveBlending,
    })

rain = new THREE.Points( geometry, material );
scene.add(rain);


rain.rotation.x = -1.57
rain.rotation.y = -3.22




function rainVariation() {
    var positionAttribute = rain.geometry.getAttribute( 'position' );
	
    for ( var i = 0; i < positionAttribute.count; i ++ ) {
        // velocity = 0.1 + Math.random() * 10;
        vertex.fromBufferAttribute( positionAttribute, i );
        vertex.y -= 1;
        if (vertex.y < - 60) {
            vertex.y = 60;
        }
		
        positionAttribute.setXYZ( i, vertex.x, vertex.y, vertex.z );
	
    }

    positionAttribute.needsUpdate = true;


    rain.rotation.y += 0.01

}