<?php
use app\models\ProductSearch;

$product = new ProductSearch();

foreach (ProductSearch::getFilters() as $key => $data) {?>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" id="<?=$key?>">
        <?php foreach($data as $k => $value){
            $k++;
            if(is_array($value)){?>
                <button type="submit" class="btn <?=$product->selectFilter($key, $k);?> btn-filter btn-margin <?php if(isset($value['class'])){
                    echo $value['class'];
                }
                if($value['init'] === true)
                    echo ' btn-success ';
                ?>" data-target="<?=$k?>">
                    <?=$value['label']?>
                </button>
            <?php
            } else {?>
                <button type="submit" class="btn <?=$product->selectFilter($key, $k);?> btn-filter btn-margin" data-target="<?=$k?>">
                    <?=$value?>
                </button>
            <?php } ?>
        <?php } ?>
    </div>
<?php
}