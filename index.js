        //1. ways to print in javascript
        // alert("me");
        // document.write("this is document write")

        // 2. javascript console api
        // console.log("hello world");
        // console.warn("this ios a warning")
        // console.log("this is a error")

        // var num1 = 30;
        // var num2 = 70;
        // console.log(num1+num2);


        // 3. datatype in javascript 
        // num
        // var num1 = 12;
        // var num2 = 51;

        // // string 
        // var str1 = "ths is a string"

        // // object tis is bascially a key define pairs
        // var marks = {
        //     bob: 50,
        //     ravi: 65,
        //     harry: 78

        // }
        // console.log(marks)

        // booleans
        // var a = true;
        // var b = false;
        // console.log(a, b);

        // at a very high level , there are two types of data types in javascript
        // 1. primitive data types: undefine , null, number, string, boolean, symbol
        // 2. refernence data types: array and oblect
        // var arr = [1,2,"str", true]
        // console.log(arr)

        // 4. operators in javascript
        // arithmetic operators it is used top peerform mathematicall operation
        // var a = 20;
        // var b = 10;
        // console.log("a+b is:",a+b);
        // console.log("a-b is:",a-b);
        // console.log("a*b is:",a*b);
        // console.log("a/b is:",a/b);
        //  assignment operator it is used to assign the data in variable
        // var c = b
        // c += 2 // c = c+2
        // console.log(c)
        // comparision operators
        // it is used to compatre the data 
        // var x = 20
        // var y = 30
        // console.log(x == y);
        // console.log(x <= y);
        // console.log(x >= y);
        // console.log(x < y);
        // console.log(x > y);

        // logical operators
        // logical and
        // console.log(true && true);
        // console.log(true && false);
        // console.log(false && true);
        // console.log(false && false);
        // // logical or
        // console.log(true ||  true);
        // console.log(true ||  false);
        // console.log(false ||  true);
        // console.log(false ||  false);
        // // logical not
        // console.log(!true);
        // console.log(!false);
        // 5. function in javascript 
        // function avg(a,b)
        // {
        //     return a+b/2;
        // }
        // // DRY = do not repeat yourself
        // c1 = avg(2,4)
        // // console.log(c1)

        // // 6. conditional in javascript 
        // var age = 4;
        // if (age>18)
        //     {
        //         console.log('you can drink')
        //     }
        // else{
        //     console.log('you can nott drink')
        // }
        // if (age > 32)
        // {
        //     console.log('you are no more kid');
        // }
        // else if(age > 25)
        // {
        //     console.log("you are not child")
        // }
        // else if(age > 18)
        // {
        //     console.log("you are adult now")
        // }
        // else {
        //     console.log("you are a still a child")
        // }

        // this an examplem of if else in function

        // function drink (age)
        // {
        // if (age > 18)
        //     {
        //    var str = "you can drink"
        //     }
        // else
        // {
        //    var str = "you can not drink"
        // }
        //     return str;
        // }
        // var c2 = drink(16);
        //  console.log(c2);

        // 7. loops in javascripts 
        // for loops 
        // var arr = [1,2,5,6,4]
        // console.log(arr)
        // for(var i = 0; i < arr.length; i++)
        // {
        //     console.log(i)
        // }
        // // for each loop 

        // arr.forEach(function (element) 
        // {
        //     console.log(element)
        // });

        // while loop
        // let j = 0;
        // while (j < arr.length)
        // {
        //     console.log(arr[j]);
        //     console.log(j);
        //     j++;
        // }

        // do while loop
        // do{ 
        //     console.log(arr[j]);
        //     j++
        // }
        // while(j < arr.length);
        // break and continue statement
        // var arr = [1,2,5,6,4]
        // console.log(arr)
        // for(var i = 0; i < arr.length; i++)
        // {
        //     if  (i == 2)
        //     {
        //       // break; // for braking the loop
        //       continue; // for skiipping the elementv of an array 
        //     }
        //   console.log(i)
        // }

        // 8. arrays methods
        // let arr = [1,2,4,"new", true, null]
        // console.log(arr.length)
        // arr.pop();
        // arr.shift()
        // arr.push("harry")
        // arr.unshift('harry')
        // console.log(arr)
        // console.log(arr.shift("harry"))


        // 9. date in javascripts

        // let date = new Date ();
        // console.log(date.getTime());
        // console.log(date.getDate());
        // console.log(date.getMinutes());
        // console.log(date.getSeconds());
        // console.log(date.getDay());

        // DOM manupulation


        // let el = document.getElementById('cick')
        // console.log(el)
        // let ele = document.getElementsByClassName('container')
        // console.log(ele)
        // // ele[0].style.background = "yellow"
        // ele[0].classList.add('bg-primary')
        // ele[0].classList.add('text-sucess')
        // console.log(ele[0].innerHTML)
        // console.log(ele[0].innerText)
        // tn = document.getElementsByTagName('button')
        // console.log(tn)
        // createdelement = document.createElement('p');
        // createdelement.innerText = "this is t6ge crearted parabgradph";
        // tn[0].appendChild(createdelement);
        // createdelement1 = document.createElement('strong');
        // createdelement1.innerText = "this is t6ge crearted parabgradph";
        // tn[0].replaceChild(createdelement1, createdelement);

        // selecting using query
        // sel = document.querySelector(".container")
        // console.log(sel)
        // sel1 = document.querySelectorAll('.container')
        // console.log(sel1)

        // // events in javascript
        // function clicked()
        // {
        //     console.log("the button was clicked");
        // }
        // window.onload = function(){
        //     console.log('the document was loaded');
        // } 

        // firstcontainer.addEventListener('click', function()
        // {
        //     console.log('click hua');
        // });

        // firstcontainer.addEventListener('mouseover', function()
        // {
        //     console.log('mouse in');
        // });

        // firstcontainer.addEventListener('mouseout', function()
        // {
        //     console.log('mouse out');
        // });

        // arrow function
        // function summ(a,b){
        //     return a+b;
        // }
        // summ = (a,b) => {
        //     return a+b;
        // }
        // logkaro = () => {
        //     document.querySelectorAll('.container')[1].innerHTML = "<b>this is bold</b>"
        //     console.log("i am your log")
        // }
        // setTimeout and setinterval 
        // clr = setTimeout(logkaro, 2000);
// use cleartimeout(clr) to cancel the time out 
        // clr = setInterval(logkaro, 2000);
// use clearinterval(clr) to cancel the interval


//  javascript localStorage
// localStorage.setItem("name","harry")
// localStorage
// localStorage.getItem("name")
// localstorage.removeItem('name)
// localstorage.clear()

// json
// obj = {name:"harry", length:1}
// jso = JSON.stringify(obj)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1}`)
// console.log(parsed)

// template literals - backticks  
a = 34;
console.log(`'this is muy num ${a}`)