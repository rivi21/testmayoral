export default (req, res) => {
    const page = req.query.page || 1;
    const DATA = [{
        id: 1,
        description: "Polo manga larga estampado",
        price: "18,99€",
        promotion: "15,79€(-20%)",
        picture: ""
    },
    {
        id: 2,
        description: "Polo manga larga bandas",
        price: "20,99€",
        promotion: "",
        picture: ""
    },
    {
        id: 3,
        description: "Polo manga larga estampado",
        price: "18,99€",
        promotion: "15,79€(-20%)",
        picture: ""
    },
    {
        id: 4,
        description: "Polo manga larga miniesta",
        price: "18,99€",
        promotion: "",
        picture: ""
    },
    {
        id: 5,
        description: "Polo manga larga estampado",
        price: "18,99€",
        promotion: "15,79€(-20%)",
        picture: ""
    },
    {
        id: 6,
        description: "Polo manga larga escudo",
        price: "20,99€",
        promotion: "",
        picture: ""
    },
    {
        id: 7,
        description: "Polo manga larga escudo",
        price: "20,99€",
        promotion: "",
        picture: ""
    },
    {
        id: 8,
        description: "Polo manga larga escudo",
        price: "20,99€",
        promotion: "",
        picture: ""
    },
    {
        id: 9,
        description: "Polo manga larga rayas",
        price: "18,99€",
        promotion: "15,79€(-20%)",
        picture: ""
    },
    {
        id: 10,
        description: "Polo manga larga escudo",
        price: "20,99€",
        promotion: "",
        picture: ""
    },
    {
        id: 11,
        description: "Polo manga larga estampado",
        price: "18,99€",
        promotion: "15,79€(-20%)",
        picture: ""
    },
    {
        id: 12,
        description: "Polo manga larga estampado",
        price: "18,99€",
        promotion: "15,79€(-20%)",
        picture: ""
    }];

    res.statusCode = 200
    res.json({
        data: DATA 
    })
}

