$(function()
{   
    'use strict' 
    $('.z li ').click(function ()
    {
        $(this).addClass('selected').siblings().removeClass('selected');
        window.console.log($(this).data('class')) ; 
        $('.info-content div ').hide() ; 
        $('.' +  $(this).data('class')).fadeIn(); 

        });

});