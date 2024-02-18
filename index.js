let totalSeats = document.getElementById('totalSeats')
let tbody = document.getElementById('tablebody')
let totaltakap = document.getElementById('totaltakap')
let amount = document.getElementById('amount')
let cuponcode = document.getElementById('cuponcode')
let tablebodyq = document.getElementById('tablebodyq')
let totaltakapoi = document.getElementById('totaltakapoi')
let amounti = document.getElementById('amounti')
let applybtn = document.getElementById('applubtn')
let full = document.getElementById('full')
let numver = document.getElementById('numver')
let mynumber = document.getElementById('mynumber')
let submitio = document.getElementById('submitio')


let totalSeat = 40
let titket = []
let gonona = 0
let titcketPrice = 550
let amoun = 0
let amou = 0

function seat(ki){
    var tablerow = document.createElement('tr')
    tbody.appendChild(tablerow)
    tbody.insertBefore(tablerow,totaltakap)
    if(titket.length < 4){
        if(titket.includes(ki)==false){
            gonona++
            numver.innerText = gonona
            var tabledata = document.createElement('td')
            var clas = document.createElement('td')
            var taka = document.createElement('td')
            tabledata.innerText = ki 
            clas.innerText = 'economic'
            taka.innerText = 550
            tablerow.append(tabledata,clas,taka)
            amoun += titcketPrice
        amount.innerText = amoun
        amounti.innerHTML = amoun

        totalSeat--
        totalSeats.innerText = totalSeat
        titket.push(ki)
        document.getElementById(ki).classList.add('backu')
        
        if(titket.length > 3){
            applybtn.disabled = false
            applybtn.setAttribute('onclick',"cuponcodeapply()")
        }

        if(gonona == 1){
            submitio.disabled = false
        }
        }
        
    }else if(titket.length > 3){
        alert('you cannot buy more ticket')
    }

    
}



function cuponcodeapply(){
    var ei = cuponcode.value
    if(ei == 'NEW15'){
        amou = amoun*15/100
        cuponcode.value = amou
        amounti.innerText = amoun - amou
        document.getElementById('discount').innerHTML = "Discount"
        document.getElementById('discountamount').innerText = amou
        document.getElementById('gaieb').classList.add('hidden')

    }else if(ei == 'Couple20'){
        amou = amoun*20/100
        cuponcode.value = amou
        amounti.innerText = amoun - amou
        document.getElementById('discount').innerHTML = "Discount"
        document.getElementById('discountamount').innerText = amou
        document.getElementById('gaieb').classList.add('hidden')
        document.getElementById('gaieb').classList.add('hidden')
    }else{
        alert("invalid cupon")
    }
}





