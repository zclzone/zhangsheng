import Vue from 'vue';

Vue.filter('dateFormat', time => {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return (
    year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
  );
});
