<script setup>

</script>
<template>
    <div class="ui-panelmenu">
            <h3 class="ui-panelmenu-header">
                <a href="#" class="ui-menuitem-link">
                    <span class="ui-menuitem-icon ui-icon pi pi-angle-down"></span>
                    <span class="ui-menuitem-text">Option</span>
                </a>
            </h3>
            <div class="ui-panelmenu-content ">
                <ul class="ui-menu-list">
                    <li >
                        <a class="ui-menuitem-link" href="#">
                            <span class="ui-menuitem-icon ui-icon pi pi-save"></span>
                            <span class="ui-menuitem-text">Save (Non-Ajax)</span>
                        </a>
                    </li>
                    <li >
                        <a class="ui-menuitem-link" href="#">
                            <span class="ui-menuitem-icon ui-icon pi pi-refresh"></span>
                            <span class="ui-menuitem-text">Refresh</span>
                        </a>
                    </li>
                    <li>
                        <a class="ui-menuitem-link ui-corner-all" href="#">
                            <span class="ui-menuitem-icon ui-icon pi pi-times"></span>
                            <span class="ui-menuitem-text">Cancelar</span>
                        </a>
                    </li>
                </ul>
            </div>
        
    </div>
</template>

<style>
    body .ui-panelmenu > a, span{
        color: rgb(65, 58, 58);
    }
    body .ui-panelmenu h3.ui-panelmenu-header a {
        padding: 0;
        outline: 0 none;
        vertical-align: middle;
    }

    body .ui-panelmenu h3.ui-panelmenu-header {
        border: 1px solid #dee2e6;
        background: #f8f9fa;
        padding: 1rem;
        font-weight: 700;
        font-size: 1rem;
    }

    body .ui-panelmenu .ui-menuitem-link {
        padding: 0.75rem 1rem;
        transition: background-color .2s,color .2s,border-color .2s,box-shadow .2s,opacity .2s;
    }

    .ui-panelmenu .ui-menuitem-link {
        display: block;
        text-decoration: none;
        font-weight: 400;
        border: solid 1px transparent;
        line-height: 10px;
        cursor: pointer;
        padding: 0.3em 0.3em 0.3em 2em;
    }


    body .ui-panelmenu .ui-panelmenu-content {
        padding: 0.25rem 0;
        background: #fff;
        border: 1px solid #dee2e6;
        margin-top: 0;
        position: static;
        border-top: 0 none;
    }

    body .ui-panelmenu .ui-panelmenu-content .ui-menuitem-link span {
        vertical-align: middle;
        margin-right: 0.5rem;
    }

    body .ui-panelmenu h3.ui-panelmenu-header span{
        margin-right: 0.5rem;
        font-weight: 700;
    }
</style>