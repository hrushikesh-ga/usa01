var pass = prompt("Enter The Password");

if (pass == "5293"){

var mailapi = "https://script.googleusercontent.com/a/macros/gopalsakariya.com/echo?user_content_key=7xKkjEN76Ue76qb86MEYIVDtcOljmxmVtQNG2FAiD1gUI0FXAJzwMF_7TMBDNhlGQVjrSkuvUpl075jZJl773oxO0fwtQ0ZPOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBea3QBykmnAOYSZb9sATkSjnFAkueCBXhqsc4chCyCPJ44B5rbI6n7LFGEHIxrSbdALtYNjoahoGj__GxXsXftno6EKWRBP5sbOTd-AI3AVu3bY-RIrJYjLvHOkhuOJPXyn1Z4YyOlLg&lib=MWbi6ILmrnPBEEYGLTEDkFlMrCbqRHED-";


fetch(mailapi)
.then(response => response.json())
.then((response) => {




  var size = Object.keys(response).length;
  console.log(size);



  var CityList = [];


  for (var g = 0; g < size ; g++) {


    CityList.push(response[g].CITY);

  } 

  function removeDuplicates(CityList) {
    return CityList.filter((item, 
      index) => CityList.indexOf(item) === index);
  }

  var DCityList = removeDuplicates(CityList);


  var SortDCityList = DCityList.sort();

  var SelectCityList = document.getElementById('SelectCity');

  for (var h = 0; h < SortDCityList.length ; h++) {

   var CityOption = document.createElement('option');
   CityOption.value = SortDCityList[h];

   CityOption.text = SortDCityList[h];


   SelectCityList.appendChild(CityOption);

 }
}
)
.catch(err => console.error(err));






function SearchCityNames(){



  fetch('https://script.googleusercontent.com/a/macros/gopalsakariya.com/echo?user_content_key=7xKkjEN76Ue76qb86MEYIVDtcOljmxmVtQNG2FAiD1gUI0FXAJzwMF_7TMBDNhlGQVjrSkuvUpl075jZJl773oxO0fwtQ0ZPOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBea3QBykmnAOYSZb9sATkSjnFAkueCBXhqsc4chCyCPJ44B5rbI6n7LFGEHIxrSbdALtYNjoahoGj__GxXsXftno6EKWRBP5sbOTd-AI3AVu3bY-RIrJYjLvHOkhuOJPXyn1Z4YyOlLg&lib=MWbi6ILmrnPBEEYGLTEDkFlMrCbqRHED-').then((data) => {
    return data.json();
  }).then((jdata) => {


    var size = Object.keys(jdata).length;

    var e = document.getElementById("SelectCity");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    console.log("******** "+value+" ********");




    for (var i = 0; i < size; i++) {

      if (jdata[i].CITY == value) {

        console.log(jdata[i].SR + " NAME: " + jdata[i].NAME);
        console.log("ADDRESS: "+jdata[i].ADDRESS);
        console.log("CITY: " + jdata[i].CITY + ", STATE: " + jdata[i].STATE);


        console.log("----------------");

      }




    }

  })




}

}else{
 location.replace("https://gopalsakariya.github.io/usa01/404.html") 
}

