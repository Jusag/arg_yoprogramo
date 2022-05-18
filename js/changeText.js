
    function changeText(id__value){
      let x = document.getElementById(id__value).children[0];
      if(x == null){
        x = document.createElement("INPUT");
        document.getElementById(id__value).appendChild(x);
        x.size = 6;
        x.maxlength = "5";
        x.addEventListener('keypress', function (e){
          if (e.key === 'Enter') {
            document.getElementById(id__value).innerHTML = x.value;
          }
        });
      }
    }
  