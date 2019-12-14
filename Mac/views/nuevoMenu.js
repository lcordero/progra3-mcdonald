    var combo = $(".combo")
    var input = $(":input")
    var bebida = $(".bebida")
    var acomp = $(".acomp")
    var guardar = $(".guardar")
    var cuerpo_t = $(".cuerpo_tabla")
    var index = $(".contenido_t")
    
// meto los valores de los inputs


// aprovar coneccion con socket
    var socket = io.connect(window.location.host);
    socket.on('connect', function() {
        console.log('conectado nuevo menu con socket');
        socket.send('connect nuevo menu con socket!')
    });
    // envia la info a las pag abiertas

 socket.on("menu_nuevo", function(prod){
    console.log("socket_menu",prod)
        // if (!prod.combo || !prod.bebida || !prod.acompanamiento ) return
        load_table(prod)
        // elimina_linea()
    })

    // socket.on("elimina", function(prod){
    //     console.log("elimina",prod)
    //         // if (!prod.combo || !prod.bebida || !prod.acompanamiento ) return
    //         elimina_linea()
           
    //     })
    

// creo una tabla para reutilizar codigo en socket y en var contenido

    var load_table = function (nuevoMenu){
        console.log("nuevo", nuevoMenu)
        cuerpo_t.append(`
        <tr id="`+ nuevoMenu._id +`">
        <th>`+ nuevoMenu.combo +`</th>
        <th>`+ nuevoMenu.bebida +`</th>
        <th>`+ nuevoMenu.acompanamiento +`</th>
        <th><button class="eliminar" id="`+ nuevoMenu._id +`" ></button></th>
        </tr>
    `)
    referencia_eliminar()
    }


// eliminar data

var referencia_eliminar = function(){
    let btn = $(":button")
    btn.on("click", function(e){
       var info = e.target
       console.log(e.target)
       
      elimina_linea(info)
    })
}
var elimina_linea = function(info){
    let menu_eli= $("#"+info.id).closest('tr').remove()
    elimina_prod(info)
    // socket.emit('menu_nuevo', menu_eli )
}

// funcion de eliminar el menu desde base de datos
// index.on("click", ".eliminar",
var elimina_prod = function(info){ 
    let menu_eli= $.ajax({
    url: 'http://'+ window.location.host +'/api/menu/'+info.id,
    type: 'DELETE' }) 
    // socket.emit(contennido(info), menu_eli )
}

// funcion de crear el nuevo menu con los inputs

    guardar.on("click", function(e){
        console.log("click on send info")
        $.post( "http://localhost:3001/api/menu", { 'combo': $(".combo").val(), 'bebida': $(".bebida").val(), 'acompanamiento': $(".acomp").val() } );
        socket.emit('menu_nuevo', {
            'combo': $(".combo").val(), 
            'bebida': $(".bebida").val(),
            'acompanamiento': $(".acomp").val()
        });
        input.val(' ');
    })


// obtiene la info de la base de datos

    var contenido = function(url){
        $.get( url, function( data ) {
            // console.log("data",data)
            cuerpo_t.empty()
            $.each( data.nuevo_menus, function( i, nuevoMenu ) {
                load_table(nuevoMenu)
            })
        })
    }

        contenido('http://'+ window.location.host +'/api/menu')


