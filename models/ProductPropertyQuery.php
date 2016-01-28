<?php

namespace app\models;

/**
 * This is the ActiveQuery class for [[product-property]].
 *
 * @see ProductProperty
 */
class ProductPropertyQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        $this->andWhere('[[status]]=1');
        return $this;
    }*/

    /**
     * @inheritdoc
     * @return ProductProperty[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @inheritdoc
     * @return ProductProperty|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}