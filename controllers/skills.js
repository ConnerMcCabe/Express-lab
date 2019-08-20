const Skill = require('../models/skill');
module.exports = {
    index,
    show,
    new: newSkills,
    create,
    delete: skillDelete,
};

function newSkills(req, res) {
    res.render('skills/new');
}
function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}
function index(req, res) {
    res.render('skills/index', {
        skills: skill.getAll(),
        
    });
}
function create(req, res) {
    skills.create(req.body.newSkills);
    res.redirect('/skills');
}
function skillDelete(req, res) {
    skills.deleteSkill(req.params.id);
    res.redirect('/skills')
}