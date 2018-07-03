<template>
  <div>
  <div class="hobby-content">
    <div class="item-content-box">
      <div class="item-label-box">
        <div class="label-pic">
          <img src="https://dummyimage.com/40x40/333/3ff.jpg&text=pic"
               class="img-style">
        </div>
        <div class="label-word">喜欢的体育运动</div>
      </div>
      <div class="item-check-box">
        <el-checkbox-group v-model="checkBoxList.sportList">
          <div class="check-column-box">
            <el-checkbox v-for="sport in options.sport.sportColumn1"
               :label="sport" :key="sport" :value="sport"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="sport in options.sport.sportColumn2"
               :label="sport" :key="sport" :value="sport"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="sport in options.sport.sportColumn3"
               :label="sport" :key="sport" :value="sport"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="sport in options.sport.sportColumn4"
               :label="sport" :key="sport" :value="sport"></el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>
    <div class="item-content-box">
      <div class="item-label-box">
        <div class="label-pic">
          <img src="https://dummyimage.com/40x40/333/3ff.jpg&text=pic"
               class="img-style">
        </div>
        <div class="label-word" style="color: #FFC663">喜欢的食物</div>
      </div>
      <div class="item-check-box">
        <el-checkbox-group v-model="checkBoxList.foodList">
          <div class="check-column-box">
            <el-checkbox v-for="food in options.food.foodColumn1"
               :label="food" :key="food" :value="food"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="food in options.food.foodColumn2"
               :label="food" :key="food" :value="food"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="food in options.food.foodColumn3"
               :label="food" :key="food" :value="food"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="food in options.food.foodColumn4"
               :label="food" :key="food" :value="food"></el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>
    <div class="item-content-box">
      <div class="item-label-box">
        <div class="label-pic">
          <img src="https://dummyimage.com/40x40/333/3ff.jpg&text=pic"
               class="img-style">
        </div>
        <div class="label-word" style="color: #77D8F5">喜欢的书籍</div>
      </div>
      <div class="item-check-box">
        <el-checkbox-group v-model="checkBoxList.bookList">
          <div class="check-column-box">
            <el-checkbox v-for="book in options.book.bookColumn1"
               :label="book" :key="book" :value="book"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="book in options.book.bookColumn2"
               :label="book" :key="book" :value="book"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="book in options.book.bookColumn3"
               :label="book" :key="book" :value="book"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="book in options.book.bookColumn4"
               :label="book" :key="book" :value="book"></el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>
    <div class="item-content-box">
      <div class="item-label-box">
        <div class="label-pic">
          <img src="https://dummyimage.com/40x40/333/3ff.jpg&text=pic"
               class="img-style">
        </div>
        <div class="label-word" style="color: #8AA0F3">喜欢的电影</div>
      </div>
      <div class="item-check-box">
        <el-checkbox-group v-model="checkBoxList.movieList">
          <div class="check-column-box">
            <el-checkbox v-for="movie in options.movie.movieColumn1"
               :label="movie" :key="movie" :value="movie"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="movie in options.movie.movieColumn2"
               :label="movie" :key="movie" :value="movie"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="movie in options.movie.movieColumn3"
               :label="movie" :key="movie" :value="movie"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="movie in options.movie.movieColumn4"
               :label="movie" :key="movie" :value="movie"></el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>
    <div class="item-content-box">
      <div class="item-label-box">
        <div class="label-pic">
          <img src="https://dummyimage.com/40x40/333/3ff.jpg&text=pic"
               class="img-style">
        </div>
        <div class="label-word" style="color: #519EE6">关注的节目</div>
      </div>
      <div class="item-check-box">
        <el-checkbox-group v-model="checkBoxList.showList">
          <div class="check-column-box">
            <el-checkbox v-for="show in options.show.showColumn1"
               :label="show" :key="show" :value="show"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="show in options.show.showColumn2"
               :label="show" :key="show" :value="show"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="show in options.show.showColumn3"
               :label="show" :key="show" :value="show"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="show in options.show.showColumn4"
               :label="show" :key="show" :value="show"></el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>
    <div class="item-content-box">
      <div class="item-label-box">
        <div class="label-pic">
          <img src="https://dummyimage.com/40x40/333/3ff.jpg&text=pic"
               class="img-style">
        </div>
        <div class="label-word" style="color: #ED877B">娱乐休闲</div>
      </div>
      <div class="item-check-box">
        <el-checkbox-group v-model="checkBoxList.entertainmentList">
          <div class="check-column-box">
            <el-checkbox v-for="entertainment in options.entertainment.entertainmentColumn1"
               :label="entertainment" :key="entertainment" :value="entertainment"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="entertainment in options.entertainment.entertainmentColumn2"
               :label="entertainment" :key="entertainment" :value="entertainment"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="entertainment in options.entertainment.entertainmentColumn3"
               :label="entertainment" :key="entertainment" :value="entertainment"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="entertainment in options.entertainment.entertainmentColumn4"
               :label="entertainment" :key="entertainment" :value="entertainment"></el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>
    <div class="item-content-box">
      <div class="item-label-box">
        <div class="label-pic">
          <img src="https://dummyimage.com/40x40/333/3ff.jpg&text=pic"
               class="img-style">
        </div>
        <div class="label-word" style="color: #FEB5BC">业余爱好</div>
      </div>
      <div class="item-check-box">
        <el-checkbox-group v-model="checkBoxList.hobbyList">
          <div class="check-column-box">
            <el-checkbox v-for="hobby in options.hobby.hobbyColumn1"
               :label="hobby" :key="hobby" :value="hobby"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="hobby in options.hobby.hobbyColumn2"
               :label="hobby" :key="hobby" :value="hobby"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="hobby in options.hobby.hobbyColumn3"
               :label="hobby" :key="hobby" :value="hobby"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="hobby in options.hobby.hobbyColumn4"
               :label="hobby" :key="hobby" :value="hobby"></el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>
    <div class="item-content-box">
      <div class="item-label-box">
        <div class="label-pic">
          <img src="https://dummyimage.com/40x40/333/3ff.jpg&text=pic"
               class="img-style">
        </div>
        <div class="label-word" style="color: #40D1CC">喜欢的旅游去处</div>
      </div>
      <div class="item-check-box">
        <el-checkbox-group v-model="checkBoxList.travelList">
          <div class="check-column-box">
            <el-checkbox v-for="travel in options.travel.travelColumn1"
               :label="travel" :key="travel" :value="travel"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="travel in options.travel.travelColumn2"
               :label="travel" :key="travel" :value="travel"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="travel in options.travel.travelColumn3"
               :label="travel" :key="travel" :value="travel"></el-checkbox>
          </div>
          <div class="check-column-box">
            <el-checkbox v-for="travel in options.travel.travelColumn4"
               :label="travel" :key="travel" :value="travel"></el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>
  </div>
  <div class="option-btn">
    <div class="btn">保存并继续</div>
    <div class="btn">跳过此页</div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkBoxList: {
        sportList: [],
        foodList: [],
        bookList: [],
        movieList: [],
        showList: [],
        entertainmentList: [],
        hobbyList: [],
        travelList: []
      },
      options: {
        sport: {
          sportColumn1: ['足球', '羽毛球', '手球', '健身', '汽车', '柔道', '水上运动', '钓鱼', '不喜欢运动'],
          sportColumn2: ['篮球', '乒乓球', '橄榄球', '跑步', '舞蹈', '空手道', '航海', '瑜伽'],
          sportColumn3: ['排球', '壁球', '棒球', '自行车', '体操', '游泳', '滑雪/滑冰', '武术'],
          sportColumn4: ['网球', '保龄球', '高尔夫', '摩托车', '跆拳道', '潜水', '拳击', '其他']
        },
        food: {
          foodColumn1: ['中国菜', '意大利菜', '健康食品', '其他'],
          foodColumn2: ['印度菜', '俄罗斯菜', '素食', '无特别爱好'],
          foodColumn3: ['泰国菜', '日本菜', '快餐'],
          foodColumn4: ['法国菜', '烧烤', '巧克力和甜点']
        },
        book: {
          bookColumn1: ['校园青春', '动漫与幽默', '运动健身', '投资理财', '人文社科', '什么都看'],
          bookColumn2: ['文学', '政治与军事', '健康与养生', '婚恋与家庭', '自然科学'],
          bookColumn3: ['艺术与摄影', '哲学与宗教', '烹饪与饮食', '期刊杂志', '收藏与鉴赏'],
          bookColumn4: ['励志与成功', '历史传记', '旅游', '娱乐时尚', '其他']
        },
        movie: {
          movieColumn1: ['爱情', '科幻魔幻', '战争', '西部'],
          movieColumn2: ['喜剧', '悬疑推理', '音乐歌舞', '历史传记'],
          movieColumn3: ['动作冒险', '惊悚恐怖', '纪录片', '其他'],
          movieColumn4: ['古装武侠', '动画', '剧情', '什么都看']
        },
        show: {
          showColumn1: ['政治事件', '相声曲艺', '休闲生活'],
          showColumn2: ['娱乐八卦', '海选活动', '行业发展'],
          showColumn3: ['体育赛事', '畅销书', '其他'],
          showColumn4: ['理财投资', '影视热片', '暂无']
        },
        entertainment: {
          entertainmentColumn1: ['饭店', '电影院', '温泉', '卡拉OK', '其他'],
          entertainmentColumn2: ['商场', '音乐会', '图书馆/书店', '体育院', '不想说'],
          entertainmentColumn3: ['剧院', '迪斯科', '咖啡厅', '逛街'],
          entertainmentColumn4: ['酒吧', '网吧', '游乐场', '在自己或朋友家里']
        },
        hobby: {
          hobbyColumn1: ['网络', '影视', '手工艺', '烹饪', '体育运动'],
          hobbyColumn2: ['汽车', '音乐', '园艺', '读书', '旅游'],
          hobbyColumn3: ['动物', '写作', '舞蹈', '绘画', '电子游戏'],
          hobbyColumn4: ['摄影', '购物', '展览', '计算机', '其他']
        },
        travel: {
          travelColumn1: ['惬意海岛', '广袤森里', '江河大川', '还没想好'],
          travelColumn2: ['名山古刹', '高原雪域', '隽秀峡谷'],
          travelColumn3: ['繁华都市', '秀美山水', '小桥流水人家'],
          travelColumn4: ['风情名域', '历史遗迹', '其他选择']
        }
      }
    }
  }
}
</script>

<style lang="less">
.hobby-content {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  margin-bottom: 40px;
  .item-content-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .item-label-box {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 0 5px;
      .label-pic {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .img-style {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .label-word {
        color: #71E7C6;
      }
    }
    .item-check-box {
      width: 100%;
      box-sizing: border-box;
      padding: 10px 0 0 50px;
      .el-checkbox-group {
        display: flex;
        flex-direction: row;
        .el-checkbox {
          margin-bottom: 5px;
        }
        .el-checkbox+.el-checkbox {
          margin-left: 0;
          margin-bottom: 5px;
        }
        .check-column-box {
          width: 110px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          margin: 0 5px;
          text-align: left;
        }
      }
    }
  }
}
.option-btn {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  .btn {
    width: 120px;
    height: 40px;
    background-color: #EF356E;
    box-sizing: border-box;
    border-radius: 5px;
    color: white;
    line-height: 40px;
    margin: 0 30px;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
