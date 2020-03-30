rainGeo = new THREE.Geometry()

// var bufferGeometry = new THREE.BufferGeometry().fromGeometry( geometry );

for (let i = 0; i < rainCount; i++) {
    rainDrop = new THREE.Vector3(
        Math.random() * 120 - 60,
        Math.random() * 180 - 80,
        Math.random() * 130 - 60,
    )

        rainDrop.velocity = {}
        rainDrop.velocity = 0
    rainGeo.vertices.push(rainDrop)
}
// let sprite = new THREE.TextureLoader().load('images/snow_mask_2.png')

let rainMaterial = new THREE.PointsMaterial({
    color: '#ffffff',
    size: .3,
    transparent: true,
    map: THREE.ImageUtils.loadTexture(
        'images/snow_mask_2.png'),
    blending: THREE.AdditiveBlending,
})

rain = new THREE.Points(rainGeo, rainMaterial)
rain.rotation.x = -1.57
rain.rotation.y = -3.22
scene.add(rain)

function rainVariation() {
    rainGeo.vertices.forEach(p => {
        p.velocity -= 0.1 + Math.random() * 0.1;
        p.y += p.velocity;
        if (p.y < -60) {
            p.y = 60;
            p.velocity = 0;
        }
    });

        
        rainGeo.verticesNeedUpdate = true;
        rain.rotation.y += 0.01

}