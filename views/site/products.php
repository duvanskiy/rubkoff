<div style="text-align: center">
    <?= \yii\widgets\LinkPager::widget([
        'pagination' => $pages
    ]); ?>
</div>

<?php
if (!empty($resultFillter))
    foreach ($resultFillter as $fillter) { ?>
        <div style="margin-top: 10px" class="row">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <img style="width: 100%;" src="<?= $fillter['src'] ?>">
            </div>
            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                Название проекта: <strong><?= $fillter['name'] ?></strong>
                <div>
                    Стоимость проекта: <strong><?= number_format($fillter['price'], 0, '', ' ') ?> руб.</strong>
                </div>
                <div>
                    Общая площадь: <strong><?= $fillter['space'] ?> кв.м</strong>
                </div>
                <div>
                    Тип проекта: <strong><?= $fillter['type'] ?></strong>
                </div>
                <div>
                    Материал: <strong><?= $fillter['material'] ?></strong>
                </div>
                <div>
                    Количество этажей: <strong><?= $fillter['level'] ?></strong>
                </div>
            </div>
        </div>
        <?php
    }
