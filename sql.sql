db.category.save({'name':'斗鱼直播','alias':'douyuzhibo','post_count':0, 'order':0})

db.foo.save({'name':'ysz','address':{'city':'beijing','post':100096},'phone':[138,139]})

curl -i -X POST -H "'Content-type':'application/x-www-form-urlencoded', 'charset':'utf-8', 'Accept': 'text/plain'" -d 'data={"title":"yy直播","category":"zhibo", "summary": "这是一个很好的直播平台, 请大家多多关照", "content": "yy是一个拥有千年历史文化的直播平台"}' http://localhost:3000/api/post/create