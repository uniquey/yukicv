if (Meteor.isClient) {

  Template.epc.onRendered(function(){
 
    $('.magicButton').on('click', function () {
      var theText = $(this).attr('id');
      //$('#ballText').addClass('hide');
      //$(this).closest('.buttonDiv').find('.ballText').removeClass("hide");
      $('strong').text(theText);
      $('.TVtext').find('p').removeClass('show')
      $('.'+theText).addClass('show');
    })

  })


  Template.pc.onRendered(function(){
 
    $('.magicButton').on('click', function () {
      var theText = $(this).attr('id');
      //$('#ballText').addClass('hide');
      //$(this).closest('.buttonDiv').find('.ballText').removeClass("hide");
      $('strong').text(theText);
      $('.TVtext').find('p').removeClass('show')
      $('.'+theText).addClass('show');
    })

  })
}
