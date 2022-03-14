const state = {
    treasures: []
}

axios.get('/api/treasures')
    .then(res => res.data)
    .then(treasures => {
        state.treasures = treasures
        renderTreasureList()
})