function remove(id){
    var itemRemove = id;
        itemRemove.remove();
    var item = id.innerHTML.replace(/ /g, "-");
    var xhttp = new XMLHttpRequest();
     xhttp.open("delete", ("/change/" + item), true);
     xhttp.send();
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
            }
        };
        
}