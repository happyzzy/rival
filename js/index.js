/**
 * Created by zhuangzeyu on 15/10/27.
 */

$(function(){

});

function onclick_a(no){
    $.ajax({
        cache: false,
        type: "GET",
        url:"data/hero.json",
        async: false,
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            for(var i = 0;i < data.hero.length;i++){
                if(data.hero[i].no == no){
                    var skills1='';

                    skills1 +='<tr>';
                    for(var p = 1 ;p <= data.hero[i].skills_1_conf.number ;p ++){
                        skills1 +='<td>'+data.hero[i].skills_1_conf['no_'+p]+'</td>'
                    }
                    skills1 +='</tr>';

                    for(var k = 0 ;k<data.hero[i].skills_1.length;k++){
                        skills1 +='<tr>';
                        for(var j = 1 ;j <= data.hero[i].skills_1_conf.number ;j ++){
                            skills1 +='<td>'+data.hero[i].skills_1[k]['no_'+j]+'</td>'
                        }
                        skills1 +='</tr>';
                    }

                    var skillCol = data.hero[i].skills_1_conf.number-1;

                    var html_content = ' <ul class="nav nav-tabs" role="tablist" id="feature-tab"> ' +
                        '<li class="active"><a href="#tab1" role="tab" data-toggle="tab">' + data.hero[i].name +'</a></li> ' +
                        '<li><a href="#tab2" role="tab" data-toggle="tab">' +
                        data.hero[i].skills_1_conf.name
                        + '</a></li> ' +
                        '<li><a href="#tab2" role="tab" data-toggle="tab">技能树</a></li> ' +
                        '<li><a href="#tab3" role="tab" data-toggle="tab">技能树</a></li> ' +
                        '<li><a href="#tab4" role="tab" data-toggle="tab">技能树</a></li> ' +

                        '<div class="tab-content"> ' +
                        '<div class="tab-pane active container" id="tab1">' +
                        '<table class="table">'+
                        '<tr><td><img height=180 width=220 src="'+ data.hero[i].img[0] +'"/></td>' +
                        '<tr><td>' + data.hero[i].description + '</td></tr>'+
                        '</td></tr>'+
                        '</table>'+
                        '</div> ' +
                        '<div class="tab-pane container" id="tab2">' +
                        '<table class="table">'+
                        '<tr><td><img height=50 width=50 src="'+ data.hero[i].img[1] +
                        '"/></td><td colspan="' + skillCol + '">' +
                        data.hero[i].skills_1_conf.description +
                        '</td></tr>'+
                        skills1 +
                        '</table>'+
                        '</div>';
                    $('#hero-modal').html(html_content);


                }
            }



        }
    });




}