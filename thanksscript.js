const homeUrl = "index.html"

const dismiss = document.querySelector(".success__button")
console.log(dismiss)

dismiss.addEventListener ( "click" , function(){
    window.close()
})