

$(".button").click(function(){
    $('#result').empty()
   const newInput = $( "input" ).val();
    console.log(newInput)
    let http = new XMLHttpRequest();
    let search = "birds"
    http.open('GET', `https://api.tenor.com/v1/search?q=${newInput}&key=LIVDSRZULELA&limit=8`);
    http.responseType = 'json';
    
    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
            showPic(http.response);
        }
    };
    http.send();
})








     
function showPic(arr){
    arr.results.forEach(gif => {
        const newTag = $('<div class="container"></div>')
        const gifImage = $(`<img class="gif-image" src=${gif.media[0].gif.url}>`)
        newTag.append(gifImage)
        $('#result').append(newTag)    
    });
}