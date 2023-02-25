## 设计模式是什么
1. 设计模式是前人总结的一系列靠谱的解决方案.我们使用这些方案去解决对应的问题.
2. 设计模式像是我们解数学题中的一些规则例如:勾股定理.
3. 学会设计模式的评判标准就是我们只要看到一个场景就可以想到某一种设计模式.
4. 设计模式做的事情是:将不变和变分离,保证变的部分灵活,不变的部分稳定.
## 设计模式5大基本规则
1. 单一功能原则&单一责任原则: 保证一个函数只做一件事情,这样可以防止修改功能A的时候不修改掉功能B.
2. 开放封闭原则:对拓展开放，对修改封闭。说得更准确点，软件实体（类、模块、函数）可以扩展，但是不可修改。
3. 里式替换原则:
4. 接口隔离原则
5. 依赖反转原则
# 设计模式
## 构造器设计模式
1. 构造器做的事情与构造函数相同.将构造的过程稳定化,将传入的值灵活化.例如
```js
class User {
    constructor(name,age){
        this.name = name ;
        this.age = age
    }
    sayHi(){
            console.log('my name is' + this.name)
    }
}
const u = new User('爵士',18)
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
    retrun  new User(name,age,wolk)
}
```
###  抽象工厂模式
1. 抽象工厂是在简单工厂的基础上衍生出来的. 原因其实是因为简单工场扩展时需要大量的去修改 工厂.随着逻辑增多,工厂函数越来越难以理解.
2. 抽象工厂与简单工厂不同.简单工厂是解决通过一些配置创建不同类的,而抽象工场是制定类的标准. 
3. 抽象工厂是将简单工厂中个性化的一些内容独立为类的衍生.这样如果我们进行扩展,只需要新增类.而简单工厂则需要修改工厂本体
```js
class User{
    constructor(name,age){
        this.name = name 
        this.age = age 
    }
    work(){
        throw new Error('不可以直接使用该类创建对象')
    }
}
class Coder extends User{
    work(){
        console.log('写代码','写系分', '修Bug')
    }
}
class Boss extends User{
    work(){
        console.log('喝茶', '看报', '见客户')
    }
}
const xiaoa = new Cloder()
```
1. 目前看起来似乎是没必要的明明一个工厂函数就可以解决为什么要创建多个类,其实不然.现在的 逻辑比较简单,而当逻辑复杂以后扩展每一个角色其实是比较困难的.
2. 创建一个角色我们直接创建一个类不就好了干嘛要继承呢.其实继承的意义在于 封闭原则. 我们只修改可变的.封装不可变的.每个员工都必须打工这件事情就是不可变的.
3. 除此以外我们还对 角色增加了扩展性.这一点其实也是我们必要的一个内容.我们可以给任何角色扩展,也可以以按照规范扩展任何类型.
### 构造器,简单工厂,抽象工厂之间的区别
1. 这3者都是创造形的.
2. 构造器解决的是一类内容的复用.
3. 工厂模式是解决多种类创建的问题.
4. 抽象工厂是简单工厂的一个衍生,它是一些有共性的类的一种标准.
## 单例模式
### 特点
1. 一个类只创建一个实例
2. 提供一个访问它的全局访问点.
3. 不管多少次创建都会返回同一个实例.
### 解决问题
1. 单例模式是为了解决一个东西防止被多次调用.产生与设计不符的场景.
### 单例模式实现
```js
class Vuex {}
Vuex.vue  = null;
Vuex.install = function (_vue) {
    if(Vuex.vue && Vuex.vue === _vue) {
        console.log('重复创建')
        return 
    }
    Vuex.vue = _vue;
}
const vue = {}
const store1 = Vuex.install(vue)
const store2 = Vuex.install(vue)
if(store2 === store1){
    console.log('store 相同')
}
```
### 单例模式
1. 单例模式的本质就是增加缓存机制.
2. 单例模式与闭包配合.
## 原形模式
1. 在其他语言中原形模式的应用就是通过 深拷贝的形式 以一个对象为原形,复制成一个新对象.
2. 在 Javascirpt 中与其他语言不同. Javascript 本实就是基于原形实现的. 类创建就是将 类的 prototype 拷贝到 对象的 __proto__ 属性上 .所以本身 JavaScript 的 原形模式和创建对象是一个概念.
3. 如果要实现其他语言所说的原形模式,则是去讨论深拷贝问题. 
4. 使用 Object.create() 也是原形模式的一种应用.
## 修饰器模式
修饰器模式的核心在于给一个对象增加新的外衣.得到更多功能支持.好比给手机贴了防偷窥膜,让手机有了防偷窥的功能.
### 使用场景
装饰器一般用在为标准功能提供额外配置的场景下. 例如 按扭 经过装饰 可以成为 红色按扭.
### 修饰器的好处
1. 修饰器是对类的一个提升.这样即可在不改变 原有能力的情况下增加新能力.
### Javascript 语法.
1. es5
```js
class Button {
    constructor(dom) {
        this._dom = dom
    }
    click() {
        console.log('click')
    }
}
class Decorator {
    constructor(button) {
        this._button = button
    }
    click() {
        this._button._dom.setAttribute("disabled", true)
    }
}
const button = document.getElementById('button');
const bt = new Decorator(new Button(button))
button.addEventListener('click', () => {
    bt.click()
})
``` 
2. es7
```js
// 装饰器函数，它的第一个参数是目标类
function classDecorator(target) {
    target.hasDecorator = true
  	return target
}

// 将装饰器“安装”到Button类上
@classDecorator
class Button {
    // Button类的相关逻辑
}

// 验证装饰器是否生效
console.log('Button 是否被装饰了：', Button.hasDecorator)
```

```js
function funcDecorator(target, name, descriptor) {
    let originalMethod = descriptor.value
    descriptor.value = function() {
        console.log('我是Func的装饰器逻辑')
        return originalMethod.apply(this, arguments)
    }
    return descriptor
}

class Button {
    @funcDecorator
    onClick() { 
        console.log('我是Func的原有逻辑')
    }
}

// 验证装饰器是否生效
const button = new Button()
button.onClick()

```