import pets from "../models/pets.js";

class petsController{

    static async listarPets(req,res){
       try{
            const listarPets = await pets.find({});
            res.status(200).json(listarPets);
       }catch(erro){
            res.status(500).json({message:`Erro ao listar os pets cadastrados- ${erro.message}`})
       } 
    }

    static async listarPetsPorId(req,res){
        try{
            const id = req.params.id;
            
            const petsFound = await pets.findById(id);
            res.status(200).json(petsFound);
        }catch(erro){
            res.status(500).json({message:`Erro ao listar PET por Id- ${erro.message}`})
        }
    }

    static async adicionarPets(req,res){
        try{
            const petsNew = await pets.create(req.body);

            res.status(201).send({message: 'Vaga cadastrada com sucesso!', pets: petsNew});
        }catch(erro){
            res.status(500).jsonm({erro:`${erro.message}-falha ao adicionar pet`});
        }
    }

    static async atualizarPets(req, res){
        try{
            const id = req.params.id

            await pets.findOneAndUpdate(id, req.body)

            res.status(200).json({message:`Pet atualizado com sucesso`})

        }catch(erro){

            res.status(500).json({message:`Erro ao atualizar pet ${erro.message}`})

        }
    }

    static async removerPets(req,res){
        try{
            const id = req.params.id;
            
            await pets.findOneAndDelete(id, req.body);

            res.status(200).json({ message: `Pet removido!`});

        }catch(erro){

            res.status(500).json({message: `Erro ao remover Pet - ${erro.message}`})

        }
    }

}

export default petsController;