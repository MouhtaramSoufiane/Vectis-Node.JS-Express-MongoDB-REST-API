"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const model_centre_1 = __importDefault(require("./model.centre"));
const model_rendez_vous_1 = __importDefault(require("./model.rendez-vous"));
const model_reclamation_1 = __importDefault(require("./model.reclamation"));
const model_commentaire_1 = __importDefault(require("./model.commentaire"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// API REST FOR CENTERS
app.get('/', (req, res) => {
    res.end('<h1>Mr Soufiane Mouhtaram</h1>');
});
app.get('/centres', (req, res) => {
    model_centre_1.default.find() // No callback here
        .then((centres) => {
        res.send(centres); // Send the data as a JSON response
    })
        .catch((err) => {
        res.status(500).send(err);
    });
});
app.get('/centres/:id', (req, res) => {
    model_centre_1.default.findById(req.params.id).then(getedCentre => {
        res.json(getedCentre);
    }).catch(err => {
        res.status(500).send(err);
    });
});
app.post('/centres', (req, res) => {
    let centre = new model_centre_1.default(req.body);
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
app.delete('/centres/:id', (req, res) => {
    model_centre_1.default.deleteOne({ _id: req.params.id }).then((deletedCentre) => {
        res.send('centre has benn deleted');
    }).catch(err => {
        res.status(500).send(err);
    });
});
app.delete('/centres', (req, res) => {
    model_centre_1.default.deleteMany({}).then(() => {
        res.send('all centre were benn deleted');
    }).catch(err => {
        res.sendStatus(500).send(err);
    });
});
app.put('/centres/:id', (req, res) => {
    model_centre_1.default.findByIdAndUpdate(req.params.id, req.body).then((upadatedCentre) => {
        res.send('centre has been updated');
    }).catch(err => {
        res.sendStatus(500).send(err);
    });
});
// API REST FOR RENDEZ-VOUS
app.get('/rendez-vous', (req, res) => {
    model_rendez_vous_1.default.find() // No callback here
        .then((rendezVous) => {
        res.send(rendezVous); // Send the data as a JSON response
    })
        .catch((err) => {
        res.status(500).send(err);
    });
});
app.get('/rendez-vous/:id', (req, res) => {
    model_rendez_vous_1.default.findById({ _id: req.params.id }).then(getRendezVous => {
        res.json(getRendezVous);
    }).catch(err => {
        res.status(500).send(err);
    });
});
app.post('/rendez-vous', (req, res) => {
    let rendezVous = new model_rendez_vous_1.default(req.body);
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
app.delete('/rendez-vous/:id', (req, res) => {
    model_rendez_vous_1.default.deleteOne({ _id: req.params.id }).then((deletedRendezVous) => {
        res.send('rendez-vous has benn deleted');
    }).catch(err => {
        res.status(500).send(err);
    });
});
app.delete('/rendez-vous', (req, res) => {
    model_rendez_vous_1.default.deleteMany({}).then(() => {
        res.send('all rendezVous were benn deleted');
    }).catch(err => {
        res.sendStatus(500).send(err);
    });
});
app.put('/rendez-vous/:id', (req, res) => {
    model_rendez_vous_1.default.findByIdAndUpdate(req.params.id, req.body).then((upadatedRendezVous) => {
        res.send('rendez-vous has been updated');
    }).catch(err => {
        res.sendStatus(500).send(err);
    });
});
// API REST FOR RECLAMATION
app.get('/reclamation', (req, res) => {
    model_reclamation_1.default.find()
        .then((reclamation) => {
        res.send(reclamation);
    })
        .catch((err) => {
        res.status(500).send(err);
    });
});
app.get('/reclamation/:id', (req, res) => {
    model_reclamation_1.default.findById({ _id: req.params.id }).then(getReclamation => {
        res.json(getReclamation);
    }).catch(err => {
        res.status(500).send(err);
    });
});
app.post('/reclamation', (req, res) => {
    let reclamation = new model_reclamation_1.default(req.body);
    reclamation.save()
        .then((savedReclamation) => {
        res.json(savedReclamation);
    })
        .catch((err) => {
        res.status(500).send(err);
    });
});
app.delete('/reclamation/:id', (req, res) => {
    model_reclamation_1.default.deleteOne({ _id: req.params.id }).then((deletedReclamation) => {
        res.send('feedback has benn deleted');
    }).catch(err => {
        res.status(500).send(err);
    });
});
app.delete('/reclamation', (req, res) => {
    model_rendez_vous_1.default.deleteMany({}).then(() => {
        res.send('all feedbacks were benn deleted');
    }).catch(err => {
        res.sendStatus(500).send(err);
    });
});
app.put('/reclamation/:id', (req, res) => {
    model_reclamation_1.default.findByIdAndUpdate(req.params.id, req.body).then((upadatedReclamation) => {
        res.send('feedback has been updated');
    }).catch(err => {
        res.sendStatus(500).send(err);
    });
});
// API REST FOR COMMENTAIRE
app.get('/commentaire', (req, res) => {
    model_commentaire_1.default.find()
        .then((commentaire) => {
        res.send(commentaire);
    })
        .catch((err) => {
        res.status(500).send(err);
    });
});
app.get('/commentaire/:id', (req, res) => {
    model_commentaire_1.default.findById({ _id: req.params.id }).then(getCommentaire => {
        res.json(getCommentaire);
    }).catch(err => {
        res.status(500).send(err);
    });
});
app.post('/commentaire', (req, res) => {
    let commentaire = new model_commentaire_1.default(req.body);
    commentaire.save()
        .then((savedCommentaire) => {
        res.json(savedCommentaire);
    })
        .catch((err) => {
        res.status(500).send(err);
    });
});
app.delete('/commentaire/:id', (req, res) => {
    model_commentaire_1.default.deleteOne({ _id: req.params.id }).then((deletedCommentaire) => {
        res.send('comment has benn deleted');
    }).catch(err => {
        res.status(500).send(err);
    });
});
app.delete('/commentaire', (req, res) => {
    model_commentaire_1.default.deleteMany({}).then(() => {
        res.send('all comments were benn deleted');
    }).catch(err => {
        res.sendStatus(500).send(err);
    });
});
app.put('/commentaire/:id', (req, res) => {
    model_commentaire_1.default.findByIdAndUpdate(req.params.id, req.body).then((upadatedCommenatire) => {
        res.send('feddback has been updated');
    }).catch(err => {
        res.sendStatus(500).send(err);
    });
});
const url = "mongodb://localhost:27017/vectis";
mongoose_1.default.connect('mongodb://localhost/vectis')
    .then(() => {
    console.log('MongoDB connected successfully');
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
app.listen(8888, () => {
    console.log('Server is Started on %d', 8888);
});
