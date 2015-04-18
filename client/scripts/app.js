
var friendsList = Object.create(null);
friendsList["rando"] = true;
var getMsgs = function () {

  $.ajax({
    url: "http://127.0.0.1:3000/classes/messages",
    type: "GET",
    context: "json",
    data: { order: "-updatedAt", limit:500 }
  }).done(function(msg) {
    $(".msgs").remove();
    var parsed = JSON.parse(msg);
    _.each(parsed, function(item){
      console.log(item);
      if(!(typeof item === 'undefined')) {
        var $container = $('<div> </div>').addClass("msgs");
        var userName = escapeHTML(item.USERNAME);
        var isFriend = userName in friendsList;
        if(isFriend)
          userName = "<strong>"+userName+"</strong>";
        var $userName = $("<span>" + userName + "</span>").click(function()
        {
          friendsList[userName] = true;
          $(this).css("font-weight", "bold");
          console.log("test " + userName);
        });

        msg = ": "+ escapeHTML(item.MSGTEXT);

        $container.append($userName);
        $container.append(msg);

      $("#main").append($container);
    }
  });
    console.log(parsed);
  });
};

getMsgs();

//setInterval(getMsgs, 5000);


var escapeHTML=function(s){
  if(s === undefined || s === null)
    return '';

  return s.replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/'/g, '&#x27');

}


$(document).ready(function()
{


  $("form").submit(function(e){
     var formMessage = $("input:first").val();
     console.log(formMessage);
    var message = {
     'username': "rando",
      'message': formMessage,
      'roomname': "hehe"

    }

    $.ajax({
      // always use this url
      url: "http://127.0.0.1:3000/classes/messages",
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message');
      }
    });
    $("input.first").val("");
    e.preventDefault();
});
})


