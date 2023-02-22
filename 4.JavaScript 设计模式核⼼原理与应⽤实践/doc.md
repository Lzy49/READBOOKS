## 设计模式是什么
1. 设计模式是前人总结的一系列靠谱的解决方案.我们使用这些方案去解决对应的问题.
2. 设计模式像是我们解数学题中的一些规则例如:勾股定理.
3. 学会设计模式的评判标准就是我们只要看到一个场景就可以想到某一种设计模式.
4. 设计模式做的事情是:将不变和变分离,保证变的部分灵活,不变的部分稳定.
## 设计模式5大基本规则
1. 单一功能原则
2. 开放封闭原则
3. 里式替换原则
4. 接口隔离原则
5. 依赖反转原则
# 设计模式
## 构造器设计模式
1. 构造器做的事情与构造函数相同.将构造的过程稳定化,将传入的值灵活化.例如
```js
function createUser(name,age,sex){
    return {
        name,age,sex,sayHi(){
            console.log('my name is' + this.name)
        }
    }
} 
```
2. 在创建函数中,其实sayHi的行为是永远不会变的,但是它的名字,性别,年纪是会变化的.
## 工厂模式
1. 工厂模式就是 实现一个生产工场,这个工场只需要告诉它,我们想要什么.其他的就不需要我们管了. 
### 简单工厂模式
```js
function createUser(age,name,career){
    let todo = []
    switch(career) {
        case 'coder':
            work =  ['写代码','写系分', '修Bug'] 
            break
        case 'product manager':
            work = ['订会议室', '写PRD', '催更']
            break
        case 'boss':
            work = ['喝茶', '看报', '见客户']
        case 'xxx':
    }
    retrun {
        name,age,wolk
    }
}
```