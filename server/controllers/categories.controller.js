import Category from "../models/category.model.js";

export const create_category = async (req, res)=>{
    try{
        const {name, description} = req.body;
        const category = new Category({name, description});

        await category.save();
        res.status(201).send("category added successfully !")
    }
    catch(err){
        res.send("Inserting category error");
    }
}




export const get_a_category = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ message: 'Failed to fetch category', error });
    }
};

// get all category

export const get_all_categories = async (req, res)=>{
    try{
        const categories = await Category.find();
        res.status(200).send(categories);
    }catch(err){
        console.log("Can not get all users", err);
    }
}