function LoadFile() {
    //document.getElementById("output").innerHTML = '<object type="text/html" data="Js_File/Header/Email.txt"></object>';
    var logfile = "";
    /*$.get("Js_File/Header/Email.txt", function(response) {
          logfile = response;
          alert(logfile);
    });*/
    var $p = document.getElementsByTagName('output');
    //var url = $p.getAttribute('src');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function insertContents() { 
      if (xhr.readyState === 4 && xhr.status === 200) {
        $p.innerHTML = xhr.responseText;
      }
    };
    xhr.open('GET', "Js_File/Header/Email.txt");
    xhr.send();
    
  }
  LoadFile();