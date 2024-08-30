const Category = require("../models/Category");

// @desc Get all categories
// @route GET /api/categories
// @access Public
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

// @desc Create a new category
// @route POST /api/categories
// @access Public
const createCategory = async (req, res) => {
  try {
    const {name} = req.body;
    const category = new Category({name});
    const createdCategory = await category.save();
    res.status(201).json(createdCategory);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = {getCategories, createCategory};
