const { Sequelize } = require('sequelize');
const shortid = require("shortid");

const db = require("../config/dataBase");

const Image = db.define("image", { //1er parámetro es el nombre del proyecto, el 2do son las carac
    
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    type: Sequelize.CHAR(15),

    title: Sequelize.STRING(50),

    name: Sequelize.STRING(80),

    size: Sequelize.INTEGER,

    description: Sequelize.STRING(400),

    section: Sequelize.CHAR(35),

    thematic: Sequelize.CHAR(35),

    imageURL: Sequelize.STRING(150),

    public_id: Sequelize.CHAR(30),

    },
    {
        hooks: {
            beforeCreate(image){
                image.type=image.type.toUpperCase().trim();
                image.title=image.title.trim();
                image.name=image.name.toUpperCase().trim();
                image.description=image.description.toUpperCase();
                image.section = image.section.toUpperCase();
                image.thematic = image.thematic.toUpperCase();
                //para generar url única
                const url = image.title.toLowerCase();        
                image.url = `${url}-${shortid.generate()}`;
            }
        }
    }
);

module.exports = Image;
