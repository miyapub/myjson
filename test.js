var JsonHelper=require('./index');
var array=JsonHelper.set(
    {
        books:[
            {
                name:'tom and jerry'
            },
            {
                name:'who is the king'
            },
            {
                name:'haha'
            }
        ]
    }
).select("name",function(v){
    return "hello "+v;
}).join(
    {
        a:[
            1,2,3
        ],
        b:{
            c:[4,5,6]
        }
    }
).toArray();
console.log(array);