const getRandomInt = () => {
    return new Promise( resolve => {
        const rnInt = Math.floor((Math.random() * 20) + 1)

        setTimeout(() => {
            resolve( rnInt )
        }, 2000);
    })
}

export default getRandomInt