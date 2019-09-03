Page({
  data:{
    content:"codewhy",
    movies:["大话西游","盗梦空间","星际穿越","少年派"],
    counter:0
  },
  increment(){
    this.setData({
      counter:this.data.counter + 1
    })
  },
  decrement(){
    this.setData({
      counter:this.data.counter - 1
    })
  }
})