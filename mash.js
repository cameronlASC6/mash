const Names = ["Jamal"]
Names.push(process.argv[2])
const Homes = ["House","Man- YEET YOU AIN'T GOT NO HOUSE","Trash can","Laundry Basket","Old Tree"]
Homes.push(process.argv[3]);
const Jobs = ["Banker","CEO","Beggar","Rag","Coder"]
Jobs.push(process.argv[4]);
const Region = ["Ocean","Bermuda Triangle","Cosmos","Distortion Zone","Deep Deep Abyss..."]
const Power = ["Super Sped","Invisibility","Invincibility","700 IQ *warning your brain cannot comprehend such power* shutting down...","0 IQ" ]
function Name(){
    let idiots = Math.floor(Math.random()*Names.length)
    return Names[idiots]
}
function getHouse(){

   let getHome = Math.floor(Math.random() * Homes.length);
   return Homes[getHome];

};

function getJobs(){
    let getJob = Math.floor(Math.random() * Jobs.length)
    return Jobs[getJob]
}

function getRegion(){
    let getplace = Math.floor(Math.random() * Region.length)
    return Region[getplace]
}

function getPowers(){
    let getPower = Math.floor(Math.random() * Power.length)
    return Power[getPower]
}

console.log(
Name(),"You live in a",getHouse()+", As a",getJobs()+", In the"
,getRegion()+", With", getPowers())