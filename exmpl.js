async (req, res) => {
    const nomeLista = req.params.nomeLista; // Obtenha o nome da lista a partir dos parâmetros da URL
    const novoItem = req.body.novoItem; // Supondo que o novo item seja enviado pelo corpo da requisição
  
    try {
      const lista = await ListaSchema.findOne({ nome: nomeLista }); // Encontre a lista pelo nome
  
      if (!lista) {
        return res.status(404).send({ error: 'Lista não encontrada.' });
      }
  
      lista.itens.push({ valor: novoItem }); // Adicione o novo item à lista
      await lista.save(); // Salve a lista atualizada
  
      res.status(200).send({ message: 'Novo item adicionado com sucesso!' });
    } catch (err) {
      console.error('Erro ao adicionar item à lista:', err);
      res.status(500).send({ error: 'Erro ao adicionar item à lista.' });
    }
  };
  