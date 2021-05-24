var links = ["alan-flack-VtfiPvSGh5s-unsplash.jpg","chris-haws-dU5nKVhgZBc-unsplash.jpg","benoit-debaix-Ki1bw847Kbo-unsplash.jpg","jose-carbajal-8xyki0bqvgw-unsplash.jpg","richard-goff-05tjbPBCqd8-unsplash.jpg","roberto-nickson-zu95jkyrGtw-unsplash.jpg"];
var i = 1;
function myFunction() {
    document.getElementById("mnb").src=links[i];
    i = (i+1)%6;

}