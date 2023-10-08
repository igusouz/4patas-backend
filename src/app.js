import express from "express";

const conexao = await connectDataBase();

conexao.on("error", (erro)=>{
  console.log("Erro de conexão: ", erro);
});

conexao.once("open", ()=>{
  console.log("Conexão com o banco realizada devidamente!")
});

const app = express();
app.use(express.json())
const animais = [
    {id: 1, "nome": "alfredo"},
    {id: 2, "nome": "chico"}
  ]
  app.get('/', (req, res) => {
    res.status(200).send('Início 4Patas');
  }) 
  app.get('/animais', (req, res) => {
      res.status(200).json(animais)
  })

  app.post('/animais', (req, res) => {
    animais.push(req.body);
    res.status(201).send('Animal cadastrado com sucesso!')
  })

  app.put('/animais/:id', (req, res) => {
    let index = buscaAnimal(req.params.id);
    animais[index].nome = req.body.nome;
    res.json(animais);
  })
  
   app.get('/animais/:id', (req, res)=>{
    const index = buscaAnimal(req.params.id);
    res.status(201).json(animais[index]);

   })

   app.delete('/animais/:id',(req, res)=>{
    const index = buscaAnimal(req.params.id);
    if (index !== -1) {
      idade.splice(index, 1); // Remove 1 elemento a partir da posição index
      res.status(204).send(); // 204 significa "No Content" (sucesso, mas sem conteúdo)
    } else {
      res.status(404).send('Animal não encontrado'); // Retorna um erro se o ID não for encontrado
    }
  })

  function buscaAnimal(id) {
    return animais.findIndex(animais => animais.id == id)
  }
  export default app