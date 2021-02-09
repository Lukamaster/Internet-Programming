// JavaScript 
function najdolgZbor(string)
{
    let array1 = string.match(/\w[a-z]{0,}/gi);
    let najdolg = array1[0];

    for(let x = 1 ; x < array1.length ; x++)
    {
        if(najdolg.length < array1[x].length)
        {
            najdolg = array1[x];
        }
    }
    return najdolg;
}

document.write(najdolgZbor(prompt("Vnesete string: ")));