<template>
    <header id="header" class="header_navbar">
        <div class="container">
            <div class="navbar-box">
                <router-link to="/" class="nabvar__block-logo">
                    <div class="d-flex align-items-center">
                        TEXNO <span>WEB</span>
                    </div>
                </router-link>
                <nav class="ml-auto">
                    <ul class="mb-0 navbar-ul descktop-menu pl-0">
                        <li class="navbar-ul-li">
                            <router-link to="/">Главная</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header_navbar {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: auto;
    width: 100%;
    -webkit-box-ordinal-group: 1;
    -webkit-box-flex: 0;
    transition: background-color .4s;
    z-index: 99;
}

.navbar-box{
    position: relative;
    display: flex;
    z-index: 3;
    width: 100%;
    padding: 10px 0;
    background-color: rgba(140,0,0,0);
    opacity: 1;
    transition: opacity .2s;
    background-clip: padding-box;
    -webkit-text-fill-color: inherit;
}

.navbar-box .nabvar__block-logo{
    font-size: 25px;
    color: var(--color-white-1);
    font-weight: 700;
    text-decoration: none;
    align-items: center;
    box-shadow: none;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    height: 60px;
    justify-content: center;
    outline: none;
    padding: 0 8px;
    text-align: center;
    width: auto;
}

.navbar-box .nabvar__block-logo span{
    color: var(--main-color);
}


.navbar-box nav {
    display: flex;
    flex: 1 1;
    overflow: hidden;
    justify-content: flex-end;
}

.navbar-box nav  .navbar-ul {
    display: flex;
    flex-shrink: 0;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar-box nav  .navbar-ul li {
    transition: all .4s ease;
}

.navbar-box nav  .navbar-ul li a {
    align-items: center;
    color: var(--color-white-1);
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    height: 100%;
    line-height: 20px;
    padding: 0 8px;
    position: relative;
    text-decoration: none;
    transition: all .4s ease;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
}

.navbar-box nav  .navbar-ul li a.router-link-active{
    border-bottom-color: var(--main-color);
}
.navbar-box nav  .navbar-ul li a:hover{
    color: var(--main-color);
}
/* .navbar-box {
    background: var(--bg-white);
    border-bottom: 1px solid var(--gray10_100);
    position: relative;
    z-index: 10;
}

.header_navbar .nabvar__block-logo{
    font-size: 25px;
    color: var(--color-black);
    font-weight: 700;
    text-decoration: none;
    align-items: center;
    box-shadow: none;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    height: 50px;
    justify-content: center;
    outline: none;
    padding: 0 8px;
    text-align: center;
    width: auto;
}

.header_navbar .nabvar__block-logo span{
    color: var(--main-color);
}

.menu-nav {
    display: flex;
    flex: 1 1;
    overflow: hidden;
    justify-content: flex-end;
}

.menu-nav .navbar-ul {
    display: flex;
    flex-shrink: 0;
    list-style: none;
    margin: 0;
    padding: 0;
}

.menu-nav .navbar-ul li {
    transition: all .4s ease;
}

.menu-nav .navbar-ul li a {
    align-items: center;
    color: var(--main-color);
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    height: 100%;
    line-height: 20px;
    padding: 0 8px;
    position: relative;
    text-decoration: none;
} */
</style>