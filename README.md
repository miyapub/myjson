# jsonhelper
select json easy
### install
```
npm install myjson
```

### how to use ?

1) reuire :
```
var myjson=require('myjson');
```
2):codeing here:
```
var array=myjson.set(
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
).select("name").join(
    {
        a:[
            1,2,3
        ],
        b:{
            c:[4,5,6]
        }
    }
).toArray();
```

### test
```
npm test
```