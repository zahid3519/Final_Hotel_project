let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
   ul.classList.toggle("showData");
    
   if(ul.className == "showData"){
       document.getElementById("bar").className= "fa-solid fa-xmark";
   }else{
       document.getElementById("bar").className= "fa-solid fa-bars";

   }
})

// submit messsage
function messagesubmit(event){
    event.preventDefault(); 
    alert("Your Room is Reserve Succesfully!")
    
}
function messagesubmit1(event){
    event.preventDefault(); 
    alert("Your Message Has been recevied Succesfully!")
    document.getElementById('myform').reset();
}










//slider starts
let flag = 0;
function controller(x){
    flag = flag + x;
slideshow(flag);

}
slideshow(flag);
function slideshow(num){
    let slides= document.getElementsByClassName('slide');
   if(num==slides.length) {
    flag =0;
    num = 0;
       }
       if (num<0){
        flag=slides.length-1;
        num=slides.length-1;
       }

       for(let y of slides){   
        y.style.display = "none";
    }
   slides[num].style.display = "block";

}



// slider end


// form availblity start

// Example availability data
const availabilityData = {
    room1: [],
    room2: [],
    room3: [],
    room4: [],
    room5: [],
    room6: [],
    };
   
    function checkAvailability() {
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const roomNumber = 'room' + document.getElementById('roomNumber').value;
   
    if (availabilityData[roomNumber].some(isOverlap)) {
    alert('Sorry, this room is already booked for the selected dates.');
    } else {
    alert('Well come to Our Resort  Room are avaliable');
    availabilityData[roomNumber].push({ checkInDate, checkOutDate });
    }
    function isOverlap(existingBooking) {
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
   
    return (
    (checkInDate >= existingBooking.checkInDate && checkInDate <= existingBooking.checkOutDate) ||
    (checkOutDate >= existingBooking.checkInDate && checkOutDate <= existingBooking.checkOutDate) ||
    (checkInDate <= existingBooking.checkInDate && checkOutDate >= existingBooking.checkOutDate)
   );
    } }


// form availblity end 