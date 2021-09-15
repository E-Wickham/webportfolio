jQuery(document).ready(function () {
    
    $('#coding').hover(
        function(){
            $(this).css("background-color", "pink");
            $(this).css("z-index","1");
            $('#folderBody').css("background-color", "pink");
            //set behind folder body
            $('#podcasts').css("z-index","-1");
            $('#journalism').css("z-index","-1");
            $('#misc').css("z-index","-1");
            //change the colour back to default
            $('#podcasts').css("background-color", "#E3E0AF");
            $('#journalism').css("background-color", "#E3E0AF");
            $('#misc').css("background-color", "#E3E0AF");
            //show coding portfolio content and hide the others
            $('#coding-folder-content').show();
            $('#journalism-folder-content').hide();
            $('#podcast-folder-content').hide();
            $('#misc-folder-content').hide();

            }, function(){
            $('#podcasts').css("z-index","1");
            $('#journalism').css("z-index","1");
            $('#misc').css("z-index","1");
        }
    )
    $('#podcasts').hover(
        function(){
            $(this).css("background-color", "skyblue");
            $(this).css("z-index","1");
            $('#folderBody').css("background-color", "skyblue");
            $('#coding').css("z-index","-1");
            $('#journalism').css("z-index","-1");
            $('#misc').css("z-index","-1");
            $('#coding').css("background-color", "#E3E0AF");
            $('#journalism').css("background-color", "#E3E0AF");
            $('#misc').css("background-color", "#E3E0AF");
            //show coding portfolio content and hide the others
            $('#podcast-folder-content').show();
            $('#coding-folder-content').hide();
            $('#journalism-folder-content').hide();
            $('#misc-folder-content').hide();
            }, function(){
            $('#coding').css("z-index","1");
            $('#journalism').css("z-index","1");
            $('#misc').css("z-index","1");
        }
    )
    $('#journalism').hover(
        function(){
            $(this).css("background-color", "#A2E4B8");
            $('#folderBody').css("background-color", "#A2E4B8");
            $('#coding').css("z-index","-1");
            $('#podcasts').css("z-index","-1");
            $('#misc').css("z-index","-1");
            $('#coding').css("background-color", "#E3E0AF");
            $('#podcasts').css("background-color", "#E3E0AF");
            $('#misc').css("background-color", "#E3E0AF");
            $('#journalism-folder-content').show();
            $('#coding-folder-content').hide();
            $('#podcast-folder-content').hide();
            $('#misc-folder-content').hide();

            }, function(){
            $('#coding').css("z-index","1");
            $('#podcasts').css("z-index","1");
            $('#misc').css("z-index","1");
        }
    )
    $('#misc').hover(
        function(){
            $(this).css("background-color", "#FFDF9E");
            $('#folderBody').css("background-color", "#FFDF9E");
            //drop the 
            $('#coding').css("z-index","-1");
            $('#podcasts').css("z-index","-1");
            $('#journalism').css("z-index","-1");
            //change the colour back to default
            $('#coding').css("background-color", "#E3E0AF");
            $('#podcasts').css("background-color", "#E3E0AF");
            $('#journalism').css("background-color", "#E3E0AF");
            //show misc items and hide the rest
            $('#misc-folder-content').show();
            $('#journalism-folder-content').hide();
            $('#coding-folder-content').hide();
            $('#podcast-folder-content').hide();
            }, function(){
            $('#coding').css("z-index","1");
            $('#podcasts').css("z-index","1");
            $('#journalism').css("z-index","1");
        }
    )

// MODAL
$('#coding').click(
    function(){
    $('#codingModal').modal('show');
    });

$('#podcasts').click(
    function(){
    $('#podcastModal').modal('show');
    });

$('#journalism').click(
    function(){
    $('#journoModal').modal('show');
    });
$('#misc').click(
    function(){
    $('#miscModal').modal('show');
    });
$('#about').click(
    function(){
    $('#aboutModal').modal('show');
    });

});
