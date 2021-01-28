var listTD = [
    {item:'coffee'},
    {item: 'tea'}
    
];

module.exports = function (app, urlencodedParser) {

     app.get("/", (req, res) =>{

    res.render("index.ejs", {listTD: listTD});
    });

    app.post('/', urlencodedParser, (req, res) =>{
        const newItem = req.body;
        listTD.push(newItem);
        res.render("index.ejs", {listTD: listTD});
    });

    app.delete('/change/:item', (req, res)=>{
        console.log(req.params);
        listTD = listTD.filter(function(listItem){
            return listItem.item.replace(/ /g, "-") !== req.params.item;
        });
        res.json(listTD);

    });

};