import filmModel from "../model/film.js";

const GET_FILMS= async function(req, res){
    try{
        const films=await filmModel.find();
        res.status(200).json({films: films});
    } catch(err){
      console.log(err);
      return res.status(500).json({mesage:`Server error`});
    }
};
const INSERT_FILMS= async function(req, res) {
    try{
      const film=new filmModel({ 
        title: req.body.title,
        raiting: req.body.raiting,
        description: req.body.description,
        imdbLink: req.body.imdbLink,
    });
    await film.save();
    return res.status(201).json({message: `Film was added successfully`});
    } catch(err){
        console.log(err);
        return res.status(500).json({massage: `Server error`});
    }
};
const GET_SORTED_FILMS= async function(req, res){
    try{
        const sortedfilms=await filmModel.find().sort({"raiting": -1});
        res.status(200).json({sortedfilms: sortedfilms});
    } catch(err){
      console.log(err);
      return res.status(500).json({mesage:`Server error`});
    }
};

const DELETE_FILM_BY_ID= async function(req, res) {
    try{
        const id=req.params.id;
        const film=await filmModel.findByIdAndDelete(id);
        if(!film){
         return res.status(404).json({message: `The film does not exist`});
        }
        return res.status(200).json({response: `The film was deleted`, film: film,})
      } catch(err){
          console.log(err);
          return res.status(500).json({massage: `Server error`});
      }
  };


const GET_FILM_BY_ID= async function(req,res){
    try{
        const id=req.params.id;
        const film=await filmModel.findById(id);
        if(!film){
         return res.status(404).json({message: `The film does not exist`});
        }
        return res.status(200).json({response: `status`, film: film,})
      } catch(err){
          console.log(err);
          return res.status(500).json({massage: `Server error`});
      }
  };

const PUT_FILM_BY_ID= async function(req, res){
    try{
        const id=req.params.id;
        const film=await filmModel.findOneAndUpdate(
            {_id:id},
            {...req.body},
            {new: true}
        );
        if(!film){
            return res.status(404).json({message: `The film does not exist`});
           }
        
        return res.status(200).json({message: `Film was updated`, film: film,})
      } catch(err){
          console.log(err);
          return res.status(500).json({massage: `Server error`});
      }
  };
    
export {GET_FILMS, INSERT_FILMS, GET_SORTED_FILMS, DELETE_FILM_BY_ID, GET_FILM_BY_ID, PUT_FILM_BY_ID};
