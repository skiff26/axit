$(function(){
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
return false;
});
});
const firstForm =  document.forms.f_form;
const secondForm =  document.forms.s_form;
const fForm = document.getElementsByClassName('mainblock__cont-form');
const sForm = document.getElementsByClassName('contact__form');
// fForm.addEventListener("focus", function(event){
//   sForm.classList.add('form-no-active');
// });
console.log(sForm);
secondForm.classList.add('contact__form');
