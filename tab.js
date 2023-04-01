// $('.tab-button').eq(0).on('click',function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(0).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(0).addClass('show');
// });


// $('.tab-button').removeClass('orange');
// $('.tab-button').eq(i).addClass('orange');
// $('.tab-content').removeClass('show');
// $('.tab-content').eq(i).addClass('show');


// 이벤트 리스너를 3번 반복하는 방법(for문 3번)
// for(let i = 0; i < $('.tab-button').length; i++){
//   $('.tab-button').eq(i).on('click',function(){
//     openTab(i);
//   });
// }

// 이벤트 리스너를 1번 반복하는 방법
$('.list').click(function(e){
  openTab(parseInt(e.target.dataset.id));
});

function openTab(num){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(num).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(num).addClass('show');
}
