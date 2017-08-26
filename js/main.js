$(document).ready(function () {

    // swapping

    $("#change").on('click', function () {
        var pickup = $('#from').val();
        $('#from').val($('#to').val());
        $('#to').val(pickup);
    });

    // trip

    $("#two").click(function () {
        $("#last").show();
    });
    $("#one").click(function () {
        $("#last").hide();
    });

    // slider

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        autoControls: true
    });

    // date pickers

//    $('.datepicker').datepicker({
//        format: 'mm/dd/yyyy',
//        startDate: '-3d',
//        autoclose: true,
//        orientation: "bottom"
//    });

    
       $('.datepicker').each(function () {
        $(this).datepicker({
            format: 'mm/dd/yyyy'
            , startDate: '-3d'
            , orientation: "bottom"
            , autoclose: true
        })
    });
    

    // chat side

    $('#chatBox').click(function () {
        $('.chatWindow').toggle("slow");
        $('#chatBox').hide();
    });

    // minimize

    $(".mimize").click(function () {
        $(".chatWindow").hide("slow");
        $('#chatBox').show();
    });

    // dummy

    $('#liveMove').click(function () {
        $('.chat_cont').hide();
        $('.chat_page').show();
    });

    // return date

    $("#retu_date").click(function () {
        $(".return_date").show();
        $("#retu_date").addClass('jq-retu-cl');
    });


    // seat layer


    $('.seat_sec_opn').click(function () {
        $('.seat_layout').hide();
        $('#seat_sec_file' + $(this).attr('target')).slideDown();
//         $('.search_res').$(this).css('background-color', 'red');
    });




    // fancy box
    
    $("a#single_image").fancybox();
    

    
    // passenger
    
    
    
      $("#add_cha_seat").click(function () {
        $(".add-change").show(500);
           });
    
    
    
       $("#coup_click").click(function () {
        $(".coupons").show(300);
           });
    
       $("#coup_cls").click(function () {
        $(".coupons").hide(300);
           });
    
    // test
    
    
    

    




});