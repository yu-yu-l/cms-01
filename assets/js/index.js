/**
 * 侧边导航关闭折叠控制
 */

function toggleSlide() {
  $('.nav > li > a').on('click', function () {
    let childMenu = $(this).next('ul');
    childMenu.slideToggle(400);
    let icon = childMenu.prev().find('.toggle');
    if (icon.hasClass('open')) {
      icon.removeClass('open').addClass('close');
    } else {
      icon.removeClass('close').addClass('open');
    }
  })

  // 默认第一个菜单展开
  $('.nav > li > a').eq(0).trigger('click');

  // 所有子菜单切换时加背景色
  $('.nav ul a').on('click', function () {
    $(this).addClass('active')
    $('.nav ul a').not($(this)).removeClass('active');
  })

}

toggleSlide();

// 需求1: 退出登录
document.querySelector('.logout').addEventListener('click', function () {
  // 跳转页面
  if (confirm('你确定要退出登录吗?')) {
    location.href = 'login.html'
    // 清除token
    localStorage.removeItem('token')
  }
})

// 需求2: 初始化数据
document.querySelector('.init').addEventListener('click', function () {
  // 发送ajax请求
  axios({
    url: '/init/data',
    method: 'get',
  }).then(({
    data: res
  }) => {
    //成功回调
    // console.log(res)
    if (res.code == 0) {
      toastr.success(res.message)
    }
  })
})