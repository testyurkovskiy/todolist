var allTasks = [];

var btn = document.getElementById("btnAdd");
btn.addEventListener("click", function(e) {
    if (!allTasks.includes(task.value)) {
        var newLi = document.createElement("li");
        newLi.innerText = task.value;
        
        newLi.addEventListener("click", function(e) {
            e.target.style.backgroundColor = "yellow";
        }, false);

        newLi.addEventListener("dblclick", function(e) {
            e.target.remove();
            var index = allTasks.indexOf(e.target.innerText);
            allTasks.splice(index, 1);
        }, false);


        tasks.appendChild(newLi);
        allTasks.push(task.value);
    }
}, false);