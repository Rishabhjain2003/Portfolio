const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

let t = document.getElementById('typewriter');
const arr = ["Rishabh Jain. ", "Developer. ", "Programmer. "];
let i = 0;
let j = 1;
let chk = true;
const typ = () =>{
  if(j==arr[i].length){
    chk = false
  }
  if(j==0 && chk==false){
    i++;
    chk = true;
    j = 1;
  }
  if(i>=3){
    i = 0;
  }
  let s = arr[i].slice(0,j);
  (chk == true) ? j++ : j--;
  t.innerText = s;
  setTimeout(()=>typ(), 200);
}
typ();


// for(var i=0;i<arr.length;i=i+1){
//   var s = "";
//   for(var j=0;j<arr[i].length;j=j+1){
//     setTimeout(() => {  console.log("Hello"); }, 50000);
//     s += arr[i][j];
//     t.innerText = s;
//   }
//   for(var j=arr[i].length-1;j>=1;j--){
//     setTimeout(() => {  console.log(s); }, 50000);
//     s = s.substring(0,j);
//     t.innerText = s;
//   }
// }