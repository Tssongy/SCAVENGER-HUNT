function renderAddTreasure() {
    document.querySelector('#page').innerHTML = `
        <section class="create-treasure">
            <div class="error"></div>
            <form action="" onSubmit="createTreasure(event)">
                <h2>Add treasure:</h2>
                <fieldset>
                    <label for="">Name: </label><br>
                    <input type="text" name="name">
                </fieldset>
                <fieldset>
                    <label for="">Clue: </label><br>
                    <input type="text" name="clue">
                </fieldset>
                <fieldset>
                    <label for="">Address: </label><br>
                    <input type="text" name="address">
                </fieldset>
                <button>Add Treasure</button>
            </form>
        </section>  
    `
}

function createTreasure(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    axios.post('/api/treasures', data)
        .then(res => res.data)
        .then(newTreasure => state.treasures.push(newTreasure))
        .then(() => renderTreasureList())
        .catch(error => {
            let errorDOM = document.querySelector('.create-treasure .error')
            errorDOM.textContent = error.response.data.message
        })
}