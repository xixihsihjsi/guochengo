 // 获取所有可点击的图片
 const images = document.querySelectorAll('.zoomable-image');

 // 获取模态框元素
 const modal = document.getElementById('myModal');
 // 获取模态框中的图片元素
 const modalImage = document.getElementById('modalImage');
 // 获取关闭按钮元素
 const closeButton = document.querySelector('.close');

 // 为每个图片添加点击事件监听器
 images.forEach(image => {
   image.addEventListener('click', () => {
     // 显示模态框
     modal.style.display = 'block';
     // 设置模态框中图片的 src 属性为点击图片的 src 属性
     modalImage.src = image.src;
   });
 });

 // 为关闭按钮添加点击事件监听器
 closeButton.addEventListener('click', () => {
   // 隐藏模态框
   modal.style.display = 'none';
 });

 // 点击模态框外区域关闭模态框
 window.addEventListener('click', event => {
   if (event.target === modal) {
     modal.style.display = 'none';
   }
 });



