// import React from 'react';

// // Название товара при модальном окне

// const products = document.querySelector('.product-container');
// const productModalTitle = document.querySelector('#exampleModalLabel');

// products.addEventListener('click', (e) =>{
//     e.preventDefault();

//     if(e.target.tagName == "BUTTON"){
//         productModalTitle.innerHTML = "Купить товар: " + e.target.parentNode.firstElementChild.innerText;
//     }
// })

// // Исходники
// const btn = document.querySelector('.submit');
// const modalBody = document.querySelector('.modal-body');
// const currentCard = document.querySelector('.your-card');
// const cardInput = document.querySelector('.card-input');
// const cardDateInput = document.querySelector('.card-date-input');
// const cardCvcInput = document.querySelector('.card-cvc-input');
// const cardOwnerInput = document.querySelector('.card-owner-input');

// const cardValidationText =  document.querySelector('.card-validation'); 
// const cardDateValidationText = document.querySelector('.date-validation');
// const cardCvcValidationText = document.querySelector('.cvc-validation');

// // Валидация номера карты
// cardInput.addEventListener('input',() =>{
//     currentCard.innerHTML = 'Ваша карта:' + cardInput.value;
//     cardValidation(cardInput);
// })

// function cardValidation(input){
//     if(input.value == ""){
//         cardValidationText.style.display = "none";
//     }else{
//         if(input.value.length > 16){
//             cardValidationText.innerHTML = "Введите не более 16 чисел вашей карты!"
//             cardValidationText.style.display = "block";
//         }else if(input.value.length < 16){
//             cardValidationText.innerHTML = "Введите 16 чисел вашей карты!";
//             cardValidationText.style.display = "block";
//         }else if(input.value.length == 16){
//             cardValidationText.style.display = "none";
//         }
//     }
// }
// //Валидация даты карты
// cardDateInput.addEventListener('input',() =>{
//     cardDateValidation(cardDateInput);
// })
// function cardDateValidation(input){
//     if(input.value == ""){
//         cardDateValidationText.style.display = "none";
//     }else{
//         if(input.value.length > 4){
//             cardDateValidationText.innerHTML = "Введите не более 4 чисел";
//             cardDateValidationText.style.display = "block";
//         }else if(input.value.length < 4){
//             cardDateValidationText.innerHTML = "Введите 4 числе";
//             cardDateValidationText.style.display = "block";
//         }else if(input.value.length == 4){
//             cardDateValidationText.style.display = "none";
//         }
//     }
// }
// //Валидация CV Кода
// cardCvcInput.addEventListener('input',() =>{
//     cardCvcValidation(cardCvcInput);
// })
// function cardCvcValidation(input){
//     if(input.value == ""){
//         cardCvcValidationText.style.display = "none";
//     }else{
//         if(input.value.length > 3){
//             cardCvcValidationText.innerHTML = "Введите не более 3 чисел!";
//             cardCvcValidationText.style.display = "block";
//         }else if(input.value.length < 3){
//             cardCvcValidationText.innerHTML = "Введите 3 чисел!";
//             cardCvcValidationText.style.display = "block";
//         }else if(input.value.length == 3){
//             cardCvcValidationText.innerHTML = "Введите 3 чисел!";
//             cardCvcValidationText.style.display = "none";
//         }
//     }
// }
// //PROMISE
// const loadingText = document.querySelector('.loadingText');
// const loadingSpinner = document.querySelector('.spinner-border');

// function paymentProcess(){
//      return new Promise((resolve,reject) =>{
//         if(cardInput.value !== "" && cardDateInput.value !== "" && cardCvcInput.value !== "" && cardOwnerInput !== ""){
//             resolve()
//         }else{
//             reject();
//         }
//     })
// }
// btn.addEventListener('click',(e) =>{
//     e.preventDefault();

//     paymentProcess()
//     .then(() =>{
//         setTimeout(()=>{
//             if((cardInput.value.length > 16 || cardInput.value.length < 16) || (cardDateInput.value.length > 4 || cardDateInput.value.length < 4) || (cardCvcInput.value.length > 3 || cardCvcInput.value.length < 3)){
//                 ifError(); 
//             }else{
//                 loadingText.innerHTML = "Пожалуйста подождите!,Идет обработка данных...";
//                 loadingText.style.display = "block";
//             }
//         },2000)
//     })
//     .then(() =>{
//         setTimeout(() =>{
//             loadingSpinner.style.display = "block"
//         },5000)
//     })
//     .then(()=>{
//         setTimeout(()=>{
//             let ask = confirm("Вы действительно хотите купить данный товар?");
//             if(ask){
//                 loadingSpinner.style.display = "none";
                
//                 setTimeout(()=>{
//                     modalBody.innerHTML = `
//                     <div class="d-flex" style="align-items: center">
//                         <img class="m-1"style="width: 100px" src="img/success.png">
//                         <h5>Оплата прошла успешно!Спасибо за покупку!</h5>
//                     </div>
//                     `
//                 },2000)
//             }else if(!ask){
//                 loadingText.style.display = "none";
//                 loadingSpinner.style.display = "none";
//                 ifError();
//             }

//         },10000)
//     })
//     .catch(()=>{
//         setTimeout(()=>{
//             ifError();
//         },2000)
//     })
// })

// function ifError(){
//     modalBody.innerHTML = `
//     <h1 class="text-center m-5">Что-то пошло не так!</h1>  
//     `
// }

// const FormOrder = () => {
//     return (
//         <div>
//             <div class="modal-container">
//     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//       <div class="modal-dialog">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title" id="exampleModalLabel">Купить товар</h5>
//             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div class="modal-body">
//             <div class="container">
//               <div class="row">
//                   <div class="col-xs-12 col-md-12 col-md-offset-4">
//                       <div class="panel panel-default">
//                           <div class="panel-heading">
//                               <div class="row">
//                                   <h3 class="text-center">Payment Details</h3>
//                                   <img class="w-100 img-responsive cc-img" src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"/>
//                               </div>
//                           </div>
//                           <div class="panel-body">
//                               <form role="form">
//                                   <div class="row">
//                                       <div class="col-xs-12 col-lg-12 p-0">
//                                           <div class="form-group">
//                                               <label>Номер карты</label>
//                                               <br/>
//                                               <p class="small your-card"></p>
//                                               <div class="input-group">
//                                                   <input type="number" class="form-control card-input" placeholder="Valid Card Number" />
//                                                   <span class="input-group-addon"><span class="fa fa-credit-card"></span></span>
//                                               </div>
//                                               <p class="card-validation"></p>
//                                           </div>
//                                       </div>
//                                   </div>
//                                   <div class="row">
//                                       <div class="col-xs-7 p-0 col-md-7">
//                                           <div class="form-group">
//                                               <label><span class="hidden-xs">Дата карты</span></label>
//                                               <input type="number"  class="form-control card-date-input" placeholder="MMYY" />
//                                           </div>
//                                           <p class="date-validation"></p>
//                                       </div>
//                                       <div class="col-xs-5 col-md-5 pull-right">
//                                           <div class="form-group">
//                                               <label>CV код</label>
//                                               <input type="number" class="form-control card-cvc-input" placeholder="CVC" />
//                                           </div>
//                                           <p class="cvc-validation"></p>
//                                       </div>
//                                   </div>
//                                   <div class="row">
//                                       <div class="col-xs-12 col-lg-12 p-0">
//                                           <div class="form-group">
//                                               <label>Владелец карты</label>
//                                               <input type="text" class="form-control card-owner-input" placeholder="Card Owner Names" />
//                                           </div>
//                                       </div>
//                                   </div>
//                               </form>
//                           </div>

//                           <div class="loading mb-2">
//                             <h6 class="loadingText text-center"></h6>

//                             <div class="d-flex justify-content-center">
//                               <div class="spinner-border text-danger" role="status">
//                                 <span class="sr-only">Loading...</span>
//                               </div>
//                             </div>
//                           </div>

//                           <div class="panel-footer">
//                               <div class="row">
//                                   <div class="col-xs-12 col-lg-12">
//                                       <button class="btn btn-warning btn-lg btn-block submit">Оплатить</button>
//                                   </div>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//           </div>
//           <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//         </div>
//     );
// };

// export default FormOrder;
