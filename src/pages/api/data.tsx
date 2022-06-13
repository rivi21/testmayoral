export default (req, res) => {
    const DATA = [{
        id: 1,
        description: "Bufanda lisa azul",
        price: 10.99,
        promotion: "8,79€(-20%)",
        picture: "/img/bufandaAzul.jpg"
    },
    {
        id: 2,
        description: "Calcetines bebe azul blanco",
        price: 9.99,
        promotion: "",
        picture: "/img/calcetines_bebe_azulyblanco.jpg"
    },
    {
        id: 3,
        description: "Calcetines estampados blanco negro",
        price: 9.99,
        promotion: "7,99€(-20%)",
        picture: "/img/calcetines_estampados.jpg"
    },
    {
        id: 4,
        description: "Calcetines lisos azul",
        price: 6.99,
        promotion: "",
        picture: "/img/calcetines_lisos_azul.jpg"
    },
    {
        id: 5,
        description: "Guantes azul amarillo",
        price: 10.99,
        promotion: "8,79€(-20%)",
        picture: "/img/guantes_azul_amarillo.jpg"
    },
    {
        id: 6,
        description: "Guantes rayas azul",
        price: 8.99,
        promotion: "",
        picture: "/img/guantes_rayas_azul_dosTonos.jpg"
    },
    {
        id: 7,
        description: "manoplas lisas lila",
        price: 12.99,
        promotion: "",
        picture: "/img/manoplas_lila.jpg"
    },
    {
        id: 8,
        description: "pijama mono rojo",
        price: 20.99,
        promotion: "",
        picture: "/img/pijama rojo.jpg"
    },
    {
        id: 9,
        description: "rebeca capucha azul",
        price: 20.99,
        promotion: "15,79€(-20%)",
        picture: "/img/rebeca_capucha_azul_dosTonos.jpg"
    },
    {
        id: 10,
        description: "rebeca capucha azul blanco",
        price: 20.99,
        promotion: "",
        picture: "/img/rebeca_capucha_azulyBlanca.jpg"
    },
    {
        id: 11,
        description: "rebeca lisa capucha rosa",
        price: 18.99,
        promotion: "15,79€(-20%)",
        picture: "/img/rebeca_capucha_rosa.jpg"
    },
    {
        id: 12,
        description: "rebeca lisa cuello azul",
        price: 18.99,
        promotion: "15,79€(-20%)",
        picture: "/img/rebeca_cuello_azul.jpg"
    },
    {
        id: 13,
        description: "rebeca lisa cuello verde",
        price: 18.99,
        promotion: "15,79€(-20%)",
        picture: "/img/rebeca_cuello_verde.jpg"
    },
    {
        id: 14,
        description: "zapatos bebe rosa",
        price: 14.99,
        promotion: "11,99€(-20%)",
        picture: "/img/zapatos_calcetines_rosas.jpg"
    },
    {
        id: 15,
        description: "zapatos cordones azul",
        price: 24.99,
        promotion: "19,99€(-20%)",
        picture: ""
    },
    {
        id: 16,
        description: "zapatos cordones negro blanco",
        price: 24.99,
        promotion: "19,99€(-20%)",
        picture: "/img/zapatos_cuadros_cordones.jpg"
    },
    {
        id: 17,
        description: "zapatos botin gris",
        price: 22.99,
        promotion: "18,69€(-20%)",
        picture: "/img/zapatos_botin_gris.jpg"
    }
    ,{
        id: 18,
        description: "zapatos cordones negro blanco",
        price: 18.99,
        promotion: "15,19€(-20%)",
        picture: "/img/zapatos_cuadros_cordones.jpg"
    }];

    res.statusCode = 200
    res.json({
        data: DATA 
    })
}

