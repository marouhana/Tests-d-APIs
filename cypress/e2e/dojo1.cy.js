
const headers = {
    "Authorization": "Bearer d8773765ff6aee59f3e8029b216e8e8e6681256671803157207e0cc65b86fe70"
}

describe("Tests d'APIs", () => {
    let orderId;
    it("GET status", () => {
      cy.request("GET", "https://simple-books-api.glitch.me/status").then(
        (response) => {
          expect(response.status).eq(200);
          cy.log(JSON.stringify(response.body));
        })

    })
    it("POST an order", () =>{
        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/orders",
            body: {
                "bookId": 1,
                "customerName": "John"
            },
            headers
        }).then((response) => {
            expect(response.status).eq(201);
            orderId = response.body.orderId;
            cy.log(JSON.stringify(response.body));
            cy.log("Stored orerId", orderId);
        })
    })
    it("GET orders", () => {
        cy.request({
        //   method: "GET",
          url: "https://simple-books-api.glitch.me/orders",        
          headers
      }).then(
          (response) => {
            expect(response.status).eq(200);
            cy.log(JSON.stringify(response.body));
           
        })
    })
    it("GET order by ID", () => {
        cy.request({
            //   method: "GET",
            url: `https://simple-books-api.glitch.me/orders/${orderId}`,        
            headers
        }).then(
            (response) => {
            expect(response.status).eq(200);
            cy.log(JSON.stringify(response.body));
    
        }) 
    })
    it("Update an order", () =>{
        cy.request({
            method: "PATCH",
            url: `https://simple-books-api.glitch.me/orders/${orderId}`,
            body: {          
                "customerName": "John"
            },
            headers      
        })  
    })
    it("Delete an order", () =>{
        cy.request({
            method: "DELETE",
            url: `https://simple-books-api.glitch.me/orders/${orderId}`,
            headers
        })
    })
})

