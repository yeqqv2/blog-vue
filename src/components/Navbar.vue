<template>
    <div class="navbar">
        <nav>
            <h1>Blog</h1>
            <div>
                <router-link :to="{ name: 'Home' }">Ana Sayfa</router-link>
                <router-link :to="{ name: 'Ekle' }">Oluştur</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    padding-bottom: 70px;
}

nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 10px solid #ef233c;
    padding-bottom: 30px;
}

nav h1 {
    font-size: 2rem;
}

nav ul {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}

nav li {
    list-style-type: none;
    margin-left: 20px;
}

nav a {
    color: #8d99ae;
    margin-right: 20px;
    font-weight: 500;

}

nav .router-link-active {
    color: #ef233c;
}
</style>