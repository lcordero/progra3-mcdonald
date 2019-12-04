    var combo = $(".combo")
    var input = $(":input")
    var bebida = $(".bebida")
    var acomp = $(".acomp")
    var button = $(".guardar")
    var cuerpo_t = $(".cuerpo_tabla")
    var contenido = $(".contenido")

// aprovar coneccion con socket
    var socket = io.connect(window.location.host);
    socket.on('connect', function() {
        console.log('conectado nuevo menu con socket');
        socket.send('connect nuevo menu con socket!')
    });

// envia la info a las pag abiertas
    socket.on("menu_nuevo", function(prod){
        if (!prod.combo || !prod.bebida || !prod.acompanamiento ) return
        cuerpo_t.append(`
            <tr>
            <th>`+ prod.combo +`</th>
            <th>`+ prod.bebida +`</th>
            <th>`+ prod.acompanamiento +`</th>
            <th><button class="eliminar" pod_id="`+prod._id+`">Eliminar</button></th>
            </tr>
        `)
    })

// funcion de crear el nuevo menu con los inputs
    button.on("click", function(e){
        console.log("click on send info")
        $.post( "http://localhost:3001/api/menu", { 'combo': $(".combo").val(), 'bebida': $(".bebida").val(), 'acompanamiento': $(".acomp").val() } );
        socket.emit('menu_nuevo', {
            'combo': $(".combo").val(), 
            'bebida': $(".bebida").val(),
            'acompanamiento': $(".acomp").val()
        });
        input.val(' ');
    })
// funcion de eliminar el menu desde base de datos
    contenido.on("click", ".eliminar", function(){   
    socket.emit("menu_nuevo",  $.ajax({
        url: 'http://'+ window.location.host +'/api/menu/'+this.id,
        type: 'DELETE'
    }))
    })

// obtiene la info de la base de datos
    var contenido = function(url){
        $.get( url, function( data ) {
            console.log(data)
            cuerpo_t.empty()
            $.each( data.nuevo_menus, function( i, nuevoMenu ) {
                cuerpo_t.append(`
                    <tr>
                    <th>`+ nuevoMenu.combo +`</th>
                    <th>`+ nuevoMenu.bebida +`</th>
                    <th>`+ nuevoMenu.acompanamiento +`</th>
                    <th><button class="eliminar" id="`+ nuevoMenu._id +`" ></button></th>
                    </tr>
                `)
            })
        })
    }

        contenido('http://'+ window.location.host +'/api/menu')


