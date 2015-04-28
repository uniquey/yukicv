if (Meteor.isClient) {
 //******Below is used to make a float div*****

   window.onscroll=function(){

    if ($(document).scrollTop() > 250)

    {

    //$("#pf_nav").show();

    $(".bs-docs-sidebar").addClass('float');

    }else{

    //$("#pf_nav").hide();

    $(".bs-docs-sidebar").removeClass('float');

    }

    }



}
