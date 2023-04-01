<script>
export default{

}

const links = [
    {
        label: "Nova",
        icon: 'pi pi-fw pi-file',
        href: 'nova',
        permissao: 'cad'
    },
    {
        label: "UsuÁrio",
        icon: 'pi pi-fw pi-user',
        href: 'usuario',
        permissao: 'usuario'
    }
];

</script>
<template>
    <div class="menu-link">
        <ul>
            <li>
                <RouterLink to="/novaquadra">Nova quadra</RouterLink>
            </li>
        </ul>

        <ul>
            <li>
                <a href="#"><i class="ion-bag"></i> <span>Shop</span></a>
                <ul class="nav-flyout">
                    <li>
                        <a href="#"><i class="ion-ios-color-filter-outline"></i>Derps</a>
                    </li>
                    <li>
                        <a href="#"><i class="ion-ios-clock-outline"></i>Times</a>
                    </li>
                    <li>
                        <a href="#"><i class="ion-android-star-outline"></i>Hates</a>
                    </li>
                    <li>
                        <a href="#"><i class="ion-heart-broken"></i>Beat</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#"><i class="ion-ios-settings"></i> <span class="">Controls</span></a>
                <ul class="nav-flyout p-panelmenu">
                    <li>
                        <a href="#"><i class="ion-ios-alarm-outline"></i>Watch</a>
                    </li>
                    <li>
                        <a href="#"><i class="ion-ios-camera-outline"></i>Creeper</a>
                    </li>
                    <li>
                        <a href="#"><i class="ion-ios-chatboxes-outline"></i>Hate</a>
                    </li>
                    <li>
                        <a href="#"><i class="ion-ios-cog-outline"></i>Grinder</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style>
.menu-link>ul,
li {
    margin: 0;
    padding: 5px;
    border: 0;
    outline: 0;
    line-height: 1;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}
</style>