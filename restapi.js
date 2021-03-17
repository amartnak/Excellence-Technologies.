var request = new XMLHttpRequest();

request.open("GET", "www.example.com/api/get/1", true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((xyz) => {
      console.log(xyz.title);
    });
  } else {
    console.log("error");
  }
};

request.send();
