document.getElementById('btn').addEventListener("click", ()=> {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(res => {
       return res.json()
    })
    .then(data => {
        let back;
        document.getElementById('title').textContent = data.type
        document.getElementById('result').textContent = data.activity
        document.body.classList.toggle('fun')
    })
})


