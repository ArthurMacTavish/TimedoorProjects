like_status = false;
like = document.querySelector(".main .dis-like .fa-thumbs-up")

dislike_status = false;
dislike = document.querySelector(".main .dis-like .fa-thumbs-down")


document.querySelector(".jumbotron img").addEventListener("mouseover", function() {
    document.querySelector(".jumbotron img").src = "/assets/img-header2.png"
})

document.querySelector(".jumbotron img").addEventListener("mouseout", function() {
    document.querySelector(".jumbotron img").src = "/assets/img-header1.png"
})

like.addEventListener("click", function() {
    if (like_status == false) {
        if (dislike_status == true) {
            dislike.style.color = "black"
            dislike_status = false
        }
    
        like.style.color = "green"
        like_status = true
    } else {
        like.style.color = "black"
        like_status = false
    }
})

dislike.addEventListener("click", function() {
    if (dislike_status == false) {
        if (like_status == true) {
            like.style.color = "black"
            like_status = false
        }
    
        dislike.style.color = "red"
        dislike_status =  true
    } else {
        dislike.style.color = "black"
        dislike_status = false
    }
})