const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5335;


const dataFilePath = path.join(__dirname, 'data/posts.json');
const vueSFCSettings = path.join(__dirname, 'data/vueSFCSettings.json');

app.use(express.json());


app.get('/api/get-all-posts', (req, res) => {

  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" })
    } else {
      res.status(200).json(JSON.parse(data));
    }
  })

})

app.get('/api/get-post/:id', (req, res) => {
  const id = req.params.id;

  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" })
    } else {
      try {

        const jsonData = JSON.parse(data);
        const item = jsonData.find(item => item.id == id);

        if (item) {
          res.json(item);
        } else {
          res.status(404).json({ message: 'Item not found' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" })
      }
    }
  });
});


app.post('/api/vue-sfc', (req, res) => {


  const { template, style } = req.body;


  fs.readFile(vueSFCSettings, 'utf8', (err, data) => {
    if (err) {
      fs.writeFile(vueSFCSettings, JSON.stringify({ template, style }, null, 2), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: "Internal server error" })
        } else {
          res.send('Data saved successfully');
        }
      });
    } else {
      try {
        fs.writeFile(vueSFCSettings, JSON.stringify({ template, style }, null, 2), (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ message: "Internal server error" })
          } else {
            res.status(200).send({ message: 'Data saved successfully' });
          }
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" })
      }
    }
  });
});


app.get('/api/vue-sfc', (req, res) => {

  fs.readFile(vueSFCSettings, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" })
    } else {
      res.status(200).json(JSON.parse(data));
    }
  })

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});