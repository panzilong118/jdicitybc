"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 遍历已选的销售规格数据saleAttributeData，重新组合itemSkuPicVoList数据
 * 对比saleAttributeData与itemTmplPublishVo.itemSkuPicVoList
 * 不在saleAttributeData里的url ,alt不展示
 * @param itemSkuPicVoList ： 已存在sku商品图片
 * @param saleAttributeData :  销售规格数据源
 * @return 新的图片信息表格数据源
 */

function getNewItemSkuPicVoList(itemSkuPicVoList, saleAttributeData) {
    var combinedSaleAttributeData = getCombinedDataFromChecked(saleAttributeData); // 组合已选销售规格数据
    var skuAttributesData = [];
    itemSkuPicVoList.forEach(function (item) {
        skuAttributesData.push(item.attributes || []);
    });
    var newItemlSkuVoList = [];
    combinedSaleAttributeData.forEach(function (item, index) {
        var old_index = getEqualIndex(skuAttributesData, item);
        if (old_index >= 0) {
            newItemlSkuVoList.push(itemSkuPicVoList[old_index]);
        } else {
            newItemlSkuVoList.push({
                "attributes": combinedSaleAttributeData[index],
                "url": "",
                "alt": ""
            });
        }
    });
    return newItemlSkuVoList;
}
/**
//对比选中的销售规格与之前保存的销售规格，并保存下标。
 */
function getEqualIndex(skuAttributesData, item) {
    var index = -1;
    var newItem = changeToStrArray(item);

    if (skuAttributesData.length > 0) {
        skuAttributesData.length > 0 && skuAttributesData.map(function (result, i) {
            var newResult = changeToStrArray(result);
            if ((0, _stringify2.default)(newItem) == (0, _stringify2.default)(newResult)) {
                index = i;
            }
        });
    }
    return index;
}

/**
 * 转换对象
 * [{aid:**, aName:**, vid:**,vName:**},{}] => [{aid:"",vid:""}];
 */
function changeToStrArray(array) {
    var strArr = [];
    array.forEach(function (itemArr) {
        strArr.push({
            aid: itemArr.aid.toString(),
            vid: itemArr.vid.toString()
        });
    });
    return strArr;
}
/**
 * 组合选中的销售规格数据
 */
function getCombinedDataFromChecked(saleAttributeData) {
    var two_array = [];
    saleAttributeData.forEach(function (attrItem) {
        var array = [];
        attrItem.platformCategoryAttributeValues.forEach(function (attrValueItem) {
            if (attrValueItem.checked) {
                var checkedItem = {
                    aid: attrItem.attrId,
                    aName: attrItem.attrName,
                    vid: attrValueItem.attrValueId,
                    vName: attrValueItem.attrValueName
                };
                array.push(checkedItem);
            }
        });
        if (array.length > 0) {
            two_array.push(array);
        }
    });
    return doExchange(two_array);
}
/**
 * // 二维数组的排列组合
 **/

function doExchange(doubleArrays) {
    var array = doubleArrays;
    var len = array.length;
    var results = [];
    var indexs = {};
    function specialSort(start) {
        start++;
        if (start > len - 1) {
            return;
        }
        if (!indexs[start]) {
            indexs[start] = 0;
        }
        if (!(array[start] instanceof Array)) {
            array[start] = [array[start]];
        }
        for (indexs[start] = 0; indexs[start] < array[start].length; indexs[start]++) {
            specialSort(start);
            if (start == len - 1) {
                var temp = [];
                for (var i = len - 1; i >= 0; i--) {
                    if (!(array[start - i] instanceof Array)) {
                        array[start - i] = [array[start - i]];
                    }
                    temp.push(array[start - i][indexs[start - i]]);
                }
                results.push(temp);
            }
        }
    }

    specialSort(-1);
    return results;
}
exports.default = getNewItemSkuPicVoList;
module.exports = exports["default"];
//# sourceMappingURL=getNewItemSkuPicVoList.js.map