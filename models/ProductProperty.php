<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "{{%product_property}}".
 *
 * @property integer $id
 * @property integer $id_product
 * @property integer $id_property
 * @property integer $id_property_value
 *
 * @property Products $idProduct
 * @property Property $idProperty
 * @property PropertyValue $idPropertyValue
 */
class ProductProperty extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%product_property}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id_product', 'id_property', 'id_property_value'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'id_product' => Yii::t('app', 'Id Product'),
            'id_property' => Yii::t('app', 'Id Property'),
            'id_property_value' => Yii::t('app', 'Id Property Value'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIdProduct()
    {
        return $this->hasOne(Products::className(), ['id' => 'id_product']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIdProperty()
    {
        return $this->hasOne(Property::className(), ['id' => 'id_property']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIdPropertyValue()
    {
        return $this->hasOne(PropertyValue::className(), ['id' => 'id_property_value']);
    }

    /**
     * @inheritdoc
     * @return ProductPropertyQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new ProductPropertyQuery(get_called_class());
    }
}
