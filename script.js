function toggle_cart(){
    let cart_popup = document.getElementById("stuff");
    cart_popup.classList.toggle("show")
}

function toggle_search(){
    let search = document.getElementById("search-box")
    let search_hide = document.getElementById("search")
    let submit = document.getElementById("submit")
    search.classList.toggle("show_search")
    search_hide.classList.toggle("show_search")
    submit.classList.toggle("show_search")
}
