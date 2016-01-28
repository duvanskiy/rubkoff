function run() {
    $(function () {
        $("#typehit1").next().addClass("styleTypeChecked");
        $("#typehit2").next().addClass("styleTypeChecked");
        $("#typehit3").next().addClass("styleTypeChecked");
        $("#typehit4").next().addClass("styleTypeChecked");
        $("#typearhi1").next().addClass("styleTypeChecked");
        $("#typearhi2").next().addClass("styleTypeChecked");
        $("#typearhi3").next().addClass("styleTypeChecked");

        $("#typehit1").click(function () {
            if ($("#typehit1").prop("checked") == true) {
                $("#typehit1").next().addClass("styleTypeChecked");
            }
            else {
                $("#typehit1").next().removeClass("styleTypeChecked");
            }
        });
        $("#typehit2").click(function () {
            if ($("#typehit2").prop("checked") == true) {
                $("#typehit2").next().addClass("styleTypeChecked");
            }
            if ($("#typehit2").prop("checked") == false) {
                $("#typehit2").next().removeClass("styleTypeChecked");
            }
        });

        $("#typehit3").click(function () {
            if ($("#typehit3").prop("checked") == true) {
                $("#typehit3").next().addClass("styleTypeChecked");
            }
            if ($("#typehit3").prop("checked") == false) {
                $("#typehit3").next().removeClass("styleTypeChecked");
            }
        });

        $("#typehit4").click(function () {
            if ($("#typehit4").prop("checked") == true) {
                $("#typehit4").next().addClass("styleTypeChecked");
            }
            if ($("#typehit4").prop("checked") == false) {
                $("#typehit4").next().removeClass("styleTypeChecked");
            }
        });

        $("#typearhi1").click(function () {
            if ($("#typearhi1").prop("checked") == true) {
                $("#typearhi1").next().addClass("styleTypeChecked");
            }
            if ($("#typearhi1").prop("checked") == false) {
                $("#typearhi1").next().removeClass("styleTypeChecked");
            }
        });

        $("#typearhi2").click(function () {
            if ($("#typearhi2").prop("checked") == true) {
                $("#typearhi2").next().addClass("styleTypeChecked");
            }
            if ($("#typearhi2").prop("checked") == false) {
                $("#typearhi2").next().removeClass("styleTypeChecked");
            }
        });

        $("#typearhi3").click(function () {
            if ($("#typearhi3").prop("checked") == true) {
                $("#typearhi3").next().addClass("styleTypeChecked");
            }
            if ($("#typearhi3").prop("checked") == false) {
                $("#typearhi3").next().removeClass("styleTypeChecked");
            }
        });

        $("#view1").click(function () {
            if ($(this).hasClass('filter_activeLink') == false) {
                $(this).addClass('filter_activeLink');
                $("#view3").removeClass('filter_activeLink');
                $("#view2").removeClass('filter_activeLink');
                resetViews();
                $("input#view1").prop('checked', true);
                //	$("#form_projects").submit();
            } else {
                $(this).removeClass('filter_activeLink');
                $("#view3").addClass('filter_activeLink');
            }
            loadPage();
        });

        $("#view2").click(function () {
            if ($(this).hasClass('filter_activeLink') == false) {
                $(this).addClass('filter_activeLink');
                $("#view3").removeClass('filter_activeLink');
                $("#view1").removeClass('filter_activeLink');
                resetViews();
                $("input#view2").prop('checked', true);
                //	$("#form_projects").submit();
            } else {
                $(this).removeClass('filter_activeLink');
                $("#view3").addClass('filter_activeLink');
            }
            loadPage();
        });

        $("#view3").click(function () {
            if ($(this).hasClass('filter_activeLink') == false) {
                $("#view1").removeClass('filter_activeLink');
                $("#view2").removeClass('filter_activeLink');
                $("#view3").addClass('filter_activeLink');
                resetViews();
                $("input#view3").prop('checked', true);
                //	$("#form_projects").submit();
            }
            loadPage();
        });

        function resetViews() {
            $("input#view1").prop('checked', false);
            $("input#view2").prop('checked', false);
            $("input#view3").prop('checked', false);
        }
    })
    $(function () {

        $('.showFilterButton').click(
            function () {
                if ($('.filterOuter').css('display') == 'none') {
                    $('.sfbWrap b.caret').css('border-top', 'none');
                    $('.sfbWrap b.caret').css('border-bottom', '4px dashed');
                    $('.filterOuter').show();
                } else {
                    $('.sfbWrap b.caret').css('border-bottom', 'none');
                    $('.sfbWrap b.caret').css('border-top', '4px dashed');
                    $('.filterOuter').hide();
                }
            });

        $(".newFloor #floor1").click(function () {
            if ($(".newFloor #floor1").hasClass('filter_activeLink') == false) {
                resetFloorInputs();
                $(".newFloor #floor1").addClass('filter_activeLink');
                $('input#floor1').click();
            } else {
                addFloorInputs();
            }
            loadPage();
        });

        $(".newFloor #floor2").click(function () {
            if ($(".newFloor #floor2").hasClass('filter_activeLink') == false) {
                resetFloorInputs();
                $(".newFloor #floor2").addClass('filter_activeLink');
                $('input#floor2').click();
            } else {
                addFloorInputs();
            }
            loadPage();
        });

        $(".newFloor #floor3").click(function () {
            if ($(".newFloor #floor3").hasClass('filter_activeLink') == false) {
                resetFloorInputs();
                $(".newFloor #floor3").addClass('filter_activeLink');
                $('input#floor3').click();
            } else {
                addFloorInputs();
            }
            loadPage();
        });

        $(".newType #type1").click(function () {
            if ($(".newType #type1").hasClass('filter_activeLink') == false) {
                resetTypeInputs();
                $(".newType #type1").addClass('filter_activeLink');
                $('input#type1').click();
            } else {
                addTypeInputs();
            }
            loadPage();
        });

        $(".newType #type2").click(function () {
            if ($(".newType #type2").hasClass('filter_activeLink') == false) {
                resetTypeInputs();
                $(".newType #type2").addClass('filter_activeLink');
                $('input#type2').click();
            } else {
                addTypeInputs();
            }
            loadPage();
        });

        $(".newType #type3").click(function () {
            if ($(".newType #type3").hasClass('filter_activeLink') == false) {
                resetTypeInputs();
                $(".newType #type3").addClass('filter_activeLink');
                $('input#type3').click();
            } else {
                addTypeInputs();
            }
            loadPage();
        });

        $(".newArea #area1").click(function () {
            if ($(".newArea #area1").hasClass('filter_activeLink') == false) {
                resetAreaInputs();
                $('#min_area').val(0);
                $('#max_area').val(100);
                $(this).addClass('filter_activeLink');
                // $('#form_projects').submit();
            } else {
                resetAreaInputs();
                $('#min_area').val(0);
                $('#max_area').val(900);
                $(this).removeClass('filter_activeLink');
                // $('#form_projects').submit();
            }
            loadPage();
        });

        $(".newArea #area2").click(function () {
            if ($(".newArea #area2").hasClass('filter_activeLink') == false) {
                resetAreaInputs();
                $('#min_area').val(100);
                $('#max_area').val(300);
                $(this).addClass('filter_activeLink');
                // $('#form_projects').submit();
            } else {
                resetAreaInputs();
                $('#min_area').val(0);
                $('#max_area').val(900);
                $(this).removeClass('filter_activeLink');
                // $('#form_projects').submit();
            }
            loadPage();
        });

        $(".newArea #area3").click(function () {
            if ($(".newArea #area3").hasClass('filter_activeLink') == false) {
                resetAreaInputs();
                $('#min_area').val(300);
                $('#max_area').val(900);
                $(this).addClass('filter_activeLink');
                // $('#form_projects').submit();
            } else {
                resetAreaInputs();
                $('#min_area').val(0);
                $('#max_area').val(900);
                $(this).removeClass('filter_activeLink');
                // $('#form_projects').submit();
            }
            loadPage();
        });

        $(".newPrice #price1").click(function () {
            if ($(".newPrice #price1").hasClass('filter_activeLink') == false) {
                resetPriceInputs();
                $('#min_price').val(0);
                $('#max_price').val(1000000);
                $(this).addClass('filter_activeLink');
                // $('#form_projects').submit();
            } else {
                resetPriceInputs();
                $('#min_price').val(200000);
                $('#max_price').val(20000000);
                $(this).removeClass('filter_activeLink');
                // $('#form_projects').submit();
            }
            loadPage();
        });

        $(".newPrice #price2").click(function () {
            if ($(".newPrice #price2").hasClass('filter_activeLink') == false) {
                resetPriceInputs();
                $('#min_price').val(1000000);
                $('#max_price').val(3000000);
                $(this).addClass('filter_activeLink');
                // $('#form_projects').submit();
            } else {
                resetPriceInputs();
                $('#min_price').val(200000);
                $('#max_price').val(20000000);
                $(this).removeClass('filter_activeLink');
                // $('#form_projects').submit();
            }
            loadPage();
        });

        $(".newPrice #price3").click(function () {
            if ($(".newPrice #price3").hasClass('filter_activeLink') == false) {
                resetPriceInputs();
                $('#min_price').val(3000000);
                $('#max_price').val(20000000);
                $(this).addClass('filter_activeLink');
                // $('#form_projects').submit();
            } else {
                resetPriceInputs();
                $('#min_price').val(200000);
                $('#max_price').val(20000000);
                $(this).removeClass('filter_activeLink');
                // $('#form_projects').submit();
            }
            loadPage();
        });

        $('.newRestart').click(function () {

            return;
            $('.newFloor #floor1').removeClass('filter_activeLink');
            $('.newFloor #floor2').removeClass('filter_activeLink');
            $('.newFloor #floor3').removeClass('filter_activeLink');
            $('.newType #type1').removeClass('filter_activeLink');
            $('.newType #type2').removeClass('filter_activeLink');
            $('.newType #type3').removeClass('filter_activeLink');
            $('.newArea #area1').removeClass('filter_activeLink');
            $('.newArea #area2').removeClass('filter_activeLink');
            $('.newArea #area3').removeClass('filter_activeLink');
            $('.newPrice #price1').removeClass('filter_activeLink');
            $('.newPrice #price2').removeClass('filter_activeLink');
            $('.newPrice #price3').removeClass('filter_activeLink');
            $('input#floor1').prop('checked', true);
            $('input#floor2').prop('checked', true);
            $('input#floor3').prop('checked', true);
            $('input#type1').prop('checked', true);
            $('input#type2').prop('checked', true);
            $('input#type3').prop('checked', true);
            $("input#view1").prop('checked', false);
            $("input#view2").prop('checked', false);
            $("input#view3").prop('checked', true);
            $('#view1').removeClass('filter_activeLink');
            $('#view2').removeClass('filter_activeLink');
            $('#view3').addClass('filter_activeLink');
            $("#min_price").val(100000);
            $("#max_price").val(20000000);
            $("#min_area").val(0);
            $("#max_area").val(900);
            $('#dl_slider').slider({values: [2, 40]});
            $('#sh_slider').slider({values: [2, 40]});
            $('#dlmin').val(2);
            $('#shmin').val(2);
            $('#dlmax').val(40);
            $('#shmax').val(40);
            // $('#form_projects').submit();
        });
    })

    function resetFloorInputs() {
        $('input#floor1').removeAttr('checked');
        $('input#floor2').removeAttr('checked');
        $('input#floor3').removeAttr('checked');
        $('.newFloor #floor1').removeClass('filter_activeLink');
        $('.newFloor #floor2').removeClass('filter_activeLink');
        $('.newFloor #floor3').removeClass('filter_activeLink');
    }

    function addFloorInputs() {
        $('input#floor1').prop('checked', true);
        $('input#floor2').prop('checked', true);
        $('input#floor3').prop('checked', true);
        $('.newFloor #floor1').removeClass('filter_activeLink');
        $('.newFloor #floor2').removeClass('filter_activeLink');
        $('.newFloor #floor3').removeClass('filter_activeLink');
        // $('#form_projects').submit();
    }

    function resetTypeInputs() {
        $('input#type1').removeAttr('checked');
        $('input#type2').removeAttr('checked');
        $('input#type3').removeAttr('checked');
        $('.newType #type1').removeClass('filter_activeLink');
        $('.newType #type2').removeClass('filter_activeLink');
        $('.newType #type3').removeClass('filter_activeLink');
    }

    function addTypeInputs() {
        $('input#type1').prop('checked', true);
        $('input#type2').prop('checked', true);
        $('input#type3').prop('checked', true);
        $('.newType #type1').removeClass('filter_activeLink');
        $('.newType #type2').removeClass('filter_activeLink');
        $('.newType #type3').removeClass('filter_activeLink');
        // $('#form_projects').submit();
    }

    function resetAreaInputs() {
        $('input#area1').removeAttr('checked');
        $('input#area2').removeAttr('checked');
        $('input#area3').removeAttr('checked');
        $('.newArea #area1').removeClass('filter_activeLink');
        $('.newArea #area2').removeClass('filter_activeLink');
        $('.newArea #area3').removeClass('filter_activeLink');
    }

    function resetPriceInputs() {
        $('input#price1').removeAttr('checked');
        $('input#price2').removeAttr('checked');
        $('input#price3').removeAttr('checked');
        $('.newPrice #price1').removeClass('filter_activeLink');
        $('.newPrice #price2').removeClass('filter_activeLink');
        $('.newPrice #price3').removeClass('filter_activeLink');
    }
    $(function () {
        var url = '/frontend/web/proekty/doma/iz-sruba';
        $("#slider_area").slider({
            step: 10,
            min: 10,
            max: 900,
            range: true,
            values: [0, 900],
            slide: function (event, ui) {
                $('#min_area').val(ui.values[0]);
                $('#max_area').val(ui.values[1]);
            },
            stop: function (event, ui) {
                $('#min_area').val(ui.values[0]);
                $('#max_area').val(ui.values[1]);
                // $('#form_projects').submit();
            }
        });
        $("#dl_slider").slider({
            step: 1,
            min: 2,
            max: 40,
            range: true,
            values: [2, 40],
            slide: function (event, ui) {
                $('#dlmin').val(ui.values[0]);
                $('#dlmax').val(ui.values[1]);
            },
            stop: function (event, ui) {
                $('#dlmin').val(ui.values[0]);
                $('#dlmax').val(ui.values[1]);
                // $('#form_projects').submit();
            }
        });
        $("#sh_slider").slider({
            step: 1,
            min: 2,
            max: 40,
            range: true,
            values: [2, 40],
            slide: function (event, ui) {
                $('#shmin').val(ui.values[0]);
                $('#shmax').val(ui.values[1]);
            },
            stop: function (event, ui) {
                $('#shmin').val(ui.values[0]);
                $('#shmax').val(ui.values[1]);
                // $('#form_projects').submit();
            }
        });

        $("#slider_price").slider({
            step: 100000,
            min: 100000,
            max: 20000000,
            range: true,
            values: [100000, 20000000],
            slide: function (event, ui) {
                $('#min_price').val(ui.values[0]);
                $('#max_price').val(ui.values[1]);
            },
            stop: function (event, ui) {
                $('#min_price').val(ui.values[0]);
                $('#max_price').val(ui.values[1]);
                // $('#form_projects').submit();
            },
        });
        $('#form_projects').on('click', '.sort', function (a) {
            $('#sort').val($(a.target).data('sort'));
            // $('#form_projects').submit();
            $('.sort').removeClass('active');
            $(a.target).addClass('active');
            loadPage();
            return false;
        });

        $('#form_projects').on('click', '.pagen', function (a) {
            $('#pagen').val($(a.target).data('pagen'));
            // $('#form_projects').submit();
            $('.pagen').removeClass('active');
            $(a.target).addClass('active');
            return false;
        });

        $('#form_projects').on('submit', function () {
            return;
            $('.projectsList').css('opacity', 0.5);
            var data = $(this).serialize();

            $.ajax({
                url: '/cards/filter',
                type: 'GET',
                data: data,
                success: function (html) {
                    $('.projectsList').css('opacity', 1);
                    $('.projectsOffset').html(html);
                    /*			$('.projectsList').liPaginate({
                     pageHeight: 5150,
                     easing:'easeOutQuart',
                     effect:'hSlide',
                     pagePos:'double',
                     duration: 1000
                     });
                     */
                    $(".pageItemElWrap").css("height", "2400px");
                    $('.slick-list').css('height', '350px');
                    $('.slick-track').css('height', '350px');
                },
            })
            return false;
        });
        $('#form_projects').on('change', 'input, select', function () {
            // $('#form_projects').submit();
        });

        $('#show_hide_filter').on('click', '#show_detail', function () {
            $('#filter_detail').show();
            $('#show_hide_filter a').attr('id', 'hide_detail');
            $('#show_hide_filter b.caret').css('border-top', 'none');
            $('#show_hide_filter b.caret').css('border-bottom', '4px dashed');
            $('#show_hide_filter a').html('Скрыть подробный фильтр');
            return false;
        });
        $('#show_hide_filter').on('click', '#hide_detail', function () {
            $('#filter_detail').hide();
            $('#show_hide_filter a').attr('id', 'show_detail');
            $('#show_hide_filter b.caret').css('border-bottom', 'none');
            $('#show_hide_filter b.caret').css('border-top', '4px dashed');
            $('#show_hide_filter a').html('Подробный фильтр');
            return false;
        });


    });

}