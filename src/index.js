import JustValidate from 'just-validate';
const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力事項です。',
    },
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '三文字以上で入力してください。',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '最大入力文字数は15文字以上です。',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '必須入力事項です。',
    },
    {
      rule: 'required',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
      errorMessage: '形式が正しくありません。',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '必須入力事項です。',
    },
    {
      rule: 'required',
    },
    {
      rule: 'password',
      errorMassage: 'パスワードは8文字以上で入力してください。その際に文字数を1文字以上含める必要があります。',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '必須入力事項です。',
    },
    {
      rule: 'required',
    },
    {
      rule: 'number',
      errorMessage: '数字で入力してください。',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '18以上の数字を入力してください。',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '18以上の数字を入力してください。',
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: '必須入力事項です。',
    },
  ])
  .onSuccess(function(event){
    let formData = new FormData(event.target);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("age"));
    console.log(formData.get("address"));
  
  })
  // import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper1 = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
let titleElement = document.createTextNode('スライド' + swiper1.realIndex + 'を表示しています。')
let titleContainer = document.getElementById('swiper-title');
titleContainer.appendChild(titleElement);
swiper1.on('slideChange', function(){
  console.log('slide changed');
  console.log(swiper1.realIndex);
  titleElement.remove();
  titleContainer.appendChild(titleElement);
});
const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const titles = [
  "ブランコで悲しむ男の子",
  "ブランコで笑う男の子",
  "ブランコで悲しむ女の子",
  "ブランコで笑う女の子",
];

let titleElement2 = document.createTextNode(titles[swiper2.realIndex])
let titleContainer2 = document.getElementById('swiper-title-2');
swiper2.on('slideChange', function(){
  titleElement2.remove();
  titleElement2 = document.createTextNode(titles[swiper2.realIndex])
  titleContainer2.appendChild(titleElement2);
});