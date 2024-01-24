//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.



// function processNumbers(num1, num2, callBack){
//     return callBack(num1, num2)  
// }
// function addNumbers(a, b){
//     return parseInt(a) + parseInt(b)
// } 

// console.log(processNumbers(prompt("enter..."),prompt("enter..."),addNumbers))


//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!


// function isValidUser(userName,Password) {
//     if(userName === '' && Password === ''){
//         return true
//     }else if(userName !== '' || Password !== ''){
//         return false
//     }
//     else{
//         return 'DGeGWBrhW'
//     }
    
// }
// console.log(isValidUser(String(prompt('enter username')),String(prompt('enter password'))))

//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!


// function timer(number) {
//     let timeInterval = setInterval(() => {
//         if (number === 0) {
//           clearInterval(timeInterval);
//           console.log('dro amoiwura')
//         } else {
//           console.log(number);
//           number--;
//         }
//       }, 1000);

// }
// timer(10)



//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.

// function myAge (myBirthDate) {
//     let currentDate = new Date().getFullYear()
//     let Age = currentDate - myBirthDate
//     if (myBirthDate > currentDate) {
//         console.log('error')
//     } else{
//         return Age
//     }
// }


// console.log(myAge(prompt('your birth date')))


//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!




// function weekDays(newDate){
//     switch (newDate) {
//         case 0 :
//             console.log('sunday')
//             break;
//             case 1:
//                 console.log('monday')
//                 break;
//             case 2:
//                 console.log('tuesday')
//                 break;
//             case 3:
//                 console.log('wednesday')
//                 break;
//             case 4:
//                 console.log('thursday')
//                 break;
//             case 5:
//                 console.log('friday')
//                 break;
//             case 6:
//                 console.log('saturday')
//         default:
//             console.log('error')
//             break;
//         }
// }

// weekDays(new Date().getDay())


