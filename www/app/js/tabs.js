let tabControl = $('[data-tab-control]');
let tabData = $('[data-tab-pane]');

tabControl.on('click', function(e) {
  e.preventDefault();

  let target = $(e.target).attr('data-tab');

  tabData.removeClass('active');
  tabControl.removeClass('active');
  
  $(target).addClass('active');
  $(e.target).addClass('active');
});