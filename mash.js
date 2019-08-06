//make sure to use camelcase
//user input should be in each of its relevant functions
//need to validate user input to make sure it is not undefined
//need to define behavior for when user input is invalid

const Names = ["Jamal"]

const Homes = ["House","Man- YEET YOU AIN'T GOT NO HOUSE","Trash can","Laundry Basket","Old Tree"]

const Jobs = ["Banker","CEO","Beggar","Rag","Coder"]

const Region = ["Ocean","Bermuda Triangle","Cosmos","Distortion Zone","Deep Deep Abyss..."]
const Power = ["Super Sped","Invisibility","Invincibility","700 IQ *warning your brain cannot comprehend such power* shutting down...","0 IQ" ]
function Name(){
    let idiots = Math.floor(Math.random()*Names.length)
    if ((process.argv[2]) != " "){
        Names.push(process.argv[2]);
        return Names[idiots];
    }
}
    
function getHouse(){
    Homes.push(process.argv[3]);
   let getHome = Math.floor(Math.random() * Homes.length);
   if ((process.argv[3]) != " "){
       Homes.push(process.argv[3]);
       return Homes[getHome]
   }

};

function getJobs(){
    
    let getJob = Math.floor(Math.random() * Jobs.length)
    if ((process.argv[4]) != " "){
        Jobs.push(process.argv[4]);
        return Jobs[getJob]
    }
};

function getRegion(){

    let getplace = Math.floor(Math.random() * Region.length)
    return Region[getplace]
}

function getPowers(){

    let getPower = Math.floor(Math.random() * Power.length)
    return Power[getPower]
}

function mash(){
   console.log(Name()+" You live in a"+ getHouse()+", As a"+ getJobs()+", In the"
    + getRegion()+ ", With" + getPowers());
}

mash();
