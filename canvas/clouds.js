let  cloudLoader = new THREE.TextureLoader();
cloudLoader.load('./images/cloud_texture_2.png', function(texture){

    cloudGeo = new THREE.PlaneBufferGeometry(200,200);
    cloudMaterial = new THREE.MeshLambertMaterial({
      map: texture,
      transparent: true
    })
    cloudMaterial.depthWrite = false;

    for (let p = 0; p < 10; p++) {
        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial)
            cloud.position.set(
                Math.random()* 100 - 50,
                Math.random()* 80 - 60,
                Math.random()* -30 -20 ,
            )
            cloud.rotation.x = 3.385796326794905
            cloud.rotation.y = -3.22
            // cloud.rotation.z = Math.random() * 1760
            cloud.material.opacity = Math.random()* 1 - .2,

            cloudParticle.push(cloud)
            scene.add(cloud) 
    }
})

