const submitButton = document.getElementById('submit-pesan')
const mnameInput = document.getElementById('mname')
const mttlInput = document.getElementById('mttl')
const mgenderInput = document.getElementById('mgender')
const mpesanInput = document.getElementById('mpesanTeks')
const showPesanOutput = document.getElementById('showPesan')

// --Function Sidenav-- //
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById("main").style.marginRight= "0"
}
//--Function Nama--//

window.onload = function(){
  if(window.location.pathname === '/index.html') {
    var userName = prompt("Please enter your name:")
    if (userName){
      document.getElementById('name').innerHTML = userName;
    } else {
      alert('You dont enter a name')
    }
  }
}
// --Function Validation Form Pesan-- //
function validationFormPesan(){
  const mnameInputError = document.forms['mpesan']['mname'].value
  const mttlInputError = document.forms['mpesan']['mttl'].value
  const mgenderInputError = document.forms['mpesan']['mgender'].value
  const mpesanInputError = document.forms['mpesan']['mpesanTeks'].value

  if (mnameInputError == ''){
    document.getElementById('mnameError').innerHTML = "Nama tidak boleh kosong!"
  } else if (mttlInputError == ''){
    document.getElementById('mttlError').innerHTML = "Tanggal lahir tidak boleh kosong!"
  } else if (mgenderInputError == ''){
    document.getElementById('mgenderError').innerHTML = "Jenis Kelamin tidak boleh kosong!"
  } else if (mpesanInputError == ''){
    document.getElementById('mpesanError').innerHTML = "Pesan tidak boleh kosong!"
  }
  return false
}

submitButton.addEventListener('click', function(){
  let mnameValue = mnameInput.value
  let mttlValue = mttlInput.value
  let mpesanValue = mpesanInput.value
  let mgenderValue = document.querySelector('input[name="mgender"]:checked').value
  showPesanOutput.innerHTML =  'Nama: '+mnameValue+'\nTanggal Lahir: '+mttlValue+'\nJenis Kelamin: '+mgenderValue+'\nPesan: '+mpesanValue
})


