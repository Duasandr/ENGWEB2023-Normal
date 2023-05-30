# Quantos registos estao na base de dados?

```db.plantas.count()```
Resultado: 29617

# Quantos registos de plantacao se encontram na freguesia "São Domingos de Rana"?

```db.plantas.find({"Freguesia": "São Domingos de Rana"}).count()```
Resultado: 5903

# Qual a lista de fregesias (ordenanda alfabeticamente e sem repetioes)?

```db.plantas.distinct("Freguesia").sort()```
Resultado:
[
  '',
  'Abóboda',
  'Alcabideche',
  'São Domingos de Rana',
  'U.F. Carcavelos e Parede',
  'U.F. Cascais e Estoril'
]

# Qual a distribuicao de registos por freguesia (quantos registos em cada freguesia)?

```
db.plantas.aggregate([
    {
        $group: {
            _id: "$Freguesia", 
            count: {
                $sum: 1
                }
            }
        }
])
```

Resultado:
[
  { _id: '', count: 26 },
  { _id: 'U.F. Cascais e Estoril', count: 12023 },
  { _id: 'São Domingos de Rana', count: 5903 },
  { _id: 'Abóboda', count: 2 },
  { _id: 'Alcabideche', count: 4034 },
  { _id: 'U.F. Carcavelos e Parede', count: 7629 }
]

# Qual a distribuicao de registos por especie?

```
db.plantas.aggregate([
    {
        $group: {
            _id: "$Espécie", 
            count: {
                $sum: 1
                }
            }
        }
])
```

Resultado:

[
  { _id: 'abeto do norte', count: 1 },
  { _id: 'figueira', count: 36 },
  { _id: 'cerejeira japonesa', count: 101 },
  { _id: 'abacateiro', count: 25 },
  { _id: 'planta do natal', count: 2 },
  { _id: 'choupo branco', count: 473 },
  { _id: 'pimenteira bastarda', count: 216 },
  { _id: 'laranjeira doce', count: 25 },
  { _id: 'acacia', count: 104 },
  { _id: 'faia', count: 8 },
  { _id: 'tilia de folhas pequenas', count: 115 },
  { _id: 'buganvilia', count: 6 },
  { _id: 'arbusto', count: 2 },
  { _id: 'dombeia', count: 3 },
  { _id: 'tuia', count: 64 },
  { _id: 'palmeira de leque', count: 240 },
  { _id: 'euonimus', count: 16 },
  { _id: 'rosa', count: 1 },
  { _id: 'São Domingos de Rana', count: 2 },        ----> (Freguesia???)
  { _id: 'pinheiro das canarias', count: 4 }
]