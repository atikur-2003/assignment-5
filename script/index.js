const discoverDiv = document.getElementById('discover-div');

discoverDiv.addEventListener('click', function(){
    window.location.href = "./blog.html";
})


//generating random bg-color
document.getElementById('change-bg').addEventListener('click', function(){
    document.body.style.backgroundColor = getRandomColor();
})

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 1; i <= 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// showing update date
const date = new Date();
document.getElementById('update-date').innerText = date.toDateString();

document.querySelectorAll('.complete-btn').addEventListener('click', function(){
    alert("done");
})
