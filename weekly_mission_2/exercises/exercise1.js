//GitHub
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   const issue={
    title:"Live 1 Semana 2",
    repositoryNameAssociated:"MissionNodeJS",
    status:"Finalizado" ,
    numberOfComments: 12,
    labels:{
        etiqueta1: "laucheX",
        etiqueta2: "exercises",
        etiqueta3:"Semana 1",
        etiqueta4:"Live 1"
    },
    author:"carlogilma",
    dateCreated: DataView,
    latAUpdate:setTimeout,
    getTitleAndAuthor: function(){
        return this.title
      },
      getGeneralInfo: function(){
          return this.labels
    }
      
}

const pullRequest = {
  title: "Corregir Bug",
  branchName: "main",
  dateCreated: Date(),
  status: "Open",
  repositoryNameAssociated:"MissionNodeJS",
  getStatus: function(){
      return this.status
  },
  getTitleAndAutor : function(autor){
      return "Autor: "+ autor +" Title: "+ this.title ;
  }

}
//Twiter

const user ={
  name:"victor",
  biografia: " I love gaming and technology ",
  ubicacion: "Morelia Michoacan",
  sitioWeb: "https://github.com/victor-gp99?tab=repositories"
}
const trendingTopic ={
  title:"Elon Musck compra Twitter",
  descrition:"Twitter anunció el lunes que la oferta de Elon Musk para comprar la compañía de redes sociales fue aceptada después de una votación unánime de su junta directiva",
  date: Date(),
  category:"Negocios y finazas",
  retwits:32442543
}
const hashtag = {
  title:"HONORX8"
}

//Facebook

const userf = {
  name:"Victor Garcia",
  foto:"foto.png",
  portada:"portada.png"
  
}
const postf = {
  conenido:"",
  num_likes:7,
  comentarios:[
    "cometario1",
    "cometario2",
    "cometario3"
  ],
  date: Date(),
  owner: "Victor Garcia",
  foto_owner:"foto.png",
  status:"oculto"
}
const biographyf = {
  presentacion: "Hola soy victor estudiante en ingenieria en tecnologias de la info. y comunicaciones ",
  estudios:"univercitarios",
  recidencia: "Morelia",
  origen: "Morelia",
  intagram:"victor_butera1",
  hobbies:[
    "programar",
    "comer",
    "natacion"
  ],
}