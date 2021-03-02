var fs = require("fs");
    function readFiles(dirname, onFileContent, onError) {
      fs.readdir(dirname, function (err, filenames) {
        if (err) {
          onError(err);
          return;
        }
        filenames.forEach(function (filename) {
          fs.readFile(dirname + filename, "utf-8", function (err, content) {
            if (err) {
              onError(err);
              return;
            }
            onFileContent(filename);
          });
        });
      });
    }
    function Select(File) {
      readFiles('/His', aler, aler);
      arr = ["TEst", "TEst"];
      innnerHTML = "";
      for (let index = 0; index < arr.length; index++) {
        innnerHTML +=
          '<option value="' + arr[index] + '">' + arr[index] + "</option>";
      }

      document.getElementById("displayYest").innerHTML = innnerHTML;
    }
    function aler(data) {
      alert(data);
    }