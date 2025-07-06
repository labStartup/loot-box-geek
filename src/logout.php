<!-- Código para sair do sistema e "destruir" a sessão criada -->
<?php
    session_start();
    unset($_SESSION['email']);
    unset($_SESSION['senha']);
    header("Location: ../public/index.php");

?>