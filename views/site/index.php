<style>
    .btn-filter {

    }

    .btn-margin {
        width: 100%;
        margin-bottom: 5px;
    }

    .all-material {
        width: 110%;
    }

    .filter-caption {
        margin-bottom: 10px;
        font-weight: bold;
        text-align: center;
    }

    .filter-reload {
        margin-top: 20px;
        text-align: center;
    }
</style>
<div class="row">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="filter_activeLink">
            <div class="text-center">
                <h1>Дома из сруба. Проекты, цены, фото</h1>
            </div>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row filter-caption">
                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            Цена постройки
                        </div>
                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            Площадь (м<sup>2</sup>)
                        </div>
                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            Тип постройки
                        </div>
                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            Этажность
                        </div>
                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            Проекты из
                        </div>
                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    </div>
                    <div class="row select-filter">
                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>

                        <?= $this->render('_filter') ?>

                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    </div>
                    <div>
                        <?= $this->render('_sort') ?>
                    </div>
                    <div class="filter-reload">
                        <button type="submit" class="btn btn-warning reset-filters">Сбросить фильтры</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
</div>


<div class="results-projects container-fluid">
</div>

<script type="text/javascript">

    function reloadUrl(url){
        var path = window.location.pathname;
        if(path[path.length-1] !== '/')
            path+='/';
        history.pushState(null, null, path + url);
    }

    function getPages(url) {
        console.log('./site/get-projects' + url);
        $.ajax({
            url: './site/get-projects' + url,
            type: 'post',
            dataType: 'html',
            data: {
                _csrf: '<?=Yii::$app->request->getCsrfToken()?>'
            },

            success: function (data) {
                $('.results-projects')[0].innerHTML = data;

                $(".pagination li a").click(function( e ) {
                    e.preventDefault();

                    var href = $(this).attr('href');
                    href = href.substr(href.indexOf('?'));
                    reloadUrl(href);
                    getPages(href);
                });


            }
        });
    }

</script>


<?php

$js = <<<JS


  getPages(window.location.search);

 function getUrlForFilter(){
        var url = '';
        var result = $('.btn-filter.btn-success');
        for(var i = 0; i < result.length; i++) {
            url += (i === 0) ? '?' : '&';
            url += ($(result[i]).parent().attr('id')) +
            '=' + ($(result[i]).attr('data-target'));
        }

        var path = window.location.pathname;

        reloadUrl(url);
        getPages(url);

        return url;
    }

    $('.reset-filters').click(function () {
        $('.select-filter .btn-filter').removeClass('btn-success');
        $('.select-filter .btn-filter').addClass('btn-primary');
        $('.all-material').addClass('btn-success');
        var url = getUrlForFilter();
        console.log(url);
    });



    $('.btn-filter').click(function () {
        var primary = 'btn-primary';
        var danger  = 'btn-success';
        var add     = primary;
        var remove  = danger;

        if ($(this).hasClass(primary)) {
            remove  = primary;
            add     = danger;
        }

        $(this).parent().children().removeClass(danger)
        $(this).parent().children().addClass(primary);

        $(this).removeClass(remove);
        $(this).addClass(add);

        if($(this).parent().attr('id') === 'material' && add === primary){
            $('.all-material').addClass(danger);
        }

        var url = getUrlForFilter();

        console.log(url);
    });
JS;

$this->registerJS($js);