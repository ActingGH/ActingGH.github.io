var posts=["2023/12/30/Docker学习/","2023/12/30/Linux学习/","2023/12/30/MySql高级/","2023/12/20/MybatisPlus/","2023/12/06/MySQL/","2023/12/15/SpringMVC学习/","2023/12/30/git学习/","2024/09/26/微信小程序开发部署上线/","2023/12/30/微服务架构/","2023/12/30/网络编程/","2024/11/04/新生娱乐赛题解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };