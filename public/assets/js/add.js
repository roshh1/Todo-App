function addItem(id){
    var itemAdd = id;
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode( itemAdd );         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("objList").appendChild(node);     // Append <li> to <ul> with id="myList"
        
}