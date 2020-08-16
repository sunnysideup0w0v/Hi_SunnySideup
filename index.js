let tabLists = document.querySelectorAll("#about .tabList li");
let tabContents = document.querySelectorAll("#about .tabContent li.tab");

tabLists.forEach((item,index)=>{
    item.addEventListener("click",e=>{
        tabLists.forEach(tab=>{
            tab.classList.remove("on")
        })
        tabContents.forEach(item=>{
            item.classList.remove("on");
        })
        tabLists[index].classList.add("on");
        tabContents[index].classList.add("on");
    })
})

window.addEventListener("wheel",(e)=>{
    if(e.deltaY>0){
        document.quertySelector("#about").scrollintoView({behavior:"smooth"})
    }
    console.log(e.deltaY);
})
console.log(document.querySelector("#about").offsetTop)