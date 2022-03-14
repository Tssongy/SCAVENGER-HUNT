function renderHeaderNav() {
    document.querySelector('#header-nav').innerHTML = `
        <ul>
            <li class="material-icons add-treasure" onClick="render('addTreasure')">add_circle</li>
            <li class="material-icons edit-treasure" onClick="render('treasureList')">edit</li>
            <li class="material-icons sign-up-icon" onClick="render('signUp')">person_add</li>
            <li class="material-icons login-icon" onClick="render('login')">login</li>
        </ul>
    `
}

// render header nav on page load
renderHeaderNav()

function render(component){
    if (component === 'addTreasure') {
        renderAddTreasure()
    }
    else if (component === 'treasureList'){
        renderTreasureList()
    }
    else if (component === 'signUp') {
        renderSignUp()
    }
    else if (component === 'login') {
        renderLogin()
    }
}

// component to render initially
render('addTreasure')