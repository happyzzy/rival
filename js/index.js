/**
 * Created by zhuangzeyu on 15/10/27.
 */

$(function () {
  //        $(function () {
  //
  //            $('#menu-nav .navbar-collapse a').click(function (e) {
  //                var href = $(this).attr('href');
  //                var tabId = $(this).attr('data-tab');
  //                if ('#' !== href) {
  //                    e.preventDefault();
  //                    $(document).scrollTop($(href).offset().top - 70);
  //                    if (tabId) {
  //                        $('#feature-tab a[href=#' + tabId + ']').tab('show');
  //                    }
  //                }
  //            });
  //
  //        });
});

function onclick_a(no) {
  $.ajax({
    cache: false,
    type: "GET",
    url: "data/hero/hero_" + no + ".json",
    async: false,
    error: function (request) {
      alert("Connection error");
    },
    success: function (data) {
      var skills1 = '';
      var skills2 = '';
      var skills3 = '';
      var skills4 = '';

      skills1 += '<tr>';
      for (var p = 1; p <= data.hero.skills_1_conf.number; p++) {
        skills1 += '<td>' + data.hero.skills_1_conf['no_' + p] + '</td>'
      }
      skills1 += '</tr>';
      for (var k = 0; k < data.hero.skills_1.length; k++) {
        skills1 += '<tr>';
        for (var j = 1; j <= data.hero.skills_1_conf.number; j++) {
          skills1 += '<td>' + data.hero.skills_1[k]['no_' + j] + '</td>'
        }
        skills1 += '</tr>';
      }


      skills2 += '<tr>';
      for (var p = 1; p <= data.hero.skills_2_conf.number; p++) {
        skills2 += '<td>' + data.hero.skills_2_conf['no_' + p] + '</td>'
      }
      skills2 += '</tr>';
      for (var k = 0; k < data.hero.skills_2.length; k++) {
        skills2 += '<tr>';
        for (var j = 1; j <= data.hero.skills_2_conf.number; j++) {
          skills2 += '<td>' + data.hero.skills_2[k]['no_' + j] + '</td>'
        }
        skills2 += '</tr>';
      }


      skills3 += '<tr>';
      for (var p = 1; p <= data.hero.skills_3_conf.number; p++) {
        skills3 += '<td>' + data.hero.skills_3_conf['no_' + p] + '</td>'
      }
      skills3 += '</tr>';
      for (var k = 0; k < data.hero.skills_3.length; k++) {
        skills3 += '<tr>';
        for (var j = 1; j <= data.hero.skills_3_conf.number; j++) {
          skills3 += '<td>' + data.hero.skills_3[k]['no_' + j] + '</td>'
        }
        skills3 += '</tr>';
      }


      skills4 += '<tr>';
      for (var p = 1; p <= data.hero.skills_4_conf.number; p++) {
        skills4 += '<td>' + data.hero.skills_4_conf['no_' + p] + '</td>'
      }
      skills4 += '</tr>';
      for (var k = 0; k < data.hero.skills_4.length; k++) {
        skills4 += '<tr>';
        for (var j = 1; j <= data.hero.skills_4_conf.number; j++) {
          skills4 += '<td>' + data.hero.skills_4[k]['no_' + j] + '</td>'
        }
        skills4 += '</tr>';
      }



      var skillCol_1 = data.hero.skills_1_conf.number - 1;
      var skillCol_2 = data.hero.skills_2_conf.number - 1;
      var skillCol_3 = data.hero.skills_3_conf.number - 1;
      var skillCol_4 = data.hero.skills_4_conf.number - 1;

      var html_content = ' <ul class="nav nav-tabs" role="tablist" id="feature-tab"> ' +
        '<li class="active"><a href="#tab1" role="tab" data-toggle="tab">' + data.hero.name + '</a></li> ' +
        '<li><a href="#tab2" role="tab" data-toggle="tab">' +
        data.hero.skills_1_conf.name
        + '</a></li> ' +
        '<li><a href="#tab3" role="tab" data-toggle="tab">' +
        data.hero.skills_2_conf.name
        + '</a></li> ' +
        '<li><a href="#tab4" role="tab" data-toggle="tab">' +
        data.hero.skills_3_conf.name
        + '</a></li> ' +
        '<li><a href="#tab5" role="tab" data-toggle="tab">' +
        data.hero.skills_4_conf.name
        + '</a></li> </ul>' +
        '<div class="tab-content"> ' +
        '<div class="tab-pane active container" id="tab1">' +
        '<table class="table" style="max-width:530px">' +
        '<tr><td><img width=220 alt="守护神头像" src="' + data.hero.img[0] + '"/></td>' +
        '<tr><td>' + data.hero.description + '</td></tr>' +
        '</td></tr>' +
        '</table>' +
        '</div> ' +


        '<div class="tab-pane container" id="tab2">' +
        '<table class="table" style="max-width:530px">' +
        '<tr><td><img height=50 width=50 alt="守护神技能1" src="' + data.hero.img[1] +
        '"/></td><td colspan="' + skillCol_1 + '">' +
        data.hero.skills_1_conf.description +
        '</td></tr>' +
        skills1 +
        '</table>' +
        '</div>' +


        '<div class="tab-pane container" id="tab3">' +
        '<table class="table" style="max-width:530px">' +
        '<tr><td><img height=50 width=50 alt="守护神技能2" src="' + data.hero.img[2] +
        '"/></td><td colspan="' + skillCol_2 + '">' +
        data.hero.skills_2_conf.description +
        '</td></tr>' +
        skills2 +
        '</table>' +
        '</div>' +

        '<div class="tab-pane container" id="tab4">' +
        '<table class="table" style="max-width:530px">' +
        '<tr><td><img height=50 width=50 alt="守护神技能3" src="' + data.hero.img[3] +
        '"/></td><td colspan="' + skillCol_3 + '">' +
        data.hero.skills_3_conf.description +
        '</td></tr>' +
        skills3 +
        '</table>' +
        '</div>'+

        '<div class="tab-pane container" id="tab5">' +
        '<table class="table" style="max-width:530px">' +
        '<tr><td><img height=50 width=50 alt="守护神技能4" src="' + data.hero.img[4] +
        '"/></td><td colspan="' + skillCol_4 + '">' +
        data.hero.skills_4_conf.description +
        '</td></tr>' +
        skills4 +
        '</table>' +
        '</div></div>';
      $('#hero-modal').html(html_content);

    }
  });
}