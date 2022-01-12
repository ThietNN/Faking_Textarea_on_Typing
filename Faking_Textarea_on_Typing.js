let sentence = ["I","d","i","d","n","'","t","t","y","p","e","t","h","i","s","s","h","i","t"]

function type(){
    let t = document.getElementById("text").value;
    x = t.length;
    let i;
    let m = " "
    if(x>0){
        for(i=0;i<x;i++){
            m += sentence[i];
        }
    }
    document.getElementById("text").innerText = m
}

