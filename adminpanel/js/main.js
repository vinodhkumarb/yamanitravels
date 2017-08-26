$(document).ready(function () {
    $('meta[name="viewport"]').prop('content', 'width=1440');
    /* table */
    //    $('.data-table').dataTable({
    //        "bJQueryUI": true,
    //        "sPaginationType": "full_numbers",
    //        "sDom": '<""l>t<"F"fp>'
    //    });
    $('input[type=checkbox],input[type=radio],input[type=file]').uniform();
    $("span.icon input:checkbox, th input:checkbox").click(function () {
        var checkedStatus = this.checked;
        var checkbox = $(this).parents('.widget-box').find('tr td:first-child input:checkbox');
        checkbox.each(function () {
            this.checked = checkedStatus;
            if (checkedStatus == this.checked) {
                $(this).closest('.checker > span').removeClass('checked');
            }
            if (this.checked) {
                $(this).closest('.checker > span').addClass('checked');
            }
        });
    });
    /* dropdown  */
    $('select.inputsearch').select2();
    
//    $("select.inputsearch.hide").select2({
//  minimumResultsForSearch: Infinity
//});
//    
    
    /* side menu push */
    $("#openNav").toggle(function () {
        $('.side_left').show().css("width", "75px");
        $('.side_right').css("marginLeft", "75px");
    }, function () {
        $('.side_left').css("width", "0px").hide();
        $('.side_right').css("marginLeft", "0px");
    });
    /* bx slider */
    var slide = $('.bxslider').bxSlider({
        minSlides: 5
        , maxSlides: 5
        , slideWidth: 80
        , slideMargin: 10
        , moveSlides: 1
        , startSlide: 0
    });
    $('#book').click(function () {
        $('#book_opn').show(500);
        $("#block_opn").hide(500);
        $('#sta_dat').show();
        $('#collapse-group').hide();
        slide.reloadSlider();
    });
    $('.bxslider1').bxSlider({
        mode: 'fade'
        , captions: true
        , auto: true
        , autoControls: true
    });
    /* date picker */
    $('.datepicker').each(function () {
        $(this).datepicker({
            format: 'mm/dd/yyyy'
            , startDate: '-3d'
            , orientation: "bottom"
            , autoclose: true
        })
    });
    // === Tooltips === //
    $('.tip').tooltip();
    $('.tip-left').tooltip({
        placement: 'left'
    });
    $('.tip-right').tooltip({
        placement: 'right'
    });
    $('.tip-top').tooltip({
        placement: 'top'
    });
    $('.tip-bottom').tooltip({
        placement: 'bottom'
    });
    /* new */
    $('#quicklinks').hover(function () {
        $('.quks_open').slideDown(500);
    });
    $(document).mouseup(function (e) {
        var container = $(".quks_open , .cu_modal , .settings_menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.slideUp(500);
        }
    });
    /* booking addtional */
    $('.cus-mod-open').click(function () {
        $('.cu_modal').hide();
        $('#cus-mod-div' + $(this).attr('target')).slideDown();
    });
    $('.close-de').click(function () {
        $('.cu_modal').slideUp(500);
    });
    $('#block').click(function () {
        $('#block_opn').slideDown(500);
        $("#book_opn").hide(500);
        $('#collapse-group').hide();
    });
    $('#custom_opn').click(function () {
        $('.custom_bx').show(500);
        $('.permanent_bx').hide();
    });
    $('#permanent_opn').click(function () {
        $('.permanent_bx').show(500);
        $('.custom_bx').hide();
    });
    $('#none_opn').click(function () {
        $('.permanent_bx').hide(500);
        $('.custom_bx').hide(500);
    });
    $('#user_forms').click(function () {
        $('#usr_form_sh').show(500);
    });
    $('#usr_frm_cle').click(function () {
        $('#usr_form_sh').hide();
    });
    $('#sea_res_open_bu').click(function () {
        $('#sea_res_open_ind').show(500);
        $('#sta_dat').hide();
        $('#book_main').hide(300);
    });
    $('#Walkin').click(function () {
        $('#behalf_drop').hide();
    });
    $('#Onl-agt').click(function () {
        $('#behalf_drop').show();
    });
    $('#off-agt').click(function () {
        $('#behalf_drop').show();
    });
    //scroll
    $("#book").on("click", function () {
        var scrolled = 0;
        scrolled = scrolled + 330;
        $("body").animate({
            scrollTop: scrolled
        });
    });
    // seat form fill
    $('.seat_layer').click(function () {
        $('.bus_form_out_sp').slideDown(500);
    });
    // sub menu 
    $('.sub_op_me').hover(function () {
        $(this).find('.sub_file_menu').show();
    }, function () {
        $(this).find('.sub_file_menu').hide();
    });
      
    // date 
    // layout view
    $('#addrow').click(function () {
        $("#customFields tbody").append('<tr> <td> &nbsp;</td><td>&nbsp;</td><td> &nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp; </td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td> &nbsp;</td> </tr>');
    });
    $('#customFields td').click(function () {
        $('.st_no').addClass('st_no_add').css('background-color', 'cornflowerblue');
        $('#seat-' + $(this).attr('id')).show().removeClass('st_no_add');
    });
    // menu active

    $('.side_menu > a').click(function () {
        $('.menu_act').removeClass('menu_act');
        $(this).addClass('menu_act');
    });
    $('.sub_file_menu > li').click(function () {
        $('.menu_act').removeClass('menu_act');
        $(this).addClass('menu_act');
        $(this).parent('ul').prev('a').addClass('menu_act');
    });

    // services
    $('#serv-sear').click(function () {
        $('.serv_sea').slideDown('fast');
    });
    $('#close').click(function () {
        $('.serv_sea').slideUp('fast');
    });
    $('.sta-info').click(function () {
        $('.stage_info').hide();
        $('#st-' + $(this).attr('target')).slideDown();
    });
    $(document).ready(function (c) {
        $('#close-stage').on('click', function (c) {
            $('.stage_info').fadeOut('slow', function (c) {
                $('.stage_info').remove();
            });
        });
    });
    /* agent details */
    $('#on_show_details').click(function () {
        $('#online_details').slideDown('500');
        $('#offline_details').hide('fast');
    });
    $('#off_show_details').click(function () {
        $('#offline_details').slideDown('fast');
        $('#online_details').hide('fast');
    });
    /* default table search value */
    $('#table_show').click(function () {
        $('#table_tr').slideDown('500');
    });
    $('#table_tr_close').click(function () {
        $('#table_tr').hide('500');
    });
    // route
    //       $('.route_drop_ta').click(function () {
    //        $('.route_').hide();
    //        $('#st-' + $(this).attr('target')).slideDown();
    //    });
    /* hot offers */
    $('#hot_create').click(function () {
        $('.hot-offers').slideDown('500');
    });
    $('#hot-close').click(function () {
        $('.hot-offers').hide('500');
    });
    /* bulk */
    $('#bulk_more , #role_pri ').click(function () {
        $('.alert_table , .role-cr').slideDown('500');
    });
    $('#close_button').click(function () {
        $('.role-cr').hide('500');
    });
    /* settings */
    $('#setting-menu').hover(function () {
        $('.settings_menu').slideDown('500');
    });
    /* sms */
    $('#smsCustom, #coach-oper , #cust_repots').click(function () {
        $('.sms-cus, .pl-coach, .customize_re').slideDown('500');
        $('.sms-def, .pl-search, .tab-pane ').hide();
    });
    $('#smsDefault, #serv-oper , #cancel_rep').click(function () {
        $('.sms-cus, .pl-coach , .customize_re').hide('500');
        $('.sms-def, .pl-search, .tab-pane').slideDown('500');
    });
    $('#coll_cate_repo').click(function () {
        $('.sub_cates').show(500);
        $('.sub_bran').hide(500);
    });
    $('#col_bran_repo').click(function () {
        $('.sub_bran').show(500);
        $('.sub_cates').hide(500);
    });
    
    
    $('#cr_rou_tie').click(function () {
        $('.cr-rout_drop').show(500);
    });
    
    $('#cr_rou_none').click(function () {
        $('.cr-rout_drop').hide(500);
    });
    
    // dropdown swapping is balance
    
    
    
    
    //    $(document).on('click', '.stage_info, .close-stage', function () {
    //    $(this).toggleClass('stage_info close-stage');
    //});
    //    $('#close-stage').click(function () {
    ////      $('.stage_info').slideUp();
    //        $(this).closest('tr').remove()
    //    });
    //    
    //    window.onload = function(){
    //    document.getElementById('close-stage').onclick = function(){
    //        this.parentNode.parentNode.parentNode
    //        .removeChild(this.parentNode.parentNode);
    //        return false;
    //    };
    //};
    // test 
    /* drop down swapping */
    /**/
    //    var clicks = 0;
    //    $("#arrow").click(function () {
    //        var obj1 = $("#fieldset1");
    //        var obj2 = $("#fieldset2");
    //        $("#fieldset1").remove();
    //        $("#fieldset2").remove();
    //
    //        if (clicks % 2 == 0) {
    //
    //            $(".into").before(obj2);
    //            $(".into").after(obj1);
    //        } else {
    //
    //            $(".into").before(obj1);
    //            $(".into").after(obj2);
    //        }
    //        clicks++;
    //    });
    
    
    
});