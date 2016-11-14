/**
 * Created by Administrator on 2016/10/12 0012.
 */

(function () {

    var target = document.querySelector("#target");
    var audio = document.querySelector("audio");
    var arr = [];

    target.addEventListener("dragover",function (e) {
        e.preventDefault();
    });

    var music ;
    target.addEventListener("drop",function (e) {
        e.preventDefault();
        var files = e.dataTransfer.files;
        var reader;
        var element;


        if(files && files.length){
            for(var i = 0; i < files.length; i++){
                var file = files[i];
                var musicName = file.name;

                // console.log(musicName);
                switch (file.type){
                    case "audio/mp3":
                        reader = new FileReader();
                        reader.onload =(function () {
                            element = document.createElement("div");
                            element.className = "music";
                            target.appendChild(element);
                            element.innerHTML = musicName;
                            element.onclick = function () {
                                audio.src = reader.result;
                            };
                        })();
                        reader.readAsDataURL(file);
                        break;
                    default:
                        console.log(file);
                        break;
                } 
            }
        }
        // var music = document.getElementsByClassName("music");
        // var audio = document.querySelector("audio");
        // music.addEventListener("click",function () {
        //     audio[0].src = reader.result;
        // });

    });




})();
