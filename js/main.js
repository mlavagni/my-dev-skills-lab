let skillList = [];


$('#addSkill').on('click', function(evt) {
    skillList.push($('#skill').val());
  
    var $newSkill= $(`<tr><td class="rows"><span id="remove${skillList.length}">${'x'}</span>${$('#skill').val()}</td></tr>`)
 
    
    $('table').append($newSkill)
    
    $(`#remove${skillList.length}`).on('click', function(event){
            $(this).closest('tr').remove();
            console.log(event)
        //   });
    });
});


