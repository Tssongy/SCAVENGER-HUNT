function renderTreasureList() {
    document.querySelector('#page').innerHTML = `
        <section class="treasure-list">
        ${renderTreasures()}
        </section>
    `
}

function renderTreasures() {
    return state.treasures.map(treasure => `
                <section class="treasure" data-id="${treasure.id}">
                    <header>
                        <h2>${treasure.name}</h2>
                        <span class="material-icons delete-treasure" onClick="deleteTreasure(event)">delete</span>
                    </header>
                    <p>${treasure.clue}</p>
                    <p>${treasure.address}</p>
                </section>
            `).join('')
}

function deleteTreasure(event) {
    const deleteBtn = event.target
    const treasureDOM = deleteBtn.closest('.treasure')
    const treasureId = treasureDOM.dataset.id
    
    axios
        .delete(`/api/treasures/${treasureId}`)
        .then(() => {
            // removing just that one treasure from my state.treasures
            state.treasures = state.treasures.filter(t => t.id != treasureId)
            // Remove the treasure from the DOM
            // Approach 1:
            render('treasureList')
            //Approach 2:
            // treasureDOM.remove()
        })
}

