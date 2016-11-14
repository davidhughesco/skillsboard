$(document).ready(function() {

  $("#content-editor-formatting").css('visibility','hidden');

  // Show formatting bar on focus...
  $("#course-content-div").focus(function(){
    $("#content-editor-formatting").css('visibility','visible');
  });
  // ... and hide it when [other] input focused *IMPROVE*
  $("#course_title").focus(function(){
    $("#content-editor-formatting").css('visibility','hidden');
  });

  // Make contenteditable div equal to textarea on load
  $("#course-content-div").html($('#course_content').val());

  // Make textarea equal to contenteditable div
  $('#course-content-div').bind( "mouseenter mouseleave click keypress keydown keyup change blur focus", function(){
    $('#course_content').val($('#course-content-div').html());
  });

  // Editor Functions

  // Bold
  $("#btn-bold").click(function(){
    document.execCommand('bold', false, null);
  });

  // Italic
  $("#btn-italic").click(function(){
    document.execCommand('italic', false, null);
  });

  // Unordered List (bullets)
  $("#btn-ul").click(function(){
    document.execCommand('insertUnorderedList');
  });

  // Ordered List (numbers)
  $("#btn-ol").click(function(){
    document.execCommand('insertOrderedList');
  });

  // Add Link
  $("#btn-link").click(function(){
    var url = prompt("Please enter the URL");
    var selection = document.getSelection();
    document.execCommand('createLink', true, url);
  });

  // Remove Link
  $("#btn-unlink").click(function(){
    document.execCommand('unlink');
  });

  // Header
  $('#btn-h2').click(function() {
    var html = $('#course-content-div').html();
    document.execCommand('formatBlock', false, 'h2');
    if(html == $('#course-content-div').html()) {
      document.execCommand('formatBlock', false, 'p');
    }
  });

  // Undo
  $("#btn-undo").click(function(){
    document.execCommand('undo');
  });

  // Redo
  $("#btn-redo").click(function(){
    document.execCommand('redo');
  });

});
