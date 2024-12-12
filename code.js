const container= document.querySelector(".container")
    let num=16;
    const btn = document.querySelector("#btn")
    createGrid(num)
    btn.addEventListener("click",()=>{
        do{
            num=prompt("enter a number between 10 and 100")
        }while(num<10 || num>100)
        createGrid(num)
    })
    function createGrid(number){
        container.innerHTML = "";
        let opacity=10;
        maxicolor=450;
        for(let i=1;i<=num;i++){
                const columns = document.createElement("div")
                columns.className = "columns"
            for(let j=0;j<num;j++){
                const cells = document.createElement("div")
                cells.classList.add("cells")
                columns.appendChild(cells)
                cells.className = "cells"
                cells.id = "cell"+j
                cells.addEventListener("mouseenter",()=>{
                    cells.style.backgroundColor="rgb("+Math.floor(Math.random()*maxicolor)+","+ Math.floor(Math.random()*maxicolor)+","+ Math.floor(Math.random()*maxicolor)+")"
                    cells.style.opacity = opacity+"%";
                    opacity+=10;
                    maxicolor-=5
                })
            }
            columns.id = "column"+i
            container.appendChild(columns)
        }
    }