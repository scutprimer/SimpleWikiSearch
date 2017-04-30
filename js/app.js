
(function(){
  $("#search").on("input", search);   
 $("#form-container").on("submit", function(preventsumbit) {preventsumbit.preventDefault();})  
})();
function search()
    {
        //var url="'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=";
         
      
        var value = $("input").val();
        var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&callback=?&gsrsearch="+value;
        $.ajax({
           // headers: { 'Api-User-Agent': 'Example/1.0' },
            url:url,
            method:'GET',
            dataType:'JSON',
            success:function(response)
            {
                
                var counter=1;
                var obj=response.query.pages;
                var HTMLNODE="";
                $.map(obj,function(value,key)//key在这里是搜索获得的编号
                { 
                    HTMLNODE+="<div class='searchresult'><a href='https://en.wikipedia.org/wiki/"+value.title+"'target='_blank'><h2 class='searchtitle'>"+value.title+'</h2></a>'+'<p class="resultanwser">'+value.extract+'</p></div>';

                });
                  $wikiContent = $('#Result_content');
                  $wikiContent.empty().append(HTMLNODE);
               // $('#Result_content').empty().append(HTMLNODE);
            },
            error:function(){
                alert("it'swrong");
            }
        })   
}
