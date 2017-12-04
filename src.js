document.addEventListener("click", function(){

$('#animate p:first').slideDown(1000, AnimatePara).delay(1000);
});

function AnimatePara(){
$(this).slideUp(4000);

$(this).next('p').slideDown(4000, AnimatePara);
}
