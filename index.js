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