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
        <!-- 标签 -->
        <section class="score-tag-container">
            <ul v-if="tags.length > 0">
                <li v-for="(tag,index) in tags" :key="index" :class="tag.unsatisfied ? 'li-unsatisfied-color' : 'li-normal-color'">
                    {{tag.name}} {{tag.count}}
                </li>
            </ul>
            <div class="tag-content-switch">
                <svg t="1598003369781" id="checked" class="check-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1167" width="200" height="200"><path d="M0 512C0 229.235 229.235 0 512 0s512 229.235 512 512-229.235 512-512 512S0 794.765 0 512z m419.31 194.63a35.31 35.31 0 0 0 49.4 1.272L804.228 395.97a35.31 35.31 0 0 0-48.075-51.73L447.03 633.786 301.903 484.14a35.31 35.31 0 1 0-50.688 49.17l168.113 173.32z" p-id="1168" :fill="isCheck ? '#1afa29':'#e6e6e6' "  ></path></svg>
                <p>只看有内容的评价</p> 
            </div>
        </section>

        <section class="shop-evaluation-list">
    
        </section>
    </div>
</template>


<script>
export default {
  data() {
    return {
      isCheck: false,
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

  //评分
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

//标签&切换评论   todo切换优质评论移到评论瀑布流列表
.score-tag-container {
  margin-top: 0.6rem;
  background-color: $fc;
  ul {
    padding: 0 0.6rem 0.6rem;
    li {
      display: inline-block;
      padding: 0.65rem;
      margin-right: 0.6rem;
      margin-top: 0.6rem;
      font-size: 1rem;
    }
    .li-normal-color {
      background-color: #ebf5ff;
      color: #6d7885;
    }
    .li-unsatisfied-color {
      background-color: #f5f5f5;
      color: #aaa;
    }
    .li-selected-color {
      background-color: #0097ff;
      color: $fc;
    }
  }

  .tag-content-switch {
    border-top: 1px solid rgba($color: #e4e4e4, $alpha: 0.6);
    border-bottom: 1px solid rgba($color: #e4e4e4, $alpha: 0.6);
    text-align: left;
    margin: .6rem;
    padding: 1.1rem 0;
    font-size: 1.1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .check-icon {
      display: inline-block;
      @include wh(3vw, 3vw);
    }
    p {
      margin-left: 0.3rem;
      display: inline-block;
    }
  }
}

//评论
.shop-evaluation-list{
    
}


</style>
