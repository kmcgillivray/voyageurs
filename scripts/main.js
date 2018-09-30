var $toggleIcon = $('.toggle-icon');
var $toggleContent = $('.toggle-content');
var $toggleHeading = $('.toggle-heading');

$toggleContent.hide();
$toggleIcon.text('+ ');

$toggleHeading.addClass('pointer');
$toggleHeading.click(function() {
  var $self = $(this);
  $self.toggleClass('open');
  var targetId = $self.data('target');
  var $target = $('#' + targetId);
  var toggleIconText = $self.hasClass('open') ? '- ' : '+ ';
  $self.find('.toggle-icon').text(toggleIconText);
  $target.toggle();
});
