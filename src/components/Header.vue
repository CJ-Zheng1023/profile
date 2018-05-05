<template>
  <header>
    <nav>
      <ul>
        <router-link to="/" tag="li">
          <a href="javascript:;">
              <span class="icon">
                <i class="fa fa-glass"></i>
              </span>
            <span class="icon-text">个人档案</span>
          </a>
        </router-link>
        <router-link to="/company" tag="li">
          <a href="javascript:;">
              <span class="icon">
                <i  class="fa fa-graduation-cap"></i>
              </span>
            <span class="icon-text">工作经历</span>
          </a>
        </router-link>
        <router-link to="/experience" tag="li">
          <a href="javascript:;">
              <span class="icon">
                <i class="fa fa-black-tie"></i>
              </span>
            <span class="icon-text">项目经验</span>
          </a>
        </router-link>
        <router-link to="/skill" tag="li">
          <a href="javascript:;">
              <span class="icon">
                <i class="fa fa-fighter-jet"></i>
              </span>
            <span class="icon-text">技能评分</span>
          </a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>
