<?php
use app\models\ProductSearch;

$product = new ProductSearch();


?>
<div class="row">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <strong>Сортировать:</strong>
    </div>

    <div class="btn-toolbar" role="toolbar">
        <div class="btn-group select-filter" id="sort"><?php
            foreach (ProductSearch::getSort() as $sort) { ?>
                <button type="submit" class="btn <?= $product->selectSort($sort['sort']) ?> btn-filter"
                        data-target="<?= $sort['sort'] ?>">
                    <?= $sort['label'] ?>
                </button>
                <?php
            } ?>
        </div>
    </div>
</div>
