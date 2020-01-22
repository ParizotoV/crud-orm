const index = async ({ Person }, req, res) => {
  const persons = await Person.findAll()
  res.render('pessoas/index', { persons })
}

const createForm = (req, res) => {
  res.render('pessoas/create')
}

const createProcess = async ({ Person }, req, res) => {
  await Person.create(req.body)
  res.redirect('/pessoas')
}

const deleteById = async ({ Person }, req, res) => {
  await Person.destroy({
    where: {
      id: req.params.id
    }
  })
  res.redirect('/pessoas')
}

const editForm = async({ Person }, req, res) => {
  console.log('REQ', req.params.id, 'PERSON', Person)
  const person = await Person.findByPk(req.params.id)
  res.render('pessoas/edit', { person })
}

const editProcess = async({ Person }, req, res) => {
  await Person.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.redirect('/pessoas')
}

module.exports = {
  index,
  createForm,
  createProcess,
  deleteById,
  editForm,
  editProcess
}