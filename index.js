function newImage(asset, left, bottom) {
    let greenCharater = document.createElement('img')
    greenCharater.src = asset
    greenCharater.style.position = 'fixed'
    greenCharater.style.left = left
    greenCharater.style.bottom = bottom
    document.body.append(greenCharater)
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

function newItem(itemAsset, left, bottom){
    let item = document.createElement('img')
    item.src = itemAsset
    item.style.position = 'fixed'
    item.style.left = left
    item.style.bottom = bottom
    document.body.append(item)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '100px')
newItem('assets/staff.png', '600px', '100px')