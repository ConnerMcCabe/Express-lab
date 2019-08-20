const skills = [
    {id: 1, skill:"JavaScript", level: 2},
    {id: 2, skill:"Python", level: 1},
    {id: 3, skill:"Pizza", level: 4},
    {id: 4, skill:"Jazz Hands", level: 6},
    {id: 5, skill:"Public Speaking", level: 3}

];
module.exports = {
    create,
    skillDelete,

}

function create() {
    skills.push(input);
}
function skillDelete() {
    skills.splice(id, 1);
}