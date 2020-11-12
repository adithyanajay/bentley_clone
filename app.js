const basic = document.getElementById("basic")
const weight = document.getElementById("weight")
const features = document.getElementById("features")
const basic_div =document.getElementById("basic-div")
const weight_div = document.getElementById("weight-div")
const features_div = document.getElementById("features-div")


basic.classList.add('border-green')
weight_div.classList.add('fadeOut')
features_div.classList.add("fadeOut")


weight.addEventListener('click', ()=>{
    basic.classList.remove('border-green')
    features.classList.remove('border-green')
    weight.classList.add("border-green")
    basic_div.classList.add("fadeOut")
    weight_div.classList.remove("fadeOut")
    features_div.classList.add("fadeOut")
})

basic.addEventListener("click", ()=>{
    basic.classList.add('border-green')
    features.classList.remove('border-green')
    weight.classList.remove("border-green")
    basic_div.classList.remove("fadeOut")
    weight_div.classList.add("fadeOut")
    features_div.classList.add("fadeOut")
})

features.addEventListener('click', ()=>{
    basic.classList.remove('border-green')
    features.classList.add('border-green')
    weight.classList.remove("border-green")
    basic_div.classList.add("fadeOut")
    weight_div.classList.add("fadeOut")
    features_div.classList.remove("fadeOut")
})