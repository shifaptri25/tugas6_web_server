const http = require(`http`);
const port = 8000;
const MotoGp = [
    {
        circuit : `Losail`,
        location : `Qatar`,
        winner : {name : `Andrea`, lastName : `Dovizioso`, country : `Italy`}
    },
    {
        circuit : `Autodromo`,
        location : `Argentine`,
        winner : {name : `Cal`, lastName : `Crutchlow`,country : `UK`}
    },
    {
        circuit : `De Jerez`,
        location : `Spain`,
        winner : {name : `Valentino`, lastName : `Rossi`, country : `Italy`}
    },
    {
        circuit : `Mugello`,
        location : `Italy`,
        winner : {name : `Andrea`, lastName : `Dovizioso`, country : `Italy`}
    }
]

const server = http.createServer((req,res)=>{
    if(req.url==`/`){
    res.write("Main page")
    res.write(JSON.stringify(MotoGp))
    }
    else if(req.url==`/country`){
        res.write("Country Winners")
        const countries = {};
        MotoGp.forEach(m => {
        const c = m.winner.country;
            if (!countries[c]) countries[c] = [];
            countries[c].push(m);
        });
    res.write(JSON.stringify(countries));
    }
    else if(req.url==`/name`){
        res.write("Name Winners")
        const names = {};
        MotoGp.forEach(m => {
        const n = m.winner.name;
            if (!names[n]) names[n] = [];
            names[n].push(m);
        });
    res.write(JSON.stringify(names));
    }
    else{
        res.write("Bad Request")
    }
    res.end()
})

server.listen(port,()=>{
    console.log(`Server Run at http://LocalHost:${port}`);
})