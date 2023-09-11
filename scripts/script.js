$(document).ready(function () {
  $("#dogeMemePic").click(function () {
    console.log("position: ", $("#dogeMemePic").position());
  });

  let updateMessage;

  $("#dogeMemePic").draggable({
    stop: function () {
      if ($("#dogeMemePic").position().left > 500) {
        updateMessage = "WOW MUCH THANK FOR HELP";

        $("#dogeMemePic").attr(
          "src",
          "https://getwallpapers.com/wallpaper/full/d/9/e/9822.jpg"
        );
      } else if (
        $("#dogeMemePic").position().left > 300 &&
        $("#dogeMemePic").position().left < 500
      ) {
        updateMessage = "keep going!";
        $("#dogeMemePic").attr("src", "https://i.redd.it/8gva3ksucpf01.jpg");
      } else {
        updateMessage = "Blast off!";
        $("#dogeMemePic").attr(
          "src",
          "https://media.tenor.com/images/7e32c63e3ec91af70a042e6c776557ea/tenor.gif"
        );
      }
    }
  });
});
