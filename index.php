<?php
include('./includes/templates/header.php');
include('./includes/funciones/Bitrix.php');
$b24 = new Bitrix();
?>

<div class="container">
    <div>
        <form id="contacto">
            <input type="text" id="nombre">
            <input type="submit" value="Enviar" class="btn btn-primary">
        </form>
        <div id="notificacion">
            <legend class="legend"></legend>
        </div>
    </div>

</div>

<?php include('./includes/templates/footer.php'); ?>