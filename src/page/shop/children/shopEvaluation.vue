<template>
    <div class="shop-evaluation-container">
        <section class="score-container">
            <div class="average-score-left">
                <div class="score">
                    6.7777
                </div>
                <div class="score-start">
                    <span>商家评分</span>
                    <i><img src="" alt=""></i>
                </div>
            </div>
            <div class="sub-average-score-right">
                <section class="sub-des-score">
                    <div>
                        <span>味道</span>
                        <span>4.72</span>
                    </div>
                    <div>
                        <span>味道</span>
                        <span>4.72</span>
                    </div>
                </section>
                
                <section class="sub-des-destribution">
                    <div>
                        <span>味道</span>
                        <span>4.72</span>
                    </div>
                </section>

            </div>
        </section>
        <section class="score-tag-container">

        </section>
    </div>
</template>


<script>
export default {
  data() {
    return {
      comments: [
        {
          avatar: "c6b8384f98b8dedfd87fc1450926648cjpeg",
          food_ratings: [
            {
              food_id: 200147272669,
              rate_name: "煎 韭菜无米粿 潮汕特色",
              rating: "먓",
              rating_text: "",
              reply: null,
              sku_id: 200000544049208925,
              sku_id_str: "200000544049208925",
              tags: null
            },
            {
              food_id: 2000000034089544,
              rate_name: "潮汕正宗 什锦汤米粉/河粉",
              rating: "먓",
              rating_text: "",
              reply: null,
              sku_id: 300000034940122717,
              sku_id_str: "300000034940122717",
              tags: null
            }
          ],
          highlights: null,
          highlights_v2: {},
          is_super_vip: true,
          is_taobao_vip: true,
          order_id: 0,
          order_images: [
            {
              food_ids: [200147272669],
              food_indexes: null,
              food_names: ["煎 韭菜无米粿 潮汕特色"],
              image_hash: "bfe92fae785c9ba261f9872cf418e9b3jpeg",
              sku_ids: null
            }
          ],
          package_rating: 5,
          quality_rating: 5,
          rated_at: "냲쑬냲쑬쾺쑬쾺냲",
          rating: 5,
          rating_text:
            "真的好好喝，这个汤，我爱了，啊哈哈哈哈哈哈，还有玉米粿，好吃好吃",
          reply: null,
          rider_rating: 5,
          tags: [],
          time_spent_desc: "40分钟送达",
          username: "b***8"
        }
      ],
      rating: {
        compare_rating: "쑬또먓쑬쩬묌냲먓먓쩬",
        deliver_time: "쑬또쑬",
        fixedCompareRating: "75.8%",
        fixedFoodScore: "뺟또",
        fixedPackageScore: "뺟또",
        fixedRiderGoodRate: "93%",
        fixedRiderScore: "뺟또먓",
        fixedShopScore: "뺟또눏",
        fixedTasteScore: "뺟또냲",
        food_score: "뺟또쑬냲냲눏먓먓눏",
        item_good_score: "쑬또쩬뺟쩬냲먓쑬눏뺟",
        order_rating_amount: "눏쩬",
        overall_score: 4.716320037841797,
        package_score: "뺟또쑬냲냲눏먓먓눏",
        rider_good_rate: 0.93858,
        rider_score: "뺟또먓묌냲쩬쑬쑬눏쑬냲뺟눏",
        service_score: "뺟또냲쑬쑬먓쩬눏묌먓뺟",
        shop_score: 4.716320037841797,
        taste_score: "뺟또냲쑬쑬먓쩬눏묌먓뺟"
      },
      tags: [
        {
          count: 1967,
          name: "全部",
          unsatisfied: false
        },
        {
          count: -1,
          name: "最新",
          unsatisfied: false
        },
        {
          count: 1836,
          name: "好评",
          unsatisfied: false
        },
        {
          count: 75,
          name: "差评",
          unsatisfied: true
        },
        {
          count: 1238,
          name: "有图",
          unsatisfied: false
        },
        {
          count: 740,
          name: "味道好",
          unsatisfied: false
        },
        {
          count: 84,
          name: "分量足",
          unsatisfied: false
        },
        {
          count: 79,
          name: "包装精美",
          unsatisfied: false
        },
        {
          count: 57,
          name: "物美价廉",
          unsatisfied: false
        },
        {
          count: 54,
          name: "送货快",
          unsatisfied: false
        },
        {
          count: 50,
          name: "不好吃",
          unsatisfied: true
        },
        {
          count: 19,
          name: "很新鲜",
          unsatisfied: false
        },
        {
          count: 14,
          name: "分量一般",
          unsatisfied: true
        }
      ]
    };
  }
};
</script>



<style lang="scss" scoped>
@import "../../../style/mixin.scss";

span {
  color: #666;
  display: block;
}

.score-container {
  background-color: $fc;
  // margin-bottom: .8rem;
  padding: 6.3vw 0 6.3vw 6.3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.1rem;
  .average-score-left {
    width: 34%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .score {
      color: #ff6000;
      font-size: 2.5rem;
      max-width: 14vw;
      word-break: break-all;
      text-align: center;
    }
    .score-start {
      img {
        @include wh(90%, 20%);
      }
    }
  }

  .sub-average-score-right {
    display: flex;
    // justify-content: space-around;
    flex: 1;
    align-items: center;
    .sub-des-score {
        margin-left: 6vw;
      width: 36%;
      display: flex;
      justify-content: space-between;
    }
    .sub-des-destribution {
      flex: 1;
      margin-left: 6vw;
      border-left: 1px solid $bc;
    }

    section div {
      span:nth-of-type(2) {
        font-size: 1.6rem;
      }
    }
  }
}
</style>
