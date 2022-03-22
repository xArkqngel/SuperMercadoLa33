const getDataFromForm = (idForm)=>{
  const productName = getDataById(idForm);
  console.log(productName);
};


function getDataById(id){
  const data = document.getElementById(id);  
}

console.log(getDataFromForm("formOverlay"));