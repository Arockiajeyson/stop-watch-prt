let hours =document.querySelector('.hours-div')
let second =document.querySelector('.second-div')
let min= document.querySelector('.min-div')
let mile =document.querySelector('.milsco')
let btn =document.querySelectorAll('button')
let neww =document.querySelector('.add')
let inter =''
let n =0

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',()=>{
        if(btn[i].innerHTML ==="Start"){
            inter = setInterval(()=>{
                mile.innerHTML++
                if(mile.innerHTML >=1000){
                    mile.innerHTML -=1000
                    second.innerHTML++
                }
                if(second.innerHTML >=60){
                    second.innerHTML -=60
                    min.innerHTML++
                }
                if(min.innerHTML >=60){
                    min.innerHTML -=60
                    hours.innerHTML++
                }
                if(second.innerHTML <10){
                    second.innerHTML ='0' + parseInt(second.innerHTML)
                }
                if(min.innerHTML <10){
                    min.innerHTML ='0'+parseInt(min.innerHTML)
                }
                if(mile.innerHTML <10){
                    mile.innerHTML ='00' +parseInt(mile.innerHTML)
                }
            },1)
        }else if(btn[i].innerHTML =='Pause'){
            clearInterval(inter)
        }else if(btn[i].innerHTML ==='Reset'){
            clearInterval(inter)
            hours.innerHTML='00'
            second.innerHTML='00'
            mile.innerHTML='000'
            min.innerHTML='00'
            neww.innerHTML=''
            n=0
        }else{
            n++
            let arr=[]
            arr.push(`CAST ${n}` + ":   "  + hours.innerHTML + ":" + min.innerHTML + ":" + second.innerHTML + ":" + mile.innerHTML)

            arr.map((e)=>{
                const dat = document.createElement('p')
                dat.textContent =e
                neww.append(dat)
            })
        }
    })
}