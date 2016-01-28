<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 28.01.16
 * Time: 0:09
 */

namespace app\models;

use yii\data\Pagination;
use Yii;
use yii\db\Query;
use yii\filters\AccessControl;
use yii\helpers\VarDumper;
use yii\web\Controller;
use yii\filters\VerbFilter;

class ProductSearch
{

    /**
     * @return array
     */
    public static function getSort()
    {
        return [
            [
                'label' => 'Цена ВОЗР',
                'sort' => 'price.DESC'
            ], [
                'label' => 'Цена УБЫВ',
                'sort' => 'price.ASC'
            ], [
                'label' => 'Площадь ВОЗР',
                'sort' => 'space.DESC'
            ], [
                'label' => 'Площадь УБЫВ',
                'sort' => 'space.ASC'
            ],
        ];
    }


    /**
     * @return array
     */
    public static function getFilters()
    {

        return [
            'price' => [
                '< 1млн',
                '1 - 3 млн',
                '> 3 млн'
            ],
            'space' => [
                '0 - 100',
                '100 - 300',
                '> 300'
            ],
            'type' => [
                'Дом',
                'Баня',
                'Дом-баня'
            ],
            'level' => [
                '1',
                '2',
                '3'
            ],
            'material' => [
                'Бревна',
                'Бруса',
                [
                    'label' => 'Все проекты',
                    'class' => 'all-material',
                    'init' =>
                        (Yii::$app->request->get('material', false) === false
                            OR Yii::$app->request->get('material') === 3) ? true : false

                ]
            ],
        ];
    }


    /**
     * @return string
     */
    function selectSort($sort)
    {
        if (Yii::$app->request->get('sort', false) === $sort) {
            return 'btn-success';
        } else {
            return 'btn-primary';
        }
    }

    /**
     * @return string
     */
    function selectFilter($key, $value)
    {
        if ((int)Yii::$app->request->get($key) === $value) {
            return 'btn-success';
        } else
            return 'btn-primary';
    }

    /**
     * @return array
     */
    public function search()
    {
        $getParams = Yii::$app->request->get();

        $res = $this->getWhere($getParams);

        $query = (new \yii\db\Query())
            ->select('name, price, space,
              (SELECT `value` FROM property_value WHERE id = pvType.id_property_value) as `type`,
              (SELECT `value` FROM property_value WHERE id = pvMaterial.id_property_value) as `material`,
              (SELECT `value` FROM property_value WHERE id = pvLevel.id_property_value) as `level`,
              pImage.src as src')
            ->from('products p')
            ->leftJoin('product_property pvType', 'p.id = pvType.id_product AND pvType.id_property = 4')
            ->leftJoin('product_property pvMaterial', 'p.id = pvMaterial.id_product AND pvMaterial.id_property = 2')
            ->leftJoin('product_property pvLevel', 'p.id = pvLevel.id_product AND pvLevel.id_property = 1')
            ->leftJoin('product_img pImage', 'p.id_img = pImage.id')
            ->where(implode(' AND  ', $res))
            ->groupBy('p.id');


        if (Yii::$app->request->get('sort') !== false) {
            $query->orderBy(str_replace('.', ' ', Yii::$app->request->get('sort')));
        }

        $countQuery = clone $query;
        $pages = new Pagination(['totalCount' => $countQuery->count(), 'pageSize' => '4']);
        $models = $query->offset($pages->offset)
            ->limit($pages->limit)
            ->all();
        return array($pages, $models);
    }


    /**
     * @param $getParams
     * @return array
     */
    public static function getWhere($getParams)
    {
        $res = [];

        if (isset($getParams['price'])) {
            $price = $getParams['price'];
            if ($price === '1') {
                $price = 'price < 1000000';
            } elseif ($price === '2') {
                $price = 'price > 1000000 AND price < 3000000';
            } else {
                $price = 'price > 3000000';
            }
            $res[] = $price;
        }

        if (isset($getParams['space'])) {
            $space = $getParams['space'];
            if ($space === '1') {
                $space = 'space < 100';
            } elseif ($space === '2') {
                $space = 'space > 100 AND space < 300';
            } else {
                $space = 'space > 300';
            }
            $res[] = $space;
        }

        if (isset($getParams['type'])) {
            $type = $getParams['type'];
            if ($type === '1') {
                $type = '6';
            } elseif ($type === '2') {
                $type = '7';
            } else {
                $type = '8';
            }
            $res[] = ' pvType.id_property_value = ' . $type;
        }

        if (isset($getParams['level'])) {
            $level = $getParams['level'];
            if ($level === '1') {
                $level = '1';
            } elseif ($level === '2') {
                $level = '2';
            } else {
                $level = '3';
            }
            $res[] = ' pvLevel.id_property_value =' . $level;
        }

        if (isset($getParams['material']) && $getParams['material'] !== '3') {
            $material = $getParams['material'];
            if ($material === '1') {
                $material = '4';
            } elseif ($material === '2') {
                $material = '5';
            }
            $res[] = ' pvMaterial.id_property_value = ' . $material;
            return $res;
        }

        return $res;
    }


}