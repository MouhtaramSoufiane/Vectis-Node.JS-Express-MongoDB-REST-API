import express, {Request,Response} from 'express'
import mongoose from 'mongoose';
import Centre from './model.centre'
import RendeVous from './model.rendez-vous'
import Reclamation from './model.reclamation'
import Commentaire from './model.commentaire'
import bodyParser from 'body-parser'





const app=express();
app.use(bodyParser.json());
// API REST FOR CENTERS
app.get('/',(req,res)=>{
    res.end('<h1>Mr Soufiane Mouhtaram</h1>')
});

app.get('/centres', (req, res) => {
    Centre.find() // No callback here
      .then((centres) => {
        res.send(centres); // Send the data as a JSON response
      })
      .catch((err) => {
        
        res.status(500).send(err);
      });
  });
  app.get('/centres/:id', (req, res) => {
    Centre.findById(req.params.id).then(
        getedCentre=>{
            res.json(getedCentre)
        }
    ).catch(err=>{
        res.status(500).send(err);
    })
     
  });

  app.post('/centres', (req: Request, res: Response) => {
    let centre = new Centre(req.body);
    centre.save()
      .then((savedCentre) => {
        // Sending the saved Centre object as a response
        res.json(savedCentre);
      })
      .catch((err) => {
        // Handling any errors that occurred during save
       
        res.status(500).send(err);
      });
  });

  app.delete('/centres/:id',(req,res)=>{
    Centre.deleteOne({_id:req.params.id}).then(
        (deletedCentre)=>{
            res.send('centre has benn deleted')
        }
    ).catch(err=>{
       res.status(500).send(err);
    })
  });

  app.delete('/centres',(req,res)=>{
    Centre.deleteMany({}).then(
      ()=>{
        res.send('all centre were benn deleted') ;
      } 
    ).catch(
        err=>{
            res.sendStatus(500).send(err)
        }
    )
  })
  app.put('/centres/:id',(req,res)=>{
    Centre.findByIdAndUpdate(req.params.id,req.body).then(
        (upadatedCentre)=>{
            res.send('centre has been updated')
        }
    ).catch(err=>{
        res.sendStatus(500).send(err)
    })
  });

  // API REST FOR RENDEZ-VOUS

  app.get('/rendez-vous', (req, res) => {
    RendeVous.find() // No callback here
      .then((rendezVous) => {
        res.send(rendezVous); // Send the data as a JSON response
      })
      .catch((err) => {
        
        res.status(500).send(err);
      });
  });
  app.get('/rendez-vous/:id', (req, res) => {
    RendeVous.findById({_id:req.params.id}).then(
        getRendezVous=>{
            res.json(getRendezVous)
        }
    ).catch(err=>{
        res.status(500).send(err);
    })
     
  });

  app.post('/rendez-vous', (req: Request, res: Response) => {
    let rendezVous = new RendeVous(req.body);
    rendezVous.save()
      .then((savedRendezVous) => {
        // Sending the saved RendezVous object as a response
        res.json(savedRendezVous);
      })
      .catch((err) => {
        // Handling any errors that occurred during save
       
        res.status(500).send(err);
      });
  });

  app.delete('/rendez-vous/:id',(req,res)=>{
    RendeVous.deleteOne({_id:req.params.id}).then(
        (deletedRendezVous)=>{
            res.send('rendez-vous has benn deleted')
        }
    ).catch(err=>{
       res.status(500).send(err);
    })
  });

  app.delete('/rendez-vous',(req,res)=>{
    RendeVous.deleteMany({}).then(
      ()=>{
        res.send('all rendezVous were benn deleted') ;
      } 
    ).catch(
        err=>{
            res.sendStatus(500).send(err)
        }
    )
  })
  app.put('/rendez-vous/:id',(req,res)=>{
    RendeVous.findByIdAndUpdate(req.params.id,req.body).then(
        (upadatedRendezVous)=>{
            res.send('rendez-vous has been updated')
        }
    ).catch(err=>{
        res.sendStatus(500).send(err)
    })
  });
   // API REST FOR RECLAMATION

   app.get('/reclamation', (req, res) => {
    Reclamation.find() 
      .then((reclamation) => {
        res.send(reclamation); 
      })
      .catch((err) => {
        
        res.status(500).send(err);
      });
  });
  app.get('/reclamation/:id', (req, res) => {
    Reclamation.findById({_id:req.params.id}).then(
        getReclamation=>{
            res.json(getReclamation)
        }
    ).catch(err=>{
        res.status(500).send(err);
    })
     
  });

  app.post('/reclamation', (req: Request, res: Response) => {
    let reclamation = new Reclamation(req.body);
    reclamation.save()
      .then((savedReclamation) => {
       
        res.json(savedReclamation);
      })
      .catch((err) => { 
        res.status(500).send(err);
      });
  });

  app.delete('/reclamation/:id',(req,res)=>{
    Reclamation.deleteOne({_id:req.params.id}).then(
        (deletedReclamation)=>{
            res.send('feedback has benn deleted')
        }
    ).catch(err=>{
       res.status(500).send(err);
    })
  });

  app.delete('/reclamation',(req,res)=>{
    RendeVous.deleteMany({}).then(
      ()=>{
        res.send('all feedbacks were benn deleted') ;
      } 
    ).catch(
        err=>{
            res.sendStatus(500).send(err)
        }
    )
  })
  app.put('/reclamation/:id',(req,res)=>{
    Reclamation.findByIdAndUpdate(req.params.id,req.body).then(
        (upadatedReclamation)=>{
            res.send('feedback has been updated')
        }
    ).catch(err=>{
        res.sendStatus(500).send(err)
    })
  });
   // API REST FOR COMMENTAIRE

   app.get('/commentaire', (req, res) => {
    Commentaire.find()
      .then((commentaire) => {
        res.send(commentaire); 
      })
      .catch((err) => {
        
        res.status(500).send(err);
      });
  });
  app.get('/commentaire/:id', (req, res) => {
    Commentaire.findById({_id:req.params.id}).then(
        getCommentaire=>{
            res.json(getCommentaire)
        }
    ).catch(err=>{
        res.status(500).send(err);
    })
     
  });

  app.post('/commentaire', (req: Request, res: Response) => {
    let commentaire = new Commentaire(req.body);
    commentaire.save()
      .then((savedCommentaire) => {
        res.json(savedCommentaire);
      })
      .catch((err) => {

        res.status(500).send(err);
      });
  });

  app.delete('/commentaire/:id',(req,res)=>{
    Commentaire.deleteOne({_id:req.params.id}).then(
        (deletedCommentaire)=>{
            res.send('comment has benn deleted')
        }
    ).catch(err=>{
       res.status(500).send(err);
    })
  });

  app.delete('/commentaire',(req,res)=>{
    Commentaire.deleteMany({}).then(
      ()=>{
        res.send('all comments were benn deleted') ;
      } 
    ).catch(
        err=>{
            res.sendStatus(500).send(err)
        }
    )
  })
  app.put('/commentaire/:id',(req,res)=>{
    Commentaire.findByIdAndUpdate(req.params.id,req.body).then(
        (upadatedCommenatire)=>{
            res.send('feddback has been updated')
        }
    ).catch(err=>{
        res.sendStatus(500).send(err)
    })
  });
const url="mongodb://localhost:27017/vectis";
mongoose.connect('mongodb://localhost/vectis')
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });



app.listen(8888,()=>{
    console.log('Server is Started on %d',8888)
});