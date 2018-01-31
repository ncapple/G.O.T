$(document).ready(function(){
    
    
    $("img").click(function(){
        var picid=$(this).attr("id")
        $.get('https://www.anapioficeandfire.com/api/houses/' +picid,"/", function(response){
            console.log(response);
            var html_str =`
                <div id="results"><h3><span>Name</span>:&nbsp;${response.name}</h3><br>
                <h3><span>Region</span>:&nbsp;${response.region}</h3><br>
                <h3><span>Title</span>:&nbsp;${response.titles}</h3><br>
                <h3><span>Coat of Arms</span>:&nbsp;${response.coatOfArms}</div>
            `;
            $('#resultsbox').append(html_str);
        })
        return false;
     })

}) 
