// var Mock =  require('../utils/mock.js');
let debug = true;
if(debug){
    console.log(123);
    Mock.mock(/userInfo/,{
        status:200,
        data:{
            userName:'卡布达'
        }
    }),
    Mock.mock(/storeInfo/,{
        status:200,
        storeInfo:{
            name:'卡布达的奶茶店',
            distance:'1.2',
            address:'四川省成都市卡卡',
            phone:'15278907890',
            longitude:'',
            latitude:''
          },
    })
}