function toggleSong() {
  var song = document.querySelector('audio');
  if(song.paused == true) {
  console.log('Playing');
  $('.play-icon').removeClass('fa-play').addClass('fa-pause');
  $('.play-icon').attr('title','Pause');
  song.play();
  }
  else {
  console.log('Pausing');
  $('.play-icon').removeClass('fa-pause').addClass('fa-play');
  $('.play-icon').attr('title','Play');
  song.pause();
  }
}

function fancyTimeFormat(time)
{
// Hours, minutes and seconds
var hrs = ~~(time / 3600);
var mins = ~~((time % 3600) / 60);
var secs = time % 60;

// Output like "1:01" or "4:03:59" or "123:03:59"
var ret = "";

if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

ret += "" + mins + ":" + (secs < 10 ? "0" : "");
ret += "" + secs;
return ret;
}


        function updateCurrentTime() {
        var song = document.querySelector('audio');
        var currentTime = Math.floor(song.currentTime);
        currentTime = fancyTimeFormat(currentTime);
        var duration = Math.floor(song.duration);
        duration = fancyTimeFormat(duration)
        var filled=(song.currentTime/song.duration);
        filled=filled*700;
        $(".progress-filled").width(filled);
        $('.time-elapsed').text(currentTime);
        $('.song-duration-bar').text(duration);
        }

    // this function replays the song once it is fnished
          function enableLoop() {
              var audio=document.querySelector('audio');
              audio.loop = true;
              audio.load();
          }
          function addSongNameClickEvent(songObj,pos)
          {
            var id='#song'+pos;
            $(id).click(function() {
              var audio = document.querySelector('audio');
              var currentSong = audio.src;
              if(currentSong.search(songObj.fileName) != -1)
              {
              toggleSong();
              }
              else {
              audio.src = songObj.fileName;
              toggleSong();
              changeCurrentSongDetails(songObj);
              }
              });
          }
          function changeCurrentSongDetails(songObj) {
        $('.current-song-image').attr('src','img/' + songObj.image)
        $('.current-song-name').text(songObj.name)
        $('.current-song-album').text(songObj.album)
      }



    function changeForword(songname) {
      var song = document.querySelector('audio');
      var currentSong=song.src;
      //var songname =['song1.mp3','song2.mp3','song3.mp3','song4.mp3']
      var j;
      for(var i=0;i<songname.length;i++)
      {
      if(currentSong.search(songname[i].fileName) != -1)
      {
        j=i;
        break;
      }
      }
      if(j+1==songname.length)
      {
        song.src=songname[0].fileName;
        toggleSong();
        changeCurrentSongDetails(songname[0]);
      }
      else
      {
        song.src=songname[j+1].fileName;
        toggleSong();
        changeCurrentSongDetails(songname[j+1]);
      }
      }

      function changeBackword(songname) {
        var song = document.querySelector('audio');
        var currentSong=song.src;
        //var songname =['song1.mp3','song2.mp3','song3.mp3','song4.mp3']
        var j;
        for(var i=0;i<songname.length;i++)
        {
        if(currentSong.search(songname[i].fileName) != -1)
        {
          j=i;
          break;
        }
        }
        if(j==0)
        {
          song.src=songname[songname.length-1].fileName;
          toggleSong();
          changeCurrentSongDetails(songname[songname.length-1]);
        }
        else
        {
          song.src=songname[j-1].fileName;
          toggleSong();
          changeCurrentSongDetails(songname[j-1]);
        }
        }














  window.onload = function() {
    // var songList = ['Badri Ki Dulhania (Title Track)',
    //                 'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
    //   var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
    //   var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
  // $('#song1 .song-name').text(songList[0]);
  // $('#song2 .song-name').text(songList[1]);
  // $('#song3 .song-name').text(songList[2]);
  // $('#song4 .song-name').text(songList[3]);
  // $('#song1 .song-artist').text(artistList[0]);
  // $('#song2 .song-artist').text(artistList[1]);
  // $('#song3 .song-artist').text(artistList[2]);
  // $('#song4 .song-artist').text(artistList[3]);
  var songs = [{
        'name': 'Tamma Tamma',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image':'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image':'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image':'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image':'song4.jpg'
    }]
    changeCurrentSongDetails(songs[0]);

    $('.forward').on('click',function(){
      changeForword(songs);
    });
    $('.backward').on('click',function(){
      changeBackword(songs);
    });
    //   for(var i =0; i < songList.length;i++) {
    //     var name = '#song' + (i+1);
    //     var song = $(name);
    //     song.find('.song-name').text(songList[i]);
    //     song.find('.song-artist').text(artistList[i]);
    // }
      // for(var i=0;i<fileNames.length;i++)
      // {
      //   addSongOnClickEvent(fileNames[i],i+1);
      // }

      for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
    }
      // $('#song1').click(function() {
      //   var audio = document.querySelector('audio');
      //   var currentSong = audio.src;
      //   if(currentSong.search(fileNames[0]) != -1)
      //   {
      //   toggleSong();
      //   }
      //   else {
      //   audio.src = fileNames[0];
      //   toggleSong();
      //   }
      //   });
      //   $('#song2').click(function() {
      //   var audio = document.querySelector('audio');
      //   var currentSong = audio.src;
      //   if(currentSong.search(fileNames[1]) != -1)
      //   {
      //   toggleSong();
      //   }
      //   else {
      //   audio.src = fileNames[1];
      //   toggleSong();
      //   }
      //   });
      //   $('#song3').click(function() {
      //   var audio = document.querySelector('audio');
      //   var currentSong = audio.src;
      //   if(currentSong.search(fileNames[2]) != -1)
      //   {
      //   toggleSong();
      //   }
      //   else {
      //   audio.src = fileNames[2];
      //   toggleSong();
      //   }
      //   });
      //   $('#song4').click(function() {
      //   var audio = document.querySelector('audio');
      //   var currentSong = audio.src;
      //   if(currentSong.search(fileNames[3]) != -1)
      //   {
      //   toggleSong();
      //   }
      //   else {
      //   audio.src = fileNames[3];
      //   toggleSong();
      //   }
      //   });

        enableLoop();
      updateCurrentTime();
      setInterval(function() {
      updateCurrentTime();
    },1);
    $('#songs').DataTable({
        paging: false
    });
  }


$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 2) {
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.main').removeClass('hidden');
    } else {
        $('#name-input').addClass('error');
    }
});
$('.play-icon').on('click', function() {
    toggleSong();
});
$('body').on('keypress', function(event) {
            if (event.keyCode == 32) {
                toggleSong();
            }
        });
