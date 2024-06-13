const ToggleButton = document.getElementsByClassName('ToggleButton')[0]
const NavbarLinks = document.getElementsByClassName('NavbarLinks')[0]

var Form = document.getElementById('MainForm')
var FullName = document.getElementById('FullName')
var Email = document.getElementById('EmailId')
var Message = document.getElementById('Message')
var Age = document.getElementById('Age')
var Adress = document.getElementById('Adress')
var PhoneNumber = document.getElementById('PhoneNumber')
var Male;
var Female = document.getElementById('Female')
var Region;
var Agreement;
var DateOfBirth;

ToggleButton.addEventListener('click', () => {
    NavbarLinks.classList.toggle('active')
})

function CalculateAge(Birthday) { 
    var AgeDiffMs = Date.now() - Birthday;
    var AgeDate = new Date(AgeDiffMs);
    return Math.abs(AgeDate.getUTCFullYear() - 1970);
}

Form.addEventListener('submit', e => {
    e.preventDefault();
    DateOfBirth = document.getElementById('DateOfBirth').value;
    Region = document.getElementById('RegionId').value;
    Agreement = document.getElementById("Agreement");
    Male = document.getElementById('Male');
    Female = document.getElementById('Female');
    ValidateInputs();
})

const ValidateInputs = () => {
    FullName = FullName.value.trim();
    Email = Email.value.trim();
    Message = Message.value.trim();
    Age = Age.value.trim();
    Adress = Adress.value.trim();
    PhoneNumber = PhoneNumber.value.trim();
    var SndDateOfBirth = new Date(DateOfBirth);
    var Num = parseInt(Age);
    Region = String(Region);

    if(FullName === '') {
        alert("Name must not be empty!")
    }
    
    if(Adress === '') {
        alert("Adress must not be empty!")
    }

    if(Message === '') {
        alert("Message must not be empty!")
    }

    if(!(Email.includes("@") && Email.includes(".com"))) {
        alert("Invalid Email!")
    }

    if(Age === '') {
        alert("Age must be filled!")
    }
    else if(isNaN(Age)) {
        alert("Age must be numeric!")
    }
    else if(Num < 18) {
        alert("Age must be above 18 to submit form!")
    }

    if(PhoneNumber === '') {
        alert("Phone number must be filled")
    }
    else if(isNaN(PhoneNumber)) {
        alert("Phone number must be Numeric!")
    }
    else if(PhoneNumber.length < 8) {
        alert("Valid number consist of minimum 8 digit!")
    }

    if(!DateOfBirth) {
        alert("Please fill date of birth!")
    }
    else if(CalculateAge(SndDateOfBirth) < 18) {
        alert("Age must be above 18!")
    }

    if(Region === "SelectRegion") {
        alert("Please fill country region!")
    }

    if(Agreement.checked == false) {
        alert("You must agree to receive a copy!")
    }

    if(Male.checked == false && Female.checked == false) {
        alert("You must pick a gender!")
    }
}