/*标准计算传入三个参数，budget_cal(天数,孩子数量,成人数量)；eg:budget_cal(1,2,3) 将返回19.60925
低标准计算传入四个参数,budget_cal(天数,孩子数量,成人数量，trigger),请传入任意参数激活trigger;
eg:budget_cal(1,2,3,1) 将返回11.76555/budget_cal(1,2,3,'activate') 将返回11.76555*/

function budget_cal(days,num_c,num_a,trigger){
    var chid_total = 0;
    var adult_total = 0;

    var chid_gram = new Map([['meat',0.14],['vege',0.35],['fruit',0.245],['milk',0.350],['staple',0.210]]);
    var adult_gram = new Map([['meat',0.200],['vege',0.500],['fruit',0.350],['milk',0.500],['staple',0.300]]);
    var food_price_average = new Map([['meat',12.7],['vege',3.2],['staple',5],['milk',3.35],['fruit',5.25]]);

    var days = Number(days);
    var num_c = Number(num_c);
    var num_a = Number(num_a);

    if (num_c > 0){
        chid_total = chid_gram.get('meat')*food_price_average.get('meat')+chid_gram.get('vege')*food_price_average.get('vege')+
        chid_gram.get('fruit')*food_price_average.get('fruit')+chid_gram.get('milk')*food_price_average.get('milk')+
        chid_gram.get('staple')*food_price_average.get('staple') * num_c
    }
    //console.log(chid_total)
    if(num_a > 0){
        adult_total = adult_gram.get('meat')*food_price_average.get('meat')+adult_gram.get('vege')*food_price_average.get('vege')+
        adult_gram.get('fruit')*food_price_average.get('fruit')+adult_gram.get('milk')*food_price_average.get('milk')+
        adult_gram.get('staple')*food_price_average.get('staple') * num_a
        }
    //console.log(adult_total)
    if (trigger !== undefined){
        return ((chid_total+adult_total)*0.6)
    }
    else{
    return (chid_total+adult_total)
    }
}
