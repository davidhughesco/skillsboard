$(document).ready(function() {

  // Show formatting bar on focus...
  $("#course-content-div").focus(function(){
    $("#content-editor-formatting").css('visibility','visible');
  });
  // ... and hide it when [other] input focused *IMPROVE*
  $("#course_title").focus(function(){
    $("#content-editor-formatting").css('visibility','hidden');
  });

  // Hide formatting bar on load
  $("#content-editor-formatting").css('visibility','hidden');

  // Make contenteditable div equal to textarea on load
  $("#course-content-div").html($('#course_content').val());

  // Make textarea equal to contenteditable div
  $('#course-content-div').bind( "mouseenter mouseleave click keypress keydown keyup change blur focus", function(){
    $('#course_content').val($('#course-content-div').html());
  });

  // Check style status
  $(document).bind("click keydown", function () {
    var isBold = document.queryCommandValue("bold");
    var isItalic = document.queryCommandValue("italic");
    var selection = window.getSelection().getRangeAt(0);
    if (isBold === 'true') {
      $("#btn-bold").addClass("style-applied")
    } else {
      $("#btn-bold").removeClass("style-applied")
    }
    if (isItalic === 'true') {
      $("#btn-italic").addClass("style-applied")
    } else {
      $("#btn-italic").removeClass("style-applied")
    }
    if (selection.startContainer.parentNode.tagName === 'A' || selection.endContainer.parentNode.tagName === 'A') {
      $("#btn-unlink").show();
      $("#btn-link").hide()
    } else {
      $("#btn-link").show()
      $("#btn-unlink").hide()
    }
    if (selection.startContainer.parentNode.tagName === 'H2' || selection.endContainer.parentNode.tagName === 'H2') {
      $("#btn-h2").addClass("style-applied");
    } else {
      $("#btn-h2").removeClass("style-applied")
    }
    if (selection.startContainer.parentNode.parentElement.nodeName === 'UL' || selection.startContainer.parentNode.parentElement.nodeName === 'UL') {
      $("#btn-ul").addClass("style-applied");
    } else {
      $("#btn-ul").removeClass("style-applied")
    }
    if (selection.startContainer.parentNode.parentElement.nodeName === 'OL' || selection.startContainer.parentNode.parentElement.nodeName === 'OL') {
      $("#btn-ol").addClass("style-applied");
    } else {
      $("#btn-ol").removeClass("style-applied")
    }
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
    var url = prompt("Please enter the full URL...")
    var selection = document.getSelection();
    document.execCommand('createLink', true, url);
  });

  // Remove Link
  $("#btn-unlink").click(function(){
    document.execCommand('unlink');
    $("#btn-link").show();
    $("#btn-unlink").hide();
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

  // Submit button outside of <form>
  $('#external-submit').on('click', function() { $('form').submit(); });

});
