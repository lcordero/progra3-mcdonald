$(()=>{
    function añadir_orden (orden){
        $("#datos").append(`
        <tr class=usuario>
        <td>${orden.Numero_Orden}</td>
        <td>${orden.Plato}</td>
        <td>${orden.Bebida}</td>
        <td>${orden.Cantidad}</td>
        <td>${orden.Observaciones}</td>
        <td>${orden.Precio}</td>
        <td><button class=mostrar_orden>Añadir Orden</button></td>
        </tr>`)
    }

    function obtenerorden(){
        $("#orden").empty();
        $.get('http://localhost:3000/macdonald', (orden) => {
        orden.forEach(añadir_orden);
        })
    } 

    function enviarorden(orden){
        $.post('http://localhost:3000/macdonald', orden)
    }

    $("#enviar").click(()=>{
        console.log("Enviando Orden a macdonald");
        enviarorden({
        Numero_Orden: $("#Numero_orden").val(),
        Plato: $("#Plato").val(),
        Bebida: $("#Bebida").val(),
        Cantidad: $("#Cantidad").val(),
        Observaciones: $("#Observaciones").val(),
        Precio: $("#Precio").val(),
        });
    obtenerorden();
    })
})
