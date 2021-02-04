const db = require('../database/connection');

module.exports = {
  async findAll(req, res) {
    try {
      const characters = await db.select().table('characters');
      res.send(characters);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },
  async findOne(req, res) {
    const myId = req.params.id;
    try {
      const character = await db.where({ id: myId }).table('characters');

      if (character.length == 0) {
        res
          .status(404)
          .send({ message: `Personagem - ID: ${myId} - não encontrado!` });
      }
      res.send(character);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },
  async create(req, res) {
    try {
      const data = req.body;
      const newCharacter = await db.insert(data).table('characters');

      res.send(newCharacter);
    } catch (error) {
      res
        .status(500)
        .send({ message: `Erro ao salvar os dados: ${error.message}` });
    }
  },
  async update(req, res) {
    if (!req.body) {
      return res.status(400).send({
        message: "Dados para atualização vazio!",
      });
    }
    const myId = req.params.id;
    const data = req.body;
    try {
      const data = req.body;
      const character = await db.where({ id: myId }).update(data).table('characters');

      if (!character) {
        res.status(404).send("Personagem não encontrado!");
      }
      res.send({ message: "Personagem atualizado com sucesso!" });
      // res.send(data);
    } catch (error) {
      res.status(500).send({ message: "Erro ao atualizar o Personagem de id: " + myId });
    }
  },
  async remove(req, res) {
    const myId = req.params.id;

    try {
      const character = await db.delete().where({ id: myId }).table('characters');
      if (!character) {
        res.status(404).send({ message: "Personagem não encontrado!" });
      }
      res.send({ message: "Personagem excluído com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Nao foi possivel deletar o personagem de id: " + myId });
    }
  },
};
