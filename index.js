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

let images = document.querySelectorAll("#about .tabContent li .images li img");
let modal = document.querySelector(".modal");
let body = document.querySelector("body")
images.forEach(img=>{
    console.log(img.src)
    img.addEventListener("click",e=>{
        let modalImg = document.querySelector(".modal .imgBox img");
        modal.classList.add("on");
        body.classList.add("lock")
        modalImg.src = img.src;
    })
})
let btnClose = document.querySelector(".modal .btnClose");
btnClose.addEventListener("click",()=>{
    modal.classList.remove("on");
    body.classList.remove("lock");
});

if(modal.className==="on"){
    modal.addEventListener("click",()=>{
        console.log("clicked")
    })
}
