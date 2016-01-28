<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
//use yii\helpers\ArrayHelper;

/* @var $this yii\web\View */
/* @var $model app\models\ProductProperty */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="product-property-form">

    <?php $form = ActiveForm::begin();?>

    <?=$form->field($model, 'id_product')->dropDownList(\yii\helpers\ArrayHelper::map(
        (new \yii\db\Query())
            ->select('id, name')
            ->from('products')
            ->all(), 'id', 'name'
    )); ?>

    <?=$form->field($model, 'id_property')->dropDownList(\yii\helpers\ArrayHelper::map(
        (new \yii\db\Query())
        ->select('*')
        ->from('property')
        ->all(),'id','name'));?>

    <?=$form->field($model, 'id_property_value')->dropDownList(\yii\helpers\ArrayHelper::map(
        (new \yii\db\Query())
        ->select('*')
        ->from('property_value')
        ->all(),'id','value'));?>

<!--    --><?//= $form->field($model, 'id_product')->textInput() ?>
<!---->
<!--    --><?//= $form->field($model, 'id_property')->textInput() ?>
<!---->
<!--    --><?//= $form->field($model, 'id_property_value')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>