<template>
  <header>
    <nav>
      <ul>
        <router-link to="/" tag="li">
          <a href="javascript:;">
              <span class="icon">
                <i class="fa fa-glass"></i>
              </span>
            <span class="icon-text">档案</span>
          </a>
        </router-link>
        <router-link to="/education" tag="li">
          <a href="javascript:;">
              <span class="icon">
                <i  class="fa fa-graduation-cap"></i>
              </span>
            <span class="icon-text">学历</span>
          </a>
        </router-link>
        <router-link to="/experience" tag="li">
          <a href="javascript:;">
              <span class="icon">
                <i class="fa fa-black-tie"></i>
              </span>
            <span class="icon-text">经验</span>
          </a>
        </router-link>
        <router-link to="/skill" tag="li">
          <a href="javascript:;">
              <span class="icon">
                <i class="fa fa-fighter-jet"></i>
              </span>
            <span class="icon-text">技能</span>
          </a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>
