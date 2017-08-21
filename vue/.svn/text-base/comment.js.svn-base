/**
 * Created by les_liu on 2017/2/10.
 */
Vue.component('my-search', {
    template: '<div class="search">' +
    '<div class="search-one clearfix">'+
    '<div class="onesearch clearfix">'+
    '<div class="search-select">'+
    '<el-select v-model="select" @change="searchFieldChange(select)" placeholder="请选择搜索名称">'+
    '<el-option v-for="item in searchdata" :label="item.name" :value="item.filed">'+
    '</el-option>'+
    '</el-select>'+
    '</div>'+
    '<div class="search-input">'+
    '<el-input v-if="selectType == 0" :placeholder="placeholder" v-model="keywords"></el-input>'+
    '<el-date-picker v-if="selectType == 1" :placeholder="placeholder" v-model="keywords" type="date" placeholder="选择开始日期" :picker-options="datastar">'+
    '</el-date-picker>'+
    '<el-date-picker v-if="selectType == 2" :placeholder="placeholder" v-model="keywords" type="date" placeholder="选择结束日期" :picker-options="dataend">'+
    '</el-date-picker>'+
    '<el-select v-if="selectType == 3" v-model="keywords" placeholder="请选择">'+
    '<el-option  v-for="item in chilidsearch" :label="item.label" :value="item.value">'+
    '</el-option>'+
    '</el-select>'+
    '</div>'+
    '<div class="search-but">'+
    '<button class="y-btn y-btn-primary" @click="query">查询</button>'+
    '<button class="y-btn y-btn-primary" @click="showtogg">{{more}}</button>'+
        //'<button v-if="upMoreSearch" class="y-btn y-btn-primary" @click="showtogg">收起更多</button>'+
    '</div>'+
    '</div>'+
    '<div class="table-but">'+
    '<slot name="search-but"></slot>'+
    '</div>'+
    '</div>'+
    '<ul class="seach-block clearfix">'+
    '<li v-for="(copyItem,index) in copyData">'+
    '<label class="search-title">{{copyItem.name}}</label>'+
    '<div class="search-put" v-if="copyItem.type ==0">'+
    '<input type="text" v-model="copyItem.value" >'+
    '</div>'+
    '<div v-if="copyItem.type == 1">'+
    '<el-date-picker v-model="copyItem.value" type="date" placeholder="选择日期" :picker-options="datastar">'+
    '</el-date-picker>'+
    '</div>'+
    '<div v-if="copyItem.type == 2">'+
    '<el-date-picker v-model="copyItem.value" type="date" placeholder="选择日期" :picker-options="dataend">'+
    '</el-date-picker>'+
    '</div>'+
    '<div v-if="copyItem.type ==3">'+
    '<el-select  v-model="copyItem.value" placeholder="请选择">'+
    '<el-option  v-for="item in copyItem.selected" :label="item.label" :value="item.value">'+
    '</el-option>'+
    '</el-select>'+
    '</div>'+
    '</li>'+
    '</ul>'+
    '</div>',
    props:['searchdata'],
    data: function(){
        return {
            datastar: {
            },
            dataend: {
            },
            copyData:[],
            item:[],
            placeholders:{
                "coding":"请输入道路编码",
                "way":"请输入道路名称",
                "managestart":"请输入管辖起点",
                "beginDate":"请输入开始日期",
                "endDate":"请输入结束日期",
                "manger":"管理单位"
            },
            more:'更多搜索',
            moreSearch:true,
            upMoreSearch:undefined,
            placeholder:'',
            select:'',
            chilidsearch:'',
            keywords: '', //搜索框的关键字内容
            selectType:'0',
        }
    },
    beforeMount:function(){
        this.select=(this.searchdata[0].filed)
        this.placeholder=this.placeholders[this.select]
    },
    methods:{
        showtogg:function(){
            if(this.copyData.length>0){
                this.copyData = [];
                this.more='更多搜索'
            }else {
                this.copyData = [];
                this.keywords=""
                for(var i=0 ;i< this.searchdata.length;i++){
                    this.searchdata[i].value="";
                };
                this.copyData = this.searchdata;
                this.more='隐藏更多'
            }
            this.$emit('showmore',this.more);
        },
        showMore:function(){
            this.copyData = [];
            this.copyData = this.searchdata;
            this.upMoreSearch = true;
            this. moreSearch =false;
            this.$emit('showmore',this.upMoreSearch);
        },
        upShowMore:function(){
            this.copyData = [];
            this.upMoreSearch = false;
            this. moreSearch = true;
            this.$emit('upshowmore',this.upMoreSearch);
        },
        searchFieldChange:function(val) {
            if(val == '' || val ==null || val == undefined){}
            else{
                for(var i=0;i<this.searchdata.length;i++){
                    if(this.searchdata[i].filed.indexOf(val) != -1){
                        this.selectType = this.searchdata[i].type;
                        if(this.selectType=="3"){
                            this.chilidsearch=this.searchdata[i].selected
                        }
                    }
                }
                this.keywords='';
                this.placeholder=this.placeholders[this.select];
            }
        },
        query:function(){
            var a = {
                data : {},
                get : function(key){
                    return this.data[key];
                },
                set : function(key, value) {
                    this.data[key] = value;
                    return;
                }
            };
            if(this.copyData.length>0){
                for(var i=0 ;i< this.copyData.length;i++){
                    if(this.copyData[i].type == 1 ||this.copyData[i].type == 2){
                        this.copyData[i].value =  this.$options.methods.formatDate(this.copyData[i].value);
                    }
                    a.set(this.copyData[i].filed , this.copyData[i].value );
                };
            }else{
                if(this.selectType == 1 ||this.selectType == 2 ){
                    this.keywords =  this.$options.methods.formatDate(this.keywords);
                }
                a.set(this.select , this.keywords );
            }
            this.$emit('searchdata',a);
        },
        formatDate: function (now) {
            if(now){
                try {
                    var year = now.getFullYear();
                    var month = now.getMonth() + 1;
                    var date = now.getDate();
                    return year + "-" + month + "-" + date;
                } catch (e) {
                    return now ;
                }

            }else {
                return;
            }

        }
    }
})