

const token = "9a70dbdfa0b94dcfb594a0c459d114815fc5463faf564abea03841e06c2b86f5"
//let noteId
    describe('API NOTE', () => {
        let conexion=require('../fixtures/Note-connexion.json');
        let note =require('../fixtures/Note.json');
        it("conxion",()=>{
            
            cy.request({
                method:'POST',
                url:"https://practice.expandtesting.com/notes/api/notes",
            
                headers:{
                    "x-auth-token":token,
                    'Content-Type': 'application/json'
                },
                body: {
                      "title":note.title,
                      "description":note.description,
                      "category":note.category,
                }
            })
            
            .then(Response=>{
               expect(Response.status).to.equal(200)
               expect(Response.body.success).to.be.a('boolean').and.to.equal(true);
             expect(Response.body).to.have.property('message','Note successfully created');
            })
    })
   // noteId = response.body.data.id,
    it("GET note", () => {
        cy.request({
         method: "GET",
          url: "https://practice.expandtesting.com/notes/api/health-check",        
          headers:{
            "x-auth-token":token,
            'Content-Type': 'application/json'
        },
      }).then(
          (Response) => {
            expect(Response.status).to.equal(200)
            expect(Response.body.success).to.be.a('boolean').and.to.equal(true);
            expect(Response.body).to.have.property('message','Notes API is Running');
        })
    })
    //noteId =response.body.data.id;
    it("Modification d'une note", () => {
        cy.request({
            method: "PUT",
          url:"https://practice.expandtesting.com/notes/api/notes/665d82afe9a78a0141df16eb",
         
          headers:{
            "x-auth-token": token
          },
          body: {
            "id": "665d82afe9a78a0141df16eb",
            "title": "Modif titre dernière note créée",
            "description": "Modif description dernière note crée",
            "completed": false,
            "category": "Work"
          }
        })
        .then(response => {
          expect(response.body).to.have.property("status", 200)
          expect(response.body).to.have.property("message", "Note successfully Updated")
          expect(response.body.data).to.have.property("completed", false)
        })
      })
      it("Supprimer une note avec id", () => {
        cy.request({
          url: `https://practice.expandtesting.com/notes/api/notes/665d823ae9a78a0141df16db`,
          method: "DELETE",
          headers: {
            "x-auth-token": token
          }
        })
        .then(response => {
          expect(response.body).to.have.property("status", 200)
          expect(response.body).to.have.property("message", "Note successfully deleted")
        })
      })
      
      })
    
      


