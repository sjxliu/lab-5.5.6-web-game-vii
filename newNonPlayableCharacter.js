function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

     async function walkEast(time) {
     await Promise.all([stop()])
           direction = 'east'
             element.src = `./assets/red-character/east.gif`
             sleep()
        }
    

    function walkNorth(time) {
        await Promise.all([stop()])
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        sleep()

    }

    function walkWest(time) {
        await Promise.all([stop()])
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        sleep()

    }

    function walkSouth(time) {
        await Promise.all([stop()])
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        sleep()

    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}

function sleep(time){
    return new Promise (resolve=>{
        setTimeout(resolve, time)
    })
}

